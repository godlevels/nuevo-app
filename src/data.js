import HeroLine from './assets/img/line-1.svg'
import Cust from './assets/img/cut.svg'
import Sele from './assets/img/sele.svg'
import Sty from './assets/img/solu.svg'
import Cons from './assets/img/conc.svg'
import Sup from './assets/img/sup.svg'
import Gold from './assets/img/products/gold.svg'
import Gold2 from './assets/img/products/gold2.svg'
import Bed from './assets/img/products/sidebed.svg'
import Bed2 from './assets/img/products/sidebed2.svg'
import Mirror from './assets/img/products/mirror.svg'
import Mirror2 from './assets/img/products/mirror2.svg'
import DiaHead from './assets/img/products/diahead.svg'
import DiaHead2 from './assets/img/products/diahead2.svg'
import Cart from './assets/img/products/cart.svg'
import Fave from './assets/img/products/fav.svg'
import RomanArt from './assets/img/roman.svg'
// import RomanArt2 from './assets/img/roman2.svg'
import FireArt from './assets/img/fire.svg'
// import FireArt2 from './assets/img/fire2.svg'
import Ship from './assets/img/ship.svg'
import Pay from './assets/img/pay.svg'
import Back from './assets/img/back.svg'
import Fine from './assets/img/fine.svg'



export const navigation = [
    {
      name: 'product',
      href: 'product',
    },
    {
      name: 'inspiration',
      href: 'inspiration',
    },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'contact',
      href: 'contact',
    },
];
  
export const hero = {
  image: HeroLine,
  title: 'Make your house into a home',
  buttonText: 'Shop Now',
};

export const features = [
  {
    img: Cust,
    text: 'customization',
  },
  {
    img: Sele,
    text: 'product selection',
  },
  {
    img: Sty,
    text: 'styling solution',
  },
  {
    img: Cons,
    text: 'design concept',
  },
  {
    img: Sup,
    text: 'technical support',
  },
];

export const productsData = [
  {
    id: 1,
    favImg: Fave,
    img: Gold,
    img2: Gold2,
    title: 'MEEMA',
    subtitle: 'Lorem ipsum dolor sit amet consectetur. Tellus consectetur aliquet elementum.',
    isNew: true,
    price: '$50.00',
    cartIcon: Cart
  },
  {
    id: 2,
    favImg: Fave,
    img: Bed,
    img2: Bed2,
    title: 'MEEMA',
    subtitle: 'Lorem ipsum dolor sit amet consectetur. Tellus consectetur aliquet elementum.',
    isNew: true,
    price: '$50.00',
    cartIcon: Cart
  },
  {
    id: 3,
    favImg: Fave,
    img: Mirror,
    img2: Mirror2,
    title: 'MEEMA',
    subtitle: 'Lorem ipsum dolor sit amet consectetur. Tellus consectetur aliquet elementum.',
    isNew: true,
    price: '$50.00',
    cartIcon: Cart 
  },
  {
    id: 4,
    favImg: Fave,
    img: DiaHead,
    img2: DiaHead2,
    title: 'MEEMA',
    subtitle: 'Lorem ipsum dolor sit amet consectetur. Tellus consectetur aliquet elementum.',
    isNew: true,
    price: '$50.00',
    cartIcon: Cart
  },
]

export const artCollections = [
  {
    id: 1,
    img: RomanArt,
    // img2: RomanArt2,
    btn: 'explore'
  },
  {
    id: 2,
    img: FireArt,
    // img2: FireArt2,
    btn: 'explore'
  },
]

export const chooseData = [
  {
    id: 1,
    icon: Ship,
    title: 'Free Shiping',
    desc: 'Free Shipping when you purchase product above $200',
  },
  {
    id: 2,
    icon: Pay,
    title: 'Easy Payment',
    desc: 'Make Payment of Good Purchased easily, accept all Credit and Debit Card.',
  },
  {
    id: 3,
    icon: Back,
    title: 'Money-Back Gurantee',
    desc: 'Get your money back when you don’t feel satisfied with product purchased.',
  },
  {
    id: 4,
    icon: Fine,
    title: 'Finest Quality',
    desc: 'Get the best and the finest quality of our products',
  },
]


