import React, { useCallback, useEffect, useState } from 'react';
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
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    )
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    )

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft' && !prevBtnDisabled) {
            scrollPrev();
        } else if (e.key === 'ArrowRight' && !nextBtnDisabled) {
            scrollNext();
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [prevBtnDisabled, nextBtnDisabled, scrollPrev, scrollNext]);

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {props.artworks.map((artwork: Artwork) => (
                    <div className="embla__slide" key={artwork.title}>
                        <ImageBox artwork={artwork} />
                    </div>
                ))}
            </div>
            <div className="embla__buttons">
                <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
                <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
            </div>
        </div >
    );
}
