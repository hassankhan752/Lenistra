# Hassan Khan — Developer Portfolio

A custom dark portfolio built with the Next.js App Router, TypeScript, Tailwind CSS, Lucide icons, and Prisma/PostgreSQL. Project content is stored in the database and managed through `/admin`.

## Project layout

```text
prisma/
  schema.prisma             PostgreSQL project model
  seed.ts                   Initial JARVIS and ContractLens records
src/
  app/
    admin/page.tsx          Admin dashboard route
    api/admin/               Login, session, and logout endpoints
    api/projects/            Public list and protected project CRUD endpoints
    globals.css              Theme, grid texture, glass surfaces
    layout.tsx               Root layout and metadata
    page.tsx                 Dynamic portfolio page
  components/
    AdminDashboard.tsx      Admin sign-in and project CRUD interface
    Portfolio.tsx           Responsive landing page and project showcase
    ProjectPreview.tsx      Project-specific preview panels
  lib/
    admin-auth.ts           Signed, HttpOnly session cookie helpers
    prisma.ts               Shared Prisma client
    projects.ts             Project validation and data access
    site-data.ts            Site metadata and skills
.env.example                Local environment variable template
```

## Set up

1. Use Node.js 20.9 or newer and PostgreSQL.
2. Copy `.env.example` to `.env` and set `DATABASE_URL`, `ADMIN_PASSWORD`, and a random `ADMIN_SESSION_SECRET` with at least 32 characters.
3. Install dependencies with `npm install`.
4. Run `npm run db:push` and `npm run db:seed` to create the project table and add the two featured examples.
5. Start the app with `npm run dev`. The portfolio is at `/`; project management is at `/admin`.

## Data and authentication

`prisma/schema.prisma` defines project content, and `src/lib/projects.ts` validates and maps admin input. The landing page reads the project records from PostgreSQL, ordered by display order. New admin entries appear on the public page after save. Skills and site-level metadata are maintained in `src/lib/site-data.ts`.

The admin password is checked only in server route handlers. Successful sign-in sets a signed, eight-hour, `HttpOnly`, `SameSite=Strict` cookie; all create, edit, and delete endpoints validate that session. Set HTTPS in production so the cookie is also marked `Secure`. Apply request rate limiting at the hosting edge for the login endpoint, and use managed PostgreSQL backups and migrations for production operations.

For production deployments, use a managed PostgreSQL database and run Prisma migrations as part of the release process rather than relying on `db push`.
