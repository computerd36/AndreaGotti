import { Publication } from '../types';
import './PublicationCard.css';
import { AiFillInfoCircle } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";
import { FaCopy } from "react-icons/fa";
import { CopyISBNButton } from './CopyISBNButton';

import { PuffLoader } from 'react-spinners';

import React, { useState } from 'react';


export interface IPublicationCardProps {
    publication: Publication;
    isFlipped?: boolean;
    onFlip?: () => void;
}

export function PublicationCard(props: IPublicationCardProps) {

    const [isImageLoaded, setImageLoaded] = useState(false);

    return (
        <div className={`publicationCard ${props.isFlipped ? 'flipped' : ''}`}>
            <div className="publicationCard-inner">
                <div className="publicationCard-front" onClick={props.onFlip}>
                    {!isImageLoaded && <PuffLoader color={'black'} loading={!isImageLoaded} />}
                    <img src={props.publication.image} alt={props.publication.imagealt} style={{ display: isImageLoaded ? 'block' : 'none' }} onLoad={() => setImageLoaded(true)} />                    <button className='publicationCardButton'><AiFillInfoCircle /></button>
                </div>
                <div className="publicationCard-back">
                    <div className="publicationCard-info">
                        <h2>{props.publication.title}</h2>
                        <p>{props.publication.description}</p>
                        <div>
                            <p>{props.publication.date}</p>
                            <CopyISBNButton ISBN={props.publication.isbn} />
                        </div>
                    </div>
                    <button className='publicationCardButton' onClick={props.onFlip}><TiArrowBack /></button>
                </div>
            </div>
        </div>
    );
}
