import React, { useEffect } from 'react';
import { render } from 'react-dom';
import {createRoot} from 'react-dom/client';
import App from './App';

function AppCB(){
    useEffect(()=>{
        console.log('rendered');
    });

    return <App/>
}
//render(<App/>, document.getElementById('app'));
const root = createRoot(document.getElementById('app'));
root.render(<App/>);