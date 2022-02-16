import { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){

    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function updateSearchTerm(event){
        event.preventDefault();
        setKeyword(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response) {
        setResults(response.data[0]);
       
    }

    return (
    <div className="Dictionary">
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Type a word..." onChange={updateSearchTerm} />
        </form>
       <Results results={results} />
    </div>
    );
}