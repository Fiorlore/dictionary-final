import "./Phonetics.css";

export default function Phonetics(props) {
    console.log(props.phonetics);
    return (
        <div className="Phonetics">
            <a href={props.phonetics[0].audio} target="_blank">▶️ </a>
            /{props.phonetics[0].text}/
        </div>
    );
    

}