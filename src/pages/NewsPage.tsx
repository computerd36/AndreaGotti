import * as React from 'react';
import { News } from '../types';
import newsData from "../content/news.json";

export function NewsPage() {
    // Sort news by date (newest first)
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

    return (
        <div className='page newsPage paddingPage'>
            <h1>News</h1>
            <div className="newsContainer">
                {sortedNews.length === 0 ? (
                    <p className="noNews">No news available at the moment.</p>
                ) : (
                    sortedNews.map((newsItem: News, index: number) => (
                        <article key={index} className="newsItem">
                            <div className="newsContent">
                                <div className="newsHeader">
                                    {newsItem.type && (
                                        <span className="newsType" aria-label="News category">
                                            {newsItem.type}
                                        </span>
                                    )}
                                    <h2>{newsItem.title}</h2>
                                    <time className="newsDate" dateTime={newsItem.date}>
                                        {formatDate(newsItem.date)}
                                    </time>
                                </div>
                                <p className="newsDescription">{newsItem.description}</p>
                                {newsItem.url && (
                                    <a
                                        href={newsItem.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="newsLink"
                                        aria-label={`Read more about ${newsItem.title}`}
                                    >
                                        Read more
                                    </a>
                                )}
                            </div>
                        </article>
                    ))
                )}
            </div>
        </div>
    );
}
