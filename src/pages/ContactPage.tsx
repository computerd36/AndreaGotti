import * as React from 'react';

export interface IContactPageProps {
}

export function ContactPage(props: IContactPageProps) {
    return (
        <div className='page contactPage paddingPage'>

            <h3>Contact</h3>
            <p>E-Mail: <a href="mailto:mechtild@van-ahlers.de">mail@andreagotti.art</a> <br />
            </p>

            
            <h3>Information according to § 5 TMG</h3>

            <p>Andrea Gotti <br />
                Grimmstraße 16E <br />
                D - 10967 Berlin</p>



            <p>This website does not collect any personal data, a data protection declaration is therefore not applicable.</p>


            <h3>Technical contact</h3>

            <p>
                Site created by <a href="https://36it.de">36it</a> <br />
                E-Mail: <a href="mailto:mail@36it.de">mail@36it.de</a>
            </p>

        </div>
    );
}
