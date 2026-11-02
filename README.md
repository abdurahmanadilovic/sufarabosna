# Sufara i tedžvid osnove

Static website (HTML + CSS + a little JavaScript, Bootstrap 5 from a CDN) deployed with GitHub Pages at https://sufarabosna.ba.

## Structure

```
index.html, zbirna-tabela.html, ...   One HTML file per page (kept in the root so URLs never change)
CNAME                                 Custom domain for GitHub Pages
public/
  css/        Site styles, loaded in this order (the order matters):
              base, header, components, footer, responsive, hero, dua, intro
  js/         main.js (collapsibles, language switch, tooltips)
              include.js (loads header/footer partials, marks the active menu link)
  fonts/      KuranKerimFontAbay.ttf (Arabic font)
  images/     Images grouped by page/topic (tables, tajweed, dove, zabiljeske, ...)
  docs/       PDF documents
  partials/   header.html and footer.html, shared by every page
archive/      Files no page uses any more (kept in case they are needed again)
```


## Running locally

The header/footer are loaded with `fetch`, so open the site through a local server rather than by double-clicking the file:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.
