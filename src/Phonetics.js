import "./Phonetics.css";

export default function Phonetics(props) {
    
    return (
        <div className="Phonetics">
            <a href={props.phonetics[0].audio} target="_blank" rel="noopener noreferrer"> &#9654; </a>
            {props.phonetics[0].text}
        </div>
    );
    

}