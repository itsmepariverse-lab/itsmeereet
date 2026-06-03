import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: 'C:/Users/Axel/reet-portfolio/tina/__generated__/.cache/1780488239887', url: '/api/tina/graphql', token: 'dummy-token', queries,  });
export default client;
  