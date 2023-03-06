import React from 'react'
import "../index.css";

const Newscard = ({newsItem: { id, title, initialDetails }}) => {
  return (
    <div className='news-card'>
        <picture className='news-image'>
            <img src={`/newsImages/${id}.jpg`} alt={title} />
        </picture>
        <div className='news-card-content'>
            <h2>{title}</h2>
            <h4>{initialDetails}</h4>
        </div>
    </div>
  )
}

export default Newscard;
