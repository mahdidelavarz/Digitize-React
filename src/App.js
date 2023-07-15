import Layout from './Layout/Layout';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  // Switch,
  // route,
  // Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App bg-slate-200">
        <Home />
      </div>
    </Router>
  );
}

export default App;
