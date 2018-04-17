import React from 'react';
import Clicker from './Clicker';
// import {OurClickers} from "./OurClickers";

const ClickerList = ({ OurClickers }) => {
    const clickersArray = OurClickers.map((kitty, i) => {
        return <Clicker key={OurClickers[i].id} id={OurClickers[i].id}/>
    });
    return (
        <div>
            { clickersArray }
        </div>
    );
};

// alternatively...
//
// const ClickerList = ({ OurClickers }) => {
//     return (
//         <div>
//             {
//                 OurClickers.map((kitty, i) => {
//                     return <Clicker key={OurClickers[i].id} id={OurClickers[i].id}/>
//                 })
//             }
//         </div>
//     );
// };

export default ClickerList;