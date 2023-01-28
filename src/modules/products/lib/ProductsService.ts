import { client } from "../../utils/client";
import { Product } from "../utils/types";

export class ProductService {
  private readonly client = client;

  async getProducts(limit: number, skip: number): Promise<Product[]> {
    const { data } = await this.client.get(
      `/products?limit=${limit}&skip=${skip}`
    );

    return data.products;
  }
}
