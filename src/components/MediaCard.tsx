import * as React from 'react';
import { Media } from '../types';
import './MediaCard.css';
import { MdOutlinePlayCircle } from "react-icons/md";

export interface IMediaCardProps {
    media: Media;
}

export function MediaCard(props: IMediaCardProps) {
    return (
        <a href={props.media.url} target='_blank' className='mediaCardLink'>
            <div className='mediaCard'>

                <img src={props.media.image} alt={props.media.imagealt} />
                <MdOutlinePlayCircle />

            </div >
            <p>{props.media.title} ({props.media.date})</p>
        </a>

    );
}
