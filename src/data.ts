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
    description:
      'Погрузитесь в мир чистого звука с Apple BYZ S852I. Эти наушники обеспечивают великолепное качество воспроизведения с глубокими басами и четкими верхами, а их эргономичный дизайн гарантирует комфортное ношение даже при длительном использовании. Идеально подходят для прослушивания музыки и проведения звонков.',
  },
  {
    id: 2,
    img: earpods1,
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
    description:
      'Apple EarPods – компактные и лёгкие наушники, обеспечивающие чистый и сбалансированный звук. Благодаря удобной форме они надежно сидят в ушах, что делает их отличным выбором для активного использования в движении.',
  },
  {
    id: 3,
    img: earpods2,
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
    description:
      'Apple EarPods – компактные и лёгкие наушники, обеспечивающие чистый и сбалансированный звук. Благодаря удобной форме они надежно сидят в ушах, что делает их отличным выбором для активного использования в движении.',
  },
  {
    id: 4,
    img: byzS8521,
    title: 'Apple BYZ S852I',
    price: 2927,
    rate: 4.7,
    description:
      'Погрузитесь в мир чистого звука с Apple BYZ S852I. Эти наушники обеспечивают великолепное качество воспроизведения с глубокими басами и четкими верхами, а их эргономичный дизайн гарантирует комфортное ношение даже при длительном использовании. Идеально подходят для прослушивания музыки и проведения звонков.',
  },
  {
    id: 5,
    img: earpods1,
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
    description:
      'Apple EarPods – компактные и лёгкие наушники, обеспечивающие чистый и сбалансированный звук. Благодаря удобной форме они надежно сидят в ушах, что делает их отличным выбором для активного использования в движении.',
  },
  {
    id: 6,
    img: earpods2,
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
    description:
      'Apple EarPods – компактные и лёгкие наушники, обеспечивающие чистый и сбалансированный звук. Благодаря удобной форме они надежно сидят в ушах, что делает их отличным выбором для активного использования в движении.',
  },
];

export const WIRELESS_HEADPHONES: IProduct[] = [
  {
    id: 7,
    img: airpods1,
    title: 'Apple AirPods',
    price: 9527,
    rate: 4.7,
    description: '',
  },
  {
    id: 8,
    img: airpods2,
    title: 'GERLAX GH-04',
    price: 6527,
    rate: 4.7,
    description: '',
  },
  {
    id: 9,
    img: borofone,
    title: 'BOROFONE BO4',
    price: 7527,
    rate: 4.7,
    description: '',
  },
];

export const PRODUCTS = {
  headphones: HEADPHONES,
  wirelessHeadphones: WIRELESS_HEADPHONES,
};

export const getProductById = (id: number): IProduct | undefined => {
  const allProducts: IProduct[] = Object.values(PRODUCTS).flat();
  return allProducts.find((product) => product.id === id);
};
