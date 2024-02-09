import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../NewsCard/NewsCard';
import './Entertainment.css'

const Entertainment = () => {
    const entertainmentNews = useLoaderData();
    return (
        <div className='entertainment-section'>
            <h3 className='text-center border-bottom'>Entertainment News Heading</h3>
            {
                entertainmentNews.map(news=><NewsCard
                news={news}
                key={news.newId}
                ></NewsCard>)
            }
        </div>
    );
};

export default Entertainment;