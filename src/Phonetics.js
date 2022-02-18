import "./Phonetics.css";

export default function Phonetics(props) {
    
    if (props.phonetics[0].audio) {
    return (
        <div className="Phonetics">
            <a href={props.phonetics[0].audio} target="_blank" rel="noopener noreferrer"> &#9654; </a>
            {props.phonetics[0].text}
        </div>
    );
    
    } else {
        return (
            <div className="Phonetics">
               
                {props.phonetics[0].text}
            </div>
        );
    }
}