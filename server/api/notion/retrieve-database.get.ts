import { Client } from '@notionhq/client'

export default defineEventHandler((event) => {
    const notion = new Client({ auth: process.env.NOTION_API_TOKEN })
    const response = notion.databases.retrieve({
        database_id: process.env.NOTION_POST_DATABASE!,
    })
    return response
})
