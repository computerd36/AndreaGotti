import * as React from 'react';
import { Media } from '../types';
import './MediaCard.css';
import { MdOutlinePlayCircle } from "react-icons/md";

export interface IMediaCardProps {
    media: Media;
}

function normalizeUrl(url: string): string {
    if (!url) return '#';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return 'https://' + url;
}

export function MediaCard(props: IMediaCardProps) {
    return (
        <a href={normalizeUrl(props.media.url)} target='_blank' rel='noopener noreferrer' className='mediaCardLink'>
            <div className='mediaCard'>

                <img src={props.media.image} alt={props.media.imagealt} />
                <MdOutlinePlayCircle />

            </div >
            <p>{props.media.title}</p>
            <p>{props.media.date}</p>
        </a>

    );
}
