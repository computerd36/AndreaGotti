import * as React from 'react';
import { News } from '../types';
import newsData from "../content/news.json";
import { FaLongArrowAltRight } from "react-icons/fa";

export function NewsPage() {
    const [expandedItems, setExpandedItems] = React.useState<Set<number>>(new Set());

    const sortedNews = React.useMemo(() => {
        return [...newsData.news].sort((a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const toggleExpand = (index: number) => {
        setExpandedItems(prev => {
            const next = new Set(prev);
            if (next.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }
            return next;
        });
    };

    const MAX_LENGTH = 150;

    return (
        <div className='page newsPage paddingPage'>
            <h1>News</h1>
            <div className="newsContainer">
                {sortedNews.length === 0 ? (
                    <p className="noNews">No news available at the moment.</p>
                ) : (
                    sortedNews.map((newsItem: News, index: number) => {
                        const isExpanded = expandedItems.has(index);
                        const isLong = newsItem.description.length > MAX_LENGTH;

                        return (
                            <article key={index} className="newsItem">
                                {newsItem.image && (
                                    <img
                                        className="newsImage"
                                        src={newsItem.image}
                                        alt={newsItem.imagealt || newsItem.title}
                                        loading="lazy"
                                    />
                                )}
                                <div className="newsContent">
                                    <div className="newsHeader">
                                        <div className="newsMeta">
                                            {newsItem.type && (
                                                <span className="newsType" aria-label="News category">
                                                    {newsItem.type}
                                                </span>
                                            )}
                                            <time className="newsDate" dateTime={newsItem.date}>
                                                {formatDate(newsItem.date)}
                                            </time>
                                        </div>
                                        <h2>{newsItem.title}</h2>
                                    </div>
                                    <p className="newsDescription">
                                        {isLong && !isExpanded
                                            ? newsItem.description.slice(0, MAX_LENGTH) + '...'
                                            : newsItem.description}
                                        {isLong && (
                                            <button
                                                className="newsExpandBtn"
                                                onClick={() => toggleExpand(index)}
                                            >
                                                {isExpanded ? 'Show less' : 'Read more'}
                                            </button>
                                        )}
                                    </p>
                                    {newsItem.url && (
                                        <a
                                            href={newsItem.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="newsLink"
                                            aria-label={`Read more about ${newsItem.title}`}
                                        >
                                            Visit <FaLongArrowAltRight className="newsLinkArrow" />
                                        </a>
                                    )}
                                </div>
                            </article>
                        );
                    })
                )}
            </div>
        </div>
    );
}
