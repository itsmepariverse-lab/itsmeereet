import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'declaration',
    title: 'Declaration',
    type: 'document',
    fields: [
        defineField({
            name: 'statement',
            title: 'Statement',
            type: 'text',
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
    ],
})
