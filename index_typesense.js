import Typesense from "typesense";

const actions = [
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    name: "search",
    description: "Search for a term",
  },
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    name: "add",
    description: "Add a new document",
  },
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    name: "delete",
    description: "Delete a document",
  },
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    name: "delete",
    description: "Delete a tenant",
  },
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    name: "pablo",
    description: "Delete a customer",
  },
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    name: "delete",
    description: "pedro a bs",
  },
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    name: "update",
    description: "Update a document",
  },
  {
    id: `${Math.floor(Math.random() * 1000)}`,
    name: "list",
    description: "List all documents",
  },
];
const userId = "3";

const schema = {
  name: userId,
  fields: [{ name: ".*", type: "auto" }],
};

const typesense = new Typesense.Client({
  nodes: [
    {
      host: "localhost",
      port: "8108",
      protocol: "http",
    },
  ],
  apiKey: "pedro",
  numRetries: 3,
  connectionTimeoutSeconds: 120,
});

try {
    // Delete if the collection already exists from a previous example run
    await typesense.collections(userId).delete()
  } catch (error) {
    // do nothing
  }

const result = await typesense.collections().create(schema)
console.log(result)

const r = await typesense.collections(userId).documents().import(actions, {action: 'upsert'})
console.log(r)

const docs = await typesense.collections(userId).documents().search({
    q: 'delete',
    query_by: "description, name",
    filter_by: 'name: [pablo, delete]'
})
console.log(docs)