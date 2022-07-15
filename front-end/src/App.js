import './css/App.css'
import Header from './components/Header.js'
import Experience from './components/Experience.js';

function App() {
  return (
    <div className="App background">
        <Header/>
        <body>
          <Experience/>
        </body>
    </div>
  );
}

export default App;
