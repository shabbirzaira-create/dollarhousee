const PRODUCTS = [
  // Jewelry
  {name:"Kundan Earrings Set", unit:"artificial jewelry", cat:"jewelry", em:"💎", badge:"NEW"},
  {name:"Pearl Choker Necklace", unit:"artificial jewelry", cat:"jewelry", em:"📿"},
  {name:"Gold-Plated Bangles (Set of 4)", unit:"artificial jewelry", cat:"jewelry", em:"⭕"},
  {name:"Stone Studded Ring", unit:"artificial jewelry", cat:"jewelry", em:"💍"},
  {name:"Jhumka Earrings", unit:"artificial jewelry", cat:"jewelry", em:"🔔"},
  {name:"Anklet Pair (Payal)", unit:"artificial jewelry", cat:"jewelry", em:"✨"},
  {name:"Maang Tikka", unit:"artificial jewelry", cat:"jewelry", em:"👑"},
  {name:"Beaded Bracelet Set", unit:"artificial jewelry", cat:"jewelry", em:"📿"},

  // Decor
  {name:"Ceramic Flower Vase", unit:"home decor", cat:"decor", em:"🏺", badge:"NEW"},
  {name:"Wall Hanging Clock", unit:"home decor", cat:"decor", em:"🕐"},
  {name:"Fairy Light String (3m)", unit:"home decor", cat:"decor", em:"✨"},
  {name:"Wooden Photo Frame", unit:"home decor", cat:"decor", em:"🖼️"},
  {name:"Scented Candle Set", unit:"home decor", cat:"decor", em:"🕯️"},
  {name:"Artificial Flower Bouquet", unit:"home decor", cat:"decor", em:"💐"},
  {name:"Wind Chime", unit:"home decor", cat:"decor", em:"🎐"},
  {name:"Table Showpiece Figurine", unit:"home decor", cat:"decor", em:"🗿"},

  // Kitchen
  {name:"Non-Stick Frying Pan (Small)", unit:"kitchen item", cat:"kitchen", em:"🍳", badge:"NEW"},
  {name:"Spice Rack Organizer", unit:"kitchen item", cat:"kitchen", em:"🧂"},
  {name:"Ceramic Mug Set (2 pcs)", unit:"kitchen item", cat:"kitchen", em:"☕"},
  {name:"Wooden Chopping Board", unit:"kitchen item", cat:"kitchen", em:"🪵"},
  {name:"Steel Lunch Box", unit:"kitchen item", cat:"kitchen", em:"🍱"},
  {name:"Airtight Storage Jar Set", unit:"kitchen item", cat:"kitchen", em:"🫙"},
  {name:"Kitchen Towel Set (4 pcs)", unit:"kitchen item", cat:"kitchen", em:"🧺"},
  {name:"Stainless Steel Strainer", unit:"kitchen item", cat:"kitchen", em:"🍜"},

  // Bags
  {name:"Embroidered Clutch Bag", unit:"bag & pouch", cat:"bags", em:"👜", badge:"NEW"},
  {name:"Canvas Tote Bag", unit:"bag & pouch", cat:"bags", em:"👝"},
  {name:"Jewelry Storage Pouch", unit:"bag & pouch", cat:"bags", em:"👛"},
  {name:"Travel Makeup Pouch", unit:"bag & pouch", cat:"bags", em:"💄"},

  // Gifts
  {name:"Personalized Keychain Set", unit:"gift item", cat:"gifts", em:"🔑"},
  {name:"Greeting Card & Gift Box", unit:"gift item", cat:"gifts", em:"🎁"},
  {name:"Mini Succulent Planter", unit:"gift item", cat:"gifts", em:"🪴"},
  {name:"Decorative Gift Basket", unit:"gift item", cat:"gifts", em:"🧺"},

  // Toys & Misc
  {name:"Soft Plush Toy", unit:"toy", cat:"toys", em:"🧸"},
  {name:"Puzzle Game Set", unit:"toy", cat:"toys", em:"🧩"},
  {name:"Desk Organizer Caddy", unit:"misc item", cat:"toys", em:"🗂️"},
  {name:"Bath Bomb Gift Set", unit:"misc item", cat:"toys", em:"🛁"},

  // Watches
  {name:"Analog Watch", unit:"watch", cat:"watches", em:"⌚", badge:"NEW"},
  {name:"Digital Sport Watch", unit:"watch", cat:"watches", em:"⌚"},
  {name:"Fashion Strap Watch", unit:"watch", cat:"watches", em:"⌚"},
  {name:"Chronograph Watch", unit:"watch", cat:"watches", em:"⌚"},

  // Sleepers
  {name:"Soft Slippers (Sleepers)", unit:"sleeper", cat:"sleepers", em:"🩴", badge:"NEW"},
  {name:"Flip Flops", unit:"sleeper", cat:"sleepers", em:"🩴"},
  {name:"Cotton House Slippers", unit:"sleeper", cat:"sleepers", em:"🥿"},

  // Stationery
  {name:"Notebook Set", unit:"stationery", cat:"stationery", em:"📓", badge:"NEW"},
  {name:"Ball Pen Set", unit:"stationery", cat:"stationery", em:"🖊️"},
  {name:"Sticky Notes Pack", unit:"stationery", cat:"stationery", em:"📝"},
  {name:"Pencil Case", unit:"stationery", cat:"stationery", em:"👝"},

  // Glassware
  {name:"Glass Tumbler Set (6 pcs)", unit:"glassware", cat:"glass", em:"🥛", badge:"NEW"},
  {name:"Glass Coffee Mug Set (4 pcs)", unit:"glassware", cat:"glass", em:"☕"},
  {name:"Juice Glass Set (6 pcs)", unit:"glassware", cat:"glass", em:"🍹"},
  {name:"Borosil Glass Tea Cup Set", unit:"glassware", cat:"glass", em:"🍵"},
  {name:"Glass Tumbler", unit:"glassware", cat:"glass", em:"🥃"},
  {name:"Hot & Cold Glass Mug", unit:"glassware", cat:"glass", em:"🥛"},

  // Parlour & Beauty
  {name:"Glitter Hair Clips (Set of 12)", unit:"hair accessory", cat:"parlour", em:"🎀", badge:"NEW"},
  {name:"Scrunchies (Pack of 10)", unit:"hair accessory", cat:"parlour", em:"🎀"},
  {name:"Makeup Brush Set (8 pcs)", unit:"beauty item", cat:"parlour", em:"💄"},
  {name:"Nail Polish Set (6 colors)", unit:"beauty item", cat:"parlour", em:"💅"},
  {name:"Travel Vanity Mirror", unit:"beauty item", cat:"parlour", em:"🪞"},
  {name:"Lipstick Set (3 shades)", unit:"beauty item", cat:"parlour", em:"💄"},
  {name:"Hair Rollers Set", unit:"hair accessory", cat:"parlour", em:"💫"},
  {name:"Designer Hair Bands (Set of 5)", unit:"hair accessory", cat:"parlour", em:"🎀"},
  {name:"Face Mask Beauty Kit", unit:"beauty item", cat:"parlour", em:"🧖‍♀️"},

  // More Things
  {name:"Phone Stand Holder", unit:"accessory", cat:"more", em:"📱", badge:"NEW"},
  {name:"USB LED Strip Light", unit:"accessory", cat:"more", em:"💡"},
  {name:"Earphone Pouch", unit:"accessory", cat:"more", em:"🎧"},
  {name:"Reusable Shopping Bags (Set)", unit:"home essential", cat:"more", em:"🛍️"},
  {name:"Cushion Pillow Cover", unit:"home decor", cat:"more", em:"🛋️"},
  {name:"Wall Stickers Pack", unit:"home decor", cat:"more", em:"🌸"},
  {name:"Hanging Key Rack", unit:"home essential", cat:"more", em:"🔑"},
  {name:"Travel Water Bottle", unit:"accessory", cat:"more", em:"🍶"},
  {name:"Reusable Straw Set", unit:"kitchen item", cat:"more", em:"🥤"},
  {name:"Pocket Flashlight", unit:"accessory", cat:"more", em:"🔦"},
  {name:"Foldable Umbrella", unit:"accessory", cat:"more", em:"☔"},
  {name:"Mini Sewing Kit", unit:"home essential", cat:"more", em:"🪡"},
];

module.exports = PRODUCTS;