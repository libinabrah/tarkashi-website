/* ===================================================================
   Tarkashi — product data & interactions
   Edit the PRODUCTS array below to add, remove or update pieces.
   Each product needs: id, name, category ('necklace' | 'bangle' | 'set'),
   image path, short description, and price (use "Enquire" if unlisted).
   =================================================================== */

const WHATSAPP_NUMBER = "353894464994"; // country code + number, no + or spaces

const PRODUCTS = [
  {
    id: "p1",
    name: "Antique Heart Motif Choker Set",
    category: "set",
    image: "assets/Browse_collection_1.jpeg",
    desc: "Temple-style choker with drop earrings, antique gold finish.",
    price: "Enquire"
  },
  {
    id: "p2",
    name: "CZ Silver Stackable Bangles (Set of 5)",
    category: "bangle",
    image: "assets/Browse_collection_2.jpeg",
    desc: "Slim rhodium bangles lined with cubic zirconia, sold as a set.",
    price: "Enquire"
  },
  {
    id: "p3",
    name: "Ruby &amp; CZ Gold Bangle Duo",
    category: "bangle",
    image: "assets/Browse_collection_3.jpeg",
    desc: "Two bangle sets — deep ruby red and classic white stone — in gold tone.",
    price: "Enquire"
  },
  {
    id: "p4",
    name: "Tri-Tone Textured Bangles",
    category: "bangle",
    image: "assets/Browse_collection_4.jpeg",
    desc: "Filigree-textured bangles in gold, rose gold and silver finishes.",
    price: "Enquire"
  },
  {
    id: "p5",
    name: "Turquoise Heart Drop Necklace",
    category: "necklace",
    image: "assets/Browse_collection_5.jpeg",
    desc: "Fine gold chain with turquoise enamel heart charms.",
    price: "Enquire"
  },
  {
    id: "p6",
    name: "Two-Tone Bead Necklace",
    category: "necklace",
    image: "assets/Browse_collection_6.jpeg",
    desc: "Textured gold and rhodium beads on a delicate snake chain.",
    price: "Enquire"
  },
  {
    id: "p7",
    name: "Rainbow Gemstone Chain Necklace",
    category: "necklace",
    image: "assets/Browse_collection_7.jpeg",
    desc: "Multicolour bezel-set stones linked along a fine gold chain.",
    price: "Enquire"
  },
  {
    id: "p8",
    name: "Ruby Drop Bead Necklace",
    category: "necklace",
    image: "assets/Browse_collection_8.jpeg",
    desc: "Beaded gold chain finished with five red glass drops.",
    price: "Enquire"
  },
  {
    id: "p9",
    name: "Floral Daisy Charm Necklace",
    category: "necklace",
    image: "assets/Browse_collection_9.jpeg",
    desc: "Enamel daisy charms in coral, teal and mustard along a gold chain.",
    price: "Enquire"
  },
  {
    id: "p10",
    name: "Two-Tone Bead Necklace — Petite",
    category: "necklace",
    image: "assets/Browse_collection_10.jpeg",
    desc: "A slimmer take on our gold and silver beaded chain.",
    price: "Enquire"
  },
  {
    id: "p11",
    name: "Onyx Drop Bead Necklace",
    category: "necklace",
    image: "assets/Browse_collection_11.jpeg",
    desc: "Gold ball chain with five black onyx-tone drops.",
    price: "Enquire"
  },
  {
    id: "p12",
    name: "Ruby Lariat Necklace",
    category: "necklace",
    image: "assets/Browse_collection_12.jpeg",
    desc: "Y-shaped necklace in red baguette stones and CZ, gold tone.",
    price: "Enquire"
  },
  {
    id: "p13",
    name: "Evil Eye &amp; Daisy Charm Necklace",
    category: "necklace",
    image: "assets/Browse_collection_13.jpeg",
    desc: "Protective evil-eye charms alternated with enamel daisies.",
    price: "Enquire"
  },
  {
    id: "p14",
    name: "Crescent Heart Pendant Necklace",
    category: "necklace",
    image: "assets/Browse_collection_14.jpeg",
    desc: "Delicate box-chain necklace with a jewelled crescent pendant.",
    price: "Enquire"
  },
  {
    id: "p15",
    name: "Aqua Teardrop Necklace",
    category: "necklace",
    image: "assets/Browse_collection_15.jpeg",
    desc: "Gold chain trimmed with aqua-blue crystal teardrops.",
    price: "Enquire"
  }
];

const grid = document.getElementById("product-grid");
const filterBar = document.getElementById("filters");

function whatsappLink(product){
  const msg = `Hi! I'm interested in the "${product.name.replace(/&amp;/g,"&")}" from the Tarkashi Onam collection. Could you share availability and price?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function categoryLabel(cat){
  return { necklace: "Necklace", bangle: "Bangles", set: "Set" }[cat] || cat;
}

function renderProducts(list){
  grid.innerHTML = list.map(p => `
    <article class="product-card" data-category="${p.category}">
      <div class="thumb" data-id="${p.id}" role="button" tabindex="0" aria-label="View ${p.name}">
        <span class="tag">${categoryLabel(p.category)}</span>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="info">
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <div class="row">
          <span class="price">${p.price}</span>
          <a class="enquire" href="${whatsappLink(p)}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.44 1.33 4.94L2 22l5.24-1.37a9.9 9.9 0 0 0 4.8 1.23h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Z"/></svg>
            Enquire
          </a>
        </div>
      </div>
    </article>
  `).join("");

  // Wire up lightbox triggers
  grid.querySelectorAll(".thumb").forEach(thumb => {
    thumb.addEventListener("click", () => openLightbox(thumb.dataset.id));
    thumb.addEventListener("keydown", (e) => {
      if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        openLightbox(thumb.dataset.id);
      }
    });
  });
}

renderProducts(PRODUCTS);

/* ---------- Filters ---------- */
filterBar.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if(!btn) return;
  filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("is-active"));
  btn.classList.add("is-active");
  const filter = btn.dataset.filter;
  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  renderProducts(filtered);
});

/* ---------- Lightbox ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxWhatsapp = document.getElementById("lightbox-whatsapp");
const lightboxClose = document.getElementById("lightbox-close");

function openLightbox(id){
  const product = PRODUCTS.find(p => p.id === id);
  if(!product) return;
  lightboxImg.src = product.image;
  lightboxImg.alt = product.name;
  lightboxCaption.textContent = product.name.replace(/&amp;/g, "&");
  lightboxWhatsapp.href = whatsappLink(product);
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightboxClose.focus();
}

function closeLightbox(){
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if(e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeLightbox();
});

/* ---------- Mobile nav ---------- */
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");
navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ---------- Contact form -> WhatsApp ---------- */
const contactForm = document.getElementById("contact-form");
const formHint = document.getElementById("form-hint");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get("name") || "";
  const city = data.get("city") || "";
  const piece = data.get("piece") || "";
  const message = data.get("message") || "";

  const lines = [
    `Hi, I'm ${name} and I'd like to enquire about the Tarkashi Onam collection.`,
    piece ? `Piece(s): ${piece}` : "",
    city ? `Delivery city: ${city}` : "",
    message ? `Note: ${message}` : ""
  ].filter(Boolean).join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
  window.open(url, "_blank", "noopener");
  formHint.textContent = "Opening WhatsApp with your message pre-filled — just hit send there.";
});
