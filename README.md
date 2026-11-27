# Jouzour Wood

Static website for Jouzour Wood (handmade wood lamps and boards), in English and Arabic.
No build step. Plain HTML, CSS and JavaScript:

- `index.html` (the page)
- `css/style.css` (all styling)
- `js/lang-init.js` (sets the starting language; change `DEFAULT_LANG` to `"en"` for English first)
- `js/main.js` (all the text in both languages, WhatsApp messages, photo viewer, copy-number button)
- `img/` (photos: each has a `.jpg` and a smaller `.webp`)
- `favicon.svg` (browser tab icon)

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

## Things to know when editing

- **Text:** all visible text lives in `js/main.js`, in the `en` and `ar` blocks. Change it there.
- **Hero photo:** replace `img/hero.jpg` with a new photo (keep the same file name). It is also the picture shown when the link is shared.
- **New photos:** add a `.jpg` and a `.webp` version. The `.webp` is smaller and loads faster.
- **Domain:** `index.html` has an `og:image` address that starts with `https://jouzour-wood.raghebalamahstore.workers.dev`. If the site moves to a different address (for example a custom domain), change it, or shared links will not show a picture.
- **Live site:** https://jouzour-wood.raghebalamahstore.workers.dev (Cloudflare Worker with static assets, redeploys on every push to `main`).
