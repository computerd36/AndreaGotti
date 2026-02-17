import { Seminar } from '../types';
import { FaLongArrowAltRight } from "react-icons/fa";
import './SeminarCard.css';

export interface ISeminarCardProps {
    seminar: Seminar;
}

export function SeminarCard(props: ISeminarCardProps) {
    const { seminar } = props;

    return (
        <article className="seminarCard">
            {seminar.image && (
                <div className="seminarCard-imageWrap">
                    <img src={seminar.image} alt={seminar.imagealt || ''} />
                </div>
            )}
            <div className="seminarCard-body">
                <p className="seminarCard-date">{seminar.date}</p>
                <h2 className="seminarCard-title">{seminar.title}</h2>
                {seminar.description && (
                    <p className="seminarCard-description">{seminar.description}</p>
                )}
                {seminar.url && (
                    <a
                        href={seminar.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="seminarCard-link"
                    >
                        Visit <FaLongArrowAltRight />
                    </a>
                )}
            </div>
        </article>
    );
}
