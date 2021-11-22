import React, {useState, useEffect} from "react"
import GifSearch from "./GifSearch"
import GifList from "./GifList"

function GifListContainer(){
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=tD0LGk5VjDXGgmuvVp4iR22n4nMYvtTQ&rating=g&limit=3")
            .then(resp => resp.json())
            .then(data => setGifs(data.data))
    }, [])


    function updateGifs(search){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=tD0LGk5VjDXGgmuvVp4iR22n4nMYvtTQ&rating=g&limit=3`)
            .then(resp => resp.json())
            .then(data => setGifs(data.data))
    }

    return(<>
        <GifSearch onFormSubmit={updateGifs}/>
        <GifList gifs={gifs} />
    </>)
}

export default GifListContainer