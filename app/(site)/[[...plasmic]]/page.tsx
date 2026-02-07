import * as React from 'react';
import { PlasmicComponent, PlasmicRootProvider } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '@/lib/plasmic-init';
import { notFound } from 'next/navigation';

export default async function PlasmicPage({ params }: { params: { plasmic?: string[] } }) {
    const plasmicPath = params.plasmic ? `/${params.plasmic.join('/')}` : '/';
    const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);

    if (!plasmicData) {
        notFound();
    }

    const pageMeta = plasmicData.entryCompMetas[0];

    return (
        <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
            <PlasmicComponent component={pageMeta.displayName} />
        </PlasmicRootProvider>
    );
}
