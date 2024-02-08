import * as React from 'react';
import { Publication } from '../types';
import { PublicationCard } from '../components/PublicationCard';

import gottiData from "../content/gottiData.json";


export interface IPublicationPageProps {
}

export function PublicationPage(props: IPublicationPageProps) {
  const [flippedPublicationId, setFlippedPublicationId] = React.useState<number | null>(null);

  const handleFlip = (id: number) => {
      setFlippedPublicationId(flippedPublicationId === id ? null : id);
  };

  return (
      <div className='page publicationPage paddingPage'>
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
      </div>
  );
}

