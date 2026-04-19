// src/utils/constants.js
export const COMPANY_INFO = {
  legalName: 'NETAI STATIONERY WORKS PRIVATE LIMITED',
  tradeName: 'NETAI STATIONERY WORKS PVT. LTD.',
  gst: '19AACCN1563G1Z1',
  established: '2025',
  email: 'nswplsaha@yahoo.com',
  phones: ['7044189887', '9830770400', '7605818214', '7044811122'],
  address: {
    principal: {
      building: '14 B',
      street: 'PATWAR BAGAN LANE',
      area: 'SEALDAH',
      city: 'Kolkata',
      district: 'Kolkata',
      state: 'West Bengal',
      pincode: '700009'
    },
    additional: {
      building: 'A-339',
      street: 'Thakdari Road, HANAPARA KRISHNAPUR',
      landmark: 'The Pawsitive Place, Kestopur',
      area: 'New Town',
      city: 'Kolkata',
      district: 'North Twenty Four Parganas',
      state: 'West Bengal',
      pincode: '700102'
    }
  }
};

export const TEAM_MEMBERS = {
  directors: [
    {
      name: 'ADHIR KUMAR SAHA',
      designation: 'Managing Director',
      phone: '7044189887'
    },
    {
      name: 'KAMAL KUMAR SAHA',
      designation: 'CEO',
      phone: '9830770400'
    },
    {
      name: 'KANAN BALA SAHA',
      designation: 'Director',
      phone: '7605818214'
    },
    {
      name: 'ANTARA SAHA',
      designation: 'Director',
      phone: '7044811122'
    }
  ],
  management: [
    {
      name: 'CHIRANJIT DEY',
      designation: 'Manager'
    },
    {
      name: 'BAPPADITYA MAITY',
      designation: 'Accountant'
    },
    {
      name: 'AYAN SAHA',
      designation: 'Accountant'
    }
  ],
  productionUnit: [
    { name: 'MD PARWEZ', role: 'Production Worker' },
    { name: 'MD HALIM', role: 'Production Worker' },
    { name: 'RAJU GAZI', role: 'Production Worker' },
    { name: 'SAFIK GAZI', role: 'Production Worker' }
  ]
};

export const PRODUCT_BRANDS = [
  'NANDITA GOLD',
  'NANDITA SUPER',
  'NANDITA JUMBO',
  'VIKRAM',
  'PARKAR',
  'ARPITA',
  'ARTMAN',
  'WRITER',
  'KALPATARU',
  'KAMAL BAHADUR'
];

export const PRODUCT_SPECS = {
  'NANDITA JUMBO': {
    size: '17 x 27',
    pages: [80, 120, 160, 180, 200, 240, 300, 320, 340],
    binding: ['RL', 'PL']
  },
  'NANDITA SUPER': {
    size: '17 x 27',
    pages: [80, 120, 160, 200, 240, 300, 320, 340],
    binding: ['RL', 'PL']
  },
  'NANDITA GOLD': {
    sizes: ['16 x 26', '17 x 27'],
    pages: [80, 120, 160, 200, 240, 300, 320, 340, 400],
    binding: ['RL', 'PL']
  }
};

export const NAVIGATION_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SERVICES', path: '/services' },
  { name: 'PRODUCTS', path: '/products' },
  { name: 'CONTACT', path: '/contact' }
];