import * as React from 'react';
import { Project } from '../types';
import ProjectGalleryModal from './ProjectGalleryModal';
import { PlaceholderImage } from './PlaceholderImage';
import { PlaceholderProject } from './PlaceholderProject';


export interface IProjectBoxProps {
    project: Project;
}

export function ProjectBox(props: IProjectBoxProps) {
    const [isImageLoaded, setImageLoaded] = React.useState(false);

    return (
        <div className='projectBox'>
            {!isImageLoaded && <PlaceholderProject isLoading={!isImageLoaded} />}
            <img
                src={props.project.image}
                alt={props.project.imagealt}
                onLoad={() => setImageLoaded(true)}
                style={{ display: isImageLoaded ? 'block' : 'none' }}
            />
            { isImageLoaded && 
            <div className='projectBoxLabel'>
                <h2>{props.project.title}</h2>
                <p>{props.project.date}</p>
            </div>
            }
        </div>
    );
}
