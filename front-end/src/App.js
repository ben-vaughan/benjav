import './css/App.css'
import Header from './components/Header.js'
import Experience from './components/Experience.js';
import About from './components/About.js';

function App() {
  return (
    <div className="App background">
        <Header/>
        <body>
          <About/>
          <Experience/>
        </body>
    </div>
  );
}

export default App;
