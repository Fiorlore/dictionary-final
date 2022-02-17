import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
     
      <Dictionary defaultKeyword="word"/>

      <footer>
        This project was coded by{""} <a href="https://github.com/Fiorlore"
        target="_blank"
        rel="noopener noreferrer">
        Anna Kwiatkowska</a> 
        {""} and is open-sourced on {""} 
        <a href="https://github.com/Fiorlore/dictionary-final"
        target="_blank"
        rel="noopener noreferrer">
        Git-Hub</a>
      </footer>
    </div>
  );
}