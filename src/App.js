import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import NewsDetails from './components/NewsDetails';
import Navbar from './components/Navbar';
import Players from './components/Players';

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/news' element={<News />} />
            <Route path='/news/:newsId' element={<NewsDetails />} />
            <Route path='/players' element={<Players />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
