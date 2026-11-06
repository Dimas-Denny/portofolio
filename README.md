# Portfolio Website — Dimas Denny Wibowo

A personal portfolio website sliced from a Figma design into a fully responsive Next.js site, built as part of the **WPH Bootcamp — Slicing Portfolio Challenge**.

🔗 **Live demo:** [your-project.vercel.app](https://your-project.vercel.app)
📂 **Repository:** [github.com/Dimas-Denny/your-repo](https://github.com/Dimas-Denny/your-repo)

---

## ✨ Features

- **Pixel-perfect slicing** from Figma (mobile 393px and desktop 1440px designs)
- **Mobile-first responsive layout** using Tailwind breakpoints (`md`, `lg`, `xl`)
- **Animated mobile menu** — the navbar pill expands into a full-height panel with staggered links
- **Stacked-card testimonials** — infinite loop, swipe support, and spring animations
- **Skill carousel** — 2 cards on mobile, 3 on tablet, 4 on desktop
- **FAQ accordion** with smooth height animation
- **Contact form** with success / failed result modal (retry keeps the typed message)
- **Hover effects** on project cards, buttons, and social links
- **"Coming Soon" project pages** generated statically
- **Accessibility**: semantic HTML, `aria-*` attributes, keyboard support, and reduced-motion support

---

## 🛠️ Tech Stack

| Category      | Tools                                                                      |
| ------------- | -------------------------------------------------------------------------- |
| Framework     | [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components) |
| Language      | TypeScript, React 19                                                       |
| Styling       | [Tailwind CSS v4](https://tailwindcss.com) with design tokens from Figma   |
| UI Components | [shadcn/ui](https://ui.shadcn.com) (Base UI), Embla Carousel               |
| Animation     | [Framer Motion](https://motion.dev)                                        |
| Icons         | [Lucide React](https://lucide.dev)                                         |
| Fonts         | Montserrat, Anton, Bonheur Royale via `next/font`                          |
| Deployment    | [Vercel](https://vercel.com)                                               |
| Design        | Figma                                                                      |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (LTS version)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Dimas-Denny/your-repo.git
cd your-repo

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build locally     |
| `npm run lint`  | Check the code with ESLint           |

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx            # Root layout, fonts, metadata
│   ├── page.tsx              # Home page (all sections)
│   ├── globals.css           # Tailwind theme & design tokens
│   └── projects/
│       ├── page.tsx          # /projects (Coming Soon)
│       └── [slug]/page.tsx   # /projects/[slug] (Coming Soon)
├── components/
│   ├── layout/               # Navbar, Footer
│   ├── sections/             # Hero, About, Skill, Comparison, Projects,
│   │                         # Experience, Testimonials, Faq, Contact
│   ├── shared/               # ComingSoon
│   └── ui/                   # shadcn/ui components (carousel, dialog)
├── lib/
│   └── utils.ts              # cn() helper
└── public/
    ├── icons/                # SVG icons and logos
    └── images/               # Photos, backgrounds, project previews
```

---

## 📱 Responsive Breakpoints

| Screen  | Width               | Layout                                        |
| ------- | ------------------- | --------------------------------------------- |
| Mobile  | < 768px             | Figma mobile design (393px)                   |
| Tablet  | 768px – 1279px      | Bridging layout between mobile and desktop    |
| Desktop | ≥ 1024px / ≥ 1280px | Figma desktop design (1440px, 1200px content) |

---

## 🎨 Design Tokens

Colors, typography, and radius are defined once in `app/globals.css` using Tailwind v4's `@theme`, so every value matches the Figma design system:

- **Colors**: `neutral-25` → `neutral-950`, `primary-100` → `primary-400`, `secondary-100`
- **Typography**: `text-display-3xl` → `text-display-xs`, `text-xl` → `text-xs`
- **Radius**: `radius-xxs` → `radius-4xl`

---

## 🌿 Git Workflow

- Development happens on the `development` branch
- Changes are merged into `main` through a pull request
- Commits follow [Conventional Commits](https://www.conventionalcommits.org): `feat`, `fix`, `refactor`, `style`, `chore`
- Every push to `development` gets a Vercel preview deployment; `main` is deployed to production

---

## 👤 Author

**Dimas Denny Wibowo**

- GitHub: [@Dimas-Denny](https://github.com/Dimas-Denny)

---

## 🙏 Acknowledgements

- **WPH Bootcamp** for the Slicing Portfolio Challenge and Figma design
