import { MeiliSearch } from 'meilisearch'

const actions = [
    {
        id: Math.floor(Math.random() * 1000),
        name: 'search',
        description: 'Search for a term',
    },
    {
        id: Math.floor(Math.random() * 1000),
        name: 'add',
        description: 'Add a new document',
    },
    {
        id: Math.floor(Math.random() * 1000),
        name: 'delete',
        description: 'Delete a document',
    },
    {
        id: Math.floor(Math.random() * 1000),
        name: 'update',
        description: 'Update a document',
    },
    {
        id: Math.floor(Math.random() * 1000),
        name: 'list',
        description: 'List all documents',
    },
]
const userId = '2'

const client = new MeiliSearch({ host: `http://127.0.0.1:7700` })
const add = await client.index(userId).addDocuments(actions)
console.log(add)
const res = await client.index(userId).search('search')
console.log(res)