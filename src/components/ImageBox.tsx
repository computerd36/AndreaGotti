import * as React from 'react';
import { Artwork } from '../types';
import { RxSize } from "react-icons/rx";
import { PlaceholderImage } from './PlaceholderImage';
import { FullScreenImage } from './FullScreenImage';

export interface IImageBoxProps {
    artwork: Artwork;
}

export function ImageBox(props: IImageBoxProps) {

    const [isImageLoaded, setImageLoaded] = React.useState(false);
    const [fullScreenOpen, setFullScreenOpen] = React.useState(false);

    function openImageInNewTab() {
        window.open(props.artwork.image, '_blank');
    }

    function openFullScreen() {
        setFullScreenOpen(true);
    }

    return (
        <>
            {fullScreenOpen && <FullScreenImage image={props.artwork.image} alt={props.artwork.imagealt} onClose={() => setFullScreenOpen(false)} />}

            <div className='imageBox'>
                <div className="imageBoxLabel">
                    <strong><p>{props.artwork.title} ({props.artwork.date})</p></strong>

                </div>
                <div className="imageBoxImageContainer">
                    {/* <button onClick={openImageInNewTab} title='Open in new tab (original size)'><RxSize /></button> */}
                    <button onClick={openFullScreen} title='Open image in fullscreen mode'><RxSize /></button>

                    {!isImageLoaded && <PlaceholderImage isLoading={!isImageLoaded} />}
                    <img src={props.artwork.image} alt={props.artwork.imagealt} style={{ display: isImageLoaded ? 'block' : 'none' }} onLoad={() => setImageLoaded(true)} />

                </div>
                <div className='imageBoxLabel'>
                    <p>{props.artwork.description}</p>
                    <p>{props.artwork.size}</p>
                </div>
            </div>
        </>
    );
}
