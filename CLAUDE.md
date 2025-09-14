# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the personal portfolio website of Oleksandr Starnikov (shonie.dev) - a Solution Architect, Full Stack Developer, Data Engineer and Technical Lead. It's a statically built and deployed Next.js web application using the Pages Router architecture.

## Development Commands

```bash
# Start development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code with Prettier
npm run format

# Check formatting (without changes)
npm run format:check

# Build then start (via preserve script)
npm run preserve && npm start
```

## Architecture & Technology Stack

**Core Framework:** Next.js 15+ with Pages Router (not App Router)
**Styling:** Tailwind CSS v4 with mobile-first approach
**UI Components:** Radix UI (extensive component library including themes, icons, and primitives)
**Fonts:** Multiple Google Fonts (Roboto, Kanit, Inter, Inter Tight, Ultra) loaded via next/font
**Theme:** next-themes for dark mode support with Radix UI Theme provider
**Icons:** Radix Icons and Lucide React
**TypeScript:** Full TypeScript with SOLID principles

## Project Structure

```
src/
├── app-config/           # Centralized site configuration
├── components/           # Reusable React components
│   ├── Header.tsx       # Main navigation with responsive design
│   ├── BookMeetingButton.tsx
│   ├── Badge.tsx
│   ├── Container.tsx
│   ├── Link.tsx
│   ├── Section.tsx
│   └── SectionHeading.tsx
├── pages/               # Next.js pages (Pages Router)
│   ├── _app.tsx        # App wrapper with providers and fonts
│   ├── _document.tsx   # HTML document structure
│   ├── index.tsx       # Homepage with grid layout
│   ├── blog.tsx
│   ├── contact.tsx
│   ├── cv.tsx
│   └── projects.tsx
├── styles/             # Global CSS files
└── types/              # TypeScript type definitions

public/
├── data/               # Static JSON files for external ETL data
└── assets/
    ├── images/         # High-quality images
    └── icons/          # SVG icons
```

## Key Architecture Patterns

**Layout System:** Uses Radix UI Grid with responsive breakpoints for complex layouts (see Header.tsx and index.tsx)
**Theme Integration:** Combines next-themes with Radix UI Theme for consistent theming
**Font Management:** CSS variables for multiple font families configured in \_app.tsx
**Component Pattern:** Small, focused components with TypeScript props
**Static Export:** Configured for static deployment (no server functions)

## Styling Conventions

- **Mobile-first:** All responsive design starts from mobile breakpoints
- **Tailwind Utilities:** Prefer utility classes following Tailwind best practices
- **CSS Variables:** Font families are available as CSS variables (--font-roboto, etc.)
- **Radix Integration:** Uses Radix UI's built-in styling system alongside Tailwind
- **File Naming:** All files use kebab-case naming convention

## Configuration Files

- **tailwind.config.js:** Tailwind CSS v4 configuration
- **next.config.ts:** Next.js configuration for static export
- **tsconfig.json:** TypeScript configuration
- **.cursor/rules/overview.mdx:** Project-specific development rules and conventions

## Development Guidelines

1. Use TypeScript for all components with proper prop typing
2. Follow existing component patterns (see Header.tsx for complex responsive layout example)
3. Maintain mobile-first responsive design approach
4. Use existing app-config for site-wide settings
5. Static-only Next.js features (no server-side rendering or API routes)
6. Prefer Radix UI components over custom implementations
7. Use the established Grid system for complex layouts