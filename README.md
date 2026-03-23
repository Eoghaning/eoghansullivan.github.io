# React + Vite
# Eoghan Sullivan – Portfolio

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
This is my portfolio, I went for a modern design, with responsive portfolio website built with React and Vite, showcasing my projects, skills, CV, and blog. Deployed on Netlify with continuous deployment.

Currently, two official plugins are available:
Live site: [eoghansullivan.netlify.app](https://eoghansullivan.netlify.app)

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
---

## Expanding the ESLint configuration
## Portfolio Features

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
- Dark theme with green accent color
- Responsive layout – works on desktop, tablet, and mobile
- **About** – personal introduction and contact links
- **Projects** – search/filter by skill, modals with full project details
- **CV** – downloadable PDF, neatly formatted education and experience
- **Blog** – expandable posts with date sorting
- Custom scrollbar – matches the site's design

---
## Tech Stack

- [React](https://react.dev/) – functional components and hooks
- [Vite](https://vitejs.dev/) – fast build tool and dev server
- CSS – custom styling with CSS variables
- [Netlify](https://netlify.com/) – hosting and continuous deployment
---




## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Eoghaning/eoghansullivan.github.io.git
cd eoghansullivan.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---







## Project Structure

```
src/
├── assets/            – static assets (images, etc.)
├── components/        – reusable UI components (Navbar)
├── pages/             – main page components
│   ├── About/
│   ├── Projects/
│   │   ├── main_projects/   – individual project files
│   │   └── more_projects/   – additional projects
│   ├── CV/
│   └── Blog/
├── skills.js          – central skill list (used across About and Projects)
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```




---

## How It Works

- **Skills** are defined once in `src/skills.js` and reused across the About and Projects sections. Adding a new skill there makes it searchable and displayable everywhere.
- **Projects** use a flat list of skills for the search bar; the modal displays them as a row of tags.
- **Blog posts** are stored as separate JSX files under `src/pages/Blog/posts/` – easily extendable.

---




## Building for Production

```bash
npm run build
```

Output goes to the `dist/` folder, ready for deployment.

---

## Deployment

Automatically deployed to Netlify on every push to `main`. You can also deploy manually by dragging the `dist/` folder into Netlify's drag-and-drop interface.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

**Eoghan Sullivan**  
[GitHub](https://github.com/Eoghaning) · [LinkedIn](https://linkedin.com/in/eoghanksullivan) · [Portfolio](https://eoghansullivan.netlify.app)

Feel free to open an issue or reach out with any questions or suggestions!