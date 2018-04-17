import React from 'react';
import Clicker from './Clicker';
// import {OurClickers} from "./OurClickers";

const ClickerList = ({ OurClickers }) => {
    const clickersArray = OurClickers.map((kitty, i) => {
        return <Clicker key={i} id={OurClickers[i].id}/>
    });
    return (
        <div>
            { clickersArray }
        </div>
    );
};

export default ClickerList;