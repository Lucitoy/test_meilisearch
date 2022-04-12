import { MeiliSearch } from "meilisearch";

const actions = [
  {
    id: Math.floor(Math.random() * 1000),
    name: "search",
    description: "Search for a term",
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "add",
    description: "Add a new document",
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "delete",
    description: "Delete a document",
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "delete",
    description: "Delete a tenant",
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "delete",
    description: "Delete a customer",
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "delete",
    description: "Delete a bs",
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "update",
    description: "Update a document",
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "list",
    description: "List all documents",
  },
];
const userId = "2";

const client = new MeiliSearch({ host: `http://127.0.0.1:7700` });
const index = await client.getIndex(userId);
await index.addDocuments(actions)

await index.updateFilterableAttributes(["name", "description"]);
const attributes = await index.getFilterableAttributes();

console.log(attributes)
const res = await index.search("d", { filter: ["name = delete"] });
console.log(res);

await client.index(userId).deleteAllDocuments()