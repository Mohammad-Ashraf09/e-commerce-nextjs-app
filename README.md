# E-Commerce Next.js App

A Next.js e-commerce starter app built with TypeScript, Tailwind CSS, Sass, and a simple product browsing experience. The current implementation uses the DummyJSON API for product and category data, with a client-side home experience and reusable service layers.

## Setup Instructions

### Prerequisites
- Node.js 20.13+ recommended
- npm

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Useful scripts
```bash
npm run build
npm run start
npm run lint
npm run format
npm run format:check
```

## Assumptions Made
- The app is a front-end product browsing experience and does not yet include a full checkout or authentication flow.
- Product data is currently sourced from DummyJSON via the HTTP client in the `src/services` folder.
- The UI is designed to be extended later with real API integration, cart functionality, and a detailed product page.
- Tailwind CSS is used for layout and styling, while Sass support is available for future component-level styling.

## Architectural Decisions
- Next.js App Router is used for route organization under `src/app`.
- A service layer was introduced in `src/services` to isolate API calls from UI components.
- `src/components` contains presentational and client-side UI pieces, keeping the page-level components smaller and easier to maintain.
- A reusable `api` client is used to centralize the base URL, timeout, and headers for external requests.
- The home page uses a client component (`HomeClient`) to manage local UI state such as sidebar visibility and search input.
- Product-related logic is separated from presentation to make future migration to a real backend or CMS easier.

## Project Structure
```text
src/
  app/              # Route-based pages and layouts
  components/       # Reusable UI components
  services/         # API services and axios client
  types/            # Shared TypeScript types
```

## Notes
- The app currently focuses on product discovery and category browsing.
- Future improvements may include a cart, user authentication, checkout, and a richer product detail experience.
