import React from 'react';

export default function Video(props) {
    const { src } = props;

    return(
        <div style={{width:"560px", maxWidth: "100%"}}>
            <iframe width="100%" height="315" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        </div>   
    ) 
}