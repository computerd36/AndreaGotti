import * as React from 'react';
import { Media, Publication } from '../types';
import { PublicationCard } from '../components/PublicationCard';

import gottiData from "../content/gottiData.json";
import { MediaCard } from '../components/MediaCard';


export interface IPublicationPageProps {
}

export function PublicationPage(props: IPublicationPageProps) {
    const [flippedPublicationId, setFlippedPublicationId] = React.useState<number | null>(null);

    const handleFlip = (id: number) => {
        setFlippedPublicationId(flippedPublicationId === id ? null : id);
    };

    return (
        <div className='page publicationPage paddingPage'>
            <h1>Publications</h1>
            <div className="publicationGrid">
                {gottiData.publications.map((publication: Publication, index: number) => (
                    <PublicationCard
                        key={index}
                        publication={publication}
                        isFlipped={flippedPublicationId === index}
                        onFlip={() => handleFlip(index)}
                    />
                ))}
            </div>
            <h1>Media</h1>
            <div className='publicationGrid'>
                {gottiData.media.map((media: Media, index: number) => (
                    <MediaCard 
                        key={index}
                        media={media}
                    />
                ))}
            </div>
        </div>
    );
}

