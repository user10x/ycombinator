import {defineType, defineField, defineArrayMember} from "sanity";
import {UserIcon} from "lucide-react";

export const product = defineType({
    name: "author",
    type: "document",
    title: "Author",
    icon: UserIcon,
    fields: [
        defineField({
            name: "id",
            type: "number",
        }),
        defineField({
            name: "name",
            type: "string",
        }),
        defineField({
            name: "username",
            type: "string",
        }),
        defineField({
            name: "image",
            type: "url",
        }),
        defineField({
            name: "email",
            type: "string",
        }),
        defineField({
            name: "bio",
            type: "text",
        }),

        defineField({
            name: "tags",
            type: "array",
            title: "Tags for item",
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'tag',
                    fields: [
                        {type: 'string', name: 'label'},
                        {type: 'string', name: 'value'},
                    ]
                })
            ]
        }),

    ],
    preview: {
        select: {
            title: 'name',
        }
    }

})