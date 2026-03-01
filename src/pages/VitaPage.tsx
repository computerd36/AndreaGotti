import * as React from 'react';
import { ExhibitionYear } from '../types';
import soloData from '../content/soloExhibitions.json';
import groupData from '../content/groupExhibitions.json';
import biographyData from '../content/biography.json';


export function VitaPage() {
  return (
    <div className='page vitaPage paddingPage'>


      <div className="biography">
        <h1>Biography</h1>
        {biographyData.biography.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="exhibitions">
        <h1>Solo Exhibitions</h1>
        {soloData.soloExhibitions.map((group: ExhibitionYear, index: number) => (
          <ul key={group.year + index}>
            <p>{group.year}</p>
            {group.entries.map((entry, i) => (
              <li key={entry + i}>{entry}</li>
            ))}
          </ul>
        ))}

        <br />
        <br />
        <br />

        <h1>Selected Group Exhibitions</h1>
        {groupData.groupExhibitions.map((group: ExhibitionYear, index: number) => (
          <ul key={group.year + index}>
            <p>{group.year}</p>
            {group.entries.map((entry, i) => (
              <li key={entry + i}>{entry}</li>
            ))}
          </ul>
        ))}
      </div>

    </div >
  );
}
