import { client } from "../../utils/client";
import { Product } from "../utils/types";

export class ProductService {
  private readonly client = client;

  async products(limit: number): Promise<Product[]> {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}`
    );
    const data = await response.json();
    console.log("data", data.products);

    return data.products;
  }
}
