import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Clicker from './Clicker';
import ClickerList from './ClickerList';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {OurClickers} from './OurClickers';

ReactDOM.render( <ClickerList OurClickers = {OurClickers} />
                , document.getElementById('root'));
                registerServiceWorker();

