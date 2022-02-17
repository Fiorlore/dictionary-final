import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props){

    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function updateSearchTerm(event){
        event.preventDefault();
        setKeyword(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function search() {
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response) {
        setResults(response.data[0]);
       
    }

    if (loaded) {
        return (
    <div className="Dictionary">
        <section className="box1">
         <h3>what word are you looking for?</h3>
        <br />
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={updateSearchTerm} defaultValue={props.defaultKeyword} />
        </form>
        <div className="prompt">type your word: cat, sing, wave, peaceful...</div>
        </section>
       <Results results={results} />
    </div>
    );
        } else {
            load();
            return "Loading..."
        }


}