# NextJS Template App

A comprehensive template for scaffolding modern NextJS applications with authentication, payments, and monitoring.

## Tech Stack

- **Frontend**: Next.js 15.4, React 19, TailwindCSS 4, ShadCN UI, Phosphor Icons
- **Backend**: Next.js API Routes, Server Actions with Next Safe Action
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Better Auth with Google OAuth
- **Payments**: Stripe integration with webhook support
- **Email**: React Email with Nodemailer
- **Form Handling**: React Hook Form with Zod validation and Next Safe Action Hook Form adapter
- **Rate Limiting**: Memory-based rate limiting
- **Monitoring**: Sentry for error tracking and performance monitoring
- **Deployment**: Docker support with multi-stage builds
- **Development**: TypeScript, ESLint with boundaries, Lefthook for git hooks

## Getting Started

### Prerequisites

- Node.js 22+ and npm (see `.nvmrc` for exact version)
- PostgreSQL database
- Google OAuth credentials (for authentication)
- Stripe account (for payments)
- SMTP server (for emails)

### Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/jaqubowsky/create-nextjs-app.git
   cd nextjs-template-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file with the following variables:

   ```env
   NODE_ENV=development
   SKIP_ENV_CHECK="true"

   # Server-only variables (not exposed to client)
   DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

   GOOGLE_CLIENT_ID="sample-google-client-id"
   GOOGLE_CLIENT_SECRET="sample-google-client-secret"

   BETTER_AUTH_SECRET="sample-secret-key-for-typecheck"

   EMAIL_SERVER_HOST="smtp.example.com"
   EMAIL_SERVER_PORT="587"
   EMAIL_SERVER_USER="user@example.com"
   EMAIL_SERVER_PASSWORD="sample-password"
   EMAIL_FROM="noreply@example.com"
   EMAIL_SERVICE="gmail"

   STRIPE_WEBHOOK_SECRET="whsec_sample_webhook_secret"
   STRIPE_SECRET_KEY="sk_test_sample_stripe_key"
   STRIPE_API_VER="2023-10-16"

   SENTRY_AUTH_TOKEN="sample-sentry-auth-token"

   # Client-side variables (these match the env.production.client file)
   NEXT_PUBLIC_APP_NAME="Sample App"
   NEXT_PUBLIC_COMPANY_NAME="Sample Company"

   NEXT_PUBLIC_SENTRY_DSN="https://sample@sentry.io/123"
   NEXT_PUBLIC_SENTRY_PROJECT="sample-project"
   NEXT_PUBLIC_SENTRY_ORG="sample-org"

   NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"
   ```

   > **Note**: These are sample values for development. Replace with actual credentials when deploying to production.

4. Generate and apply database migrations:

   ```bash
   npm run db:migrate
   ```

5. Start the development server with Turbopack:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack and database studio
- `npm run next:dev` - Start Next.js development server with Turbopack only
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run Biome linter
- `npm run lint:fix` - Run Biome linter with comprehensive fixes
- `npm run db:generate` - Generate Drizzle migration files
- `npm run db:migrate` - Generate and apply database migrations
- `npm run db:migrate:prod` - Run production database migrations
- `npm run db:studio` - Open Drizzle Studio for database management
- `npm run db:reset` - Reset database (WARNING: deletes all data)
- `npm run commit` - Interactive commit with Commitizen
- `npm run commitlint` - Lint commit messages

## Project Structure

The project follows a feature-based architecture:

```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   └── ...
├── components/            # Shared UI components
├── features/              # Feature modules
│   └── auth/              # Authentication feature
│       ├── actions.ts     # Server actions
│       ├── components/    # Feature-specific components
│       ├── queries.ts     # Feature-specific database queries
│       └── schemas.ts     # Feature-specific zod schemas
├── lib/                   # Utility functions and configurations
│   ├── env.ts            # Environment variables validation
│   ├── stripe.ts         # Stripe configuration
│   ├── rate-limit.ts     # Rate limiting utilities
│   └── ...
├── server/                # Server-side shared utilities
│   └── stripe/           # Stripe server utilities
└── drizzle/              # Database schema and migrations
```

## Features

### Authentication

- Google OAuth integration
- Email/password authentication
- Password reset functionality
- Rate-limited authentication endpoints

### Payments

- Stripe integration with webhook support
- Customer management
- Subscription handling
- Invoice management

### Email System

- React Email templates
- SMTP configuration with Nodemailer
- Transactional emails

### Rate Limiting

- Memory-based rate limiting
- Configurable limits per endpoint
- IP-based request tracking

### Monitoring

- Sentry integration for error tracking
- Performance monitoring
- Custom error boundaries

## Docker Deployment

The project includes Docker support with multi-stage builds for optimal production deployments:

```bash
# Build the Docker image
docker build -t nextjs-template-app .

# Run the container
docker run -p 3000:3000 nextjs-template-app
```

## ESLint Configuration

The project uses ESLint with boundaries plugin to enforce architectural boundaries:

- Shared components and utilities can only import from other shared modules
- Feature modules can import from shared modules or within the same feature
- App pages can import from shared modules or feature modules

## Environment Variables

The project uses T3 Env for runtime environment variable validation. Variables are categorized into:

- **Server**: Only available on the server side
- **Client**: Available on both client and server (prefixed with `NEXT_PUBLIC_`)
- **Shared**: Available in both environments with proper validation

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [TailwindCSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Better Auth](https://better-auth.dev/)
- [Stripe](https://stripe.com/)
- [Sentry](https://sentry.io/)
- [React Email](https://react.email/)
