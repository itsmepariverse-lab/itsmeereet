// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "dummy-client-id",
  // Dummy for self-hosted
  token: process.env.TINA_TOKEN || "dummy-token",
  // Dummy for self-hosted
  // Remove contentApiUrlOverride - let TinaCMS use the default client which will call our API route
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  // Search disabled for self-hosted setup
  // search: {
  //     tina: {
  //         indexerToken: process.env.TINA_SEARCH_TOKEN,
  //         stopwordLanguages: ['eng'],
  //     },
  //     indexBatchSize: 100,
  //     maxSearchIndexFieldLength: 100,
  // },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "profile",
        label: "Profile",
        path: "content/profile",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true
          },
          {
            type: "string",
            name: "role",
            label: "Role",
            required: true
          },
          {
            type: "string",
            name: "summary",
            label: "Professional Summary",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "email",
            label: "Email"
          },
          {
            type: "string",
            name: "phone",
            label: "Phone"
          },
          {
            type: "image",
            name: "image",
            label: "Profile Image"
          },
          {
            type: "object",
            name: "strengths",
            label: "Strengths",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "Strength" };
              }
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description"
              }
            ]
          }
        ]
      },
      {
        name: "experience",
        label: "Experience",
        path: "content/experience",
        format: "md",
        fields: [
          {
            type: "string",
            name: "role",
            label: "Role",
            required: true
          },
          {
            type: "string",
            name: "company",
            label: "Company",
            required: true
          },
          {
            type: "string",
            name: "duration",
            label: "Duration"
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            list: true,
            ui: {
              component: "list"
            }
          },
          {
            type: "number",
            name: "order",
            label: "Order"
          }
        ]
      },
      {
        name: "education",
        label: "Education",
        path: "content/education",
        format: "md",
        fields: [
          {
            type: "string",
            name: "degree",
            label: "Degree / Certificate",
            required: true
          },
          {
            type: "string",
            name: "institution",
            label: "Institution",
            required: true
          },
          {
            type: "string",
            name: "status",
            label: "Status / Grade"
          },
          {
            type: "string",
            name: "year",
            label: "Year / Duration"
          },
          {
            type: "number",
            name: "order",
            label: "Order"
          }
        ]
      },
      {
        name: "skill",
        label: "Skills",
        path: "content/skills",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Skill Title",
            required: true
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["technical", "soft", "tool"]
          }
        ]
      },
      {
        name: "hobby",
        label: "Hobbies",
        path: "content/hobbies",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Hobby Name",
            required: true
          },
          {
            type: "string",
            name: "icon",
            label: "Emoji Icon"
          }
        ]
      },
      {
        name: "declaration",
        label: "Declaration",
        path: "content/declaration",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "string",
            name: "statement",
            label: "Statement",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "name",
            label: "Name"
          }
        ]
      },
      {
        name: "web3_page",
        label: "Web3 Page",
        path: "content/web3",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "tagline_top",
                label: "Top Tagline"
              },
              {
                type: "string",
                name: "name",
                label: "Name Display"
              },
              {
                type: "string",
                name: "tagline_bottom",
                label: "Bottom Tagline"
              }
            ]
          },
          {
            type: "object",
            name: "marquee",
            label: "Marquee",
            fields: [
              {
                type: "string",
                name: "items",
                label: "Items",
                list: true
              }
            ]
          },
          {
            type: "object",
            name: "brand_bio",
            label: "Brand Bio",
            fields: [
              {
                type: "string",
                name: "bio",
                label: "Bio Text",
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "object",
            name: "timeline",
            label: "Timeline",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "Experience" };
              }
            },
            fields: [
              {
                type: "string",
                name: "year",
                label: "Year"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "company",
                label: "Company"
              },
              {
                type: "string",
                name: "description",
                label: "Description"
              }
            ]
          },
          {
            type: "object",
            name: "expertise",
            label: "Expertise",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.category || "Category" };
              }
            },
            fields: [
              {
                type: "string",
                name: "category",
                label: "Category"
              },
              {
                type: "string",
                name: "items",
                label: "Items",
                list: true
              }
            ]
          },
          {
            type: "object",
            name: "tech_stack",
            label: "Tech Stack",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.category || "Category" };
              }
            },
            fields: [
              {
                type: "string",
                name: "category",
                label: "Category"
              },
              {
                type: "string",
                name: "tools",
                label: "Tools",
                list: true
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
