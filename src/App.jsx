import { BrowserRouter } from 'react-router-dom'
import Router from './router/index'
import Navbar from './component/Navbar'
import './assets/css/style.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
