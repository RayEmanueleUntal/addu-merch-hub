import fs from "fs/promises";
import path from "path";

const dataDir = path.join(process.cwd(), "data");

interface Org {
  id: string;
  name: string;
  slug: string;
  description: string;
  logo: string;
  location: { placeName: string; address: string };
  socials: { facebook: string };
}

async function readJson<T>(file: string): Promise<T> {
  const filePath = path.join(dataDir, file);
  const json = await fs.readFile(filePath, "utf-8");
  return JSON.parse(json);
}

export async function getOrgs() {
  return readJson<Org[]>("orgs.json");
}
