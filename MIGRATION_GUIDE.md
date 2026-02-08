# TeleportHQ Migration Guide & Safety Protocol

This guide outlines the steps and safety measures for migrating `reet-portfolio` to TeleportHQ while preserving critical functionality.

## 1. Project Overview & Editing
This project is configured to support **full visual editing** in TeleportHQ for both the main site and the Web3 subdomain.

-   **Main Site (`itsmereet.in`)**: Corresponds to `app/(site)/page.tsx`.
-   **Web3 Subdomain (`web3.itsmereet.in`)**: Corresponds to `app/(site)/web3/page.tsx`.

### How to Edit in TeleportHQ
1.  **Main Page:** Simply drag and drop elements onto the main canvas.
2.  **Web3 Page:** Navigate to the `/web3` route/folder in the TeleportHQ project view to edit the Web3 landing page.

---

## 2. Protected Files (DO NOT OVERWRITE)
When syncing changes or pushing from TeleportHQ, ensure the following files and directories are **NOT** overwritten or deleted. They contain critical logic for authentication, routing, and 3D elements.

| File/Path | Purpose | Action |
| :--- | :--- | :--- |
| `middleware.ts` | Handles `web3.itsmereet.in` subdomain routing, rewrites, and authentication cloaking. | **KEEP** |
| `app/(site)/login` | Login page for Web3 authentication. | **KEEP** |
| `app/(site)/web3` | Root folder for the Web3 subdomain content. | **KEEP** |
| `components/canvas/Scene.tsx` | 3D visual component (Three.js/Fiber). | **KEEP** |
| `next.config.ts` | Contains routing and build configurations. | **REVIEW** before change |

---

## 3. Dependencies
### Deprecate (Safe to Remove)
Once TeleportHQ components replace the Sanity-powered frontend, these can be removed:
-   `next-sanity`
-   `sanity`
-   `@sanity/image-url`
-   `@sanity/vision`

### Keep (Critical)
-   `@vercel/analytics` (Site tracking)
-   `framer-motion` (Required for TeleportHQ animations)
-   `three`, `@react-three/fiber`, `@react-three/drei` (For 3D elements)
-   `tailwind-merge`, `clsx` (For styling)

---

## 4. Git Workflow (Safe Migration)
1.  **Work in Branch:** Always use the `teleport-migration` branch.
    ```bash
    git checkout teleport-migration
    ```
2.  **Syncing:** When connecting TeleportHQ, ensure it pushes to this branch, NOT `main`.
3.  **Preview:** Use the Vercel Preview URL generated for the `teleport-migration` branch to test:
    -   Visual changes from TeleportHQ.
    -   Web3 subdomain access (`web3` folder content).
    -   Authentication flows.

---

## 5. Middleware Logic
The `middleware.ts` file has been updated to support:
-   **Clean URLs:** `web3.itsmereet.in/web3/*` -> `web3.itsmereet.in/*`
-   **Auth Protection:** Enforces `web3_auth` cookie.
-   **Cloaking:** Hides main site from authenticated web3 users.

**Do not modify `middleware.ts` via TeleportHQ.** Any middleware changes should be done manually in code.
