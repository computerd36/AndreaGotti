import * as React from 'react';
import { ExhibitionYear } from '../types';
import soloData from '../content/soloExhibitions.json';
import groupData from '../content/groupExhibitions.json';


export function VitaPage() {
  return (
    <div className='page vitaPage paddingPage'>


      <div className="biography">
        <h1>Biography</h1>
        <p>
          Andrea Gotti was born in Turin in 1967.
          He graduated from the Academy of Fine Arts in Venice and later attended the Faculty of Philosophy at the University of Turin.
          At a young age, he developed an interest in the world of contemporary art, drawing inspiration from 20th-century figures such as Rothko and De Kooning. These influences guided his early foray into abstract and informal art.
          Significant in the artist's creative journey in the 1990s was his reference to Varlin, whose work served as a specter through which new interpretive keys were revealed, particularly in capturing the essence of certain characters with just a few brushstrokes. Notable are his series on Pope Innocent X and a brief collection of portraits.
          Selecting everyday objects like pianos, billiards, and bathtubs as formal parameters for his artistic production, Gotti continually developed a meta-pictorial language.
          His interest in Far Eastern culture, nurtured through numerous travels from the early 1990s, led Andrea to relocate his studio to Beijing, where he lived with his family from 2000 to 2008.
          During his extended stay in China, he had interactions with some of the most influential contemporary Chinese artists, including Ai Weiwei, Wang Qingsong, and many others.
          In Beijing, Gotti passionately delved into the study of drawing and imagery in ancient Chinese art, evolving a language that bridged the representational knowledge of image construction in Western tradition with the grace and descriptive properties of the stroke seen in certain periods of classical Chinese art, primarily during the Yuan and Song dynasties.
          These were highly productive years for his research, and he initiated a collaboration with a prominent Japanese gallery. Frequent stays in Tokyo allowed him to delve deeper into the analysis of aesthetic developments in Japanese culture.
          In 2009, Gotti returned to Europe and relocated his studio to Berlin, where he currently resides and works.
        </p>
      </div>

      <div className="exhibitions">
        <h1>Solo Exhibitions</h1>
        {soloData.soloExhibitions.map((group: ExhibitionYear) => (
          <ul key={group.year}>
            <p>{group.year}</p>
            {group.entries.map((entry, i) => (
              <li key={i}>{entry}</li>
            ))}
          </ul>
        ))}

        <br />
        <br />
        <br />

        <h1>Selected Group Exhibitions</h1>
        {groupData.groupExhibitions.map((group: ExhibitionYear) => (
          <ul key={group.year}>
            <p>{group.year}</p>
            {group.entries.map((entry, i) => (
              <li key={i}>{entry}</li>
            ))}
          </ul>
        ))}
      </div>

    </div >
  );
}
