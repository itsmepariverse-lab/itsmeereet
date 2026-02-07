import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'hobby',
    title: 'Hobby',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Hobby Name',
            type: 'string',
        }),
        defineField({
            name: 'icon',
            title: 'Emoji Icon',
            type: 'string',
        }),
    ],
})
