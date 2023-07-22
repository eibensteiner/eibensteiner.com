import { Client } from '@notionhq/client'

export default defineEventHandler((event) => {
    // Extract the query from the event
    const query = getQuery(event)

    // Extract the user from the query
    const user = query.user

    // Create a new Notion client instance with the API token
    const notion = new Client({ auth: process.env.NOTION_API_TOKEN })

    // Query the Notion database
    const response = notion.databases.query({
        database_id: process.env.NOTION_POST_DATABASE!,
        filter: {
            property: 'People',
            multi_select: {
                contains: user as string,
            },
        },
        sorts: [
            {
                property: 'Date',
                direction: 'descending',
            },
        ],
        page_size: 20,
        // Check if the cursor is defined in the query, and convert it to a string
        start_cursor: query.cursor != 'undefined' ? query.cursor?.toString() : undefined,
    })

    // Return the response from the Notion database query
    return response
})
