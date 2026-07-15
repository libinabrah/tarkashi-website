# Tarkashi — Onam Festival Jewellery Collection Website

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
array near the top — each entry is one card in the Collection grid.

To change the WhatsApp numbers, update `WHATSAPP_NUMBER` in `script.js`
(used for the floating button, header button and product enquiries) and the
two `href="https://wa.me/..."` links in `index.html` (header + footer +
contact section).

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

- **Product names, categories and prices** in `script.js` are placeholders
  based on what's visible in each photo — please review and correct them
  (especially prices, which are all currently set to "Enquire").
- **WhatsApp numbers**: the site links to `+91 89260 75990` and
  `+91 89446 49940` (India country code assumed from the poster's local
  10-digit numbers) — confirm these are correct before going live.
- **Fonts** (Cormorant Garamond + Poppins) load from Google Fonts over the
  internet — an internet connection is needed to see them styled correctly;
  otherwise the browser falls back to a default serif/sans-serif.
- The contact form does not send email on its own — submitting it opens
  WhatsApp with a pre-filled message instead, so no backend is required.
