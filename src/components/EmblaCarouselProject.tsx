import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel'
import { Project } from '../types';
import Autoplay from 'embla-carousel-autoplay';
import { ProjectBox } from './ProjectBox';
import { useState, useCallback, useEffect } from 'react';
import { DotButton } from './EmblaCarouselDots';
import { PrevButton, NextButton } from './EmblaCarouselArrows';
import ProjectGalleryModal from './ProjectGalleryModal';

export interface IEmblaCarouselProjectProps {
    projects: Project[];
}

export function EmblaCarouselProject(props: IEmblaCarouselProjectProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, duration: 20 },[Autoplay( { delay: 5000, stopOnHover: true })]);

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null);

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
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

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    )
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    )

    // const handleKeyPress = (e: KeyboardEvent) => {
    //     if (e.key === 'ArrowLeft' && !prevBtnDisabled) {
    //         scrollPrev();
    //     } else if (e.key === 'ArrowRight' && !nextBtnDisabled) {
    //         scrollNext();
    //     }
    // };
    // useEffect(() => {
    //     document.addEventListener('keydown', handleKeyPress);
    //     return () => {
    //         document.removeEventListener('keydown', handleKeyPress);
    //     };
    // }, [prevBtnDisabled, nextBtnDisabled, scrollPrev, scrollNext]);


    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onInit, onSelect])


    function handleProjectClick(project: Project): void {
        setSelectedModalProject(project);
    }

    return (
        <>
        {selectedModalProject && <ProjectGalleryModal project={selectedModalProject} onClose={() => setSelectedModalProject(null)} />}
           
           
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {props.projects.map((project: Project) => (
                        <div className="embla__slide" key={project.title} onClick={() => handleProjectClick(project)}>
                            <ProjectBox project={project}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__navigation">
                <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
                <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
            </div>

        </>
    );
}
