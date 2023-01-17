export interface IProduct {
  id: number;
  name: string;
  category: string;
  categoryID: string;
  description: string[];
  price: number;
  images: string[];
  count: number;
  tags: string[];
  video?: string;
}
