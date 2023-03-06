import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../utils/data/data';
import "../index.css";

const NewsDetails = () => {
    const { newsId } = useParams();
    const selectedNews = data.news.find(newsItem => newsItem.id === Number(newsId));
  return (
    <div className='news-details'>
        <img src={`/newsImages/${selectedNews.id}.jpg`} alt={selectedNews.title} />
        <div className='news-details-content'>
            <h2>{selectedNews.title}</h2>
            <h5>{selectedNews.initialDetails}</h5>
            <p>{selectedNews.fullDetails}</p>
        </div>
    </div>
  )
}

export default NewsDetails
