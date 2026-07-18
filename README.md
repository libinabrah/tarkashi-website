# Tarkashi — Onam Collection Website (Jewellery, Mundu &amp; Sarees)

A static, no-build website: plain HTML, CSS and JavaScript. No npm, no framework,
no compilation step — you can open `index.html` directly, or serve it with a
simple local server for the best experience (recommended, so relative image
paths and fonts always behave the same as they will on your live host).

## Files

```
tarkashi-website/
├── index.html      Page structure & content
├── styles.css       All styling (colours, type, layout, animation)
├── script.js         Product data, filtering, lightbox, WhatsApp links
├── assets/            Product photos + poster (from your Browse collection)
└── README.md          This file
```

To add, remove, or edit a product, open `script.js` and edit the `PRODUCTS`
array near the top — each entry is one card in the Collection grid. This
array was generated from your spreadsheet (`Excel_to_update_the_Jewellery_data.xlsx`),
so the spreadsheet and the site can drift apart if you only edit one of them
— treat `script.js` as the live version going forward, or let us know if
you'd like a script that regenerates it from a fresh spreadsheet each time.

To change the WhatsApp numbers, update `WHATSAPP_MAIN` and
`WHATSAPP_SECONDARY` in `script.js`, and the matching
`href="https://wa.me/..."` links in `index.html` (header button, footer,
contact section, and the floating button near the end of the file).

## What changed in this update

- **12 more photos matched**, bringing the total to **76 of 78 items with a
  photo** — including the three long-standing empty files, which finally
  came through with real content this time (Floral and eye design necklace,
  Golden necklace with purple stones, Golden rudraksham long chain), plus
  the "Golden Zari self check design with black printed bordered on soft
  Tissue set Mundu" photo.
- Only **2 items** remain without a photo — see below.

### Items still needing a photo (2)

- **Silver antique hooks Jhumka** — no photo received for this one (there's
  a similarly-named "Mehandi antique gold hooks Jhumka" already matched to
  its own photo, so this is a distinct, still-missing item).
- **Index / pointer finger Ring** — no ring photos have been sent yet at
  all, so this whole category is still photo-less.

### One extra photo without a matching product

`Mehandi_golden_Bangle_with_kundanstone.jpeg` is still sitting unused — the
spreadsheet only has a row for "...with **double colour** kundanstone",
which already has its own photo. If this second bangle should be its own
listing, add a row for it in the spreadsheet with that exact name.

---

## Option A — Open in VS Code

1. **Install VS Code**: https://code.visualstudio.com (if you don't have it).
2. **Open the project folder**:
   - Launch VS Code → `File > Open Folder…` → select the `tarkashi-website`
     folder you downloaded.
   - Or from a terminal: `cd path/to/tarkashi-website && code .`
3. **Preview it live** (recommended):
   - Install the **Live Server** extension (by Ritwick Dey) from the
     Extensions panel (`Ctrl/Cmd+Shift+X`, search "Live Server").
   - Right-click `index.html` in the file explorer → **Open with Live Server**.
   - Your browser opens automatically at something like
     `http://127.0.0.1:5500/index.html`, and it reloads whenever you save a
     file.
4. Without Live Server, you can still just double-click `index.html` to open
   it in your browser — everything will still work, since there's no build
   step, but a local server is a closer match to how it will behave once
   hosted online.

## Option B — Open in IntelliJ IDEA (or WebStorm)

1. **Open the project**: `File > Open…` → select the `tarkashi-website`
   folder.
2. IntelliJ will index it as a plain project — no configuration is required
   since there's no build tool involved.
3. **Preview it live**:
   - Open `index.html` in the editor.
   - Click the browser icons in the top-right gutter of the editor (Chrome/
     Firefox/etc.), or right-click the file → **Open in Browser**.
   - IntelliJ Ultimate and WebStorm include a built-in live-reload server for
     static HTML automatically; IntelliJ Community will simply open the file
     in your chosen browser (still fully functional, just without
     auto-reload on save).

---

## Publishing it for real

Because this is a static site (no server-side code), you can host it for
free on any static host:

- **Netlify / Vercel**: drag-and-drop the `tarkashi-website` folder onto
  their dashboard, or connect a GitHub repo.
- **GitHub Pages**: push the folder to a GitHub repo and enable Pages in
  the repo settings.

## Notes & things to double-check before launch

- **2 of 78 products still need photos** — see the list above (Silver
  antique hooks Jhumka, and the Index / pointer finger Ring).
- One extra photo (`Mehandi_golden_Bangle_with_kundanstone.jpeg`) has no
  matching spreadsheet row — see above.
- **WhatsApp numbers**: confirm `+353 89 446 4994` (main) and
  `+353 89 260 7599` (secondary) are correct and both are on WhatsApp.
- **Fonts** (Cormorant Garamond + Poppins) load from Google Fonts over the
  internet — an internet connection is needed to see them styled correctly;
  otherwise the browser falls back to a default serif/sans-serif.
- The contact form does not send email on its own — submitting it opens
  WhatsApp with a pre-filled message instead, so no backend is required.
