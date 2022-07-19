import './css/App.css';
import './css/LightMode.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LayoutDefault from './layouts/LayoutDefault.js';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ThemeContextWrapper from './contexts/ThemeContextWrapper';

function App() {
  return (
    <ThemeContextWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutDefault />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeContextWrapper>
  );
}

export default App;
