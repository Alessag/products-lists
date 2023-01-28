import { client } from "../../utils/client";
import { Product } from "../utils/types";

export class ProductService {
  private readonly client = client;

  async products(limit: number, skip: number): Promise<Product[]> {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const data = await response.json();

    return data.products;
  }
}
