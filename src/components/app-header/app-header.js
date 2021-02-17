import React from 'react';

import './app-header.css';

const AppHeader = () => {
    return (
        <div className='app-header d-flex'>
            <h1>My Todo list</h1>
            <h2>5 записей, 0 активных</h2>
        </div>
    )
}

export default AppHeader