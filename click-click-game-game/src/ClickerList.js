import React from 'react';
import Clicker from './Clicker';
import {OurClickers} from "./OurClickers";

const ClickerList = () => {
    return (
        <div>
            <Clicker id={OurClickers[0].id}/>
            <Clicker id={OurClickers[1].id}/>
            <Clicker id={OurClickers[2].id}/>
            <Clicker id={OurClickers[3].id}/>
            <Clicker id={OurClickers[4].id}/>
            <Clicker id={OurClickers[5].id}/>
        </div>
    );
}

export default ClickerList;