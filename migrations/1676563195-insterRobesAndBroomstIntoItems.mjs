const items = [
  {
    id: 5,
    title: 'Magical_Dress',
    type: 'Robe',
    description:
      'A witch robe is a must-have for any witch looking to unleash her full magical potential. This robe is the perfect combination of tradition and style, allowing its wearer to look fashionable and powerful when conducting magical rituals. With its floor-length design, fine fabric, and intricate embroidery, this magical clothing item will make any witch feel comfortable and confident.',
    image_link: '/robes/action-witch-robe.jpg',
    price: 50,
  },
  {
    id: 6,
    title: 'Dark_Witch',
    type: 'Robe',
    description:
      "This dark witch robe is the perfect magical clothing for any witch practicing the dark arts. Made from durable and breathable fabric to keep you comfortable, this robe is designed to give you the best in darkness intimidation. Whether you're casting a spell or attending a ritual, this robe can be trusted to do its part.",
    image_link: '/robes/black-witch-robe.jpg',
    price: 75,
  },
  {
    id: 7,
    title: 'Luxury_Witch',
    type: 'Robe',
    description:
      'This exquisite witch robe of luxurious fabric is crafted to bring you the highest level of magical comfort. It is specially designed to immobilize the wearer and the energy field around him or her, allowing the most powerful of magical rituals to be performed. Combining the tradition of classic magic with the comfort of modern style, this robe is the perfect magical clothing choice for witches of all kinds. ',
    image_link: '/robes/luxury-witch-robe.jpg',
    price: 1750,
  },
  {
    id: 7,
    title: 'Casual_Wizard',
    type: 'Robe',
    description:
      'Who doesn`t love clothing that is both comfortable and magical? Our casual wizard robe is made from the highest quality materials, ensuring maximum comfort for any ritual. Step up your fashion game with this magical clothing!',
    image_link: '/robes/casual-wizard-robe.jpg',
    price: 70,
  },
  {
    id: 8,
    title: 'Luxury_Wizard',
    type: 'Robe',
    description:
      'Indulge in the ultimate luxury of this grandiose wizard robe. The exquisite fabric is crafted to provide you with unparalleled comfort and elegance. You will exude a powerful and confident aura of magic as you wear this robe, ideal for any formal occasion. A majestic piece of magical clothing, you can be sure that all other wizards will be in awe of your stylish sophistication.',
    image_link: '/robes/luxury-wizard-robe.jpg',
    price: 1795,
  },
  {
    id: 9,
    title: 'Magical_Robe',
    type: 'Robe',
    description:
      "Ready to really wow them at your next magical gathering? This wizard robe has been designed with the modern wizard in mind! It's the perfect choice for anyone in search of some magical clothing with a level of sophistication and class. Luxuriously soft yet supportive fabric will make sure you look and feel your best no matter the occasion! ",
    image_link: '/robes/slender-wizard-robe.jpg',
    price: 50,
  },
  {
    id: 10,
    title: 'Cyber-Flyer_3000',
    type: 'Broom',
    description:
      'Soar the skies above in style with the revolutionary Cyber Flyer 3000. A high tech magical broom built specifically for flying wizards and witches, the Cyber Flyer 3000 provides maneuverability and sheer pleasure like a modern masterpiece ought to. With its sleek and advanced specs, the Cyber Flyer 3000 will turn heads and make flying an affordable, smooth and safe pleasure. Get ready to revolutionize the way you fly. ',
    image_link: '/brooms/cyber-broom.jpg',
    price: 2500,
  },
  {
    id: 11,
    title: 'Speed_Master',
    type: 'Broom',
    description:
      'Are you a wizard or witch looking to experience the ultimate speed and thrill? Look no further than the Speed Master: a magical broom that promises ultra fast flying! With its incredible power, Speed Master will revolutionize how you travel and will make your trips faster than ever before. Let us transport you to a new realm of flight and speed with our Speed Master - the ultimate experience for all wizards and witches!',
    image_link: '/brooms/Speed-master-broom.jpg',
    price: 2000,
  },
  {
    id: 12,
    title: 'Super_Floater',
    type: 'Broom',
    description:
      'Experience long-distance flying like never before with the Super Floater, the magical broom perfect for wizards and witches in search of thrilling adventure! With advanced sorcery and a sturdy design, this long distance broom is perfect for flying far and wide to explore unknown lands and embark on the journey of a lifetime! ',
    image_link: '/brooms/super-floater-broom.jpg',
    price: 450,
  },
  {
    id: 13,
    title: 'Wizard_Copter',
    type: 'Broom',
    description:
      'Discover the power of magical flight with Wizard Copter! Our unique invention harnesses the power of rotating the whole wizard/witch for an amazing experience. Unleash your inner helicopter with the thrill of flying high in the sky! ',
    image_link: '/brooms/wizard-copter-broom.jpg',
    price: 300,
  },
];

export async function up(sql) {
  await sql` INSERT INTO items ${sql(
    items,
    'title',
    'type',
    'description',
    'image_link',
    'price',
  )}
  `;
}

export async function down(sql) {
  for (const newItem of items) {
    await sql`
    DELETE FROM Items WHERE id = ${newItem.id}
    `;
  }
}
