import * as React from 'react';
import { CopyISBNButton } from '../components/CopyISBNButton';

export interface IVitaPageProps {
}

export function VitaPage(props: IVitaPageProps) {
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
        <ul>
          <p>2013</p>
          <li>Museo Epper, Ascona, Switzerland</li>
        </ul>
        <ul>
          <p>2009</p>
          <li>Galerie Tammen, Berlin, Germany</li>
        </ul>
        <ul>
          <p>2008</p>
          <li>Officina ltd., Beijing, China</li>
        </ul>
        <ul>
          <p>2006</p>
          <li>Beijing Tokyo Art Project Gallery, Multimedia Installation with FM3 Group, Beijing, China</li>
        </ul>
        <ul>
          <p>2005</p>
          <li>Galleria Paolo Tonin Arte Contemporanea, Turin, Italy</li>
        </ul>
        <ul>
          <p>2004</p>
          <li>Galeria Monumental, Lisbon, Portugal</li>
        </ul>
        <ul>
          <p>2003</p>
          <li>Galeria Luis Gurriaran, Madrid, Spain</li>
          <li>Galleria Compagnia del Disegno, Milan, Italy</li>
          <li>Galerie 26, Oisterwijk, The Netherlands</li>
        </ul>
        <ul>
          <p>2002</p>
          <li>Ex Municipio, Castagnola, Lugano, Switzerland</li>
          <li>Galerie Carzaniga+Ueker, Basel, Switzerland</li>
        </ul>
        <ul>
          <p>2001</p>
          <li>Galeria Luis Gurriaran, Madrid, Spain</li>
          <li>Contemporary Art Museum, Su Logu de S'iscultura, Tortolì, Nuoro, Italy</li>
          <li>Time in Jazz, Museo del Vino, Berchidda, Sassari, Italy</li>
          <li>Gotti, Opere 1991-2000, Palazzo Sarcinelli, Conegliano, Treviso, Italy</li>
          <li>Galerie Apicella, Cologne, Germany</li>
        </ul>
        <ul>
          <p>1999</p>
          <li>Opere 1991-1999, Casa dei Carraresi, Treviso, Italy</li>
        </ul>
        <ul>
          <p>1995</p>
          <li>Galleria La Polena, Genoa, Italy</li>
        </ul>
        <ul>
          <p>1993</p>
          <li>Galleria Paolo Tonin, Turin, Italy</li>
        </ul>

        <br />
        <br />
        <br />

        <h1>Selected Group Exhibitions</h1>
        <ul>
          <p>2014</p>
          <li>"Attorno a Vermeer", Palazzo Fava, Bologna, Italy</li>
        </ul>
        <ul>
          <p>2008 - 2009</p>
          <li>"Map Games: Dynamics of Change", Art Project, Beijing</li>
          <li>Birmingham Museum and Art Gallery, UK (2009)</li>
          <li>Terni International Center for Contemporary Art, Ex Opificio Siri (CAos), Italy (2009)</li>
          <li>Curators: Feng Boyi, Plus offiCina (with Ai Weiwei)</li>
        </ul>
        <ul>
          <p>2008</p>
          <li>"Arnaldo Pomodoro Foundation Prize", Arnaldo Pomodoro Foundation, Milan, Italy</li>
        </ul>
        <ul>
          <p>2007</p>
          <li>"Animamix Biennial: From Modernity to Eternity", MoCA Shanghai</li>
        </ul>
        <ul>
          <p>2006</p>
          <li>"Western Art", Tokyo Gallery, Tokyo, Japan</li>
          <li>"Compagnia del Disegno" Art Gallery, Milan, Italy</li>
        </ul>
        <ul>
          <p>2005</p>
          <li>"BJ Beijing Biennale 2005", Beijing, China</li>
        </ul>
        <ul>
          <p>2002</p>
          <li>"Palazzo Sarcinelli 18 anni di attività", Conegliano, Treviso, Italy (Catalog "Linea D'Ombra", Curator: Marco Goldin)</li>
        </ul>
        <ul>
          <p>1999</p>
          <li>"Sulla Pittura: Artisti Italiani Sotto i Quarant'anni", Curator: Marco Goldin, Palazzo Sarcinelli, Conegliano, Treviso, Italy</li>
        </ul>
        <ul>
          <p>1998</p>
          <li>"Una Donazione per un Nuovo Museo", Curator: Marco Goldin, Palazzo Sarcinelli, Conegliano, Treviso, Italy</li>
        </ul>
        <ul>
          <p>1997</p>
          <li>"Pitture", Casa dei Carraresi, Treviso, Italy (Curator: Marco Goldin)</li>
          <li>"Spazio Lanzi-Galleria delle Arti", Bologna, Italy</li>
          <li>Galleria d'Arte Moderna, Catania, Italy</li>
        </ul>
        <ul>
          <p>1994</p>
          <li>"Art is Life", Project '93-'94, Museo dell'Automobile, Turin, Italy; Pmmk Museum, Gent, Belgium; Ministere des Affaires Culturelle, Le Tutesall, Luxembourg; Sotheby's, London, England; Sotheby's Milano, Italy</li>
          <li>Galleria Eva Menzio, Turin, Italy</li>
          <li>Galleria Continua, San Gimignano, Siena, Italy</li>
          <li>Galleria Polhammer, Styria, Austria</li>
          <li>"Equinozio D'Autunno", Castello di Rivara, Turin, Italy</li>
        </ul>
        <ul>
          <p>1984</p>
          <li>Fondazione Bevilacqua La Masa, Venice, Italy</li>
        </ul>
      </div>

    </div >
  );
}
