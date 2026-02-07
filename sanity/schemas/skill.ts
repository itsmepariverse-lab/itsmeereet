import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Skill Title',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Technical', value: 'technical' },
                    { title: 'Soft Skill', value: 'soft' },
                    { title: 'Tool', value: 'tool' },
                ],
            },
        }),
    ],
})
