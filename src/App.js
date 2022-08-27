import cats from './images/cats.png'
import catlogo from './images/catlogo.svg'
import './App.css';

function App() {
  return (
    <div className="App">

      <header>
        <text>Title of this beautiful webpage</text>
        <div id="circle"><img src={catlogo} id="logo" alt="black cat logo"/></div>
      </header>

      <main>
        <img src={cats} id="photo" alt="two cats sitting at a corner"/>
        <article id="maintext">This is the Article</article>
        <aside id="list">This is the aside list</aside>
      </main>

      <footer>
        this is the footer
      </footer>

    </div>
  );
}

export default App;

