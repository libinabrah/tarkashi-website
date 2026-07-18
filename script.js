/* ===================================================================
   Tarkashi — product data & interactions
   Product data below is generated from the shop's master spreadsheet
   (Category, Name, Price, Image). To update it in future, the easiest
   path is: edit the spreadsheet, then regenerate this PRODUCTS array
   (or edit it directly below — each entry is one product card).

   Fields:
   - id: unique string, keep as-is or increment when adding new rows
   - name: shown as the product title
   - category: raw category text from the spreadsheet (kept for reference)
   - categorySlug: used for filtering AND for the display label shown on
     each card — see CATEGORY_LABELS below. Must be one of:
     'bangle' | 'necklace' | 'set' | 'mens' | 'chain' | 'sarees' |
     'jhumka' | 'earrings' | 'ring'
   - price: a number (shown as "€<price>"), OR a string like "€8/pcs"
     that's already formatted (shown exactly as written)
   - image: "assets/filename.jpeg", or null if no photo has been supplied
     yet (the card will show a "Photo coming soon" placeholder instead)
   =================================================================== */

const WHATSAPP_MAIN = "353894464994";      // main order line — header CTA, floating button, product enquiries
const WHATSAPP_SECONDARY = "353892607599"; // second line — shown in the Contact section only

const CATEGORY_LABELS = {
  bangle: "Bangle",
  necklace: "Necklace",
  set: "Set",
  mens: "Men's Collection",
  chain: "Chain",
  sarees: "Sarees",
  jhumka: "Jhumka",
  earrings: "Earrings",
  ring: "Finger Ring"
};

