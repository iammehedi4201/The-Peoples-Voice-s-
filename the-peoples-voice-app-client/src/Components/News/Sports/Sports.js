import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../NewsCard/NewsCard';
import './Sports.css'

const Sports = () => {
    
    const sportsNews =useLoaderData();

    // console.log("sportNews is :-",sportsNews);

    return (
        <div className='sports-section'>
            <h3 className='text-center border-bottom'>Sports News Heading</h3>
            {
                sportsNews.map(news=><NewsCard
                  news={news}
                  key={news.newsId}
                ></NewsCard>)
            }
        </div>
    );
};

export default Sports;