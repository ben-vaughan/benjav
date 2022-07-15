import './css/App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LayoutDefault from './components/layouts/LayoutDefault.js';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
