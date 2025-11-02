# Database Setup Guide - MLV Forge

## Quick Start: Set Up Your Database in 5 Minutes

Your Neon PostgreSQL database is already created, but the tables don't exist yet. Follow these steps to create all necessary tables.

---

## Prerequisites

- Neon database already created ✅
- DATABASE_URL environment variable set ✅
- Prisma schema file exists ✅

---

## Option 1: Local Setup (Recommended)

### Step 1: Set Up Local Environment

Create a `.env` file in your project root (if you don't have one):

```bash
# Copy from Vercel environment variables
DATABASE_URL="postgresql://neondb_owner:npg_Hi0vVKck1Mjg@ep-lively-bread-adfeaxyj-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
```

### Step 2: Generate Prisma Client

```bash
npx prisma generate
```

This creates the TypeScript types and database client.

### Step 3: Push Schema to Database

```bash
npx prisma db push
```

This will:
- Create all 22+ tables
- Set up relationships and indexes
- Configure constraints

**Expected output:**
```
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database

🚀  Your database is now in sync with your Prisma schema. Done in 2.34s
```

### Step 4: Verify Tables Were Created

```bash
npx prisma studio
```

This opens a GUI where you can:
- See all tables
- View table structures
- Add test data
- Run queries

**OR** check directly in Neon:
1. Go to https://console.neon.tech
2. Select your project
3. Click "SQL Editor"
4. Run: `SELECT tablename FROM pg_tables WHERE schemaname = 'public';`

---

## Option 2: Using Neon Console (Alternative)

If you can't run Prisma locally, use the Neon SQL Editor:

### Step 1: Get the Schema SQL

The Prisma schema needs to be converted to SQL. You can either:
- Run `npx prisma migrate dev --create-only` locally to generate SQL
- Or manually create tables using the SQL Editor

### Step 2: Access Neon Console

1. Go to https://console.neon.tech
2. Select your MLV Forge project
3. Click "SQL Editor"

### Step 3: Run Table Creation Scripts

Since you have the Prisma schema, the easiest way is to:
1. Use Option 1 (local) if possible
2. OR generate migration files and copy SQL

---

## Expected Database Schema

After running migrations, you should have these tables:

### Core Tables
- **users** - All users (companies + students)
- **company_profiles** - Company-specific data
- **student_profiles** - Student-specific data
- **student_skills** - Student skill tags
- **student_tools** - Tools students are proficient with

### Project Tables
- **projects** - Posted projects
- **project_skills** - Required skills for projects
- **project_files** - Attachments from companies

### Application Tables
- **applications** - Student applications to projects
- **teams** - Project teams
- **team_members** - Team member assignments

### Workspace Tables
- **workspace_messages** - Real-time chat
- **workspace_files** - Shared files
- **tasks** - Project tasks
- **deliverables** - Final submissions
- **deliverable_files** - Deliverable attachments

### Transaction Tables
- **payments** - Payment records and escrow
- **transactions** - Student earning history
- **reviews** - Post-project ratings

### System Tables
- **notifications** - User notifications
- **disputes** - Dispute records
- **ai_conversations** - AI chat history

---

## Verification Checklist

After running migrations, verify:

✅ **Check Table Count**
```sql
SELECT COUNT(*) FROM information_schema.tables
WHERE table_schema = 'public';
-- Should return 22+
```

✅ **Check Users Table**
```sql
SELECT * FROM users LIMIT 1;
-- Should return empty result (no error)
```

✅ **Check Relationships**
```sql
SELECT
  tc.table_name,
  kcu.column_name,
  ccu.table_name AS foreign_table_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
  ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
  ON ccu.constraint_name = tc.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY'
LIMIT 10;
-- Should show foreign key relationships
```

---

## Troubleshooting

### Error: "Can't reach database server"

**Problem:** Connection string is incorrect or database is sleeping

**Solution:**
```bash
# Test connection
npx prisma db pull

# If it fails, check:
1. DATABASE_URL in .env is correct
2. Neon project is not paused (go to console and wake it)
3. IP is allowed (Neon allows all by default)
```

### Error: "Schema validation failed"

**Problem:** Prisma schema has syntax errors

**Solution:**
```bash
# Validate schema
npx prisma validate

# Fix any reported errors in prisma/schema.prisma
```

### Error: "The table already exists"

**Problem:** Some tables were partially created

**Solution:**
```bash
# Reset database (WARNING: Deletes all data!)
npx prisma migrate reset

# Or manually drop tables in Neon SQL Editor:
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

# Then run migrations again
npx prisma db push
```

### Error: "Column does not exist"

**Problem:** Schema and database are out of sync

**Solution:**
```bash
# Force sync schema to database
npx prisma db push --force-reset

# This will drop and recreate all tables
```

---

## Post-Setup: Add Test Data

### Create a Test Company User

```sql
-- Insert test company (after signing up through Clerk)
INSERT INTO company_profiles (
  id,
  user_id,
  company_name,
  industry,
  website,
  subscription_tier,
  subscription_status
) VALUES (
  gen_random_uuid(),
  'your-clerk-user-id-here',
  'Test Company Inc',
  'Technology',
  'https://testcompany.com',
  'starter',
  'active'
);
```

### Create a Test Student User

```sql
-- Insert test student (after signing up through Clerk)
INSERT INTO student_profiles (
  id,
  user_id,
  full_name,
  university,
  graduation_year,
  major,
  level
) VALUES (
  gen_random_uuid(),
  'your-clerk-user-id-here',
  'Test Student',
  'Boston College',
  2026,
  'Computer Science',
  'intermediate'
);
```

---

## Database Maintenance

### Backup Database

Neon provides automatic backups, but you can also export:

```bash
# Using Neon Console
1. Go to your project
2. Click "Backups"
3. Create manual backup
4. OR export data via SQL Editor
```

### View Database Logs

```bash
# Check query performance in Neon Console
1. Go to Monitoring tab
2. View query statistics
3. Check for slow queries
```

### Update Schema

When you need to add new tables/columns:

```bash
# 1. Edit prisma/schema.prisma
# 2. Generate migration
npx prisma migrate dev --name add_new_feature

# 3. Apply to production
npx prisma migrate deploy
```

---

## Integration with App

Once tables are created, your app can:

✅ Store user profiles after onboarding
✅ Create projects and applications
✅ Track payments and transactions
✅ Store chat messages and files
✅ Generate AI conversations history

### Test Database Connection in App

Create a test API route:

```typescript
// app/api/test-db/route.ts
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const userCount = await db.user.count();
    return NextResponse.json({
      success: true,
      userCount,
      message: 'Database connected!'
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: String(error)
    }, { status: 500 });
  }
}
```

Then visit: `https://forge.mlvignite.com/api/test-db`

---

## Next Steps After Database Setup

1. ✅ Test authentication flow end-to-end
2. ✅ Verify user profiles are created on signup
3. ✅ Test onboarding flow saves data correctly
4. ✅ Build profile completion forms
5. ✅ Implement project posting
6. ✅ Add application system

---

## Quick Reference

### Essential Commands
```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Open Prisma Studio GUI
npx prisma studio

# Create migration
npx prisma migrate dev --name migration_name

# Apply migrations to production
npx prisma migrate deploy

# Pull current database schema
npx prisma db pull

# Validate schema
npx prisma validate

# Format schema file
npx prisma format

# Reset database (CAREFUL!)
npx prisma migrate reset
```

### Connection URLs
- **Neon Console:** https://console.neon.tech
- **Database URL:** postgresql://neondb_owner:...@ep-lively-bread-adfeaxyj-pooler.c-2.us-east-1.aws.neon.tech/neondb
- **Prisma Studio:** http://localhost:5555 (after running `npx prisma studio`)

---

## Success Criteria

Your database is properly set up when:

✅ All 22+ tables exist in Neon database
✅ `npx prisma studio` opens without errors
✅ Test API route returns `{ success: true }`
✅ Can sign up and create user profile
✅ Dashboard displays without database errors
✅ Onboarding saves role to user metadata

---

## Support

### Documentation
- **Prisma Docs:** https://www.prisma.io/docs
- **Neon Docs:** https://neon.tech/docs
- **Troubleshooting:** https://www.prisma.io/docs/guides/database/troubleshooting

### Check Issues
- Prisma schema validation errors → Run `npx prisma validate`
- Connection issues → Check DATABASE_URL and Neon console
- Table conflicts → Use `npx prisma db push --force-reset`

---

**🎉 Your database will be ready in about 30 seconds after running these commands!**

Once complete, test the full authentication flow to verify everything works end-to-end.
