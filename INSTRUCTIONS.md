# Instructions for Setup and Deployment

## Table of Contents

* [Getting Started](#getting-started)
* [Development Workflow](#development-workflow)
* [Component Architecture](#component-architecture)
* [Integrating Payment Processing](#integrating-payment-processing)
* [Database Integration](#database-integration)
* [Analytics Setup](#analytics-setup)
* [Deployment Guide](#deployment-guide)
* [Troubleshooting](#troubleshooting)

---

## Getting Started

### System Requirements

Before you begin, ensure your development environment meets these requirements:

* Node.js 18.x or higher
* npm 9.x or higher (or pnpm 8.x / yarn 1.x)
* Git for version control
* A modern code editor (VS Code recommended)

### Initial Setup

**Step 1: Clone and Install**

```bash
# Navigate to your projects folder
cd ~/projects

# Clone the repository
git clone [repository-url]
cd team_jesus

# Install dependencies
npm install
```

**Step 2: Verify Installation**

```bash
# Start development server
npm run dev

# You should see:
# ▲ Next.js 14.2.x
# Local: http://localhost:3000
```

**Step 3: Run Tests**

```bash
# Run test suite
npm test

# All 22 tests should pass
```

### Project Configuration

The project uses several configuration files:

* `next.config.js`: Next.js configuration
* `tailwind.config.ts`: Custom theme, colours, animations
* `tsconfig.json`: TypeScript compiler options
* `vitest.config.ts`: Test configuration

---

## Development Workflow

### File Organisation

Components are organised by responsibility:

**Layout Components** (structure)

* `Hero.tsx`: Above the fold content
* `Footer.tsx`: Site footer
* `Modal.tsx`: Modal wrapper

**Interactive Components** (user actions)

* `DonateWidget.tsx`: Main donation form
* `RecentDonors.tsx`: Donor feed
* `HamburgerMenu.tsx`: Mobile menu

**Display Components** (content)

* `ImpactCounter.tsx`: Animated numbers
* `FAQ.tsx`: Frequently asked questions
* `HowItWorksStepper.tsx`: Process explanation

**Utility Components** (shared)

* Located in `/lib` and `/utils`

### Making Changes

**Adding a New Component**

1. Create file in `/components`
2. Export as named function
3. Import in parent component
4. Add to page composition

Example:

```typescript
// components/NewComponent.tsx
'use client';

import { motion } from 'framer-motion';

export function NewComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Your content here
    </motion.div>
  );
}
```

**Styling Guidelines**

* Use Tailwind utility classes
* Responsive breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
* Custom colours in `tailwind.config.ts`
* Animations via Framer Motion or Tailwind

**Testing Your Changes**

```bash
# Watch mode during development
npm test -- --watch

# Full test suite
npm test

# Visual test UI
npm run test:ui
```

### Code Quality

**Linting**

```bash
# Check for issues
npm run lint

# Auto fix simple issues
npm run lint -- --fix
```

**TypeScript**

```bash
# Type check without building
npx tsc --noEmit
```

---

## Component Architecture

### State Management

This project uses **local state** with React hooks:

* `useState`: Component state
* `useEffect`: Side effects
* Custom hooks in `/hooks`

**Example: useMetrics Hook**

```typescript
// Manages live metrics with SWR
const { metrics, isLoading, mutate } = useMetrics();

// Automatic revalidation every 30s
// Optimistic updates on donations
```

### Data Flow

1. **User Action** → Button click
2. **State Update** → React state changes
3. **Optimistic UI** → Instant feedback
4. **API Call** → POST to `/api/metrics`
5. **Revalidation** → Fetch fresh data
6. **UI Update** → Display new values

### Animations

All animations use **Framer Motion**:

**Entrance Animations**

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

**Staggered Children**

```typescript
{items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: index * 0.1 }}
  />
))}
```

**Layout Animations**

```typescript
<motion.div layout>
  // Automatically animates position changes
</motion.div>
```

---

## Integrating Payment Processing

### Current Implementation

The mock provider simulates payment processing:

* Located in `providers/mockPayment.ts`
* Always succeeds after 1.2s delay
* Returns fake transaction IDs

### Stripe Integration

**Step 1: Install Dependencies**

```bash
npm install @stripe/stripe-js stripe
```

**Step 2: Environment Variables**

Create `.env.local`:

```bash
# Stripe keys (get from dashboard.stripe.com)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Use test keys for development
# Use live keys for production
```

**Step 3: Create Provider**

Create `providers/stripePayment.ts`:

```typescript
import { PaymentProvider, DonationRequest, DonationResponse } from './PaymentProvider';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export const stripePaymentProvider: PaymentProvider = {
  async processDonation(request: DonationRequest): Promise<DonationResponse> {
    try {
      // Create payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: request.amount * 100, // Convert to cents
        currency: 'usd',
        metadata: {
          frequency: request.frequency,
        },
      });

      return {
        success: true,
        transactionId: paymentIntent.id,
        amount: request.amount,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Payment failed',
      };
    }
  },
};
```

**Step 4: Update Component**

In `components/DonateWidget.tsx`:

```typescript
// Replace this:
import { mockPaymentProvider } from '@/providers/mockPayment';

// With this:
import { stripePaymentProvider } from '@/providers/stripePayment';

// Update the call:
const result = await stripePaymentProvider.processDonation({
  amount: amountNum,
  frequency: isMonthly ? 'monthly' : 'once',
});
```

**Step 5: Test**

Use Stripe test cards:

* Success: `4242 4242 4242 4242`
* Decline: `4000 0000 0000 0002`
* [More test cards](https://stripe.com/docs/testing)

### Webhook Setup

For production, handle Stripe webhooks:

**Create webhook endpoint** at `/api/webhooks/stripe`:

```typescript
export async function POST(request: Request) {
  const sig = request.headers.get('stripe-signature')!;
  const body = await request.text();

  // Verify webhook signature
  const event = stripe.webhooks.constructEvent(
    body,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET!
  );

  // Handle events
  switch (event.type) {
    case 'payment_intent.succeeded':
      // Update database
      break;
    case 'payment_intent.payment_failed':
      // Handle failure
      break;
  }

  return new Response('OK');
}
```

---

## Database Integration

### Current State

Metrics are stored **in memory**:

* Resets on server restart
* Not suitable for production
* Located in `app/api/metrics/route.ts`

### PostgreSQL Setup

**Step 1: Install Dependencies**

```bash
npm install @vercel/postgres
# Or use Prisma for ORM
npm install prisma @prisma/client
```

**Step 2: Create Schema**

```sql
CREATE TABLE donations (
  id SERIAL PRIMARY KEY,
  amount INTEGER NOT NULL,
  frequency VARCHAR(10) NOT NULL,
  transaction_id VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE metrics (
  id SERIAL PRIMARY KEY,
  people_reached BIGINT NOT NULL,
  amount_raised BIGINT NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Step 3: Update API Route**

Replace `app/api/metrics/route.ts`:

```typescript
import { sql } from '@vercel/postgres';

export async function GET() {
  const result = await sql`
    SELECT people_reached, amount_raised
    FROM metrics
    ORDER BY updated_at DESC
    LIMIT 1
  `;

  return Response.json(result.rows[0]);
}

export async function POST(request: Request) {
  const { amount } = await request.json();
  const peopleImpact = amount * 1000;

  await sql`
    UPDATE metrics
    SET people_reached = people_reached + ${peopleImpact},
        amount_raised = amount_raised + ${amount},
        updated_at = NOW()
  `;

  const result = await sql`SELECT * FROM metrics LIMIT 1`;
  return Response.json(result.rows[0]);
}
```

---

## Analytics Setup

### Google Analytics 4

**Step 1: Create Property**

1. Go to analytics.google.com
2. Create new GA4 property
3. Copy measurement ID (G-XXXXXXXXXX)

**Step 2: Add Environment Variable**

```bash
# .env.local
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

**Step 3: Update Analytics Utility**

Replace `utils/analytics.ts`:

```typescript
export function trackEvent(
  eventName: string,
  properties?: Record<string, any>
) {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', eventName, properties);
}
```

**Step 4: Add Script to Layout**

In `app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
  `}
</Script>
```

### Custom Events

Track custom interactions:

```typescript
import { trackEvent } from '@/utils/analytics';

// In your component
const handleDonation = async () => {
  trackEvent('donation_started', {
    amount: 50,
    frequency: 'monthly',
  });
};
```

---

## Deployment Guide

### Vercel (Recommended)

**Via CLI:**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

**Via Dashboard:**

1. Go to vercel.com/new
2. Import Git repository
3. Configure environment variables
4. Deploy

**Environment Variables in Vercel:**

Settings → Environment Variables:

* `STRIPE_SECRET_KEY`
* `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
* `NEXT_PUBLIC_GA_TRACKING_ID`
* `POSTGRES_URL` (if using database)

### Netlify

**Step 1: Create `netlify.toml`**

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

**Step 2: Deploy**

```bash
npm install netlify-cli -g
netlify deploy --prod
```

### Docker

**Step 1: Create `Dockerfile`**

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**Step 2: Build and Run**

```bash
docker build -t team-jesus .
docker run -p 3000:3000 team-jesus
```

### Custom Server

**Ubuntu/Debian Server:**

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and setup
git clone [repo-url]
cd team_jesus
npm install
npm run build

# Use PM2 for process management
npm install -g pm2
pm2 start npm --name "team-jesus" -- start
pm2 save
pm2 startup
```

---

## Troubleshooting

### Common Issues

**Issue: Port 3000 already in use**

```bash
# Find process using port
lsof -i :3000

# Kill process
kill -9 [PID]

# Or use different port
PORT=3001 npm run dev
```

**Issue: Module not found**

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: Build fails**

```bash
# Check TypeScript errors
npx tsc --noEmit

# Clean Next.js cache
rm -rf .next
npm run build
```

**Issue: Tests failing**

```bash
# Update snapshots
npm test -- -u

# Clear test cache
npm test -- --clearCache
```

### Performance Optimisation

**Image Optimisation**

Use Next.js Image component:

```typescript
import Image from 'next/image';

<Image
  src="/images/photo.jpg"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
  quality={85}
/>
```

**Code Splitting**

Use dynamic imports:

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

**Bundle Analysis**

```bash
# Install analyzer
npm install @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

# Run analysis
ANALYZE=true npm run build
```

### Getting Help

**Resources:**

* [Next.js Documentation](https://nextjs.org/docs)
* [Framer Motion Docs](https://www.framer.com/motion/)
* [Tailwind CSS Docs](https://tailwindcss.com/docs)
* [Radix UI Docs](https://www.radix-ui.com/docs)

**Support:**

* Check existing GitHub issues
* Review error stack traces
* Enable verbose logging: `DEBUG=* npm run dev`

---

**Last Updated:** October 2025
**Maintained By:** #TeamJesus Development Team
