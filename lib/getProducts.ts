import fs from "fs/promises";
import path from "path";

const dataDir = path.join(process.cwd(), "data");

interface Product {
  id: string;
  orgId: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  stockStatus: string;
  featured: boolean;
  tags: string[];
}

async function readJson<T>(file: string): Promise<T> {
  const filePath = path.join(dataDir, file);
  const json = await fs.readFile(filePath, "utf-8");
  return JSON.parse(json);
}

export async function getProducts() {
  return readJson<Product[]>("products.json");
}
