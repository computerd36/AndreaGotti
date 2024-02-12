import * as React from 'react';
import { PuffLoader } from 'react-spinners';


export interface IPlaceholderImageProps {
    isLoading?: boolean;
}

export function PlaceholderImage(props: IPlaceholderImageProps) {
    return (
        <div className='placeholderImage'>
            <PuffLoader color={'black'} loading={props.isLoading} />
        </div>
    );
}
