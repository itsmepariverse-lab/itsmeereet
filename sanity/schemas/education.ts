import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        defineField({
            name: 'degree',
            title: 'Degree / Certificate',
            type: 'string',
        }),
        defineField({
            name: 'institution',
            title: 'Institution',
            type: 'string',
        }),
        defineField({
            name: 'status',
            title: 'Status / Grade',
            type: 'string',
        }),
        defineField({
            name: 'year',
            title: 'Year / Duration',
            type: 'string',
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
        }),
    ],
})