const PRODUCTS =
  [
    {
      "id": "p1",
      "name": "Silver with stone kids bangles 4pcs set",
      "category": "Bangle",
      "categorySlug": "bangle",
      "price": 8,
      "image": "assets/Silver_with_stone_kids_bangles_4pcs_set.jpeg"
    },
    {
      "id": "p2",
      "name": "Kids Kappuvala  two pcs set",
      "category": "Bangle",
      "categorySlug": "bangle",
      "price": 8,
      "image": "assets/Kids_Kappuvala__two_pcs_set.jpeg"
    },
    {
      "id": "p3",
      "name": "Kids Golden bangles with stones 4 pcs set",
      "category": "Bangle",
      "categorySlug": "bangle",
      "price": 10,
      "image": "assets/Kids_Golden_bangles_with_stones_4_pcs_set.jpeg"
    },
    {
      "id": "p4",
      "name": "Silver and golden ball neck chain",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 4,
      "image": "assets/Silver_and_golden_ball_neck_chain.jpeg"
    },
    {
      "id": "p5",
      "name": "Multicoloured heart stones neck chain",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 5,
      "image": "assets/Multicoloured_heart_stones_neck_chain.jpeg"
    },
    {
      "id": "p6",
      "name": "Semi golden and silver ball neck chain",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 4,
      "image": "assets/Semi_golden_and_silver_ball_neck_chain.jpeg"
    },
    {
      "id": "p7",
      "name": "Floral multiple colour neck chain",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 8,
      "image": "assets/Floral_multiple_colour_neck_chain.jpeg"
    },
    {
      "id": "p8",
      "name": "Limited edition gold necklace",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 10,
      "image": "assets/Limited_edition_gold_necklace.jpeg"
    },
    {
      "id": "p9",
      "name": "Limited edition golden necklace",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 10,
      "image": "assets/Limited_edition_golden_necklace.jpeg"
    },
    {
      "id": "p10",
      "name": "Rain drops stone necklace",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 8,
      "image": "assets/Rain_drops_stone_necklace.jpeg"
    },
    {
      "id": "p11",
      "name": "Floral and eye design necklace",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 10,
      "image": "assets/Floral_and_eye_design_necklace.jpeg"
    },
    {
      "id": "p12",
      "name": "Red white stone necklace",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 15,
      "image": "assets/Red_white_stone_necklace.jpeg"
    },
    {
      "id": "p13",
      "name": "Single palakka pendant neck chain",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 5,
      "image": "assets/Single_palakka_pendant_neck_chain.jpeg"
    },
    {
      "id": "p14",
      "name": "Heart stone neck chain",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 8,
      "image": "assets/Heart_stone_neck_chain.jpeg"
    },
    {
      "id": "p15",
      "name": "Navarangna necklace set",
      "category": "Set",
      "categorySlug": "set",
      "price": 30,
      "image": "assets/Navarangna_necklace_set.jpeg"
    },
    {
      "id": "p16",
      "name": "Diamond set replica set",
      "category": "Set",
      "categorySlug": "set",
      "price": 30,
      "image": "assets/Diamond_set_replica_set.jpeg"
    },
    {
      "id": "p17",
      "name": "Golden necklace with purple stones",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 20,
      "image": "assets/Golden_necklace_with_purple_stones.jpeg"
    },
    {
      "id": "p18",
      "name": "Rooby and white stone necklace",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 20,
      "image": "assets/Rooby_and_white_stone_necklace.jpeg"
    },
    {
      "id": "p19",
      "name": "White stone golden necklace",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 20,
      "image": "assets/White_stone_golden_necklace.jpeg"
    },
    {
      "id": "p20",
      "name": "Rooby necklace set",
      "category": "Set",
      "categorySlug": "set",
      "price": 22,
      "image": "assets/Rooby_necklace_set.jpeg"
    },
    {
      "id": "p21",
      "name": "White raindrops stone necklace",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 22,
      "image": "assets/White_raindrops_stone_necklace.jpeg"
    },
    {
      "id": "p22",
      "name": "Fancy Rooby multicoloured necklace",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 18,
      "image": "assets/Fancy_Rooby_multicoloured_necklace.jpeg"
    },
    {
      "id": "p23",
      "name": "Soft plain Tissue Set Mundu with green lotus design",
      "category": "Men's Collection",
      "categorySlug": "mens",
      "price": 35,
      "image": "assets/Soft_plain_Tissue_Set_Mundu_with_green_lotus_design.jpeg"
    },
    {
      "id": "p24",
      "name": "Soft plain Tissue Set Mundu with black floral design",
      "category": "Men's Collection",
      "categorySlug": "mens",
      "price": 35,
      "image": "assets/Soft_plain_Tissue_Set_Mundu_with_black_floral_design.jpeg"
    },
    {
      "id": "p25",
      "name": "Soft plain Tissue Set Mundu with floral design",
      "category": "Men's Collection",
      "categorySlug": "mens",
      "price": 35,
      "image": "assets/Soft_plain_Tissue_Set_Mundu_with_floral_design.jpeg"
    },
    {
      "id": "p26",
      "name": "Golden zari Self check design with soft Tissue set Mundu",
      "category": "Men's Collection",
      "categorySlug": "mens",
      "price": 40,
      "image": "assets/Golden_zari_Self_check_design_with_soft_Tissue_set_Mundu.jpeg"
    },
    {
      "id": "p27",
      "name": "Golden Zari self check design with black printed bordered on soft Tissue set Mundu",
      "category": "Men's Collection",
      "categorySlug": "mens",
      "price": 40,
      "image": "assets/Golden_Zari_self_check_design_with_black_printed_bordered_on_soft_Tissue_set_Mundu.jpeg"
    },
    {
      "id": "p28",
      "name": "Golden zari Self check and lines combination design with soft Tissue set Mundu",
      "category": "Men's Collection",
      "categorySlug": "mens",
      "price": 40,
      "image": "assets/Golden_zari_Self_check_and_lines_combination_design_with_soft_Tissue_set_Mundu.jpeg"
    },
    {
      "id": "p29",
      "name": "Super soft Tissue with Golden and Gerry Zari self peacock 🦚 designed set Mundu",
      "category": "Men's Collection",
      "categorySlug": "mens",
      "price": 45,
      "image": "assets/Super_soft_Tissue_with_Golden_and_Gerry_Zari_self_peacock___designed_set_Mundu.jpeg"
    },
    {
      "id": "p30",
      "name": "Golden zari lines self designed lotus printed Extra large set Mundu",
      "category": "Men's Collection",
      "categorySlug": "mens",
      "price": 45,
      "image": "assets/Golden_zari_lines_self_designed_lotus_printed_Extra_large_set_Mundu.jpeg"
    },
    {
      "id": "p31",
      "name": "Palakka neck chain",
      "category": "Chain",
      "categorySlug": "chain",
      "price": 18,
      "image": "assets/Palakka_neck_chain.jpeg"
    },
    {
      "id": "p32",
      "name": "Chutty traditional design chain",
      "category": "Chain",
      "categorySlug": "chain",
      "price": 22,
      "image": "assets/Chutty_traditional_design_chain.jpeg"
    },
    {
      "id": "p33",
      "name": "Golden balls with rubby stone long chain",
      "category": "Chain",
      "categorySlug": "chain",
      "price": 22,
      "image": "assets/Golden_balls_with_rubby_stone_long_chain.jpeg"
    },
    {
      "id": "p34",
      "name": "Pebble stone chain",
      "category": "Chain",
      "categorySlug": "chain",
      "price": 18,
      "image": "assets/Pebble_stone_chain.jpeg"
    },
    {
      "id": "p35",
      "name": "Golden rudraksham long chain",
      "category": "Chain",
      "categorySlug": "chain",
      "price": 8,
      "image": "assets/Golden_rudraksham_long_chain.jpeg"
    },
    {
      "id": "p36",
      "name": "Simple Pearl necklace",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 12,
      "image": "assets/Simple_Pearl_necklace.jpeg"
    },
    {
      "id": "p37",
      "name": "Religious antic golden necklace",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 28,
      "image": "assets/Religious_antic_golden_necklace.jpeg"
    },
    {
      "id": "p38",
      "name": "Religious traditional necklace with rubby stone long",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 25,
      "image": "assets/Religious_traditional_necklace_with_rubby_stone_long.jpeg"
    },
    {
      "id": "p39",
      "name": "Religious kashumala with stones",
      "category": "Necklace",
      "categorySlug": "necklace",
      "price": 30,
      "image": "assets/Religious_kashumala_with_stones.jpeg"
    },
    {
      "id": "p40",
      "name": "Antic golden floral necklace set",
      "category": "Set",
      "categorySlug": "set",
      "price": 22,
      "image": "assets/Antic_golden_floral_necklace_set.jpeg"
    },
    {
      "id": "p41",
      "name": "Traditional Nellu mala",
      "category": "Chain",
      "categorySlug": "chain",
      "price": 22,
      "image": "assets/Traditional_Nellu_mala.jpeg"
    },
    {
      "id": "p42",
      "name": "Paisley’s golden design with red & green stones set",
      "category": "Set",
      "categorySlug": "set",
      "price": 30,
      "image": "assets/Paisley_s_golden_design_with_red___green_stones_set.jpeg"
    },
    {
      "id": "p43",
      "name": "Tarkashi golden design with rubby stone set",
      "category": "Set",
      "categorySlug": "set",
      "price": 30,
      "image": "assets/Tarkashi_golden_design_with_rubby_stone_set.jpeg"
    },
    {
      "id": "p44",
      "name": "Mul Cotton Sarees",
      "category": "Sarees",
      "categorySlug": "sarees",
      "price": 25,
      "image": "assets/Mul_Cotton_Sarees.jpeg"
    },
    {
      "id": "p45",
      "name": "Shapewear underskirt XL ( white and off white)",
      "category": "Sarees",
      "categorySlug": "sarees",
      "price": 18,
      "image": "assets/Shapewear_underskirt_XL___white_and_off_white_.jpeg"
    },
    {
      "id": "p46",
      "name": "Cotton normal underskirt A-line",
      "category": "Sarees",
      "categorySlug": "sarees",
      "price": 13,
      "image": "assets/Cotton_normal_underskirt_A-line.jpeg"
    },
    {
      "id": "p47",
      "name": "Cora cotton saree with Zari self designed  coloured",
      "category": "Sarees",
      "categorySlug": "sarees",
      "price": 28,
      "image": "assets/Cora_cotton_saree_with_Zari_self_designed__coloured.jpeg"
    },
    {
      "id": "p48",
      "name": "Cotton set saree with bold bordered",
      "category": "Sarees",
      "categorySlug": "sarees",
      "price": 28,
      "image": "assets/Cotton_set_saree_with_bold_bordered.jpeg"
    },
    {
      "id": "p49",
      "name": "Aqua soft Tissue saree with boarded Lotus print🪷",
      "category": "Sarees",
      "categorySlug": "sarees",
      "price": 35,
      "image": "assets/Aqua_soft_Tissue_saree_with_boarded_Lotus_print___.jpeg"
    },
    {
      "id": "p50",
      "name": "Aqua soft Tissue saree with Chilly Red floral boarded",
      "category": "Sarees",
      "categorySlug": "sarees",
      "price": 35,
      "image": "assets/Aqua_soft_Tissue_saree_with_Chilly_Red_floral_boarded.jpeg"
    },
    {
      "id": "p51",
      "name": "Princess cut floral printed and embroidered with sequins Blouse",
      "category": "Sarees",
      "categorySlug": "sarees",
      "price": 18,
      "image": "assets/Princess_cut_floral_printed_and_embroidered_with_sequins_Blouse.jpeg"
    },
    {
      "id": "p52",
      "name": "Stone ethnic Jhumka for Kids",
      "category": "Jhumka",
      "categorySlug": "jhumka",
      "price": 8,
      "image": "assets/Stone_ethnic_Jhumka_for_Kids.jpeg"
    },
    {
      "id": "p53",
      "name": "Kid’s floral temple Jhumka",
      "category": "Jhumka",
      "categorySlug": "jhumka",
      "price": 8,
      "image": "assets/Kid_s_floral_temple_Jhumka.jpeg"
    },
    {
      "id": "p54",
      "name": "Peacock 🦚 Multicoloured Kundan stone Jhumka",
      "category": "Jhumka",
      "categorySlug": "jhumka",
      "price": 15,
      "image": "assets/Peacock___Multicoloured_Kundan_stone_Jhumka.jpeg"
    },
    {
      "id": "p55",
      "name": "Pink and green Rooby stones in golden Jhumka",
      "category": "Jhumka",
      "categorySlug": "jhumka",
      "price": 12,
      "image": "assets/Pink_and_green_Rooby_stones_in_golden_Jhumka.jpeg"
    },
    {
      "id": "p56",
      "name": "Antique peacock 🦚 temple Jhumka",
      "category": "Jhumka",
      "categorySlug": "jhumka",
      "price": 12,
      "image": "assets/Antique_peacock___temple_Jhumka_.jpeg"
    },
    {
      "id": "p57",
      "name": "Ethnic floral golden Jhumka with red and green stones",
      "category": "Jhumka",
      "categorySlug": "jhumka",
      "price": 15,
      "image": "assets/Ethnic_floral_golden_Jhumka_with_red_and_green_stones.jpeg"
    },
    {
      "id": "p58",
      "name": "Golden Bird nest design Jhumka with stone and pearls",
      "category": "Jhumka",
      "categorySlug": "jhumka",
      "price": 8,
      "image": "assets/Golden_Bird_nest_design_Jhumka_with_stone_and_pearls.jpeg"
    },
    {
      "id": "p59",
      "name": "Golden nest design Jhumka with Kundanstone, ruby and pearls",
      "category": "Jhumka",
      "categorySlug": "jhumka",
      "price": 8,
      "image": "assets/Golden_nest_design_Jhumka_with_Kundanstone__ruby_and_pearls.jpeg"
    },
    {
      "id": "p60",
      "name": "Mehandi antique gold long earrings",
      "category": "Earings",
      "categorySlug": "earrings",
      "price": 8,
      "image": "assets/Mehandi_antique_gold_long_earrings.jpeg"
    },
    {
      "id": "p61",
      "name": "Mehandi and silver umbrella Jhumka",
      "category": "Jhumka",
      "categorySlug": "jhumka",
      "price": 8,
      "image": "assets/Mehandi_and_silver_umbrella_Jhumka.jpeg"
    },
    {
      "id": "p62",
      "name": "Silver antique hooks Jhumka",
      "category": "Jhumka",
      "categorySlug": "jhumka",
      "price": 5,
      "image": "assets/Silver_antique_hooks_Jhumka.jpeg"
    },
    {
      "id": "p63",
      "name": "Long black metal antique Jhumka",
      "category": "Jhumka",
      "categorySlug": "jhumka",
      "price": 8,
      "image": "assets/Long_black_metal_antique_Jhumka.jpeg"
    },
    {
      "id": "p64",
      "name": "Temple Black metal long antique Jhumka",
      "category": "Jhumka",
      "categorySlug": "jhumka",
      "price": 7,
      "image": "assets/Temple_Black_metal_long_antique_Jhumka.jpeg"
    },
    {
      "id": "p65",
      "name": "Mehandi antique gold hooks Jhumka",
      "category": "Jhumka",
      "categorySlug": "jhumka",
      "price": 5,
      "image": "assets/Mehandi_antique_gold_hooks_Jhumka.jpeg"
    },
    {
      "id": "p66",
      "name": "Antique gold and silver ethnic earrings with stones and beads",
      "category": "Earings",
      "categorySlug": "earrings",
      "price": 5,
      "image": "assets/Antique_gold_and_silver_ethnic_earrings_with_stones_and_beads.jpeg"
    },
    {
      "id": "p67",
      "name": "Antique silver ring and stud Jhumka Antique silver ring and stud Jhumka",
      "category": "Jhumka",
      "categorySlug": "jhumka",
      "price": 5,
      "image": "assets/Antique_silver_ring_and_stud_Jhumka.jpeg"
    },
    {
      "id": "p68",
      "name": "Antique gold peacock 🦚 Bangles with stones",
      "category": "Bangle",
      "categorySlug": "bangle",
      "price": "€8/pcs",
      "image": "assets/Antique_gold_peacock___Bangles_with_stones.jpeg"
    },
    {
      "id": "p69",
      "name": "Navarangna Bangle set",
      "category": "Bangle",
      "categorySlug": "bangle",
      "price": 15,
      "image": "assets/Navarangna_Bangle_set.jpeg"
    },
    {
      "id": "p70",
      "name": "Religious traditional design antique gold Bangles with stone",
      "category": "Bangle",
      "categorySlug": "bangle",
      "price": "€10/pcs",
      "image": "assets/Religious_traditional_design_antique_gold_Bangles_with_stone.jpeg"
    },
    {
      "id": "p71",
      "name": "Golden simple elegant Bangles with stone and ruby",
      "category": "Bangle",
      "categorySlug": "bangle",
      "price": "€6/pcs",
      "image": "assets/Golden_simple_elegant_Bangles_with_stone_and_ruby.jpeg"
    },
    {
      "id": "p72",
      "name": "Kashuvala with pink stone bangle set",
      "category": "Bangle",
      "categorySlug": "bangle",
      "price": 10,
      "image": "assets/Kashuvala_with_pink_stone_bangle_set.jpeg"
    },
    {
      "id": "p73",
      "name": "Antique gold Bangles with ruby pink & green stone",
      "category": "Bangle",
      "categorySlug": "bangle",
      "price": "€8/pcs",
      "image": "assets/Antique_gold_Bangles_with_ruby_pink___green_stone.jpeg"
    },
    {
      "id": "p74",
      "name": "Religious traditional antique gold Bangles",
      "category": "Bangle",
      "categorySlug": "bangle",
      "price": "€6/pcs",
      "image": "assets/Religious_traditional_antique_gold_Bangles.jpeg"
    },
    {
      "id": "p75",
      "name": "Simple golden kappuvala with ruby stone",
      "category": "Bangle",
      "categorySlug": "bangle",
      "price": "€10/set",
      "image": "assets/Simple_golden_kappuvala_with_ruby_stone.jpeg"
    },
    {
      "id": "p76",
      "name": "Double colour Ruby stone Bangle",
      "category": "Bangle",
      "categorySlug": "bangle",
      "price": "€5/pcs",
      "image": "assets/Double_colour_Ruby_stone_Bangle.jpeg"
    },
    {
      "id": "p77",
      "name": "Mehandi golden Bangle with double colour kundanstone",
      "category": "Bangle",
      "categorySlug": "bangle",
      "price": "€6/pcs",
      "image": "assets/Mehandi_golden_Bangle_with_double_colour_kundanstone.jpeg"
    },
    {
      "id": "p78",
      "name": "Index / pointer finger Ring",
      "category": "Finger Ring",
      "categorySlug": "ring",
      "price": "€4/pcs",
      "image": "assets/Index_or_pointer_finger_Ring.jpeg"
    },
    {
      "id": "p79",
      "name": "Mehandi golden Bangle with kundanstone",
      "category": "Bangle",
      "categorySlug": "bangle",
      "price": "€6/pcs",
      "image": "assets/Mehandi_golden_Bangle_with_kundanstone.jpeg"
    }
  ]
