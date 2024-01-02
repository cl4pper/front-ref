export type Item = {
  id: number,
  label: string,
  createdAt: Date,
  updateddAt: Date,
};

export type Data = {
  items: Item[],
};

export const MOCK: Item[] = [
  {
    id: 1,
    label: 'Book',
    createdAt: new Date(),
    updateddAt: new Date(),
  },
  {
    id: 2,
    label: 'Notebook',
    createdAt: new Date(),
    updateddAt: new Date(),
  },
  {
    id: 3,
    label: 'Pencil',
    createdAt: new Date(),
    updateddAt: new Date(),
  },
];
