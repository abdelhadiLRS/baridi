---
name: Modern Heritage
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#404941'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#707971'
  outline-variant: '#bfc9bf'
  surface-tint: '#256b42'
  primary: '#004524'
  on-primary: '#ffffff'
  primary-container: '#155e37'
  on-primary-container: '#8fd5a4'
  inverse-primary: '#8fd6a5'
  secondary: '#ba002a'
  on-secondary: '#ffffff'
  secondary-container: '#e2213d'
  on-secondary-container: '#fffbff'
  tertiary: '#4f3700'
  on-tertiary: '#ffffff'
  tertiary-container: '#6c4d00'
  on-tertiary-container: '#f6bd47'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#abf3bf'
  primary-fixed-dim: '#8fd6a5'
  on-primary-fixed: '#00210f'
  on-primary-fixed-variant: '#01522c'
  secondary-fixed: '#ffdad9'
  secondary-fixed-dim: '#ffb3b2'
  on-secondary-fixed: '#410008'
  on-secondary-fixed-variant: '#92001f'
  tertiary-fixed: '#ffdea6'
  tertiary-fixed-dim: '#f7bd48'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5d4200'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
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
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system is a digital conservatory for Algerian philately. It adopts a **Modern Heritage** style, blending the meticulous rigor of an archive with the luxury of a premium museum gallery. The personality is educational and authoritative, yet avoids being dry by utilizing high-contrast visuals and rich, tactile textures. 

The aesthetic draws from **Minimalism** for layout clarity and **Tactile/Skeuomorphism** for physical metaphors—specifically the paper quality of historical manuscripts and the physical perforations of stamps. The UI should evoke an emotional response of reverence and discovery, treating each digital asset as a physical artifact.

## Colors
The palette is grounded in the Algerian national identity but elevated for an archival context. 

- **Primary (Deep Emerald):** Used for primary actions, navigation headers, and authoritative branding elements. 
- **Secondary (Algerian Red):** Reserved for delicate accents, notifications, and historical markers to ensure it doesn't overwhelm the emerald.
- **Tertiary (Gold/Brass):** Applied to borders, dividers, and decorative icons to signify premium, "medal-worthy" status.
- **Neutral (Parchment):** The primary background color. It is not a flat white; it has a subtle warmth to simulate aged, high-quality paper.
- **Text (Charcoal):** Provides high legibility and a stark, ink-like contrast against the parchment background.

## Typography
This design system uses a dual-language typographic strategy. For Latin scripts, **Playfair Display** provides a sophisticated, editorial feel for titles and quotes, while **Inter** ensures utilitarian clarity for long-form data and labels. 

- **Headlines:** Use high-contrast serif weights to establish a hierarchy similar to a printed encyclopedia.
- **Body:** Inter is used with generous line heights to ensure readability of historical descriptions.
- **Captions & Labels:** Use "label-caps" for metadata (dates, denominations, catalog numbers) to distinguish archival data from narrative text.
- **Arabic Pairing:** Implement **Amiri** for headlines and **Cairo** for body text to maintain the same serif-to-sans-serif relationship across languages.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to mimic the structured pages of an album. 

- **Rhythm:** A base 8px unit dictates all padding and margins.
- **Margins:** Large outer margins are used to provide visual "breathing room," focusing the user's attention on the stamps as central artifacts.
- **Grid:** A 12-column grid is standard. Artifact cards should span 3 or 4 columns, while narrative text blocks should be centered and span 8 columns for optimal reading width.
- **Mobile:** Transition to a single-column view with 20px side margins, maintaining the paper-like padding within cards.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** rather than heavy shadows. 

- **Surface Strategy:** The parchment background is the base. Elevated elements (like cards) use a slightly lighter shade or a 1px Gold/Brass border to create separation.
- **Subtle Shadows:** Where depth is required (e.g., a "floating" stamp being inspected), use a very soft, highly diffused Charcoal shadow with only 5% opacity to mimic paper resting on paper.
- **Depth through Texture:** Use a subtle grain or "noise" overlay on primary surfaces to enhance the tactile, manuscript feel.

## Shapes
The shape language is primarily **Soft (0.25rem)** to maintain a structured, professional appearance. 

- **Stamp Perforations:** A unique decorative element for this design system is the "perforated edge." This should be applied to the top or bottom of artifact cards or section dividers as a stylistic flourish.
- **Interactive Elements:** Buttons use slightly more rounding (0.5rem) to signify clickability while remaining consistent with the overall architectural feel.

## Components
- **Stamp Cards:** The central component. Features a 1px Gold border. The image of the stamp is always centered with a subtle inner "inset" shadow to suggest it is mounted in an album.
- **Buttons:**
    - *Primary:* Deep Emerald background, Parchment text, sharp corners or 4px radius.
    - *Secondary:* Transparent with a 1px Brass border and Brass text.
- **Tabs/Navigation:** Use simple underline indicators in Algerian Red to denote active sections, avoiding heavy background fills.
- **Input Fields:** Minimalist lines (bottom-border only) to mimic the lines in a ledger or notebook. Use Inter for input text.
- **Timeline/Metadata:** Vertical lines in Gold with Charcoal dots, used to display the historical progression of stamp issues.
- **Glass Overlays:** For "loupe" or zoom features, use a subtle glassmorphism effect with a 10px backdrop blur to allow the stamp texture to peek through while inspecting details.