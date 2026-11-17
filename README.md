# GK TOURS — Meaningful Pilgrimage Journeys
> **G for Goat · K for Kite**  
> Premium, responsive, cinematic single-page travel experience for sacred pilgrimages to **Girnar Yatra (Gujarat)** and **Narsobachi Wadi (Maharashtra)**, rooted in devotion to Lord Dattatreya.

---

## 01. Brand & Design System

GK Tours is an art-directed digital presence combining:
- **40% Premium Travel Editorial**: High contrast serif typography, deep forest green and royal blue, spacious rhythm, and fine-engraved architectural details.
- **30% Cinematic Destination Storytelling**: Immersive photography of Girnar mountain and the Krishna–Panchganga holy river confluence, staggered reveals, and scroll-linked depth.
- **20% Modern Travel Booking UX**: Interactive destination cards, clear package panels, and a frictionless WhatsApp consultation journey.
- **10% Distinctive Spiritual Identity**: Sacred Datta peeth heritage, quiet devotion, and a bespoke illustrated mountain landscape footer.

### Typography System
- **Syne**: Bold modern headlines, navigation emphasis, oversized destination numbering.
- **Instrument Serif (Italic)**: Emotional accents, editorial quotations, reflective storytelling subtitles.
- **Plus Jakarta Sans**: Paragraph copy, details, buttons, and form interfaces.

### Colour Palette
- **Deep Forest Green**: `#173D32`
- **Midnight Green**: `#102A23`
- **Warm Ivory**: `#F8F6EF`
- **Pure White**: `#FFFFFF`
- **Soft Sand**: `#EAE3D6`
- **Antique Gold**: `#B99554`
- **Saffron**: `#C77A32`
- **Deep Royal Blue**: `#153F87` (Signature editorial footer)
- **Secondary Blue**: `#1C4E9A`

---

## 02. Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6 (Static compilation with relative base path `./` for GitHub Pages)
- **Motion & Interactions**: GSAP 3, ScrollTrigger, `@gsap/react`, Lenis Smooth Scroll
- **Icons**: Lucide React
- **Data Architecture**: 100% JSON-Driven Content (`src/data/*.json`)
- **Deployment**: GitHub Pages via automated GitHub Actions (`.github/workflows/deploy.yml`)

---

## 03. Project Structure

```text
gk-routes/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── images/                     # Authentic destination & editorial imagery
│   │   ├── hero-girnar.jpg
│   │   ├── girnar-main.jpg
│   │   ├── girnar-steps.jpg
│   │   ├── girnar-shrine.jpg
│   │   ├── narsobachi-wadi-main.jpg
│   │   ├── narsobachi-wadi-temple.jpg
│   │   ├── narsobachi-wadi-paduka.jpg
│   │   ├── brand-journey.jpg
│   │   ├── travel-experience.jpg
│   │   └── final-cta.jpg
│   └── favicon.svg                 # Brand insignia favicon
├── src/
│   ├── assets/
│   │   ├── logo/
│   │   │   └── Logo.jsx            # Typographic & SVG emblem brand placeholder
│   │   └── illustrations/
│   │       └── GirnarLandscape.jsx # Custom illustrated mountain engraving for footer
│   ├── components/
│   │   ├── Preloader.jsx           # Minimal branded journey preloader
│   │   ├── Navbar.jsx              # Floating navigation with dynamic scroll states
│   │   ├── Hero.jsx                # Full-screen cinematic mountain experience
│   │   ├── BrandIntro.jsx          # Asymmetric editorial brand introduction
│   │   ├── DestinationShowcase.jsx # Overlapping editorial destination cards
│   │   ├── DestinationCard.jsx     # Card component with stats & highlights
│   │   ├── WhyChooseUs.jsx         # 4 feature blocks with fine gold dividers
│   │   ├── DestinationStory.jsx    # Immersive chronicles for Girnar & Narsobachi
│   │   ├── JourneyProcess.jsx      # 3-step connected timeline (horizontal & mobile)
│   │   ├── ExperienceSection.jsx   # Full-width cinematic reflection
│   │   ├── PackageSection.jsx      # Honest package panels (no fabricated info)
│   │   ├── FAQ.jsx                 # Accessible accordion
│   │   ├── FinalCTA.jsx            # Photographic closing call to action
│   │   ├── Footer.jsx              # 4-column royal blue footer with landscape
│   │   └── EnquiryModal.jsx        # Validation & WhatsApp message generator
│   ├── data/
│   │   ├── site.json               # Brand meta, contact details & WhatsApp config
│   │   ├── navigation.json         # Header links & CTA labels
│   │   ├── hero.json               # Hero copy, badges & background paths
│   │   ├── brand.json              # Introduction copy & pillars
│   │   ├── destinations.json       # Girnar & Narsobachi Wadi destination specs
│   │   ├── features.json           # Why choose GK Tours blocks
│   │   ├── journey.json            # 3-step consultation process
│   │   ├── packages.json           # Package details & enquiry triggers
│   │   ├── experience.json         # Editorial reflection quote & image
│   │   ├── faq.json                # Questions & comprehensive answers
│   │   ├── finalCta.json           # Final section copy
│   │   └── footer.json             # Footer columns, social links & copyright
│   ├── hooks/
│   │   └── useAnimations.js        # GSAP context & ScrollTrigger cleanup hook
│   ├── styles/
│   │   ├── globals.css             # Design tokens, variables & typography clamp
│   │   ├── animations.css          # CSS keyframes, transitions & reduced-motion
│   │   └── responsive.css          # Breakpoints (360px up to 1920px)
│   ├── App.jsx                     # Single page experience flow
│   └── main.jsx                    # React entrypoint
├── index.html                      # SEO metadata & Google Fonts
├── vite.config.js                  # Relative base path for subfolder GitHub Pages
├── package.json                    # Scripts and dependencies
└── README.md                       # Documentation
```

