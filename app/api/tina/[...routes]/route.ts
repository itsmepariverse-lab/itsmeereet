import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const GET = async (request: NextRequest, { params }: { params: any }) => {
    const { TinaNodeBackend, LocalBackendAuthProvider } = await import("@tinacms/datalayer");
    const { TinaAuthJSOptions, AuthJsBackendAuthProvider } = await import("tinacms-authjs");
    const { default: databaseClient } = await import("../../../../tina/database");

    const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
    const handler = TinaNodeBackend({
        authProvider: isLocal
            ? LocalBackendAuthProvider()
            : AuthJsBackendAuthProvider({
                authOptions: TinaAuthJSOptions({
                    databaseClient: databaseClient,
                    secret: process.env.NEXTAUTH_SECRET!,
                }),
            }),
        databaseClient,
    });
    return (handler as any)(request, { params });
};

export const POST = async (request: NextRequest, { params }: { params: any }) => {
    const { TinaNodeBackend, LocalBackendAuthProvider } = await import("@tinacms/datalayer");
    const { TinaAuthJSOptions, AuthJsBackendAuthProvider } = await import("tinacms-authjs");
    const { default: databaseClient } = await import("../../../../tina/database");

    const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
    const handler = TinaNodeBackend({
        authProvider: isLocal
            ? LocalBackendAuthProvider()
            : AuthJsBackendAuthProvider({
                authOptions: TinaAuthJSOptions({
                    databaseClient: databaseClient,
                    secret: process.env.NEXTAUTH_SECRET!,
                }),
            }),
        databaseClient,
    });
    return (handler as any)(request, { params });
};
