import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Routes from './router'; 
import Home from './containers/Home';
import './style/global.scss';
import './containers/home/index.scss';
const App = () => (
    <BrowserRouter>
        <Routes/>  
    </BrowserRouter>   
)

render(<App />, document.getElementById('app'));

