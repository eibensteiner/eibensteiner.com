import { Client } from '@notionhq/client'

export default defineEventHandler((event) => {
    const query = getQuery(event)
    const user = query.user
    const notion = new Client({ auth: process.env.NOTION_API_TOKEN })

    const response = notion.databases.query({
        database_id: process.env.NOTION_POST_DATABASE!,
        filter: {
            property: 'People',
            select: {
                equals: user as string,
            },
        },
        sorts: [
            {
                property: 'Date',
                direction: 'descending',
            },
        ],
        page_size: 3,
        start_cursor: query.cursor != 'undefined' ? query.cursor?.toString() : undefined,
    })

    return response
})