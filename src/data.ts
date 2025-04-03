import byzS8521 from './assets/byz-s8521.png';
import earpods1 from './assets/earpods_1.png';
import earpods2 from './assets/earpods_2.png';
import airpods1 from './assets/airpods_1.png';
import airpods2 from './assets/airpods_2.png';
import borofone from './assets/borofone.png';
import { IProduct } from './types.ts';
export const HEADPHONES: IProduct[] = [
  {
    id: 1,
    img: byzS8521,
    title: 'Apple BYZ S852I',
    price: 2927,
    rate: 4.7,
    old_price: 3527,
  },
  {
    id: 2,
    img: earpods1,
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
  },
  {
    id: 3,
    img: earpods2,
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
  },
  {
    id: 4,
    img: byzS8521,
    title: 'Apple BYZ S852I',
    price: 2927,
    rate: 4.7,
  },
  {
    id: 5,
    img: earpods1,
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
  },
  {
    id: 6,
    img: earpods2,
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
  },
];

export const WIRELESS_HEADPHONES: IProduct[] = [
  {
    id: 1,
    img: airpods1,
    title: 'Apple AirPods',
    price: 9527,
    rate: 4.7,
  },
  {
    id: 2,
    img: airpods2,
    title: 'GERLAX GH-04',
    price: 6527,
    rate: 4.7,
  },
  {
    id: 3,
    img: borofone,
    title: 'BOROFONE BO4',
    price: 7527,
    rate: 4.7,
  },
];
