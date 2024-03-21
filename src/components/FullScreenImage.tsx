
import { GrClose, GrDownload } from 'react-icons/gr';
import './FullScreenImage.css';

export interface IFullScreenImageProps {
    image: string;
    alt: string;
    onClose: () => void;
}

import ReactDOM from 'react-dom';

export function FullScreenImage(props: IFullScreenImageProps) {
    // This element is where you want to portal the FullScreenImage
    const portalElement = document.getElementById('fullscreen-image-root');

    function downloadImage() {
        // Use the browser's download API
        const link = document.createElement('a');
        link.href = props.image;
        link.download = props.alt;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // The component structure stays the same
    const component = (
        <div className="fullScreenImage">
            <div className="fullScreenImageControls">
                <button onClick={downloadImage} title='Download the image'><GrDownload /></button>
                <button onClick={props.onClose} title='Close fullscreen mode'><GrClose /></button>
            </div>
            <img src={props.image} alt={props.alt} />
        </div>
    );

    // Using a portal to render the component
    return portalElement ? ReactDOM.createPortal(component, portalElement) : null;
}

