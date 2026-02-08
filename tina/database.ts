import { createDatabase, createLocalDatabase } from "@tinacms/datalayer";
import { GitHubProvider } from "tinacms-gitprovider-github";
import { RedisLevel } from "upstash-redis-level";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";

export default isLocal
    ? createLocalDatabase()
    : createDatabase({
        gitProvider: new GitHubProvider({
            repo: process.env.GITHUB_REPO!,
            owner: process.env.GITHUB_OWNER!,
            token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN!,
            branch,
        }),
        databaseAdapter: new RedisLevel({
            redis: {
                url: (() => {
                    const url = process.env.STORAGE_KV_REST_API_URL || process.env.KV_REST_API_URL || process.env.KV_URL;
                    if (!url) {
                        console.error("❌ ERROR: STORAGE_KV_REST_API_URL (or fallback) is missing or empty.");
                        throw new Error("Missing STORAGE_KV_REST_API_URL environment variable. Please add it to your Vercel project settings.");
                    }
                    return url;
                })(),
                token: (() => {
                    const token = process.env.STORAGE_KV_REST_API_TOKEN || process.env.KV_REST_API_TOKEN;
                    if (!token) {
                        console.error("❌ ERROR: STORAGE_KV_REST_API_TOKEN (or fallback) is missing or empty.");
                        throw new Error("Missing STORAGE_KV_REST_API_TOKEN environment variable. Please add it to your Vercel project settings.");
                    }
                    return token;
                })(),
            },
            debug: process.env.DEBUG === "true" || false,
        }) as any,
    });


