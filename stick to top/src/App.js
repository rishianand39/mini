import React, { useState, useEffect } from 'react';
import './index.css';

const App = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = document.querySelector('.outer-container').offsetTop;
      setSticky(window.scrollY >= offset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='one'></div>
      <div className="outer-container">
        <div className='first_child'></div>
        <div className='second_child'></div>
        <div className={isSticky ? 'sticky-container sticky' : 'sticky-container'}>
          Sticky Content
          Sticky Content
          Sticky Content
        </div>
      </div>
      <div className='two'></div>
      <div className='three'></div>
      <div className='four'></div>


    </div>
  );
};

export default App;
