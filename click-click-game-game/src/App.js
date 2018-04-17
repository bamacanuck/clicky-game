import React from 'react';
import ClickerList from "./ClickerList";
import {OurClickers} from "./OurClickers";

const App = () => {
        return (
            <div>
                <h1 className="tc"> Kitty Click !!!</h1>
                <ClickerList OurClickers = {OurClickers} />
            </div>
        );
    };

export default App;
