import React, {useState} from "react";


function GifSearch({onFormSubmit}){
    const [search, setSearch] = useState("")

    function handleFormSubmit(e){
        e.preventDefault()
        onFormSubmit(search)
        setSearch("")
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label for="search">Enter a Search Term:</label><br></br>
            <input type = "text" value={search} onChange={e => setSearch(e.target.value)}></input><br></br>
            <button type="submit">Find Gifs</button>
        </form>
    )
}

export default GifSearch