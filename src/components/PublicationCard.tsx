import { Publication } from '../types';
import './PublicationCard.css';
import { AiFillInfoCircle } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";
import { CopyISBNButton } from './CopyISBNButton';
import { ShopButton } from './ShopButton';

import { PuffLoader } from 'react-spinners';

import React, { useEffect, useState } from 'react';


export interface IPublicationCardProps {
    publication: Publication;
    isFlipped?: boolean;
    onFlip?: () => void;
}

export function PublicationCard(props: IPublicationCardProps) {

    const [isImageLoaded, setImageLoaded] = useState(false);
    const [formattedDescription, setFormattedDescription] = useState<JSX.Element | null>(null);


    useEffect(() => {
        if (props.publication.description) {
            const lines = props.publication.description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    <span className="new-line">{line}</span>
                </React.Fragment>
            ));
            setFormattedDescription(<>{lines}</>);
        }
    }, [props.publication.description]);


    return (
        <div className={`publicationCard ${props.isFlipped ? 'flipped' : ''}`}>
            <div className="publicationCard-inner">
                <div className="publicationCard-front" onClick={props.onFlip}>
                    {!isImageLoaded && <PuffLoader color={'black'} loading={!isImageLoaded} />}
                    <img src={props.publication.image} alt={props.publication.imagealt} style={{ display: isImageLoaded ? 'block' : 'none' }} onLoad={() => setImageLoaded(true)} />
                    <button className='publicationCardButton'><AiFillInfoCircle /></button>
                </div>
                <div className="publicationCard-back">
                    <div className="publicationCard-info">
                        <h2>{props.publication.title}</h2>
                        <p className="publicationDescription">{formattedDescription}</p>
                        {(props.publication.isbn || props.publication.shop) && (
                            <div className="publicationActions">
                                {props.publication.isbn && <CopyISBNButton ISBN={props.publication.isbn} />}
                                {props.publication.shop && <ShopButton url={props.publication.shop} />}
                            </div>
                        )}
                        <div className="publicationMeta">
                            <p>{props.publication.date}</p>
                            <button className='publicationCardButton' onClick={props.onFlip}><TiArrowBack /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
