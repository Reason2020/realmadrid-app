import React from 'react';
import { Link } from 'react-router-dom';
import Newscard from './Newscard';
import { data } from '../utils/data/data';
import "../index.css";

const News = () => {
  return (
    <div className='news'>
        <div className='news-heading'>
            <h2>NEWS</h2>
        </div>
        <div className='news-items-grid'>
            {data.news.map(newsItem => {
                return (
                    <Link to={`/news/${newsItem.id}`} key={newsItem.id} className='news-card-link'>
                        <Newscard newsItem={{...newsItem}} />
                    </Link>
                )
            })}
        </div>


    </div>
  )
}

export default News
