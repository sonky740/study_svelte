import { writable } from 'svelte/store';

const cart = writable([
  {
    id: 'p10',
    title: 'Test',
    price: 9.99,
  },
  {
    id: 'p11',
    title: 'Test',
    price: 9.99,
  },
]);

export default cart;
