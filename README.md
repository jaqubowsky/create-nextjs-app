# Create NextJS App

A template for scaffolding NextJS App

## Tech Stack

- **Frontend**: Next.js 15.3, React 19, TailwindCSS 4, ShadCN UI
- **Backend**: Next.js API Routes, Server Actions with Next Safe Action
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Better Auth
- **Form Handling**: React Hook Form with Zod validation and Next Safe Action Hook Form adapter
- **Rate Limiting**: Client Memory

## Getting Started

### Prerequisites

- Node.js 22+ and npm
- PostgreSQL database

### Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/jaqubowsky/create-nextjs-app.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env` (if not already present)
   - Update the `DATABASE_URL` with your PostgreSQL connection string
   - Configure authentication variables:
     - `BETTER_AUTH_SECRET`: A secure random string
     - `BETTER_AUTH_URL`: Your application URL (e.g., `http://localhost:3000` for development)
     - `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` for Google authentication
   - Set up email configuration:
     - `EMAIL_SERVER_HOST`
     - `EMAIL_SERVER_PORT`
     - `EMAIL_SERVER_USER`
     - `EMAIL_SERVER_PASSWORD`
     - `EMAIL_FROM`

4. Generate database migrations:

   ```bash
   npx drizzle-kit generate
   ```

5. Apply database migrations:

   ```bash
   npx drizzle-kit migrate
   ```

6. Start the development server with Turbopack:

   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

The project follows a feature-based architecture:

- `/src/app` - Next.js pages and layouts
- `/src/components` - Shared UI components
- `/src/features` - Feature modules with related components, schemas, and server actions
- `/src/lib` - Utility functions and shared libraries
- `/src/drizzle` - Database schema and migrations

## ESLint Configuration

The project uses ESLint with boundaries plugin to enforce architectural boundaries:

- Shared components and utilities can only import from other shared modules
- Feature modules can import from shared modules or within the same feature
- App pages can import from shared modules or feature modules

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [TailwindCSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Better Auth](https://better-auth.dev/)
