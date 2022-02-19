import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";
export default function Dictionary(props){

    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

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

        let pexelsApiKey = "563492ad6f9170000100000128df1ccc18a94d0d9c177355d28789c6";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleResponse(response) {
        setResults(response.data[0]);
       
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    if (loaded) {
        return (
    <div className="Dictionary">
        <section className="box1">
         <div className="headerQuestion">what word are you looking for?</div>
        
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={updateSearchTerm} defaultValue={props.defaultKeyword} />
        </form>
        <div className="prompt">type your word: cat, sing, wave, peaceful...</div>
        </section>
        <Photos photos={photos} />
       <Results results={results} />
       
    </div>
    );
        } else {
            load();
            return "Loading..."
        }


}