import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ImageBox } from './ImageBox';
import { Artwork } from '../types';
import { EmblaCarouselType } from 'embla-carousel'
import { NextButton, PrevButton } from './EmblaCarouselArrows';

export interface IEmblaCarouselArtworkProps {
    artworks: Artwork[];
}

export function EmblaCarouselArtwork(props: IEmblaCarouselArtworkProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const scrollPrev = useCallback(
        () => emblaApi?.scrollPrev(),
        [emblaApi]
    )
    const scrollNext = useCallback(
        () => emblaApi?.scrollNext(),
        [emblaApi]
    )

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft' && !prevBtnDisabled) {
                scrollPrev();
            } else if (e.key === 'ArrowRight' && !nextBtnDisabled) {
                scrollNext();
            }
        };
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [prevBtnDisabled, nextBtnDisabled, scrollPrev, scrollNext]);

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {props.artworks.map((artwork: Artwork, index: number) => (
                    <div className="embla__slide" key={artwork.title + index}>
                        <ImageBox artwork={artwork} />
                    </div>
                ))}
            </div>
            <div className="embla__buttons">
                <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
                <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
            </div>
        </div>
    );
}
