import "./Synonyms.css";

export default function Synonyms(props) {
    console.log(props.synonyms.length);

    

    if (props.synonyms) {
        return (
            <div className="Synonyms">
                {props.synonyms.map(function(synonym, index) {
                    if (index<(props.synonyms.length-1)) {
                return <span key="index"> {synonym}, </span>
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
