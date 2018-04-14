import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clicker from './Clicker';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {OurClickers} from './OurClickers';

ReactDOM.render(
                <div>
                    <Clicker id={OurClickers[0].id}/>
                    <Clicker id={OurClickers[1].id}/>
                    <Clicker id={OurClickers[2].id}/>
                    <Clicker id={OurClickers[3].id}/>
                    <Clicker id={OurClickers[4].id}/>
                    <Clicker id={OurClickers[5].id}/>
                </div>
                    , document.getElementById('root'));
                    registerServiceWorker();

