# design-portfolio

Personal design portfolio site for Rishabh Lodha.

The page opens with a hero that shows the name, the Product Designer role, and a short status line. A menu links to projects, about, and contact.

## Sections

- **Intro** — a short introduction, resume and LinkedIn links, and a “Previously Designed At” row.
- **Projects** — a gallery of project images. Each image links out to the write-up.
- **Current work** — a note on work in progress, including a freelance UI/UX project.
- **More work** — links to UI designs, graphic design, Photoshop work, and motion design.
- **Campus activities** — university design roles.
- **Contact** — social links, an email address, and a resume link.

## Run it

Clone the repo, install dependencies, and start the dev server:

```bash
git clone https://github.com/LifeAyush/design-portfolio.git
cd design-portfolio
npm install
npm start
```

Scripts in `package.json`:

| Script | What it does |
| --- | --- |
| `npm start` | Start the development server |
| `npm run build` | Build the production bundle |
| `npm test` | Run the test runner |
| `npm run deploy` | Build, then publish the `build` folder with `gh-pages` |

`predeploy` runs `npm run build` before `deploy`.
