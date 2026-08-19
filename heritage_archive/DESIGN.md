---
name: Heritage Archive
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#3f4940'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#6f7a70'
  outline-variant: '#bfc9be'
  surface-tint: '#146c3c'
  primary: '#004824'
  on-primary: '#ffffff'
  primary-container: '#006233'
  on-primary-container: '#89dba0'
  inverse-primary: '#86d89d'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#81001a'
  on-tertiary: '#ffffff'
  tertiary-container: '#ad0027'
  on-tertiary-container: '#ffb8b7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a1f5b7'
  primary-fixed-dim: '#86d89d'
  on-primary-fixed: '#00210d'
  on-primary-fixed-variant: '#00522a'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#ffdad9'
  tertiary-fixed-dim: '#ffb3b2'
  on-tertiary-fixed: '#410008'
  on-tertiary-fixed-variant: '#92001f'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  ink: '#1A202C'
  parchment-base: '#FDFCF8'
  border-subtle: '#E5E7EB'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Libre Franklin
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Libre Franklin
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Libre Franklin
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Libre Franklin
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

This design system is built upon the "Modern Heritage" aesthetic—a sophisticated blend of historical archiving and contemporary minimalism. It is designed for researchers, collectors, and enthusiasts who value clarity, prestige, and the preservation of history.

The style is **Archive-Minimalism**: it prioritizes the content (the "artifacts") by using expansive whitespace, a scholarly color palette, and structured, rhythmic layouts. The emotional response should be one of quiet authority, timelessness, and meticulous curation. We avoid trendy decorations in favor of high-quality typography and a "parchment and ink" tactile feel.

## Colors

The palette is rooted in a "Modern Archive" concept:
- **Primary (Algerian Green):** Used for primary actions, navigational headers, and brand identification. It represents growth and heritage.
- **Secondary (Gold):** Used sparingly for accents, icons, or high-value metadata to evoke a sense of quality and historical value.
- **Tertiary (Archive Red):** Reserved for critical alerts or specific historical markers that require immediate attention.
- **Backgrounds:** We utilize a dual-tone approach. `#F9FAFB` for general UI backgrounds and a custom `parchment-base` (`#FDFCF8`) for content cards and document areas to mimic high-quality paper.
- **Typography:** `#1A202C` (Ink) provides high legibility against the light backgrounds without the harshness of pure black.

## Typography

The typography strategy employs a "Serif for Spirit, Sans for Structure" hierarchy.

- **Headlines:** Use **Playfair Display**. Its high-contrast strokes and elegant serifs communicate the "Heritage" aspect of the brand. Use for page titles, article headers, and featured quotes.
- **Body & Labels:** Use **Libre Franklin**. This is a clean, sturdy sans-serif that ensures maximum readability for dense archival information and metadata. 
- **Labeling:** Technical labels and metadata should use `label-sm` with a slight tracking increase and uppercase transform to create a disciplined, catalog-like appearance.

## Layout & Spacing

This design system follows a **Fixed Grid** philosophy on desktop to maintain a structured, editorial feel, transitioning to a fluid model for mobile devices.

- **Grid:** A 12-column grid is used for desktop (1280px max-width) to allow for asymmetrical layouts (e.g., a 4-column sidebar with 8-column content).
- **Whitespace:** Large margins and generous padding within components are mandatory to avoid visual clutter and maintain the "archive" aesthetic.
- **Rhythm:** Spacing follows an 8px base unit. Component containers should prioritize internal padding of 24px or 32px to create a sense of breathing room.

## Elevation & Depth

To maintain a clean and historical feel, this design system avoids heavy, blurred shadows. Instead, depth is conveyed through:

- **Tonal Layering:** The primary method of separation. Components like cards or sidebars sit on the `#F9FAFB` background using the `#FDFCF8` (Parchment) fill.
- **Low-Contrast Outlines:** Instead of shadows, use 1px solid borders in `border-subtle` (`#E5E7EB`). This gives elements a crisp, "clipped" appearance similar to paper specimens.
- **Micro-Shadows:** Only for interactive elements (like buttons or active cards), a very tight, low-opacity shadow may be used to indicate a "lift" off the page (e.g., `0px 2px 4px rgba(0,0,0,0.05)`).

## Shapes

The shape language is conservative and disciplined. 

- **Corners:** Use **Soft (0.25rem)** roundedness. This provides just enough softening to feel modern without losing the professional, "square-cut" feel of archival documents.
- **Exceptions:** Form inputs and primary buttons follow this 4px radius. Small tags or chips may use a slightly larger radius for distinction, but should never be fully pill-shaped.

## Components

- **Buttons:** Primary buttons use a solid Algerian Green background with white text. Secondary buttons use a gold outline or text. High-emphasis actions should feel substantial but never bulky.
- **Cards (The Archive Unit):** Cards are the core of the system. They must have a white or parchment background, a 1px subtle border, and no shadow. Titles within cards use Playfair Display (Headline-MD).
- **Chips/Tags:** Used for categorization (e.g., "19th Century", "Official"). Use a light gray background with uppercase Libre Franklin text to mimic library cataloging.
- **Input Fields:** Clean, rectangular fields with a 1px border. Focus states should transition the border color to Algerian Green.
- **Lists:** Use horizontal dividers (1px, subtle) rather than boxes for long lists of data to maintain a vertical flow typical of manuscripts or registers.
- **Metadata Blocks:** Groups of labels and values (e.g., Date, Origin, Material) should be neatly aligned with labels in gold or muted ink and values in bold ink.