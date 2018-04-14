import React from 'react';

const Clicker = (props) => {
    return <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
        <img alt="visual" src={`https://robohash.org/ReactJS${props.id}?set=set4&size=340x340`} />
                {/*<div>*/}
                    {/*<h3> {props.name} </h3>*/}
                    {/*<p> {props.id} </p>*/}
                {/*</div>*/}
            </div>;
};

export default Clicker;