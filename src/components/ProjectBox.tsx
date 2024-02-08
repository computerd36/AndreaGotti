import * as React from 'react';
import { Project } from '../types';
import ProjectGalleryModal from './ProjectGalleryModal';


export interface IProjectBoxProps {
    project: Project;
}

export function ProjectBox(props: IProjectBoxProps) {
    return (
        <>
            <div className='projectBox'>
                <img src={props.project.image} alt={props.project.imagealt} />
                <div className='projectBoxLabel'>
                    <h2>{props.project.title}</h2>
                    <p>{props.project.date}</p>
                </div>
            </div>
        </>
    );
}
