import Database from "better-sqlite3";

// Use process.cwd() so this module stays server-only and doesn't rely on
// browser-side URL/path helpers during bundling.
const dbPath = process.cwd() + "/db.sqlite";

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!db) {
    db = new Database(dbPath);
    db.pragma("journal_mode = WAL");
    initializeSchema();
  }
  return db;
}

function initializeSchema() {
  const database = db!;
  
  // Create testimonials table if it doesn't exist
  database.exec(`
    CREATE TABLE IF NOT EXISTS testimonials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      location TEXT NOT NULL,
      rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 5),
      comment TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending', 'approved', 'rejected')),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE INDEX IF NOT EXISTS idx_testimonials_status ON testimonials(status);
    CREATE INDEX IF NOT EXISTS idx_testimonials_created_at ON testimonials(created_at DESC);
  `);
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
  updated_at: string;
}

export interface TestimonialInput {
  name: string;
  location: string;
  rating: number;
  comment: string;
}

export function insertTestimonial(data: TestimonialInput): Testimonial {
  const database = getDb();
  const stmt = database.prepare(`
    INSERT INTO testimonials (name, location, rating, comment, status)
    VALUES (?, ?, ?, ?, 'pending')
    RETURNING id, name, location, rating, comment, status, created_at, updated_at
  `);
  
  const result = stmt.get(data.name, data.location, data.rating, data.comment) as Testimonial;
  return result;
}

export function getApprovedTestimonials(): Testimonial[] {
  const database = getDb();
  const stmt = database.prepare(`
    SELECT id, name, location, rating, comment, status, created_at, updated_at
    FROM testimonials
    WHERE status = 'approved'
    ORDER BY created_at DESC
  `);
  
  return stmt.all() as Testimonial[];
}

export function getPendingTestimonials(): Testimonial[] {
  const database = getDb();
  const stmt = database.prepare(`
    SELECT id, name, location, rating, comment, status, created_at, updated_at
    FROM testimonials
    WHERE status = 'pending'
    ORDER BY created_at DESC
  `);
  
  return stmt.all() as Testimonial[];
}

export function approveTestimonial(id: number): Testimonial | null {
  const database = getDb();
  const stmt = database.prepare(`
    UPDATE testimonials
    SET status = 'approved', updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
    RETURNING id, name, location, rating, comment, status, created_at, updated_at
  `);
  
  return (stmt.get(id) as Testimonial | undefined) || null;
}

export function rejectTestimonial(id: number): Testimonial | null {
  const database = getDb();
  const stmt = database.prepare(`
    UPDATE testimonials
    SET status = 'rejected', updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
    RETURNING id, name, location, rating, comment, status, created_at, updated_at
  `);
  
  return (stmt.get(id) as Testimonial | undefined) || null;
}

export function getAllTestimonials(): Testimonial[] {
  const database = getDb();
  const stmt = database.prepare(`
    SELECT id, name, location, rating, comment, status, created_at, updated_at
    FROM testimonials
    ORDER BY created_at DESC
  `);
  
  return stmt.all() as Testimonial[];
}
