import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Thekua',
    description: 'Traditional wheat-based Thekua made with pure desi ghee, jaggery, and cardamom. Perfect for Chhath Puja offerings.',
    price: 250,
    image: 'https://cdn.create.vista.com/api/media/medium/585111428/stock-photo-thekua-indian-sweet-dish-popular-uttarpradesh-bihar-jharkhand-offering-chhat?token=',
    category: 'thekua',
    type: 'Classic',
    popular: true,
    rating: 4.8,
    reviews: [
      {
        id: 't1r1',
        user: 'Ritu Sharma',
        rating: 5,
        comment: 'Perfectly made, reminded me of my grandmother\'s recipe!',
        date: '2024-10-12'
      }
    ]
  },
  {
    id: '2',
    name: 'Coconut Thekua',
    description: 'Traditional Thekua enriched with freshly grated coconut and cardamom for a tropical twist.',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/717VAkwUyjL._SX679_.jpg',
    category: 'thekua',
    type: 'Coconut',
    rating: 4.6
  },
  {
    id: '3',
    name: 'Jaggery Thekua',
    description: 'Made with traditional jaggery for a rich, caramel-like sweetness and enriched with dry fruits.',
    price: 280,
    image: 'https://nuttyyogi.com/cdn/shop/articles/Untitled_design_70.png?v=1696488735',
    category: 'thekua',
    type: 'Jaggery',
    rating: 4.5
  },
  {
    id: '4',
    name: 'Mawa Thekua',
    description: 'Luxurious version with khoya (mawa) for a rich and melt-in-mouth experience.',
    price: 350,
    image: 'https://foodfoodonlyfood.wordpress.com/wp-content/uploads/2023/11/1.jpg?w=714',
    category: 'thekua',
    type: 'Mawa',
    popular: true,
    rating: 4.9
  },
  {
    id: '5',
    name: 'Dry Fruit Thekua',
    description: 'Premium Thekua loaded with almonds, cashews, and pistachios.',
    price: 400,
    image: 'https://i.pinimg.com/736x/39/1b/48/391b485970e8dcdd2f41636fe121430a.jpg',
    category: 'thekua',
    type: 'Dry Fruit',
    rating: 4.7
  },
  {
    id: '6',
    name: 'Besan Laddoo',
    description: 'Classic laddoo made with roasted gram flour, ghee, and sugar.',
    price: 280,
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjcPCefeQK8R-OgjN2SDqA5grMXQqW1W5iFuTbZc2n6bEyvZA2aeHyzNxkiluS0tRmE1lWXJ9ZPf86MhtfjtvwTDeFe0lqyFBjLN8tBvL40nE4JJsPrZ3AKkazP6kLI6qynxOp6WcthnkC/s1600-rw/Besan+Ladoo+Recipe+Festive+Sweet+4.jpg',
    category: 'laddoo',
    type: 'Besan',
    popular: true,
    rating: 4.8
  },
  {
    id: '7',
    name: 'Rava Laddoo',
    description: 'Delicious laddoo made with roasted semolina, sugar, and flavored with cardamom.',
    price: 260,
    image: 'https://www.sharmispassions.com/wp-content/uploads/2010/08/RavaLaddu9-e1660536595224.jpg',
    category: 'laddoo',
    type: 'Rava',
    rating: 4.5
  },
  {
    id: '8',
    name: 'Coconut Laddoo',
    description: 'Sweet and aromatic laddoo made with fresh coconut and condensed milk.',
    price: 300,
    image: 'https://aromaticessence.co/wp-content/uploads/2021/07/coconut_laddoo_featured.jpg',
    category: 'laddoo',
    type: 'Coconut',
    rating: 4.6
  },
  {
    id: '9',
    name: 'Boondi Laddoo',
    description: 'Traditional laddoo made with tiny sweet fried gram flour balls.',
    price: 270,
    image: 'https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2019/10/Boondi-Laddu-2.jpg?resize=683%2C1024&ssl=1',
    category: 'laddoo',
    type: 'Boondi',
    popular: true,
    rating: 4.7
  },
  {
    id: '10',
    name: 'Dates & Nuts Laddoo',
    description: 'Healthy laddoo made with dates and mixed nuts with no added sugar.',
    price: 350,
    image: 'https://code2cook.com/wp-content/uploads/2020/07/sugar-free-dry-fruits-laddu-recipe-678x1024.jpg',
    category: 'laddoo',
    type: 'Dates & Nuts',
    rating: 4.9
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getPopularProducts = () => {
  return products.filter(product => product.popular);
};