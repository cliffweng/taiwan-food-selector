export const foodCategories = [
  { id: 'all', name: '全部美食', english: 'All Foods', icon: '🍽️' },
  { id: 'mains', name: '飽胃主食', english: 'Classic Mains', icon: '🍜' },
  { id: 'snacks', name: '夜市小吃', english: 'Street Snacks', icon: '🍢' },
  { id: 'soups', name: '暖胃湯鍋', english: 'Soups & Stews', icon: '🍲' },
  { id: 'desserts', name: '療癒甜品', english: 'Desserts & Sweets', icon: '🍧' },
  { id: 'drinks', name: '解渴飲品', english: 'Drinks & Beverages', icon: '🥤' }
];

export const foodData = [
  // Classic Mains (飽胃主食)
  {
    id: 'beef-noodles',
    name: '牛肉麵',
    english: 'Beef Noodle Soup',
    pinyin: 'Niú ròu miàn',
    description: 'Taiwan\'s unofficial national dish. Tender slow-braised beef, rich aromatic herbal broth, and chewy wheat noodles, garnished with pickled mustard greens.',
    category: 'mains',
    imageUrl: '/images/food/beef-noodles.jpg',
    copiedMessage: 'Copied 牛肉麵! Time for some rich, savory broth.'
  }, {
    id: 'xiao-long-bao',
    name: '小籠包',
    english: 'Xiao Long Bao (Soup Dumplings)',
    pinyin: 'Xiǎo lóng bāo',
    description: 'World-famous delicate dumplings filled with juicy pork broth and minced meat, wrapped in paper-thin dough skin, steamed in bamboo baskets.',
    category: 'mains',
    imageUrl: '/images/food/xiao-long-bao.jpg',
    copiedMessage: 'Copied 小籠包! Careful, the hot soup inside will burst out!'
  }, {
    id: 'yakiniku',
    name: '燒肉 (Yakiniku)',
    english: 'Yakiniku (Japanese BBQ)',
    pinyin: 'Shāo ròu',
    description: 'Japanese-style grilled meats cooked over charcoal, highly popular in Taiwanese food culture as a late-night feast with cold draft beer.',
    category: 'mains',
    imageUrl: '/images/food/yakiniku.jpg',
    copiedMessage: 'Copied 燒肉! Sizzling grilled meats over hot coals!'
  }, {
    id: 'braised-pork-rice',
    name: '滷肉飯',
    english: 'Braised Pork Rice (Lu Rou Fan)',
    pinyin: 'Lǔ ròu fàn',
    description: 'Comfort food at its finest. Finely chopped pork belly slow-cooked in soy sauce and Chinese five-spice, ladled over steaming hot jasmine rice.',
    category: 'mains',
    imageUrl: '/images/food/braised-pork-rice.jpg',
    copiedMessage: 'Copied 滷肉飯! Sticky, savory pork belly goodness!'
  }, {
    id: 'oyster-omelette',
    name: '蚵仔煎',
    english: 'Oyster Omelette',
    pinyin: 'É zǐ jiān',
    description: 'A night market signature. Plump oysters, fresh vegetables, and eggs fried in a sweet potato starch batter, producing a chewy, crispy texture topped with sweet-savory red sauce.',
    category: 'mains',
    imageUrl: '/images/food/oyster-omelette.jpg',
    copiedMessage: 'Copied 蚵仔煎! Chewiness and fresh oysters in every bite!'
  }, {
    id: 'ba-wan',
    name: '肉圓',
    english: 'Taiwanese Meatball (Ba-Wan)',
    pinyin: 'Ròu yuán',
    description: 'A translucent, chewy skin made of sweet potato starch, filled with seasoned pork, bamboo shoots, and mushrooms, served steamed or fried with sweet red sauce.',
    category: 'mains',
    imageUrl: '/images/food/ba-wan.jpg',
    copiedMessage: 'Copied 肉圓! Dig into that translucent, chewy pocket of pork.'
  }, {
    id: 'wa-kuei',
    name: '碗粿',
    english: 'Savory Rice Pudding (Wa-kuei)',
    pinyin: 'Wǎn guǒ',
    description: 'Also known as bowl rice cake. Steamed savory rice pudding containing salted egg yolk, pork, mushrooms, and dried shrimp, served with sweet soy paste. (Corrected spelling from 碗軻)',
    category: 'mains',
    imageUrl: '/images/food/wa-kuei.jpg',
    copiedMessage: 'Copied 碗粿! A traditional, comforting Southern Taiwanese classic.'
  }, {
    id: 'oyster-vermicelli',
    name: '蚵仔麵線',
    english: 'Oyster Vermicelli',
    pinyin: 'É zǐ miàn xiàn',
    description: 'Thick, gloopy soup containing thin wheat red vermicelli noodles, cooked with oysters and braised pig large intestines, flavored with black vinegar, garlic, and cilantro.',
    category: 'mains',
    imageUrl: '/images/food/oyster-vermicelli.jpg',
    copiedMessage: 'Copied 蚵仔麵線! Warm, vinegar-spiced noodles.'
  }, {
    id: 'wonton',
    name: '餛飩',
    english: 'Wonton',
    pinyin: 'Hún dùn',
    description: 'Delicate, thin-skinned dumplings stuffed with seasoned minced pork, served in a light seaweed and celery broth, or tossed in spicy chili oil.',
    category: 'mains',
    imageUrl: '/images/food/wonton.jpg',
    copiedMessage: 'Copied 餛飩! Delicate dumplings floating in savory broth.'
  }, {
    id: 'teppanyaki-steak',
    name: '鐵板牛排',
    english: 'Teppanyaki Steak',
    pinyin: 'Tiě bǎn niú pái',
    description: 'A sizzling night market sensation. Steak served on a hot iron plate with noodles, a fried egg, and smothered in black pepper or mushroom sauce.',
    category: 'mains',
    imageUrl: '/images/food/teppanyaki-steak.jpg',
    copiedMessage: 'Copied 鐵板牛排! Sizzle sizzle... watch out for the hot plate splatter!'
  }, {
    id: 'savory-soy-milk',
    name: '鹹豆漿',
    english: 'Savory Soy Milk',
    pinyin: 'Xián dòu jiāng',
    description: 'A traditional breakfast favorite. Hot soy milk curdled slightly with vinegar, topped with green onions, preserved radish (caipo), dried shrimp, and crispy Youtiao (dough fritters).',
    category: 'mains',
    imageUrl: '/images/food/savory-soy-milk.jpg',
    copiedMessage: 'Copied 鹹豆漿! The unique savory, soup-like breakfast.'
  }, {
    id: 'qiezai-noodles',
    name: '切仔麵',
    english: 'Qiezai Noodles',
    pinyin: 'Qiè zǐ miàn',
    description: 'Classic Northern Taiwanese noodles. Yellow wheat noodles cooked in a strainer basket, served in a clear pork bone broth, topped with sliced pork and fried shallots.',
    category: 'mains',
    imageUrl: '/images/food/qiezai-noodles.jpg',
    copiedMessage: 'Copied 切仔麵! Simplistic, comforting heritage noodles.'
  }, {
    id: 'stir-fried-rice-noodles',
    name: '炒米粉',
    english: 'Stir-Fried Rice Noodles',
    pinyin: 'Chǎo mǐ fěn',
    description: 'Thin rice vermicelli stir-fried with shredded pork, cabbage, carrots, dried shrimp, and fragrant shallot oil, wet enough to retain moisture and chew.',
    category: 'mains',
    imageUrl: '/images/food/stir-fried-rice-noodles.jpg',
    copiedMessage: 'Copied 炒米粉! Fluffy, shallot-scented rice noodles.'
  }, {
    id: 'shrimp-fried-rice',
    name: '蝦米炒飯',
    english: 'Shrimp Fried Rice',
    pinyin: 'Xiā mǐ chǎo fàn',
    description: 'Fragrant fried rice wok-tossed with small dried/fresh shrimp, eggs, green onions, and soy sauce, maintaining dry, separated, and flavorful grains.',
    category: 'mains',
    imageUrl: '/images/food/shrimp-fried-rice.jpg',
    copiedMessage: 'Copied 蝦米炒飯! Wok hei (breath of the wok) in every grain.'
  }, {
    id: 'three-cup-chicken',
    name: '三杯雞',
    english: 'Three-Cup Chicken',
    pinyin: 'Sān bēi jī',
    description: 'A classic Taiwanese dinner dish. Chicken simmered in one cup each of soy sauce, sesame oil, and rice wine, finished with tons of garlic, ginger, and fresh Thai basil.',
    category: 'mains',
    imageUrl: '/images/food/three-cup-chicken.jpg',
    copiedMessage: 'Copied 三杯雞! Aromatic basil, ginger, and garlic goodness!'
  }, {
    id: 'scallion-pancake',
    name: '蔥油餅',
    english: 'Scallion Pancake',
    pinyin: 'Cōng yóu bǐng',
    description: 'Flaky, layered flatbread loaded with green onions, fried on a flat top till crispy on the outside, soft on the inside. Often ordered with an egg pressed on top.',
    category: 'mains',
    imageUrl: '/images/food/scallion-pancake.jpg',
    copiedMessage: 'Copied 蔥油餅! Crispy, savory layers with egg and chili paste.'
  }, {
    id: 'chiayi-chicken-rice',
    name: '嘉義雞肉飯',
    english: 'Chiayi Chicken Rice',
    pinyin: 'Jiā yì jī ròu fàn',
    description: 'A Southern Taiwan classic. Steamed rice topped with shredded chicken (traditionally turkey), drizzled with savory chicken fat and pan juices, and a pickled radish slice on the side.',
    category: 'mains',
    imageUrl: '/images/food/chiayi-chicken-rice.jpg',
    copiedMessage: 'Copied 嘉義雞肉飯! Simple, savory, and endlessly comforting.'
  }, {
    id: 'tube-rice-pudding',
    name: '筒仔米糕',
    english: 'Tube Rice Pudding',
    pinyin: 'Tǒng zǐ mǐ gāo',
    description: 'Glutinous rice steamed in a small cylindrical tube with braised pork, mushrooms, and dried shrimp, then unmolded and topped with sweet soy sauce and pork floss.',
    category: 'mains',
    imageUrl: '/images/food/tube-rice-pudding.jpg',
    copiedMessage: 'Copied 筒仔米糕! Sticky rice packed with savory braised goodness.'
  }, {
    id: 'braised-pork-knuckle-rice',
    name: '豬腳飯',
    english: 'Braised Pork Knuckle Rice',
    pinyin: 'Zhū jiǎo fàn',
    description: 'Rice topped with pork knuckle braised for hours in soy sauce and spices until the skin turns gelatinous and the meat falls off the bone.',
    category: 'mains',
    imageUrl: '/images/food/braised-pork-knuckle-rice.jpg',
    copiedMessage: 'Copied 豬腳飯! Fall-off-the-bone tender and rich with collagen.'
  }, {
    id: 'zongzi',
    name: '肉粽',
    english: 'Rice Dumpling (Zongzi)',
    pinyin: 'Ròu zòng',
    description: 'Glutinous rice stuffed with pork, mushroom, chestnut, and salted egg yolk, wrapped tightly in bamboo leaves and steamed until fragrant.',
    category: 'mains',
    imageUrl: '/images/food/zongzi.jpg',
    copiedMessage: 'Copied 肉粽! Unwrap the bamboo leaves to reveal savory sticky rice.'
  }, {
    id: 'danzai-noodles',
    name: '擔仔麵',
    english: 'Danzai Noodles',
    pinyin: 'Dān zǎi miàn',
    description: 'A Tainan classic. Thin noodles in a light shrimp-and-pork broth, topped with braised minced pork, a whole shrimp, bean sprouts, and cilantro.',
    category: 'mains',
    imageUrl: '/images/food/danzai-noodles.jpg',
    copiedMessage: 'Copied 擔仔麵! A small, historic bowl of Tainan comfort.'
  }, {
    id: 'hakka-ban-tiao',
    name: '粄條',
    english: 'Hakka Flat Rice Noodles (Ban Tiao)',
    pinyin: 'Bǎn tiáo',
    description: 'Wide, silky flat rice noodles from Hakka cuisine, served in a light pork broth or stir-fried with shredded pork, dried shrimp, and chives.',
    category: 'mains',
    imageUrl: '/images/food/hakka-ban-tiao.jpg',
    copiedMessage: 'Copied 粄條! Silky Hakka rice noodles, comforting either way.'
  }, {
    id: 'taiwanese-bento',
    name: '便當',
    english: 'Taiwanese Bento (Biandang)',
    pinyin: 'Biàn dāng',
    description: 'A boxed meal of rice topped with a braised pork chop or chicken leg, alongside pickled vegetables, a braised egg, and stir-fried greens. The classic Taiwan Railway version is legendary.',
    category: 'mains',
    imageUrl: '/images/food/taiwanese-bento.jpg',
    copiedMessage: 'Copied 便當! A complete, no-fuss Taiwanese meal in a box.'
  }, {
    id: 'boiled-dumplings',
    name: '水餃',
    english: 'Boiled Dumplings',
    pinyin: 'Shuǐ jiǎo',
    description: 'Plump dumplings filled with seasoned pork and cabbage or chives, boiled until the wrapper turns silky, and dipped in soy sauce, vinegar, and chili oil.',
    category: 'mains',
    imageUrl: '/images/food/boiled-dumplings.jpg',
    copiedMessage: 'Copied 水餃! Dip in soy-vinegar-chili sauce and enjoy.'
  }, {
    id: 'hakka-stir-fry',
    name: '客家小炒',
    english: 'Hakka Stir-Fry',
    pinyin: 'Kè jiā xiǎo chǎo',
    description: 'A savory Hakka classic. Shredded pork belly, dried squid, tofu, and celery stir-fried together with soy sauce and rice wine for a deeply umami dish.',
    category: 'mains',
    imageUrl: '/images/food/hakka-stir-fry.jpg',
    copiedMessage: 'Copied 客家小炒! Umami-packed Hakka home cooking.'
  }, {
    id: 'bamboo-tube-rice',
    name: '竹筒飯',
    english: 'Bamboo Tube Rice',
    pinyin: 'Zhú tǒng fàn',
    description: 'An Indigenous Taiwanese specialty. Glutinous rice packed into a fresh bamboo tube with meat or beans, then roasted over an open fire until fragrant with bamboo aroma.',
    category: 'mains',
    imageUrl: '/images/food/bamboo-tube-rice.jpg',
    copiedMessage: 'Copied 竹筒飯! Smoky, fragrant rice straight from the bamboo.'
  }, {
    id: 'oil-rice',
    name: '油飯',
    english: 'Glutinous Oil Rice',
    pinyin: 'Yóu fàn',
    description: 'Glutinous rice stir-fried in sesame oil with shiitake mushrooms, dried shrimp, and pork, traditionally served to celebrate a baby\'s first month.',
    category: 'mains',
    imageUrl: '/images/food/oil-rice.jpg',
    copiedMessage: 'Copied 油飯! Fragrant, festive sesame rice.'
  }, {
    id: 'rice-noodle-soup',
    name: '米粉湯',
    english: 'Rice Noodle Soup',
    pinyin: 'Mǐ fěn tāng',
    description: 'Thin rice noodles in a light pork or bonito broth, usually ordered alongside a plate of "black and white cut" (黑白切) braised meats and offal.',
    category: 'mains',
    imageUrl: '/images/food/rice-noodle-soup.jpg',
    copiedMessage: 'Copied 米粉湯! A humble bowl best paired with braised sides.'
  },

  // Street Snacks (夜市小吃)
  {
    id: 'gua-bao',
    name: '刈包',
    english: 'Steamed Pork Belly Bun (Gua Bao)',
    pinyin: 'Guà bāo',
    description: 'Known as the "Taiwanese Hamburger". A soft steamed lotus leaf bun stuffed with tender braised pork belly, pickled mustard greens, cilantro, and sweet peanut powder.',
    category: 'snacks',
    imageUrl: '/images/food/gua-bao.jpg',
    copiedMessage: 'Copied 刈包! The perfect bite of savory, sweet, and nutty.'
  }, {
    id: 'stinky-tofu',
    name: '臭豆腐',
    english: 'Stinky Tofu',
    pinyin: 'Chòu dòu fu',
    description: 'Taiwan\'s infamous night market snack. Deep-fried tofu cubes fermented in a special brine, crispy on the outside, juicy inside, served with sour pickled cabbage and garlic chili sauce.',
    category: 'snacks',
    imageUrl: '/images/food/stinky-tofu.jpg',
    copiedMessage: 'Copied 臭豆腐! Smells like hell, tastes like heaven!'
  }, {
    id: 'fried-chicken-cutlet',
    name: '炸雞排',
    english: 'Giant Fried Chicken Cutlet',
    pinyin: 'Zhà jī pái',
    description: 'A massive chicken breast butterflied, pounded flat, marinated in spices, coated in sweet potato starch, and deep-fried till golden. Seasoned with salt, pepper, and chili powder.',
    category: 'snacks',
    imageUrl: '/images/food/fried-chicken-cutlet.jpg',
    copiedMessage: 'Copied 炸雞排! Bigger than your face, crispy and piping hot!'
  }, {
    id: 'popcorn-chicken',
    name: '鹽酥雞',
    english: 'Popcorn Chicken',
    pinyin: 'Yán sū jī',
    description: 'Bite-sized chicken chunks marinated in five-spice and soy sauce, deep fried with fresh Thai basil leaves. Seasoned with seasoned pepper salt for an irresistible snack.',
    category: 'snacks',
    imageUrl: '/images/food/popcorn-chicken.jpg',
    copiedMessage: 'Copied 鹽酥雞! Crispy five-spice bites fried with fragrant basil.'
  }, {
    id: 'pig-blood-cake',
    name: '豬血糕',
    english: 'Pig\'s Blood Cake',
    pinyin: 'Zhū xiě gāo',
    description: 'A sticky mix of pig\'s blood and sticky rice, steamed, coated in a sweet soy paste, and rolled in peanut powder and fresh cilantro, served on a stick.',
    category: 'snacks',
    imageUrl: '/images/food/pig-blood-cake.jpg',
    copiedMessage: 'Copied 豬血糕! Give it a try—the peanut and cilantro combo is amazing.'
  }, {
    id: 'sausage-in-sausage',
    name: '大腸包小腸',
    english: 'Sausage Wrapped in Sticky Rice',
    pinyin: 'Dà cháng bāo xiǎo cháng',
    description: 'Literally "big sausage wrapping small sausage". A sweet, savory Taiwanese pork sausage stuffed inside a grilled sticky rice sausage, packed with garlic, basil, and pickles.',
    category: 'snacks',
    imageUrl: '/images/food/sausage-in-sausage.jpg',
    copiedMessage: 'Copied 大腸包小腸! Double sausage, double flavor!'
  }, {
    id: 'pepper-bun',
    name: '胡椒餅',
    english: 'Black Pepper Pork Bun (Hujiao Bing)',
    pinyin: 'Hú jiāo bǐng',
    description: 'Baked in a clay tandoor-like oven. A crispy, sesame-seeded pastry bun filled with minced pork heavily seasoned with black pepper, and massive piles of fresh green scallions.',
    category: 'snacks',
    imageUrl: '/images/food/pepper-bun.jpg',
    copiedMessage: 'Copied 胡椒餅! Crispy baked crust with juicy, peppery filling.'
  }, {
    id: 'sweet-potato-balls',
    name: '地瓜球',
    english: 'Sweet Potato Balls',
    pinyin: 'Dì guā qiú',
    description: 'Fun night market snack. Hollow, chewy, and crispy golden balls made of sweet potato dough that are repeatedly pressed down in hot oil to expand them.',
    category: 'snacks',
    imageUrl: '/images/food/sweet-potato-balls.jpg',
    copiedMessage: 'Copied 地瓜球! Bouncy, hollow, and satisfyingly crispy!'
  }, {
    id: 'dan-bing',
    name: '蛋餅',
    english: 'Taiwanese Egg Crepe / Pancake',
    pinyin: 'Dàn bǐng',
    description: 'A soft, slightly chewy pan-fried crepe with an egg attached, rolled up and sliced. Popular fillings include cheese, bacon, corn, or tuna, drizzled with sweet soy paste.',
    category: 'snacks',
    imageUrl: '/images/food/dan-bing.jpg',
    copiedMessage: 'Copied 蛋餅! The ultimate Taiwanese breakfast staple.'
  }, {
    id: 'fan-tuan',
    name: '飯糰',
    english: 'Taiwanese Rice Ball (Fan Tuan)',
    pinyin: 'Fàn tuán',
    description: 'Sticky glutinous rice wrapped tightly around a filling of pork floss (rousong), pickled radish, pickled mustard greens, and a crunchy piece of fried Youtiao (dough stick).',
    category: 'snacks',
    imageUrl: '/images/food/fan-tuan.jpg',
    copiedMessage: 'Copied 飯糰! A dense, satisfying breakfast roll to go.'
  }, {
    id: 'run-bing',
    name: '潤餅',
    english: 'Run Bing (Steamed Spring Roll / Popiah)',
    pinyin: 'Rùn bǐng',
    description: 'Thin crepe wrapper filled with steamed cabbage, carrots, bean sprouts, pork, fried tofu strips, scrambled egg threads, cilantro, and dusted with sweet peanut sugar powder.',
    category: 'snacks',
    imageUrl: '/images/food/run-bing.jpg',
    copiedMessage: 'Copied 潤餅! A refreshing, herb-filled hand-roll.'
  }, {
    id: 'grilled-king-oyster-mushrooms',
    name: '醬烤杏鮑菇',
    english: 'Grilled King Oyster Mushroom',
    pinyin: 'Jiàng kǎo xìng bào gū',
    description: 'Thick, juicy slices of king oyster mushrooms grilled over charcoal, basted in sweet soy glaze and sprinkled with spices like pepper, chili, or seaweed powder.',
    category: 'snacks',
    imageUrl: '/images/food/grilled-king-oyster-mushrooms.jpg',
    copiedMessage: 'Copied 醬烤杏鮑菇! Juicy and meaty vegetarian night market staple.'
  }, {
    id: 'grilled-quail-eggs',
    name: '烤鳥蛋',
    english: 'Grilled Quail Eggs',
    pinyin: 'Kǎo niǎo dàn',
    description: 'Small quail eggs cracked into individual circular molds on a hot griddle, cooked on a stick until crispy and round, then brushed with soy paste and white pepper.',
    category: 'snacks',
    imageUrl: '/images/food/grilled-quail-eggs.jpg',
    copiedMessage: 'Copied 烤鳥蛋! Snacking quail eggs on a stick!'
  }, {
    id: 'charcoal-grilled-corn',
    name: '碳烤玉米',
    english: 'Charcoal Grilled Corn',
    pinyin: 'Tàn kǎo yù mǐ',
    description: 'Corn on the cob grilled over hot charcoal, continuously brushed with a thick, savory-sweet satay garlic soy paste until caramelized and deeply flavorful.',
    category: 'snacks',
    imageUrl: '/images/food/charcoal-grilled-corn.jpg',
    copiedMessage: 'Copied 碳烤玉米! Sweet, smoky corn with thick savory glaze.'
  }, {
    id: 'tian-bu-la',
    name: '甜不辣',
    english: 'Tian Bu La (Taiwanese Fish Cakes)',
    pinyin: 'Tián bù là',
    description: 'Slices of fish paste shaped into cakes and noodles, simmered in a sweet broth, drizzled with brown sweet sauce. The vendor will top off your leftovers with warm soup broth!',
    category: 'snacks',
    imageUrl: '/images/food/tian-bu-la.jpg',
    copiedMessage: 'Copied 甜不辣! Don\'t forget to ask the vendor for soup at the end!'
  }, {
    id: 'iron-eggs',
    name: '鐵蛋',
    english: 'Iron Eggs (Tie Dan)',
    pinyin: 'Tiě dàn',
    description: 'A specialty from Danshui. Quail or chicken eggs stewed repeatedly in spices and air-dried until they shrink, turning black, chewy, rubbery, and highly flavorful.',
    category: 'snacks',
    imageUrl: '/images/food/iron-eggs.jpg',
    copiedMessage: 'Copied 鐵蛋! The super chewy, highly concentrated spiced eggs.'
  }, {
    id: 'coffin-bread',
    name: '棺材板',
    english: 'Coffin Bread',
    pinyin: 'Guān cái bǎn',
    description: 'A Tainan original. A thick slab of deep-fried toast hollowed out and filled with creamy chicken or seafood chowder, then capped with a bread "lid".',
    category: 'snacks',
    imageUrl: '/images/food/coffin-bread.jpg',
    copiedMessage: 'Copied 棺材板! Crispy toast box loaded with creamy chowder.'
  }, {
    id: 'oyster-fritter',
    name: '蚵嗲',
    english: 'Oyster Fritter',
    pinyin: 'É diē',
    description: 'A deep-fried patty of fresh oysters, cabbage, and pork, coated in a rice flour batter and fried until golden and crunchy on the edges.',
    category: 'snacks',
    imageUrl: '/images/food/oyster-fritter.jpg',
    copiedMessage: 'Copied 蚵嗲! Crispy fritter packed with plump oysters.'
  }, {
    id: 'pan-fried-bun',
    name: '生煎包',
    english: 'Pan-Fried Pork Bun',
    pinyin: 'Shēng jiān bāo',
    description: 'Pork-filled buns pan-fried on the bottom until golden and crisp, steamed on top, and finished with a sprinkle of sesame seeds and scallions.',
    category: 'snacks',
    imageUrl: '/images/food/pan-fried-bun.jpg',
    copiedMessage: 'Copied 生煎包! Crispy bottom, juicy top, one bite of soup inside.'
  }, {
    id: 'red-bean-pancake',
    name: '紅豆餅',
    english: 'Red Bean Pancake',
    pinyin: 'Hóng dòu bǐng',
    description: 'Griddle-cooked disc of batter filled with sweet red bean paste (or custard, taro, cheese) and cooked in a special mold until the edges turn crisp.',
    category: 'snacks',
    imageUrl: '/images/food/red-bean-pancake.jpg',
    copiedMessage: 'Copied 紅豆餅! Warm, fresh off the griddle with sweet filling.'
  }, {
    id: 'scallion-hand-pancake',
    name: '蔥抓餅',
    english: 'Hand-Torn Scallion Pancake',
    pinyin: 'Cōng zhuā bǐng',
    description: 'A thicker, flakier cousin of the scallion pancake, hand-pulled into shaggy layers on the griddle, often stuffed with egg, cheese, or bacon.',
    category: 'snacks',
    imageUrl: '/images/food/scallion-hand-pancake.jpg',
    copiedMessage: 'Copied 蔥抓餅! Shaggy, flaky layers hot off the griddle.'
  }, {
    id: 'lu-wei',
    name: '滷味',
    english: 'Braised Snack Platter (Lu Wei)',
    pinyin: 'Lǔ wèi',
    description: 'Pick-your-own skewers of tofu, eggs, vegetables, and meats simmered in a fragrant five-spice soy broth, then chopped up and tossed with garlic and chili.',
    category: 'snacks',
    imageUrl: '/images/food/lu-wei.jpg',
    copiedMessage: 'Copied 滷味! Build your own soy-braised feast.'
  }, {
    id: 'century-egg-tofu',
    name: '皮蛋豆腐',
    english: 'Century Egg Tofu',
    pinyin: 'Pí dàn dòu fu',
    description: 'Cold silken tofu topped with sliced century egg, drizzled with soy sauce, sesame oil, and bonito flakes or fried shallots for a cooling appetizer.',
    category: 'snacks',
    imageUrl: '/images/food/century-egg-tofu.jpg',
    copiedMessage: 'Copied 皮蛋豆腐! Cool, silky, and savory.'
  }, {
    id: 'potstickers',
    name: '鍋貼',
    english: 'Potstickers',
    pinyin: 'Guō tiē',
    description: 'Pork and cabbage dumplings pan-fried until the bottoms turn golden and crackly, served with black vinegar and shredded ginger.',
    category: 'snacks',
    imageUrl: '/images/food/potstickers.jpg',
    copiedMessage: 'Copied 鍋貼! Crispy bottoms, juicy filling.'
  }, {
    id: 'radish-cake',
    name: '蘿蔔糕',
    english: 'Pan-Fried Radish Cake',
    pinyin: 'Luó bo gāo',
    description: 'Steamed daikon and rice flour cake, sliced and pan-fried until crisp on both sides, served with soy sauce or sweet chili sauce.',
    category: 'snacks',
    imageUrl: '/images/food/radish-cake.jpg',
    copiedMessage: 'Copied 蘿蔔糕! Crispy outside, soft and savory inside.'
  }, {
    id: 'a-gei',
    name: '阿給',
    english: 'A-Gei',
    pinyin: 'Ā gěi',
    description: 'A Danshui specialty. A block of fried tofu hollowed out and stuffed with glass noodles, then sealed with fish paste and steamed, topped with sweet chili sauce.',
    category: 'snacks',
    imageUrl: '/images/food/a-gei.jpg',
    copiedMessage: 'Copied 阿給! Danshui\'s signature stuffed tofu pocket.'
  }, {
    id: 'salty-water-chicken',
    name: '鹹水雞',
    english: 'Salty Water Chicken',
    pinyin: 'Xián shuǐ jī',
    description: 'Chicken poached until tender then chilled, tossed with sesame oil and five-spice, and served cold with a choice of vegetables at a self-serve counter.',
    category: 'snacks',
    imageUrl: '/images/food/salty-water-chicken.jpg',
    copiedMessage: 'Copied 鹹水雞! Cool, tender, and fragrant with sesame oil.'
  }, {
    id: 'grilled-sausage',
    name: '烤香腸',
    english: 'Grilled Taiwanese Sausage',
    pinyin: 'Kǎo xiāng cháng',
    description: 'Sweet, garlicky pork sausages grilled over charcoal until the casing snaps, often served with raw garlic cloves on the side.',
    category: 'snacks',
    imageUrl: '/images/food/grilled-sausage.jpg',
    copiedMessage: 'Copied 烤香腸! Snappy casing, sweet garlicky pork.'
  }, {
    id: 'squid-balls',
    name: '花枝丸',
    english: 'Squid Balls',
    pinyin: 'Huā zhī wán',
    description: 'Bouncy balls of minced squid and fish paste, deep-fried or boiled, prized for their springy "Q" texture and briny sweetness.',
    category: 'snacks',
    imageUrl: '/images/food/squid-balls.jpg',
    copiedMessage: 'Copied 花枝丸! Bouncy, briny, and satisfying.'
  },

  // Soups & Stews (暖胃湯鍋)
  {
    id: 'fish-ball-soup',
    name: '福州魚丸湯',
    english: 'Fuzhou Fish Ball Soup',
    pinyin: 'Fú zhōu yú wán tāng',
    description: 'A clear, fragrant broth containing bouncy fish balls made of fish paste, filled with a savory minced pork center that releases juices when bitten.',
    category: 'soups',
    imageUrl: '/images/food/fish-ball-soup.jpg',
    copiedMessage: 'Copied 福州魚丸湯! Bite carefully, the pork center is hot!'
  }, {
    id: 'milkfish-soup',
    name: '虱目魚湯',
    english: 'Milkfish Soup',
    pinyin: 'Shī mù yú tāng',
    description: 'A delicate, clean soup utilizing milkfish—Taiwan\'s prized local catch. Cooked with shredded ginger, green onions, and sometimes a dash of rice wine to highlight the fresh fish.',
    category: 'soups',
    imageUrl: '/images/food/milkfish-soup.jpg',
    copiedMessage: 'Copied 虱目魚湯! Clean, gingery, and highly nourishing.'
  }, {
    id: 'sesame-oil-kidney',
    name: '麻油腰花',
    english: 'Sesame Oil Pork Kidney',
    pinyin: 'Má yóu yāo huā',
    description: 'A traditional postpartum warming dish. Pork kidney intricately sliced into cross-hatch patterns, stir-fried rapidly with pure black sesame oil, ginger, and rice wine.',
    category: 'soups',
    imageUrl: '/images/food/sesame-oil-kidney.jpg',
    copiedMessage: 'Copied 麻油腰花! Rich sesame oil aroma and tender kidneys.'
  }, {
    id: 'angelica-duck',
    name: '當歸鴨',
    english: 'Angelica Duck Soup',
    pinyin: 'Dāng guī yā',
    description: 'A popular winter tonic. Duck sections slow-simmered in a dark, aromatic herbal broth dominated by Angelica root (Dong Quai), providing warming properties.',
    category: 'soups',
    imageUrl: '/images/food/angelica-duck.jpg',
    copiedMessage: 'Copied 當歸鴨! A deeply comforting herbal broth.'
  }, {
    id: 'stinky-hotpot',
    name: '臭臭鍋',
    english: 'Stinky Hotpot',
    pinyin: 'Chòu chòu guō',
    description: 'A localized individual hotpot featuring stinky tofu, pork intestines, napa cabbage, meatballs, clams, and vegetables boiling in a spicy fermented broth.',
    category: 'soups',
    imageUrl: '/images/food/stinky-hotpot.jpg',
    copiedMessage: 'Copied 臭臭鍋! Sizzling hotpot bubbling with stinky tofu.'
  }, {
    id: 'hot-pot',
    name: '火鍋',
    english: 'Hot Pot',
    pinyin: 'Huǒ guō',
    description: 'A social dining experience. A boiling pot of broth (ranging from spicy mala to tomato or kelp) placed in the center, where diners cook meats, seafood, and vegetables.',
    category: 'soups',
    imageUrl: '/images/food/hot-pot.jpg',
    copiedMessage: 'Copied 火鍋! Perfect for a gathering with friends and family.'
  }, {
    id: 'pork-rib-soup',
    name: '排骨湯',
    english: 'Pork Rib Soup',
    pinyin: 'Pái gǔ tāng',
    description: 'A simple, sweet broth boiled with pork ribs and white radish (daikon) or bitter melon, allowing the natural sweetness of the bone and radish to shine.',
    category: 'soups',
    imageUrl: '/images/food/pork-rib-soup.jpg',
    copiedMessage: 'Copied 排骨湯! Warm pork rib broth with sweet radish chunks.'
  }, {
    id: 'medicinal-ribs-soup',
    name: '藥燉排骨',
    english: 'Medicinal Pork Ribs Soup',
    pinyin: 'Yào dùn pái gǔ',
    description: 'Pork ribs slow-boiled with black Chinese herbs like licorice, wolfberries, and angelica, creating a black, sweet, medicinal broth that warms the limbs in winter.',
    category: 'soups',
    imageUrl: '/images/food/medicinal-ribs-soup.jpg',
    copiedMessage: 'Copied 藥燉排骨! Fragrant medicinal herbs with fall-off-the-bone ribs.'
  }, {
    id: 'ginger-duck-pot',
    name: '薑母鴨',
    english: 'Ginger Duck Hot Pot',
    pinyin: 'Jiāng mǔ yā',
    description: 'A winter block party favorite. Duck meat cooked with lots of old ginger root, black sesame oil, and rice wine in a clay pot, believed to boost blood circulation.',
    category: 'soups',
    imageUrl: '/images/food/ginger-duck-pot.jpg',
    copiedMessage: 'Copied 薑母鴨! Keep warm with old ginger and duck stew!'
  }, {
    id: 'teppanyaki',
    name: '鐵板燒',
    english: 'Teppanyaki',
    pinyin: 'Tiě bǎn shāo',
    description: 'Dishes cooked on a large steel flat top right in front of you. Sautéed meats, seafood, cabbage, and bean sprouts flavored heavily with garlic, soy sauce, and butter.',
    category: 'soups',
    imageUrl: '/images/food/teppanyaki.jpg',
    copiedMessage: 'Copied 鐵板燒! Watching the chef cook is half the fun!'
  }, {
    id: 'braised-tofu',
    name: '滷豆腐',
    english: 'Braised Tofu',
    pinyin: 'Lǔ dòu fu',
    description: 'Blocks of firm tofu slow-cooked in the soy braising liquid along with eggs and pork belly, soaking up all the salty-sweet umami flavors.',
    category: 'soups',
    imageUrl: '/images/food/braised-tofu.jpg',
    copiedMessage: 'Copied 滷豆腐! Tender, juicy, braised bean curd.'
  }, {
    id: 'braised-cabbage',
    name: '滷白菜',
    english: 'Braised Chinese Cabbage',
    pinyin: 'Lǔ bái cài',
    description: 'Napa cabbage cooked down until meltingly soft with dried shrimp, shiitake mushrooms, fried pig skin (bak-phue), and garlic, creating a sweet and savory stew.',
    category: 'soups',
    imageUrl: '/images/food/braised-cabbage.jpg',
    copiedMessage: 'Copied 滷白菜! Soft cabbage stewed to sweet perfection.'
  }, {
    id: 'stir-fried-sweet-potato-leaves',
    name: '炒地瓜葉',
    english: 'Stir-Fried Sweet Potato Leaves',
    pinyin: 'Chǎo dì guā yè',
    description: 'A classic, healthy household green. Sweet potato leaves quickly stir-fried with minced garlic or drizzled with braised pork gravy.',
    category: 'soups',
    imageUrl: '/images/food/stir-fried-sweet-potato-leaves.jpg',
    copiedMessage: 'Copied 炒地瓜葉! Garlic-packed, tender sweet potato greens.'
  }, {
    id: 'stir-fried-water-snowflake',
    name: '炒水蓮',
    english: 'Stir-Fried White Water Snowflake',
    pinyin: 'Chǎo shuǐ lián',
    description: 'A unique Taiwanese vegetable native to Meinong. Long, rope-like water plants stir-fried with ginger and fermented pineapple bean paste, maintaining a crisp, crunchy bite.',
    category: 'soups',
    imageUrl: '/images/food/stir-fried-water-snowflake.jpg',
    copiedMessage: 'Copied 炒水蓮! Crunchy, juice-filled water plant stems.'
  }, {
    id: 'squid-thick-soup',
    name: '花枝羹',
    english: 'Squid Thick Soup',
    pinyin: 'Huā zhī gēng',
    description: 'Tender squid pieces in a glossy, cornstarch-thickened broth flavored with black vinegar, white pepper, and cilantro, sometimes with bamboo shoots or bok choy.',
    category: 'soups',
    imageUrl: '/images/food/squid-thick-soup.jpg',
    copiedMessage: 'Copied 花枝羹! Silky, tangy broth loaded with tender squid.'
  }, {
    id: 'pork-meatball-soup',
    name: '貢丸湯',
    english: 'Pork Meatball Soup',
    pinyin: 'Gòng wán tāng',
    description: 'A simple, clear broth studded with bouncy, hand-pounded pork meatballs, garnished with scallions and white pepper. A classic side to any Taiwanese meal.',
    category: 'soups',
    imageUrl: '/images/food/pork-meatball-soup.jpg',
    copiedMessage: 'Copied 貢丸湯! Bouncy pork balls in a clean, savory broth.'
  }, {
    id: 'ding-bian-cuo',
    name: '鼎邊銼',
    english: 'Ding-Bian-Cuo',
    pinyin: 'Dǐng biān cuò',
    description: 'A Keelung specialty. Rice batter is swirled onto the rim of a hot wok to steam into thin sheets, then cut into strips and served in a light seafood-and-vegetable broth.',
    category: 'soups',
    imageUrl: '/images/food/ding-bian-cuo.jpg',
    copiedMessage: 'Copied 鼎邊銼! Keelung\'s wok-rim rice noodle specialty.'
  }, {
    id: 'pig-blood-soup',
    name: '豬血湯',
    english: 'Pig\'s Blood Soup',
    pinyin: 'Zhū xiě tāng',
    description: 'Cubes of steamed pig\'s blood in a clear pork broth with garlic and pickled mustard greens, a humble street-stall staple full of iron-rich flavor.',
    category: 'soups',
    imageUrl: '/images/food/pig-blood-soup.jpg',
    copiedMessage: 'Copied 豬血湯! Silky, savory, and deeply traditional.'
  }, {
    id: 'mala-hotpot',
    name: '麻辣鍋',
    english: 'Mala Hotpot',
    pinyin: 'Má là guō',
    description: 'A fiery, numbing hotpot broth loaded with Sichuan peppercorns and dried chilies, perfect for cooking thin-sliced meats and vegetables at the table.',
    category: 'soups',
    imageUrl: '/images/food/mala-hotpot.jpg',
    copiedMessage: 'Copied 麻辣鍋! Numbing, fiery, and endlessly customizable.'
  }, {
    id: 'four-spirits-soup',
    name: '四神湯',
    english: 'Four Spirits Soup',
    pinyin: 'Sì shén tāng',
    description: 'A gentle herbal soup made with pork intestine or ribs simmered with four medicinal ingredients (Job\'s tears, lotus seed, poria, and yam), said to strengthen digestion.',
    category: 'soups',
    imageUrl: '/images/food/four-spirits-soup.jpg',
    copiedMessage: 'Copied 四神湯! A gentle, herbal tonic soup.'
  }, {
    id: 'mutton-hotpot',
    name: '羊肉爐',
    english: 'Mutton Hot Pot',
    pinyin: 'Yáng ròu lú',
    description: 'Mutton simmered for hours in a dark, herbal broth with fermented tofu paste, ginger, and rice wine, a warming winter favorite cooked tableside in a clay pot.',
    category: 'soups',
    imageUrl: '/images/food/mutton-hotpot.jpg',
    copiedMessage: 'Copied 羊肉爐! Rich, herbal mutton stew for cold nights.'
  }, {
    id: 'egg-drop-soup',
    name: '蛋花湯',
    english: 'Egg Drop Soup',
    pinyin: 'Dàn huā tāng',
    description: 'A light broth swirled with ribbons of beaten egg, often finished with tomato, seaweed, or corn — a simple side soup found at nearly every Taiwanese diner.',
    category: 'soups',
    imageUrl: '/images/food/egg-drop-soup.jpg',
    copiedMessage: 'Copied 蛋花湯! Light, comforting, and always a good pairing.'
  },

  // Desserts & Sweets (療癒甜品)
  {
    id: 'shaved-ice',
    name: '剉冰',
    english: 'Taiwanese Shaved Ice (Tsua-Bing)',
    pinyin: 'Cuò bīng',
    description: 'A base of crushed ice drizzled with brown sugar syrup, piled high with 4 choices of toppings like boba, taro balls, red bean, mung bean, grass jelly, or condensed milk.',
    category: 'desserts',
    imageUrl: '/images/food/shaved-ice.jpg',
    copiedMessage: 'Copied 剉冰! Choose your toppings and beat the heat!'
  }, {
    id: 'mango-shaved-ice',
    name: '芒果雪花冰',
    english: 'Mango Snowflake Ice',
    pinyin: 'Máng guǒ xuě huā bīng',
    description: 'Thin ribbons of milk-flavored shaved ice topped with generous chunks of fresh mango, sweetened condensed milk, and a scoop of mango ice cream or panna cotta.',
    category: 'desserts',
    imageUrl: '/images/food/mango-shaved-ice.jpg',
    copiedMessage: 'Copied 芒果雪花冰! Sweet mango combined with fluffy, milky snowflake ice.'
  }, {
    id: 'pineapple-butter-bun',
    name: '冰火菠蘿',
    english: 'Ice and Fire Pineapple Bun',
    pinyin: 'Bīng huǒ bō luó',
    description: 'A warm, sweet pineapple bun (so named for its cracked crust resembling pineapple skin) sliced open to sandwich a cold, thick slab of salted butter.',
    category: 'desserts',
    imageUrl: '/images/food/pineapple-butter-bun.jpg',
    copiedMessage: 'Copied 冰火菠蘿! Feel the contrast of hot bun and melting cold butter.'
  }, {
    id: 'tofu-pudding',
    name: '豆花',
    english: 'Douhua (Tofu Pudding)',
    pinyin: 'Dòu huā',
    description: 'Silky smooth, warm or cold soy tofu pudding served in a ginger-infused sweet brown sugar syrup, topped with cooked peanuts, red beans, and taro balls.',
    category: 'desserts',
    imageUrl: '/images/food/tofu-pudding.jpg',
    copiedMessage: 'Copied 豆花! Silky tofu that melts in your mouth.'
  }, {
    id: 'taro-balls',
    name: '芋圓',
    english: 'Taro Balls',
    pinyin: 'Yù yuán',
    description: 'Chewy, colorful balls made of steamed taro and sweet potato mashed with potato starch, served warm or cold over grass jelly or shaved ice with sweet syrup.',
    category: 'desserts',
    imageUrl: '/images/food/taro-balls.jpg',
    copiedMessage: 'Copied 芋圓! Chewy ("Q" texture) sweet potato and taro balls!'
  }, {
    id: 'mitaimu-jelly',
    name: '米苔目粉粿',
    english: 'Mee Tai Bak with Jelly Dessert',
    pinyin: 'Mǐ tái mù fěn guǒ',
    description: 'Traditional summer treat. Rice noodles (mitaimu) paired with yellow, chewy starch jelly (fenguo) served over shaved ice with brown sugar water. (Corrected spelling from 米苔目粉顆)',
    category: 'desserts',
    imageUrl: '/images/food/mitaimu-jelly.jpg',
    copiedMessage: 'Copied 米苔目粉粿! Chewy yellow jelly and rice noodles on ice.'
  }, {
    id: 'chocolate-pineapple-bread',
    name: '巧克力菠蘿麵包',
    english: 'Chocolate Pineapple Bun',
    pinyin: 'Qiǎo kè lì bō luó miàn bāo',
    description: 'Traditional Taiwanese bakery bread. A soft chocolate roll topped with a crumbly, sweet chocolate cookie crust styled like a pineapple.',
    category: 'desserts',
    imageUrl: '/images/food/chocolate-pineapple-bread.jpg',
    copiedMessage: 'Copied 巧克力菠蘿麵包! Sweet, chocolatey bakery classic.'
  }, {
    id: 'pineapple-cake',
    name: '鳳梨酥',
    english: 'Pineapple Cake',
    pinyin: 'Fèng lí sū',
    description: 'Taiwan\'s most famous souvenir. A crumbly, buttery shortbread crust containing a sweet, tangy filling made of pineapple jam and winter melon or pure fiber pineapple.',
    category: 'desserts',
    imageUrl: '/images/food/pineapple-cake.jpg',
    copiedMessage: 'Copied 鳳梨酥! The buttery, sweet bite of pineapple fortune.'
  }, {
    id: 'sun-cake',
    name: '太陽餅',
    english: 'Sun Cake (Taiyang Bing)',
    pinyin: 'Tài yáng bǐng',
    description: 'A Taichung specialty. Flaky, multi-layered pastry skin filled with a sweet, sticky condensed maltose (malt sugar) filling that melts in your mouth.',
    category: 'desserts',
    imageUrl: '/images/food/sun-cake.jpg',
    copiedMessage: 'Copied 太陽餅! Light, flaky layers with sweet melted maltose.'
  }, {
    id: 'peanut-ice-cream-roll',
    name: '花生捲冰淇淋',
    english: 'Peanut Roll with Ice Cream',
    pinyin: 'Huā shēng juǎn bīng qí lín',
    description: 'A thin spring roll crepe loaded with shaved peanut brittle block, scoops of taro/pineapple ice cream, and finished with fresh cilantro (coriander) before wrapping.',
    category: 'desserts',
    imageUrl: '/images/food/peanut-ice-cream-roll.jpg',
    copiedMessage: 'Copied 花生捲冰淇淋! Peanut brittle shavings, ice cream, and cilantro!'
  }, {
    id: 'aiyu-jelly',
    name: '愛玉',
    english: 'Ai-Yu Jelly',
    pinyin: 'Ài yù',
    description: 'A delicate, translucent jelly hand-washed from the seeds of a wild Taiwanese fig, served chilled with lemon juice and honey for a refreshing, jiggly treat.',
    category: 'desserts',
    imageUrl: '/images/food/aiyu-jelly.jpg',
    copiedMessage: 'Copied 愛玉! Jiggly, lemony, and uniquely Taiwanese.'
  }, {
    id: 'mochi',
    name: '麻糬',
    english: 'Mochi',
    pinyin: 'Má shǔ',
    description: 'Soft, chewy rice cakes rolled in crushed peanuts, sesame, or coconut, sometimes filled with sweet red bean or peanut paste centers.',
    category: 'desserts',
    imageUrl: '/images/food/mochi.jpg',
    copiedMessage: 'Copied 麻糬! Soft, chewy, and coated in fragrant peanut powder.'
  }, {
    id: 'mugwort-rice-cake',
    name: '草仔粿',
    english: 'Mugwort Rice Cake',
    pinyin: 'Cǎo zǐ guǒ',
    description: 'A pillowy green rice cake made with mugwort or Chinese mosla leaves, steamed and filled with savory dried radish or sweet red bean paste.',
    category: 'desserts',
    imageUrl: '/images/food/mugwort-rice-cake.jpg',
    copiedMessage: 'Copied 草仔粿! Soft, herbal rice cake with a savory or sweet center.'
  }, {
    id: 'hot-grass-jelly',
    name: '燒仙草',
    english: 'Hot Grass Jelly',
    pinyin: 'Shāo xiān cǎo',
    description: 'A warm winter dessert soup of soft grass jelly cubes in sweet syrup, topped with taro balls, red beans, and peanuts — the cozy cousin of the iced version.',
    category: 'desserts',
    imageUrl: '/images/food/hot-grass-jelly.jpg',
    copiedMessage: 'Copied 燒仙草! Warm, sweet, and packed with toppings.'
  }, {
    id: 'mung-bean-soup',
    name: '綠豆湯',
    english: 'Mung Bean Soup',
    pinyin: 'Lǜ dòu tāng',
    description: 'Mung beans simmered until soft and creamy in a lightly sweetened broth, served hot or over ice as a cooling, nourishing summer dessert.',
    category: 'desserts',
    imageUrl: '/images/food/mung-bean-soup.jpg',
    copiedMessage: 'Copied 綠豆湯! Creamy, lightly sweet, and cooling.'
  }, {
    id: 'ox-tongue-cookies',
    name: '牛舌餅',
    english: 'Ox-Tongue Cookies',
    pinyin: 'Niú shé bǐng',
    description: 'A Lukang specialty shaped like an ox\'s tongue. Thin, crisp pastry with a subtly sweet, slightly caramelized flavor, perfect for snacking.',
    category: 'desserts',
    imageUrl: '/images/food/ox-tongue-cookies.jpg',
    copiedMessage: 'Copied 牛舌餅! Thin, crisp, and gently sweet.'
  }, {
    id: 'bubble-ice',
    name: '泡泡冰',
    english: 'Bubble Ice',
    pinyin: 'Pào pào bīng',
    description: 'A Jiufen specialty. Shaved ice vigorously whipped with condensed milk and toppings like taro, peanut, or mango until it turns thick and mousse-like.',
    category: 'desserts',
    imageUrl: '/images/food/bubble-ice.jpg',
    copiedMessage: 'Copied 泡泡冰! Whipped, creamy, and packed with toppings.'
  }, {
    id: 'nougat',
    name: '牛軋糖',
    english: 'Nougat',
    pinyin: 'Niú zhá táng',
    description: 'A chewy, buttery nougat candy studded with roasted peanuts or almonds, a beloved Taiwanese souvenir treat often flavored with milk powder or matcha.',
    category: 'desserts',
    imageUrl: '/images/food/nougat.jpg',
    copiedMessage: 'Copied 牛軋糖! Chewy, buttery, and studded with nuts.'
  },

  // Drinks & Beverages (解渴飲品)
  {
    id: 'papaya-milk',
    name: '木瓜牛奶',
    english: 'Papaya Milk',
    pinyin: 'Mù guā niú nǎi',
    description: 'Creamy, sweet, and refreshing. Fresh ripe papaya blended with fresh milk, ice, and sugar. Must be drank quickly before the papaya enzymes curdle the milk!',
    category: 'drinks',
    imageUrl: '/images/food/papaya-milk.jpg',
    copiedMessage: 'Copied 木瓜牛奶! Drink it fast before it turns bitter!'
  }, {
    id: 'grass-jelly-drink',
    name: '仙草蜜',
    english: 'Grass Jelly Drink',
    pinyin: 'Xiān cǎo mì',
    description: 'Refreshing herbal drink. Diced cubes of grass jelly (made from Mesona chinensis mint) served in a sweet, ice-cold honeyed syrup to cool off during summer.',
    category: 'drinks',
    imageUrl: '/images/food/grass-jelly-drink.jpg',
    copiedMessage: 'Copied 仙草蜜! Sweet, cooling grass jelly drink.'
  }, {
    id: 'bubble-milk-tea',
    name: '珍奶 / 奶茶',
    english: 'Bubble Milk Tea / Milk Tea',
    pinyin: 'Zhēn nǎi / Nǎi chá',
    description: 'Taiwan\'s gift to the world. Black tea shaken with milk, ice, and sweet syrup, loaded with chewy tapioca pearls (pearls/boba). Available in endless custom sweet/ice ratios.',
    category: 'drinks',
    imageUrl: '/images/food/bubble-milk-tea.jpg',
    copiedMessage: 'Copied 珍奶 / 奶茶! Half sugar, less ice please!'
  }, {
    id: 'winter-melon-tea',
    name: '冬瓜茶',
    english: 'Winter Melon Tea',
    pinyin: 'Dōng guā chá',
    description: 'A traditional cool down. Winter melon slow-cooked with brown sugar and rock sugar into a syrup, diluted with cold water to make a sweet, cooling tea.',
    category: 'drinks',
    imageUrl: '/images/food/winter-melon-tea.jpg',
    copiedMessage: 'Copied 冬瓜茶! Sweet, traditional caramelized melon tea.'
  }, {
    id: 'guava-juice',
    name: '芭樂汁',
    english: 'Guava Juice',
    pinyin: 'Bā lè zhī',
    description: 'Thick, sweet, fragrant juice made from Taiwan\'s local pink or green guavas, often served ice-cold or mixed with sour plum powder.',
    category: 'drinks',
    imageUrl: '/images/food/guava-juice.jpg',
    copiedMessage: 'Copied 芭樂汁! Fruity, sweet guava aroma!'
  }, {
    id: 'starfruit-juice',
    name: '楊桃汁',
    english: 'Starfruit Juice (Yangtao)',
    pinyin: 'Yáng táo zhī',
    description: 'Traditional salted starfruit juice. Starfruits cured in salt and sugar, yielding a salty-sweet, sour, and throat-soothing traditional beverage.',
    category: 'drinks',
    imageUrl: '/images/food/starfruit-juice.jpg',
    copiedMessage: 'Copied 楊桃汁! Salty-sweet, sour, and soothing.'
  }, {
    id: 'brown-rice-milk',
    name: '糙米漿',
    english: 'Brown Rice Milk (Mijiang)',
    pinyin: 'Cāo mǐ jiāng',
    description: 'A thick, fragrant breakfast beverage made from roasted peanuts, toasted brown rice, and sesame seeds blended with water and sugar.',
    category: 'drinks',
    imageUrl: '/images/food/brown-rice-milk.jpg',
    copiedMessage: 'Copied 糙米漿! Creamy, nutty peanut-rice blend.'
  }, {
    id: 'taiwan-beer-18',
    name: '台灣18天啤酒',
    english: 'Taiwan 18-Days Draft Beer',
    pinyin: 'Tái wān shí bā tiān pí jiǔ',
    description: 'The freshest beer. Unpasteurized draft beer shipped cold and sold with a strict 18-day shelf life, offering a clean, crisp, and exceptionally smooth taste.',
    category: 'drinks',
    imageUrl: '/images/food/taiwan-beer-18.jpg',
    copiedMessage: 'Copied 台灣18天啤酒! Remember: Cheers! 乾杯! (Drink responsibly, 18+ only!)'
  }, {
    id: 'kyoho-grape',
    name: '巨峰葡萄',
    english: 'Kyoho Grapes',
    pinyin: 'Jù fēng pú táo',
    description: 'Large, dark purple grapes with a thick skin, slip-skin texture, and incredibly sweet, juicy flesh with a distinct wine-like flavor.',
    category: 'drinks',
    imageUrl: '/images/food/kyoho-grape.jpg',
    copiedMessage: 'Copied 巨峰葡萄! Plump, juicy, wine-sweet local grapes.'
  }, {
    id: 'sugarcane-juice',
    name: '甘蔗汁',
    english: 'Sugarcane Juice',
    pinyin: 'Gān zhè zhī',
    description: 'Freshly pressed straight from the stalk, this naturally sweet green juice is often served over ice with a splash of lemon for a refreshing summer cooler.',
    category: 'drinks',
    imageUrl: '/images/food/sugarcane-juice.jpg',
    copiedMessage: 'Copied 甘蔗汁! Naturally sweet, straight from the stalk.'
  }, {
    id: 'herbal-tea',
    name: '青草茶',
    english: 'Herbal Tea (Herbal Jelly Tea)',
    pinyin: 'Qīng cǎo chá',
    description: 'A traditional cooling tonic brewed from a blend of wild herbs and grasses, served cold and slightly bitter-sweet, believed to clear heat from the body.',
    category: 'drinks',
    imageUrl: '/images/food/herbal-tea.jpg',
    copiedMessage: 'Copied 青草茶! A traditional herbal cooler.'
  }, {
    id: 'sour-plum-juice',
    name: '酸梅湯',
    english: 'Sour Plum Juice',
    pinyin: 'Suān méi tāng',
    description: 'A tangy, smoky drink simmered from smoked plums, hawthorn, and rock sugar, served ice-cold as a palate-cleansing, thirst-quenching classic.',
    category: 'drinks',
    imageUrl: '/images/food/sour-plum-juice.jpg',
    copiedMessage: 'Copied 酸梅湯! Tangy, smoky, and refreshingly cold.'
  }, {
    id: 'hakka-lei-tea',
    name: '客家擂茶',
    english: 'Hakka Lei Tea',
    pinyin: 'Kè jiā léi chá',
    description: 'A traditional Hakka drink made by grinding tea leaves, nuts, and grains into a fine paste with a special mortar, then mixing with hot water into a nutty, savory brew.',
    category: 'drinks',
    imageUrl: '/images/food/hakka-lei-tea.jpg',
    copiedMessage: 'Copied 客家擂茶! Nutty, savory, and steeped in Hakka tradition.'
  }
];
