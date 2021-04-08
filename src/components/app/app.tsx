import React, { useState } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import Portal from '../potal';

import './app.css';
/* tslint:disable */
const App: React.FC = () => {

    const [count, setCount] = useState(1);

    const arr1 = [1, 2, 3, 4, 5];
    let coun = 1;
    const testButton = () => {

        arr1.forEach(item => {
            coun =  coun + 1;
            console.log(1);   
            arr1.forEach(item => {
                coun = coun + 1;
                console.log(1);
                arr1.forEach(function(item) {
                    coun =  coun + 1;
                    console.log(1); 
                    });
                });
           
        });
    };

    return (
        <div className='app'>
            <AppHeader/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList/>
            <PostAddForm/>
            <Portal id='modal' count={count}>
                <p>Count: {count}</p>
            </Portal>
            <button onClick={() => setCount(count-1)}>-1</button>
            <button onClick={() => setCount(count+1)}>+1</button>
            <button onClick={() => testButton()}>how many times</button>
        </div>
    );
};

export default App;