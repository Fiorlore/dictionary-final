import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {

    const colors = ['#e6d2df', '#dfd5e4', '#d0dbef', '#e6d2df'];
    
    if (props.results) {
    return (
        <div className="Results">
            <section className="box2">
           <h1> {props.results.word} </h1>

            <Phonetics phonetics={props.results.phonetics} />
            </section>
                
            {props.results.meanings.map(function(meaning, index){
                return (
                    <section key={index} style={{background: colors[index]}}>
                        <Meaning meaning={meaning} />
                    </section>
                );
            })}
        </div>
        );
    } else {
        return null;
    }
}