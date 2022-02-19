import "./Synonyms.css";

export default function Synonyms(props) {
   

    if (props.synonyms) {
        return (
            <div className="Synonyms">
                <span>▫️</span>
            {props.synonyms.map(function(synonym, index) {
                if (index<(props.synonyms.length-1)) {
            return <span key={index}> {synonym}, </span>
                } else {
                    return <span key="index"> {synonym} </span>
                }
            })}
        </div>
        );
        
    } else {
        return null;
    }
    
}
