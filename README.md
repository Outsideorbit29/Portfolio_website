# Anish Kumar Gupta — Portfolio

My personal portfolio, live at **[www.anishkumar.online](https://www.anishkumar.online)**.

It's designed like a desk: grid paper with polaroids of my projects, sticky notes, a terminal and a coffee mug that you can drag around. Photos flip over to show what each project does, a pencil line follows your mouse, and pages turn like a notebook. Cards tilt up in 3D as you scroll, and there are small paper-and-click sounds (with a mute button).

## Built with

- [Next.js 16](https://nextjs.org) (App Router) and React 19, written in TypeScript
- Tailwind CSS 4
- Framer Motion for dragging and the mouse tilt
- CSS scroll-driven animations for the 3D scroll effects
- Web Audio API for the sounds, generated in the browser (no audio files)
- [EmailJS](https://www.emailjs.com) for the contact form
- Hosted on [Vercel](https://vercel.com)

## Run it locally

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Other commands:

```bash
npm run lint      # check code style
npx tsc --noEmit  # check types
npm run build     # production build
npm start         # serve the production build
```

## Where things live

```
src/
├── app/                 # one folder per page (about, projects, skills, experience, contact, resume)
│   ├── layout.tsx       # fonts, menu, footer, site-wide metadata
│   ├── globals.css      # colours, paper textures, scroll animations
│   └── template.tsx     # the page-turn animation between pages
├── components/          # DeskHero, ProjectCard, Ribbon, Navbar, Footer, ...
├── data/content.ts      # all site content: projects, experience, skills, links
└── lib/                 # sound effects and page metadata helpers
public/
├── resume.pdf           # my resume (replace this one file to update it)
└── projects/            # project screenshots
```

To change what the site says, edit `src/data/content.ts`. Every page reads from it.

## Accessibility

- Works with a keyboard and screen readers.
- Visitors who ask their device for reduced motion get the site without animations.
- Sounds only play after a click and can be muted; the choice is remembered.

## Contact

- Email: [anish.grd2004@gmail.com](mailto:anish.grd2004@gmail.com)
- [GitHub](https://github.com/Outsideorbit29) · [LinkedIn](https://www.linkedin.com/in/anish-kumar-gupta-6a9b50251)

## License

[MIT](LICENSE)
