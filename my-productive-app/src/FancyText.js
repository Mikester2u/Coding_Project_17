//U22562170
import React from 'react';
import './FancyText.css'; //imports

const FancyText = ({title, text}) => { //Different text styles for title and text
    return(
        <div classname = {title ? 'fancy-title' : 'fancy-text'}> 
            {text}
        </div>
    );
};

export default FancyText;