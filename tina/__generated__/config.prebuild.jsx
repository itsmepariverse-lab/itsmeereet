// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
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
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ["eng"]
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
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
      }
    ]
  }
});
export {
  config_default as default
};
