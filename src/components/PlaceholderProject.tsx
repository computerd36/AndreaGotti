import * as React from 'react';
import { PuffLoader } from 'react-spinners';


export interface IPlaceholderProjectProps {
    isLoading?: boolean;
}

export function PlaceholderProject(props: IPlaceholderProjectProps) {
    return (
        <div className='placeholderProject'>
            <PuffLoader color={'black'} loading={props.isLoading} />
        </div>
    );
}