---

## 04. Installation & Local Development

### Prerequisites
- Node.js 18+ (tested on Node 20 & 26)
- npm or pnpm

### 1. Clone & Install
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 05. How to Edit Website Content (Strictly JSON)

All text, prices, departures, contact numbers, and images are configured inside `src/data/`. **No code modifications in JSX are needed to update content.**

### Updating Contact & WhatsApp Business Number
Open `src/data/site.json`:
```json
{
  "contact": {
    "phone": "+91 98765 43210",
    "whatsappNumber": "919876543210",
    "email": "enquire@gktours.in",
    "address": "Junagadh & Kolhapur Corridors, India"
  }
}
```
> **Note**: `whatsappNumber` must include country code without `+` (e.g. `919876543210`). The enquiry modal uses this to generate the official WhatsApp click-to-chat link.

### Updating Packages (No Fabricated Details)
Open `src/data/packages.json`:
```json
{
  "duration": "3 Days / 2 Nights",       // set to null to show "Contact us for package details."
  "departure": "Every Friday from Rajkot",// set to null to show "Contact us for package details."
  "price": "₹6,499 per yatri"             // set to null to show "Contact us for package details."
}
```
If dates or prices are not yet confirmed, simply keep them as `null`. The UI will honestly display: `"Contact us for package details."`

### Replacing the GK Tours Logo
When the client provides the official vector logo:
1. Replace `public/favicon.svg` with the new favicon.
2. In `src/assets/logo/Logo.jsx`, you can simply embed the final SVG or render an `<img>` tag pointing to your new SVG asset in `src/assets/logo/`.

---

## 06. GitHub Pages Deployment

The repository is configured for automated zero-config deployment to GitHub Pages via GitHub Actions:

1. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "feat: complete GK Tours digital experience"
   git push origin main
   ```
2. In your GitHub repository settings:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. The `.github/workflows/deploy.yml` workflow will automatically run, install dependencies, build the static `dist/` directory, and deploy to your GitHub Pages URL:
   `https://<username>.github.io/<repository-name>/`

Because `vite.config.js` sets `base: './'`, all asset paths are relative and work seamlessly whether hosted at root or inside a subpath repository.

---

## 07. Verification & Acceptance Criteria Met

- [x] Complete single-page React website implemented.
- [x] Both pilgrimage destinations (Girnar Yatra & Narsobachi Wadi) presented with authentic photography.
- [x] 100% of website content is JSON-driven (`src/data/*.json`).
- [x] Zero fabricated business details (honest fallbacks for unconfirmed specs).
- [x] Typographic & geometric brand logo placeholder with easy replacement path.
- [x] Full-screen cinematic hero with sunrise lighting & Syne + Instrument Serif typography.
- [x] Overlapping destination showcase inspired by Reference 02.
- [x] Full interactive navigation with smooth scrolling and responsive mobile drawer.
- [x] Complete enquiry modal with 10-digit Indian mobile validation and formatted WhatsApp dispatch.
- [x] Fully responsive across all devices from 360px up to 1920px without overflow.
- [x] GSAP 3 & Lenis interactions with proper lifecycle cleanup and `prefers-reduced-motion` support.
- [x] Signature deep royal blue footer with custom SVG engraved landscape of Girnar mountains, temple spires, and solitary pilgrim.
- [x] Clean production build succeeds with 0 errors or warnings.
- [x] GitHub Actions workflow `.github/workflows/deploy.yml` configured and verified.
- [x] Screenshots captured and visually inspected at desktop, mobile, and modal states.

---
© 2026 GK Tours · All Rights Reserved.
