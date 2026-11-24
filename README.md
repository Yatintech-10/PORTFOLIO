# Yatin's Portfolio

This is my personal portfolio site. It's a single page built with React and Vite, with Tailwind for styling, GSAP for the animations and a 3D planet in the background made with Three.js.
<img width="1902" height="998" alt="Screenshot 2026-11-24 070325" src="https://github.com/user-attachments/assets/ce9752d9-5161-4257-bbb0-f1a63e7372c4" />
<img width="1903" height="998" alt="Screenshot 2026-11-24 070345" src="https://github.com/user-attachments/assets/8c122c47-2129-40ce-9bca-f76b11470634" />
<img width="1903" height="995" alt="Screenshot 2026-11-24 070408" src="https://github.com/user-attachments/assets/b5d21b9c-ba06-4b93-81b3-a53132896e60" />
<img width="1903" height="980" alt="Screenshot 2026-11-24 070447" src="https://github.com/user-attachments/assets/475c9d5b-79e7-49aa-84ce-9f94bfd1b530" />
<img width="1903" height="995" alt="Screenshot 2026-11-24 070408" src="https://github.com/user-attachments/assets/b5d21b9c-ba06-4b93-81b3-a53132896e60" />
<img width="1903" height="998" alt="Screenshot 2026-11-24 070345" src="https://github.com/user-attachments/assets/8c122c47-2129-40ce-9bca-f76b11470634" />
<img width="1902" height="998" alt="Screenshot 2026-11-24 070325" src="https://github.com/user-attachments/assets/ce9752d9-5161-4257-bbb0-f1a63e7372c4" />




Live site: [yatin10.netlify.app/]

## Why I built it

[Every engineer require a personal portfolio for showcasing their work]

## What's on the page

The site is one long page, and the navbar scrolls you between the parts:

- **Hero** at the top, with the animated heading
- **About**, a short intro about me
- **Services**, a summary of what I can do for people
- **Works**, my projects
- **Contact**, with a short summary and the contact details
- A scrolling **marquee** of the tools and technologies I use

The page is smooth scrolled, and the layout changes between desktop and mobile.

## Tech stack

| What | Used for |
| --- | --- |
| React 19 | the whole UI |
| Vite | dev server and build |
| Tailwind CSS 4 | styling, through the `@tailwindcss/vite` plugin |
| GSAP + `@gsap/react` | text and scroll animations |
| Lenis | smooth scrolling |
| react-scroll | jumping to sections from the navbar |
| react-responsive | different layouts for different screen sizes |
| Three.js, React Three Fiber, drei | the 3D planet |
| `@react-three/rapier` | physics for the 3D scene |
| Iconify | icons |
| Oxlint | linting |

## Running it on your machine

You need Node.js installed (a recent LTS version is fine) and Git.

One thing before you clone: the repo uses Git LFS for video files (`*.mov`), so run this once if you haven't already:

```
git lfs install
```

Then:

```
git clone https://github.com/Yatintech-10/PORTFOLIO.git
cd PORTFOLIO
npm install
npm run dev
```

Vite will print a local address, usually `http://localhost:5173`. Open it in your browser.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | starts the dev server with hot reload |
| `npm run build` | makes a production build in `dist/` |
| `npm run preview` | serves the production build locally so you can check it |
| `npm run lint` | runs Oxlint |

## Folder structure

```
PORTFOLIO
├── images/          images used outside the public folder
├── public/          static files: logos, icons, backgrounds, 3D models (.glb)
├── src/
│   ├── components/  reusable pieces (animated heading, text lines, marquee, planet)
│   ├── constants/   the text and data for the page, kept in one place
│   ├── sections/    the big blocks of the page (navbar, hero, about, works, contact...)
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

If you want to change the content (project names, services, skills), most of it lives in `src/constants/index.js`, so you don't have to dig through the components.

## Building and deploying

```
npm run build
```

This creates a `dist/` folder, which is what you upload to a host. It works with Vercel, Netlify or GitHub Pages. On Vercel and Netlify the settings are:

- Build command: `npm run build`
- Output directory: `dist`

One heads up about file names. Windows doesn't care about capital letters in file names but most hosts do. If a model or image loads on your computer and gives a 404 once it's live, check that the name in the code matches the real file name exactly, including upper and lower case.

## Still to do

- Replace the temporary hero (`src/sections/Hero-temp.jsx`) with the final one
- Change the page title and the favicon in `index.html`
- Add screenshots of my projects to the Works section

## Credits

- The falling spaceman 3D model (`tenhun_falling_spaceman_fanart.glb`) is fan art by someone else.
- The tech logos belong to their respective owners.

## Contact
yatina.work@gmail.com

- GitHub: [Yatintech-10](https://github.com/Yatintech-10)
- LinkedIn: [add your link]
- Email: [add your email]
