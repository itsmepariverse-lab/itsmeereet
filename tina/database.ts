import { createDatabase, createLocalDatabase } from "@tinacms/datalayer";
import { GitHubProvider } from "tinacms-gitprovider-github";

const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default isLocal
    ? createLocalDatabase()
    : createDatabase({
        gitProvider: new GitHubProvider({
            repo: process.env.GITHUB_REPO!,
            owner: process.env.GITHUB_OWNER!,
            token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN!,
            branch,
        }),
    });

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
