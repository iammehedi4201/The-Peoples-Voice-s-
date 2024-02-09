import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../NewsCard/NewsCard';
import './Technology.css'

const Technology = () => {
    const technologyNews =  useLoaderData();
    return (
        <div className='technology-section'>
            <h3 className='text-center border-bottom'>Technology News Heading</h3>
            {
               technologyNews.map(news=><NewsCard
               news={news}
               key={news.newsId}
               ></NewsCard>)
            }
        </div>
    );
};

export default Technology;