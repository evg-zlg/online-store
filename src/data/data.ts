import { IProduct } from '../types';

export const products: IProduct[] = [
  {
    id: 1,
    name: 'Часы "Ажур"',
    category: 'часы',
    categoryID: 'watch',
    description: [
      `Основная функция этих часов - показывать время - объективно ушла на второй план:`,
      `Часы украсят собой любую скучную стену в вашем доме. `,
      `Диаметр часов 30,5см., ( с декоративным оплетением - 54 см.)`,
    ],
    video: `https://vk.com/video_ext.php?oid=-211355847&id=456239030&hash=8a5668b256abe209&hd=2`,
    price: 3300,
    images: [
      './images/azhur-1.jpg',
      './images/azhur-2.jpg',
      './images/azhur-3.jpg',
    ],
    count: 2,
    tags: ['настенный декор', 'идея подарка'],
  },
  {
    id: 2,
    name: 'Гирлянда из звёздочек',
    category: 'праздничный декор',
    categoryID: 'decor',
    description: [
      `Ассорти из звёздочек в оригинальной гирлянде 🤩`,
      `Украшайте ёлку или другую новогоднюю зону, камин или детскую👍🏻`,
      `Количество звёздочек в гирлянде ограничено только вашей фантазией и ее назначением 😉`,
      `Размер звёздочек 5-6 см.`,
      `Изделие под заказ. Срок изготовления 2-7 дней в зависимости от текущей занятости.`,
      `Цена указана за гирлянду из 6 звёздочек.)`,
    ],
    price: 600,
    images: [
      './images/garland-of-stars-1.jpg',
      './images/garland-of-stars-2.jpg',
      './images/garland-of-stars-3.jpg',
    ],
    count: 1,
    tags: ['фотореквизит', 'декор детской', 'новый год'],
  },
  {
    id: 3,
    name: `Плейсмат (сервировочная салфетка)`,
    category: 'изделия для кухни',
    categoryID: 'kitchen',
    description: [
      `Красивая сервировка стола - это просто!`,
      `Достаточно добавить небольшие элементы в виде сезонной композиции, скатерти и сервировочных салфеток под тарелки и каждый приём пищи создаст ощущение праздника!`,

      `💡3 идеи использования плетёных сервировочных салфеток:`,
      `1. Не только под тарелку. В зависимости от диаметра, плейсмат можно использовать в качестве подставки под кружку или салатник.`,
      `2. Настенный декор. Сочетайте плейсматы разного диаметра, цвета и узора плетения, чтобы создать своё неповторимое настенное панно.`,
      `3. Сервировочное блюдо. Используйте плейсмат как сервировочное блюдо и подавайте на нем хлеб, закуски или десерты 👍🏻`,
      ``,
      `А мастера могут присмотреться к плейсмату, как к фотореквизиту☝🏻 Ведь он отлично дополнит композицию в предметной фотосъемке и передаст тепло натуральных материалов.`,
      ``,
      `Цена указана за плейсмат диаметром 15-20 см.* Возможно исполнение в другом цвете и размере.`,
      ``,
      `Как правильно выбрать диаметр?`,
      `Размер плейсмата подбирается в зависимости от диаметра тарелки. Просто добавьте от 3 до 5-10 см к диаметру самой большой тарелки, которую вы планируете использовать вместе с плейсматом.`,
    ],
    price: 540,
    images: [
      './images/placemat-1.jpg',
      './images/placemat-2.jpg',
      './images/placemat-3.jpg',
      './images/placemat-4.jpg',
    ],
    count: 4,
    tags: ['фотореквизит', 'сервировка', 'настенный декор'],
  },
  {
    id: 4,
    name: `Мини-корзинка "Зайка"`,
    category: 'детские товары',
    categoryID: 'children',
    description: [
      `Милая корзинка с ручкой`,
      ``,
      `Назначение:`,
      ``,
      `💡 в качестве подарка под ёлочкой добавит +100 к мимимишности любого ее содержимого 🐰`,
      `💡станет хранительницей детских мелочей или главным героем игр 😊`,
      `💡украсит новогодний или пасхальный стол`,
      ``,
      `Характеристики:`,
      `Высота 9 см. (с ушками 17см)`,
      `Диаметр по дну 8см, по верху 12 см.`,
    ],
    video:
      'https://vk.com/video_ext.php?oid=-211355847&id=456239021&hash=8d4163c98bb91919&hd=2',
    price: 600,
    images: [
      './images/basket-bunny-1.jpg',
      './images/basket-bunny-2.jpg',
      './images/basket-bunny-3.jpg',
    ],
    count: 2,
    tags: ['фотореквизит', 'идея подарка', 'хранение', 'пасха'],
  },
  {
    id: 5,
    name: `Мини-декор "Кролик"`,
    category: 'праздничный декор',
    categoryID: 'decor',
    description: [
      `Кролик из коллекции мини-декора @Sekreta_ecodecor порадует любителей ушастых зверят 🐰`,
      ``,
      `Минимум 5 вариантов применения:`,
      `1. Украшайте новогоднюю ёлку 🎄 или пасхальный стол 🐣`,
      `2. Дарите учителям, воспитателям, руководителям кружков и секций, клиентам в качестве комплимента к основному подарку или заказу 🎁`,
      `3. Сочетайте с другими вариантами мини-декора, чтобы создать гирлянду в детскую 👶🏼`,
      `4. Используйте в качестве фотореквизита`,
      `5. Можно оформить в качестве магнита или топпера🔥`,
      ``,
      `А ещё кролик наверняка понравится малышам и легко может стать участником детских игр🥰`,
      ``,
      `Характеристики:`,
      `🐇Высота 13 см, ширина 7 см.`,
      ``,
      `Хвостик выполнен из хлопкового шпагата.`,
    ],
    video:
      'https://vk.com/video_ext.php?oid=-211355847&id=456239052&hash=06debc6e25fccc83&hd=2',
    price: 250,
    images: [
      './images/rabbit-1.jpg',
      './images/rabbit-2.jpg',
      './images/rabbit-3.jpg',
      './images/rabbit-4.jpg',
      './images/rabbit-5.jpg',
    ],
    count: 5,
    tags: [
      'фотореквизит',
      'идея подарка',
      'новый год',
      'пасха',
      'декор детской',
    ],
  },
  {
    id: 6,
    name: `Набор из 3 новогодних игрушек`,
    category: 'праздничный декор',
    categoryID: 'decor',
    description: [
      `Плетёные игрушки в наборе из трёх штук- необычный декор для самых милых ёлочек🎄`,
      ``,
      `Дополнят вашу собственную ёлку`,
      `или станут трогательным предновогодним подарком для учителей, воспитателей, руководителей кружков и секций, друзей и близких 💛`,
      ``,
      `Набор из трёх игрушек:`,
      `👉🏻 Ангел (высота 10 см., ширина 10см.)`,
      `👉🏻 Звезда (диаметр 7 см., высота 4 см.)`,
      `👉🏻 Олень (высота 22 см., ширина 7 см.)`,
      ``,
      `В стоимость набора входит:`,
      `✅ Комплект из 3 плетёных игрушек`,
      `✅ Оформление в крафт пакет с новогодним декором`,
      `✅ Комплимент к заказу`,
      `✅ Доставка набора в любой город России`,
    ],
    video:
      'https://vk.com/video_ext.php?oid=-211355847&id=456239086&hash=cbd813acad9619f5&hd=2',
    price: 890,
    images: [
      './images/kit-ny3-1.jpg',
      './images/kit-ny3-2.jpg',
      './images/kit-ny3-3.jpg',
      './images/kit-ny3-4.jpg',
    ],
    count: 2,
    tags: ['фотореквизит', 'идея подарка', 'новый год', 'декор детской'],
  },
  {
    id: 7,
    name: `Мини-декор "Балерина"`,
    category: 'праздничный декор',
    categoryID: 'decor',
    description: [
      `Миниатюрная и изящная балерина не оставит равнодушными всех влюблённых в танец.`,
      ``,
      `Минимум 5 вариантов применения:`,
      ``,
      `1. Дарите танцевальным руководителям, маленьким и большим танцорам 🎁`,
      `2. Украшайте новогоднюю ёлку 🎄`,
      `3. Добавляйте в качестве комплимента к основному подарку/заказу`,
      `4. Применяйте как фотореквизит`,
      `5. Используйте с другими вариантами мини-декора, чтобы создать гирлянду в детскую  👧`,
      ``,
      `Характеристики:`,
      `Высота 19 см, ширина 5 см.`,
      `Волосы и пуанты выполнены из хлопкового шпагата.`,
    ],
    video:
      'https://vk.com/video_ext.php?oid=-211355847&id=456239090&hash=7e581ba227c47362&hd=2',
    price: 280,
    images: [
      './images/ballerina-1.jpg',
      './images/ballerina-2.jpg',
      './images/ballerina-3.jpg',
    ],
    count: 3,
    tags: ['фотореквизит', 'идея подарка', 'новый год', 'декор детской'],
  },
  {
    id: 8,
    name: `Мини-декор "Машинка"`,
    category: 'праздничный декор',
    categoryID: 'decor',
    description: [
      `Вашему вниманию представлен седан. Резина всесезонная, подвеска не стучит, ездит без бензина - чудо, а не автомобиль 😄`,
      ``,
      `Минимум 5 вариантов применения:`,
      ``,
      `1. Украсьте этим плетёным декором новогоднюю ёлку 🎄`,
      `2. Дарите! Как самостоятельный подарок или в качестве дополнения к основному подарку/заказу 🎁`,
      `3. Можно сделать в качестве магнита или подвески в машину🔥`,
      `4. Применяйте как фотореквизит`,
      `5. Используйте с другими вариантами мини-декора, чтобы создать гирлянду в детскую  👧`,
      ``,
      `А ещё, такая машинка наверняка понравится малышам, и они с радостью используют ее для своих игр!)`,
      ``,
      `Характеристики:`,
      `Размер 10*7см.`,
    ],
    video:
      'https://vk.com/video_ext.php?oid=-211355847&id=456239052&hash=06debc6e25fccc83&hd=2',
    price: 300,
    images: [
      './images/mini-car-1.jpg',
      './images/mini-car-2.jpg',
      './images/mini-car-3.jpg',
    ],
    count: 3,
    tags: ['фотореквизит', 'идея подарка', 'новый год', 'декор детской'],
  },
  {
    id: 9,
    name: `Мини-декор "Сердце"`,
    category: 'праздничный декор',
    categoryID: 'decor',
    description: [
      `Универсальный декор в виде сердца в натуральном древесном оттенке станет трогательным дополнением к вашему подарку или самостоятельным комплиментом тому, кто дорог и любим.`,
      ``,
      `Минимум 5 вариантов применения:`,
      ``,
      `1. Украсьте этим плетёным декором новогоднюю ёлку 🎄`,
      `2. Дарите! Как самостоятельный подарок или в качестве дополнения к основному подарку/заказу 🎁`,
      `3. Можно сделать в качестве магнита или топпера 🔥`,
      `4. Применяйте как фотореквизит`,
      `5. Используйте с другими вариантами мини-декора, чтобы создать коллекцию игрушек на елку или гирлянду в детскую 👧`,
      ``,
      `Характеристики:`,
      `Размер 9*7см.`,
    ],
    video:
      'https://vk.com/video_ext.php?oid=-211355847&id=456239037&hash=bdca86029407f341&hd=2',
    price: 250,
    images: [
      './images/heart-1.jpg',
      './images/heart-2.jpg',
      './images/heart-3.jpg',
    ],
    count: 3,
    tags: ['фотореквизит', 'идея подарка', 'новый год', 'декор детской'],
  },
  {
    id: 10,
    name: `Мини-декор "Лошадка"`,
    category: 'праздничный декор',
    categoryID: 'decor',
    description: [
      `Трогательная коняшка разбудит в вас ребёнка😊`,
      `Подарит детскую радость и всколыхнёт память добрыми воспоминаниями 🐴`,
      ``,
      `Минимум 5 вариантов применения:`,
      ``,
      `1. Украсьте этим плетёным декором новогоднюю ёлку 🎄`,
      `2. Дарите! Как самостоятельный подарок или в качестве дополнения к основному подарку/заказу 🎁`,
      `3. Можно сделать в качестве магнита 🔥`,
      `4. Применяйте как фотореквизит`,
      `5. Используйте с другими вариантами мини-декора, чтобы создать коллекцию игрушек на елку или гирлянду в детскую 👧`,
      ``,
      `Характеристики:`,
      `Средний размер 17*8 см.`,
      `Грива и хвост выполнены из хлопкового шпагата.`,
    ],
    price: 370,
    images: [
      './images/horse-1.jpg',
      './images/horse-2.jpg',
      './images/horse-3.jpg',
      './images/horse-4.jpg',
    ],
    count: 3,
    tags: ['фотореквизит', 'идея подарка', 'новый год', 'декор детской'],
  },
  {
    id: 11,
    name: `Мини-декор "Олень Аркадий"`,
    category: 'праздничный декор',
    categoryID: 'decor',
    description: [
      `Полюбившийся многим Олень интеллигент и очаровашка😊`,
      ``,
      `Основная деятельность: водитель саней Деда Мороза`,
      ``,
      `В свободное время:`,
      `- украшает своим присутствием новогоднюю ёлку 🎄`,
      `- фотомодель, добавляет +100 к мимимишности любого кадра 🥰`,
      `- главный интеллигент среди магнитов на холодильнике, кухонной вытяжке и магнитной доске 🦌`,
      `- любит дарить эмоции клиентам, друзьям и знакомым в качестве подарка 🎁`,
      ``,
      `О себе:`,
      `Рост 22 см. Ширина 7см`,
      `Неприхотлив, есть и пить не просит.`,
      `Ноги длинные, при большой нагрузке может их поломать 🙈`,
      ``,
      `Есть возможность вырастить оленя побольше или наоборот поменьше, а также другой масти.`,
    ],
    video:
      'https://vk.com/video_ext.php?oid=-211355847&id=456239055&hash=0ea8fcac668b8394&hd=2',
    price: 290,
    images: [
      './images/deer-1.jpg',
      './images/deer-2.jpg',
      './images/deer-3.jpg',
    ],
    count: 5,
    tags: ['фотореквизит', 'идея подарка', 'новый год', 'декор детской'],
  },
  {
    id: 12,
    name: `Мини-декор "Звезда объёмная"`,
    category: 'праздничный декор',
    categoryID: 'decor',
    description: [
      `Универсальный декор в виде звезды в натуральном древесном оттенке дополнит эко-стиль интерьера или может стать отличным фотореквизитом вашей продукции 📷`,
      ``,
      `Звёздочка двухсторонняя, интересно выглядит на обороте👍🏻`,
      ``,
      `Другие варианты использования:`,
      `1. Украсьте этим плетёным декором новогоднюю ёлку 🎄`,
      `2. Дарите! Как самостоятельный подарок или в качестве дополнения к основному подарку/заказу 🎁`,
      `3. Можно сделать в качестве магнита или топпера 🔥`,
      `4. Применяйте как фотореквизит`,
      `5. Используйте с другими вариантами мини-декора, чтобы создать коллекцию игрушек на елку или гирлянду в детскую 👧`,
      ``,
      `Характеристики:`,
      `Размер 7*7см, высота 4 см.`,
    ],
    price: 150,
    images: [
      './images/star-1.jpg',
      './images/star-2.jpg',
      './images/star-3.jpg',
    ],
    count: 5,
    tags: ['фотореквизит', 'идея подарка', 'новый год', 'декор детской'],
  },
  {
    id: 13,
    name: `Корзинка Красной шапочки`,
    category: 'корзины',
    categoryID: 'baskets',
    description: [
      `Для пирожков бабушке и не только:)`,
      ``,
      `Назначение:`,
      `💡на пикник`,
      `💡в лес за грибами, ягодами, подснежниками 😊`,
      `💡хранение овощей, фруктов, сухоцветов, материалов для рукоделия и пр.`,
      `💡в качестве основного подарка или как основа для наполнения`,
      `💡атрибут для фотосессии`,
      ``,
      `Характеристики:`,
      `Размер по дну 22*16 см., по верху 36*24 см.`,
      `Высота 18 см.(с ручкой 32 см)`,
      `Грузоподъемность 5кг.`,
      ``,
      `Возможно исполнение в другом цвете размере, большей грузоподъемности. Корзина может быть дополнена чехлом, обмоткой ручки натуральной кожей`,
    ],
    price: 3000,
    images: [
      './images/little-red-riding-hood-basket-1.jpg',
      './images/little-red-riding-hood-basket-2.jpg',
      './images/little-red-riding-hood-basket-3.jpg',
      './images/little-red-riding-hood-basket-4.jpg',
    ],
    count: 5,
    tags: ['фотореквизит', 'идея подарка', 'хранение', 'пасха', '8 марта'],
  },
  {
    id: 14,
    name: `Ажурная корзина`,
    category: 'корзины',
    categoryID: 'baskets',
    description: [
      `Стильная корзина для белья, пледов, игрушек.`,
      `Можно использовать как корзину для новогодней елки:)`,
      ``,
      `Характеристики:`,
      `Диаметр 30см.`,
      `Высота до ручек 28см.`,
      `Грузоподъемность до 13кг.`,
      `Плетёное дно.`,
      ``,
      `Возможно исполнение с фанерным дном, в другом цвете, размере.`,
      `Корзина может быть дополнена чехлом, крышкой, ручки заменены на кожаные/джутовые.`,
    ],
    video:
      'https://vk.com/video_ext.php?oid=-211355847&id=456239038&hash=c56cb13ed6205946&hd=2',
    price: 3000,
    images: [
      './images/openwork-basket-1.jpg',
      './images/openwork-basket-2.jpg',
      './images/openwork-basket-3.jpg',
    ],
    count: 1,
    tags: ['новый год', 'хранение'],
  },
  {
    id: 15,
    name: `Коточасы`,
    category: 'часы',
    categoryID: 'watch',
    description: [
      `Придутся по вкусу любителям хвостатых мурлык 😻`,
      `Хорошо дополнят интерьер детской комнаты.`,
      ``,
      `Характеристики:`,
      `Диаметр часов 30,5см., ( с декоративным оплетением без учета ушек - 34 см.)`,
      ``,
      `Возможно оплетение выбранных вами часов, в другом цвете лозы.`,
      `Различные вариации дополнительных элементов (ушки, хвостики, рожки, лучики и всё, что угодно:)`,
      ``,
      `Цена указана без учета стоимости самих часов`,
    ],
    price: 2700,
    images: [
      './images/cat-watch-1.jpg',
      './images/cat-watch-2.jpg',
      './images/cat-watch-3.jpg',
    ],
    count: 1,
    tags: ['настенный декор', 'идея подарка'],
  },
  {
    id: 16,
    name: `Мини-декор "Курочка"`,
    category: 'праздничный декор',
    categoryID: 'decor',
    description: [
      `Дополнит своим присутствием тематическую фотокомпозицию, в качестве топпера в букете или как отдельный элемент декора.`,
      `Хорошо дополнят интерьер детской комнаты.`,
      ``,
      `Другие варианты использования:`,
      `- Дарите клиентам в качестве комплимента к основному подарку или заказу 🎁`,
      `- Используйте с другими вариантами мини-декора, чтобы создать гирлянду в детскую 👶🏼`,
      `- Украшайте пасхальный стол 🐣 или новогоднюю ёлку 🎄 `,
      `- Можно оформить в качестве магнита или топпера🔥`,
      ``,
      `А ещё курочка наверняка понравится малышам и легко может стать участником детских игр🥰`,
      ``,
      `Характеристики:`,
      `Высота 9 см, ширина 10 см.`,
    ],
    price: 230,
    images: [
      './images/mini-hen-1.jpg',
      './images/mini-hen-2.jpg',
      './images/mini-hen-3.jpg',
    ],
    count: 1,
    tags: [
      'новый год',
      'идея подарка',
      'фотореквизит',
      'пасха',
      'декор детской',
    ],
  },
  {
    id: 17,
    name: `Сумка-жёлудь`,
    category: 'детские товары',
    categoryID: 'children',
    description: [
      `С такой точно захочется гулять с утра до вечера и хвастаться подружкам 🥰`,
      ``,
      `В комплект к сумочке входит:`,
      `🌷шнурочек через плечо с элементами макраме и деревянными бусинами`,
      `🌷крафтовая упаковка с открыткой`,
      `🌷 декор на шляпке в виде звёздочки`,
      `🌷 вкусный презент внутри`,
    ],
    video:
      'https://vk.com/video_ext.php?oid=-211355847&id=456239068&hash=88aa4f3f53a2caeb&hd=2',
    price: 2000,
    images: [
      './images/acorn-bag-1.jpg',
      './images/acorn-bag-2.jpg',
      './images/acorn-bag-3.jpg',
    ],
    count: 1,
    tags: ['идея подарка', 'фотореквизит', '8 марта'],
  },
  {
    id: 18,
    name: `Поднос для кухни`,
    category: 'изделия для кухни',
    categoryID: 'kitchen',
    description: [
      `Плетеный поднос может стать уютным дополнением вашей кухни.`,
      `Подавайте в нем хлеб и выпечку, выкладывайте фрукты, составьте на него все атрибуты для вкусного чаепития или используйте для подачи ароматного кофе и завтрака в постель:)`,
      ``,
      `Характеристики:`,
      `Диаметр 28см.`,
      `Высота 5см.`,
      `Грузоподъемность до 7кг.`,
      ``,
      `Возможно исполнение в другом цвете и размере, вариант с ручками и без них😌`,
    ],
    price: 1800,
    images: [
      './images/tray-1.jpg',
      './images/tray-2.jpg',
      './images/tray-3.jpg',
    ],
    count: 1,
    tags: ['идея подарка', 'хранение', '8 марта'],
  },
  {
    id: 19,
    name: `Корзина для белья`,
    category: 'корзины',
    categoryID: 'baskets',
    description: [
      `Универсальная и стильная корзина с рельефным крупным плетением подойдёт для любого помещения в доме.`,
      `Особая технология окрашивания материала максимально передаёт эстетику естественных природных оттенков.`,
      ``,
      `Характеристики:`,
      `Диаметр по внешнему краю 29 см, внутренний - 26 см`,
      `Высота 33 см.`,
      ``,
      `Возможно изготовление корзины в нужных вам цветах и размерах`,
    ],
    price: 3000,
    images: [
      './images/laundry-basket-1.jpg',
      './images/laundry-basket-2.jpg',
      './images/laundry-basket-3.jpg',
    ],
    count: 1,
    tags: ['идея подарка', 'хранение'],
  },
  {
    id: 20,
    name: `Прямоугольная корзина-короб`,
    category: 'корзины',
    categoryID: 'baskets',
    description: [
      `Практичная и функциональная корзина в насыщенном цвете с деревянными ручками.`,
      `Благодаря простой форме идеально встанет на полку или в свободную нишу.`,
      `Храните книги, белье, игрушки, используйте в ванной или на кухне для полотенец.`,
      ``,
      `Характеристики:`,
      `Ширина 35 см, высота 25см, глубина с учетом ручек 48 см.`,
      `Плетёное дно`,
      `Грузоподъёмность до 10 кг.`,
      ``,
      `Возможно изготовление с фанерным дном, в нужных вам цветах и размерах.`,
    ],
    price: 3500,
    images: [
      './images/basket-box-1.jpg',
      './images/basket-box-2.jpg',
      './images/basket-box-3.jpg',
    ],
    count: 1,
    tags: ['хранение'],
  },
  {
    id: 21,
    name: `Корзина doorbasket "Сердце"`,
    category: 'корзины',
    categoryID: 'baskets',
    description: [
      `Популярная в США корзина на дверь, может легко вписаться и в российский интерьер.`,
      ``,
      `Как использовать:`,
      `◦ Оформляйте в ней сезонные композиции в виде цветов, сухоцветов или еловых веток`,
      `◦ Используйте в детской или любой другой комнате для хранения`,
      `◦ Удивляйте даря в качестве подарка с оформленной в корзине цветочной или любой другой композицией`,
      ``,
      `Характеристики:`,
      `Высота по передай стенке 24`,
      `По задней 28 см, с ручкой 36 см.`,
      `Ширина 22-23 см`,
      `Глубина 11-14 см.`,
    ],
    price: 2000,
    images: [
      './images/basket-heart-1.jpg',
      './images/basket-heart-2.jpg',
      './images/basket-heart-3.jpg',
    ],
    count: 1,
    tags: [
      'хранение',
      'фотореквизит',
      'настенный декор',
      '8 марта',
      'идея подарка',
    ],
  },
  {
    id: 22,
    name: `Корзина-лукошко`,
    category: 'корзины',
    categoryID: 'baskets',
    description: [
      `Уютное лукошко понравится как взрослым, так и детям.`,
      ``,
      `Как использовать:`,
      `◦ На кухне для яиц, овощей, фруктов`,
      `◦ Для фотосессий`,
      `◦ Для детских игр и хранения мелких игрушек, заколок и резиночек`,
      `◦ Для сезонных композиций на Новый год и Пасху`,
      `◦ В качестве основы для подарка. Заполните полевыми цветами или оформите внутри ценный подарок.`,
      ``,
      `Характеристики:`,
      `Внешний диаметр по верхнему краю корзины 18см.`,
      `Высота 12 см., с ручкой 23 см`,
      `Вместимость до 15 яиц`,
    ],
    video:
      'https://vk.com/video_ext.php?oid=-211355847&id=456239029&hash=24014515e8cb9934&hd=2',
    price: 1500,
    images: [
      './images/basket-basket-1.jpg',
      './images/basket-basket-2.jpg',
      './images/basket-basket-3.jpg',
    ],
    count: 1,
    tags: ['хранение', 'пасха', '8 марта', 'идея подарка', 'новый год'],
  },
  {
    id: 23,
    name: `Часы "Оленёнок"`,
    category: 'часы',
    categoryID: 'watch',
    description: [
      `Хорошо дополнят интерьер детской комнаты или станут милым элементом новогоднего декора.`,
      ``,
      `Рожки можно украшать сезонным декором или сделать гирлянду по низу часов.`,
      ``,
      `Характеристики:`,
      `Диаметр часов 30,5см., ( с декоративным оплетением без учета рожек - 34 см.)`,
      ``,
      `Возможно оплетение выбранных вами часов, в другом цвете лозы, различные вариации дополнительных элементов (ушки, хвостики, рожки, лучики и всё, что угодно:)`,
      `Сами часы не включены в стоимость.`,
    ],
    price: 2700,
    images: [
      './images/watch-deer-1.jpg',
      './images/watch-deer-2.jpg',
      './images/watch-deer-3.jpg',
    ],
    count: 1,
    tags: ['настенный декор', 'декор детской', 'идея подарка', 'новый год'],
  },
];