;

const grid = document.getElementById("product-grid");
const filterBar = document.getElementById("filters");

function categoryLabel(slug){
  return CATEGORY_LABELS[slug] || slug;
}

function formatPrice(price){
  if(price === null || price === undefined || price === "") return "Enquire";
  if(typeof price === "string") return price.startsWith("€") ? price : `€${price}`;
  return `€${price}`;
}

function whatsappLink(product, number = WHATSAPP_MAIN){
  const msg = `Hi! I'm interested in the "${product.name}" (${categoryLabel(product.categorySlug)}). Could you share availability and price?`;
  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}

function renderProducts(list){
  grid.innerHTML = list.map(p => `
    <article class="product-card" data-category="${p.categorySlug}">
      <div class="thumb ${p.image ? "" : "thumb-empty"}" data-id="${p.id}" role="button" tabindex="0" aria-label="View ${p.name}">
        <span class="tag">${categoryLabel(p.categorySlug)}</span>
        ${
          p.image
            ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
            : `<div class="thumb-placeholder"><span>Photo coming soon</span></div>`
        }
      </div>
      <div class="info">
        <h3>${p.name}</h3>
        <div class="row">
          <span class="price">${formatPrice(p.price)}</span>
          <a class="enquire" href="${whatsappLink(p)}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.44 1.33 4.94L2 22l5.24-1.37a9.9 9.9 0 0 0 4.8 1.23h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Z"/></svg>
            Enquire
          </a>
        </div>
      </div>
    </article>
  `).join("");

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
  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.categorySlug === filter);
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
  if(product.image){
    lightboxImg.src = product.image;
    lightboxImg.alt = product.name;
    lightboxImg.style.display = "";
  } else {
    lightboxImg.style.display = "none";
  }
  lightboxCaption.textContent = `${product.name} — ${formatPrice(product.price)}`;
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
    `Hi, I'm ${name} and I'd like to enquire about the Tarkashi collection.`,
    piece ? `Piece(s): ${piece}` : "",
    city ? `Delivery city: ${city}` : "",
    message ? `Note: ${message}` : ""
  ].filter(Boolean).join("\n");

  const url = `https://wa.me/${WHATSAPP_MAIN}?text=${encodeURIComponent(lines)}`;
  window.open(url, "_blank", "noopener");
  formHint.textContent = "Opening WhatsApp with your message pre-filled — just hit send there.";
});
