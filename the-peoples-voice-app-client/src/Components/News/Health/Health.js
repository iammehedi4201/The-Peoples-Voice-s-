import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../NewsCard/NewsCard';
import './Health.css'

const Health = () => {
    const healthNews =useLoaderData();
    return (
        <div className='health-section'>
            <h3 className='text-center border-bottom'>Health News Heading</h3>
            {
                healthNews.map(news=><NewsCard
                news={news}
                key={news.newsId}
                ></NewsCard>)
            }
        </div>
    );
};

export default Health;