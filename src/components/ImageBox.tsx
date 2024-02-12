import * as React from 'react';
import { Artwork } from '../types';
import { RxSize } from "react-icons/rx";
import { PlaceholderImage } from './PlaceholderImage';

export interface IImageBoxProps {
    artwork: Artwork;
}

export function ImageBox(props: IImageBoxProps) {

    const [isImageLoaded, setImageLoaded] = React.useState(false);

    function openImageInNewTab() {
        window.open(props.artwork.image, '_blank');
    }

    return (
        <div className='imageBox'>
            <div className="imageBoxLabel">
                <strong><p>{props.artwork.title} ({props.artwork.date})</p></strong>

            </div>
            <div className="imageBoxImageContainer">
                <button onClick={openImageInNewTab} title='Open in new tab (original size)'><RxSize /></button>
                {!isImageLoaded && <PlaceholderImage isLoading={!isImageLoaded} />}
                <img src={props.artwork.image} alt={props.artwork.imagealt} style={{ display: isImageLoaded ? 'block' : 'none' }} onLoad={() => setImageLoaded(true)} />

            </div>
            <div className='imageBoxLabel'>
                <p>{props.artwork.description}</p>
                <p>{props.artwork.size}</p>
            </div>
        </div>
    );
}
