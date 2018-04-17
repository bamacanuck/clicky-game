import React from 'react';
import ClickerList from "./ClickerList";
import {OurClickers} from "./OurClickers";

const App = () => {
        return (
            <div>
                <div>
                    <h1 className="tc"> Kitty Click !!!</h1>
                    <h1 className="tc"> your score: </h1>
                </div>
                <ClickerList OurClickers = {OurClickers} />
            </div>
        );
    };

export default App;
