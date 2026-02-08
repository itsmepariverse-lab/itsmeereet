import { createClient } from "tinacms/dist/client";
import { queries } from "@/tina/__generated__/types";

// Helper/Polyfill for determining the absolute URL
const getApiUrl = () => {
    if (process.env.NEXT_PUBLIC_TINA_API_URL) {
        return process.env.NEXT_PUBLIC_TINA_API_URL;
    }

    const isLocal = process.env.NODE_ENV === "development";
    // In Vercel, VERCEL_URL is provided (without https://)
    const base = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : isLocal
            ? "http://localhost:3000"
            : ""; // Fallback or handle error

    return `${base}/api/tina/graphql`;
};

export const client = createClient({
    url: getApiUrl(),
    token: process.env.TINA_TOKEN || "dummy-token",
    queries,
});

export default client;
