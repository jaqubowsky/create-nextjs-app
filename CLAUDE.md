# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server with Turbopack and database studio
- `npm run next:dev` - Start Next.js development server with Turbopack only
- `npm run build` - Build the application for production
- `npm run start` - Start the production server

### Code Quality
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run Biome linter
- `npm run lint:fix` - Run Biome linter with comprehensive fixes and auto-organize imports

### Database Operations
- `npm run db:migrate` - Generate and apply database migrations (run after schema changes)
- `npm run db:generate` - Generate Drizzle migration files only
- `npm run db:migrate:prod` - Run production database migrations
- `npm run db:studio` - Open Drizzle Studio for database management
- `npm run db:reset` - Reset database (WARNING: deletes all data)

### Git & Commits
- `npm run commit` - Interactive commit with Commitizen (conventional commits)
- `npm run commitlint` - Lint commit messages

## Project Architecture

This is a Next.js 15.4 application using App Router with a feature-based architecture:

### Tech Stack
- **Frontend**: Next.js 15.4, React 19, TailwindCSS 4, ShadCN UI, Phosphor Icons
- **Backend**: Next.js Server Actions with `next-safe-action`, API Routes
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Better Auth with Google OAuth
- **Payments**: Stripe integration with webhook support
- **Email**: React Email with Nodemailer
- **Rate Limiting**: Memory-based rate limiting
- **Monitoring**: Sentry for error tracking and performance monitoring
- **Linting**: Biome (replaces ESLint/Prettier)

### Directory Structure

```
src/
├── app/                    # Next.js App Router - pages, layouts, API routes
├── components/
│   ├── ui/                # ShadCN UI components and reusable primitives
│   └── [other]/           # Shared application-specific components
├── features/              # Feature-based modules (core architecture)
│   └── [feature]/
│       ├── components/    # Feature-specific React components
│       ├── actions.ts     # Server Actions with rate limiting
│       ├── queries.ts     # Database queries (Drizzle ORM)
│       ├── schemas.ts     # Zod validation schemas
│       └── cache.ts       # Feature-specific caching logic
├── lib/                   # Shared utilities and configurations
├── drizzle/              # Database schema and client setup
├── server/               # Server-side shared utilities
└── emails/               # React Email templates
```

### Module Boundaries (Strict Rules)
- **Shared modules** (`components/`, `lib/`, `drizzle/`, `server/`) can only import from other shared modules
- **Feature modules** (`features/[name]/`) can import from shared modules and within the same feature only
- **App modules** (`app/`) can import from shared and feature modules

## Development Patterns

### Server Actions Architecture
- Use `publicAction`, `privateAction`, `publicActionWithLimiter`, or `privateActionWithLimiter` from `@/lib/safe-action`
- Server actions must NOT contain inline database queries or Zod schemas
- Database queries go in `[feature]/queries.ts`, schemas in `[feature]/schemas.ts`
- For errors, throw `new ActionError(errors.CATEGORY.ERROR_TYPE)` from `@/lib/errors`
- Apply rate limiting with `authRateLimiter` or `publicApiRateLimiter` from `@/lib/rate-limit`

### Caching Strategy
- Uses Next.js native caching with feature-specific cache management
- Add `"use cache";` and `cacheTag(getTagName())` to database queries for caching
- Create cache utility functions in `[feature]/cache.ts` for tag generation and revalidation
- Invalidate caches after mutations by calling revalidation functions

### Database Development
- Schema definitions in `src/drizzle/schema.ts`
- After schema changes, always run: `npm run db:migrate`
- Use `npm run db:studio` for database exploration in development
- Production migrations use `npm run db:migrate:prod`

### Environment Variables
- Managed with T3 Env in `src/lib/env.ts`
- Server-only variables in `server` object
- Client-safe variables in `shared` object (with `NEXT_PUBLIC_` prefix)
- Update `experimental__runtimeEnv` mapping when adding variables

### Authentication & Authorization
- Better Auth integration with Google OAuth
- Session management with database storage
- Rate-limited authentication endpoints
- Use `privateAction` for authenticated routes

### Payments Integration
- Stripe integration with webhook handlers in `src/app/api/stripe/webhook/`
- Customer management with database storage
- Subscription and invoice handling

### Code Quality Tools
- **Biome**: Handles linting, formatting, and import organization
- **Lefthook**: Git hooks for pre-commit linting and type checking
- **TypeScript**: Strict type checking required
- **Conventional Commits**: Using Commitizen for structured commit messages

### Key Files to Understand
- `src/lib/safe-action.ts` - Server action middleware and rate limiting
- `src/lib/env.ts` - Environment variable validation
- `src/drizzle/schema.ts` - Database schema definitions
- `src/lib/auth.ts` - Better Auth configuration
- `src/lib/errors.ts` - Standardized error handling
- `biome.json` - Code quality configuration
- `lefthook.yml` - Git hooks configuration