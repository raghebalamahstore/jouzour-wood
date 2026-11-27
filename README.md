# Jouzour Wood

Static website for Jouzour Wood (handmade wood lamps and boards), in English and Arabic.
No build step. Plain HTML, CSS and JavaScript:

- `index.html` (the page)
- `css/style.css` (all styling)
- `js/main.js` (English/Arabic switch and the copy-number button)
- `img/` (photos)

## Host on Cloudflare Pages

1. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git.
2. Pick this repo and the `main` branch.
3. Framework preset: None. Build command: leave empty. Build output directory: `/`.
4. Save and deploy. The site appears at `https://<project-name>.pages.dev`.

## Host as a Cloudflare Worker with static assets

1. Cloudflare dashboard > Workers & Pages > Create > Import a repository.
2. Pick this repo. Leave the build command empty. Deploy command: `npx wrangler deploy`.
3. `wrangler.jsonc` and `.assetsignore` already tell Cloudflare what to serve.

## Updating the site

Edit the files, commit, and push to `main`. Cloudflare redeploys automatically.

## Run it locally

Open `index.html` in a browser, or run `npx serve .` in this folder.
