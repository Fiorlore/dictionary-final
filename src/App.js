import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <h4>What word do you want to look up?</h4>
      <br />
      <Dictionary />

      <footer>
        This project was coded by{""} <a href="https://github.com/Fiorlore"
        target="_blank"
        rel="noopener noreferrer">
        Anna Kwiatkowska</a> 
        {""} and is open-sourced on {""} 
        <a href="https://github.com/Fiorlore/dictionary-project"
        target="_blank"
        rel="noopener noreferrer">
        Git-Hub</a>
      </footer>
    </div>
  );
}