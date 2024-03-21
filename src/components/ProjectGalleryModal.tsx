import { useEffect } from 'react';
import { EmblaCarouselArtwork } from './EmblaCarouselArtwork';
import { Artwork, Project } from '../types';
import { GrClose } from "react-icons/gr";

import './ProjectGalleryModal.css';

interface ProjectGalleryModalProps {
    project: Project;
    onClose: () => void;
}

export function ProjectGalleryModal(props: ProjectGalleryModalProps) {

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            props.onClose();
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);


    return (
        <>            
            <div className="modal" onClick={props.onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>{props.project.title}</h2>
                        <a className="close-button" onClick={props.onClose}>
                            <GrClose />
                        </a>
                    </div>

                    <EmblaCarouselArtwork artworks={props.project.artworks} />
                </div>
            </div>
        </>
    );
};

export default ProjectGalleryModal;
