import React from 'react';

const Clicker = (props) => {
    // const { id } = props;
    return <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
        <img alt="visual" src={`https://robohash.org/ReactJSMcSwain${props.id}?set=set4&size=340x340`} />
            </div>;
};

export default Clicker;