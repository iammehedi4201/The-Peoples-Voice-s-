import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../NewsCard/NewsCard';
import './Science.css'

const Science = () => {
    const scienceNews = useLoaderData();
    return (
        <div className='science-section'>
            <h3 className='text-center border-bottom'>Science News Heading</h3>
            {
                scienceNews.map(news=><NewsCard
                 news={news}
                 key={news.newId}
                ></NewsCard>)
            }
        </div>
    );
};

export default Science;