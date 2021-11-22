import React from "react";

function GifList({gifs}){
    console.log(gifs)

    const gifElements = gifs.map(gif => <li key={gif.id}><img src = {gif.images.original.url} alt={gif.title}></img></li>)


    return(
        <ul>
            {gifElements}
        </ul>
    )
}

export default GifList