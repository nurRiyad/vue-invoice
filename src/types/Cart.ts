import type { Product } from "@/types/Product";

export interface Cart {
  id: number;
  products: Array<Product>;
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
