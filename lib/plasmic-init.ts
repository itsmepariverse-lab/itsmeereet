import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Scene from "@/components/canvas/Scene";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: process.env.PLASMIC_PROJECT_ID!,
            token: process.env.PLASMIC_PROJECT_API_TOKEN!
        }
    ],
    // Set to true to see unpublished changes in your dev/preview environment
    preview: process.env.NODE_ENV !== "production",
});

// REGISTER YOUR COMPONENTS HERE
// This makes them appear in the Plasmic drag-and-drop menu
PLASMIC.registerComponent(Scene, {
    name: "ThreeJSScene",
    props: {}, // Add props here if your Scene component takes arguments
    importPath: "./components/canvas/Scene",
});

PLASMIC.registerComponent(Header, {
    name: "SiteHeader",
    props: {},
    importPath: "./components/ui/Header",
});

PLASMIC.registerComponent(Footer, {
    name: "SiteFooter",
    props: {},
    importPath: "./components/ui/Footer",
});
