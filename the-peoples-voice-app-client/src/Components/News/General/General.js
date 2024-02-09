import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../NewsCard/NewsCard';
import './General.css'

const General = () => {
     const generalNews = useLoaderData();
    return (
        <div className='general-section'>
            <h3 className='text-center border-bottom'>General News Heading</h3>
            {
                generalNews.map(news=><NewsCard
                news={news}
                key={news.newsId}
                ></NewsCard>)
            }
        </div>
    );
};

export default General;