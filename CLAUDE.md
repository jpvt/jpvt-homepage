# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Setup - requires Node.js 18
nvm use 18

# Development
npm run dev          # Start dev server on 0.0.0.0 (network accessible)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run prettier     # Format code with Prettier
```

## Architecture Overview

This is João Teixeira's personal homepage built with Next.js, Chakra UI, and Framer Motion. The site features academic publications, projects, wallpapers for sale, and a calendar booking system.

### Key Architectural Patterns

**Server-Side Dynamic Content**: Uses `getServerSideProps` for features requiring server-side randomization (like profile image rotation on homepage).

**Component-First Development**: Always check existing components before creating new ones. Components are organized by purpose:
- `layouts/` - Page layout wrappers with animation
- `bio.js` - Specialized biography styling components  
- `section.js` - Animated content sections with staggered delays
- `theme-toggle-button.js` - Dark/light mode toggle

**Animation System**: Consistent Framer Motion usage with staggered delays (`delay={0.1 * index}`) for list items and `delay={0.1}` for sections.

### Styling Conventions

**Chakra UI + Custom Theme** (`lib/theme.js`):
- Primary color: `grassTeal: '#2d7e55'`
- Background: Light mode `#D5DAD5`, Dark mode `#000000`
- Default: Dark mode with system preference detection
- Custom font: 'M PLUS Rounded 1c' for headings

**Responsive Design Patterns**:
```jsx
// Use Chakra's responsive props consistently
maxW={{ base: '100%', lg: '1200px', xl: '1400px' }}
fontSize={{ base: 'xl', lg: '2xl' }}
p={{ base: 4, md: 6 }}
```

**Color Mode Handling**:
```jsx
// Always test both light and dark modes
borderColor={useColorModeValue('green.400', 'green.600')}
```

### Pages Structure

**Standard Pages**: Each page uses `Layout` wrapper and `Section` components with animations.

**Special Pages**:
- `index.js` - Homepage with randomized profile images via `getServerSideProps`
- `calendar.js` - Google Calendar integration for meeting booking
- `wallpapers/` - Nested routing with individual pack pages
- `api/profile-images.js` - Dynamic image directory reading

### Data Patterns

**In-Component Data**: Publications and projects are stored as arrays within their respective components rather than external JSON files.

**Dynamic Assets**: Profile images are auto-discovered from `/public/images/profile/` directory via API route.

### Development Guidelines

**File Organization**: Follow existing patterns - components have single responsibilities, pages are minimal wrappers around layouts and sections.

**Styling**: Use Chakra UI first, then `@emotion/styled` for complex custom components, inline styles only for one-off effects.

**Images**: Use Next.js `Image` component for optimization. Profile images support various formats (jpg, jpeg, png, gif, webp).

**API Routes**: Keep simple and focused on server-side file system operations or external integrations.