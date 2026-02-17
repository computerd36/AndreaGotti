import * as React from 'react';
import { Media, Publication, Seminar } from '../types';
import { PublicationCard } from '../components/PublicationCard';

import publicationsData from "../content/publications.json";
import mediaData from "../content/media.json";
import seminarsData from "../content/seminars.json";
import { MediaCard } from '../components/MediaCard';
import { SeminarCard } from '../components/SeminarCard';


export function PublicationPage() {
    const [flippedPublicationId, setFlippedPublicationId] = React.useState<number | null>(null);

    const handleFlip = (id: number) => {
        setFlippedPublicationId(flippedPublicationId === id ? null : id);
    };

    return (
        <div className='page publicationPage paddingPage'>
            <h1>Publications</h1>
            <div className="publicationGrid">
                {publicationsData.publications.map((publication: Publication, index: number) => (
                    <PublicationCard
                        key={index}
                        publication={publication}
                        isFlipped={flippedPublicationId === index}
                        onFlip={() => handleFlip(index)}
                    />
                ))}
            </div>
            <h1>Seminars</h1>
            <div className='seminarList'>
                {seminarsData.seminars.map((seminar: Seminar, index: number) => (
                    <SeminarCard
                        key={index}
                        seminar={seminar}
                    />
                ))}
            </div>
            <h1>Media</h1>
            <div className='publicationGrid'>
                {mediaData.media.map((media: Media, index: number) => (
                    <MediaCard
                        key={index}
                        media={media}
                    />
                ))}
            </div>
        </div>
    );
}

