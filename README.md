# Mohamed Elmogy - AI Portfolio

Next.js portfolio focused on LLMs, Arabic NLP, and AI agents.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Checks

```sh
npm run lint
npm run build
```

## Updated files

- app/page.tsx: responsive portfolio, accurate project and experience descriptions, contact links, accessible assistant dialog, guarded requests and error handling.
- app/globals.css: responsive dark/light design with reduced-motion support.
- app/layout.tsx: page title, description, canonical URL, social sharing metadata. Uses system fonts without a build-time font download.
- public/resume.pdf: updated one-page CV with clickable links.

The existing assistant endpoint is retained at https://career-conservation.onrender.com/chat. Its backend and knowledge base are not part of this repository. Update that service separately if its answers contain outdated profile information. It is called only when a visitor sends a message.

Project cards do not invent repository URLs: the GitHub profile is linked below them. Add direct repository/demo links once available.

This copy is ready for review; the live Vercel site has not been deployed or changed.
