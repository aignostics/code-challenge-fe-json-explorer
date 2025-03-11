import { JsonValue } from "../../types";

export const sampleData: JsonValue = {
  name: 'Product Catalog',
  version: 2.1,
  active: true,
  lastUpdated: '2023-09-15',
  categories: [
    {
      id: 1,
      name: 'Electronics',
      items: [
        {
          id: 101,
          name: 'Smartphone',
          price: 699.99,
          inStock: true,
          specs: {
            brand: 'TechX',
            model: 'X100',
            storage: '128GB',
            colors: ['Black', 'Silver', 'Blue'],
          },
        },
        {
          id: 102,
          name: 'Laptop',
          price: 1299.99,
          inStock: false,
          specs: {
            brand: 'PowerBook',
            model: 'Air15',
            cpu: 'i7',
            ram: '16GB',
            storage: '512GB SSD',
          },
        },
      ],
    },
    {
      id: 2,
      name: 'Home & Kitchen',
      items: [
        {
          id: 201,
          name: 'Coffee Maker',
          price: 89.99,
          inStock: true,
          specs: null,
        },
      ],
    },
  ],
  metadata: {
    tags: ['products', 'inventory', 'retail'],
    internal: {
      ownerId: 'admin',
      created: '2023-01-10',
      notes: 'Updated with Q3 inventory',
    },
  },
};
