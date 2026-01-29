import fs from "fs/promises";
import path from "path";
import { Product } from "@/types/product";

const dataDir = path.join(process.cwd(), "data");

async function readJson<T>(file: string): Promise<T> {
  const filePath = path.join(dataDir, file);
  const json = await fs.readFile(filePath, "utf-8");
  return JSON.parse(json);
}

export async function getProducts() {
  return readJson<Product[]>("products.json");
}
