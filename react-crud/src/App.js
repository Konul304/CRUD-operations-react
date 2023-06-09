import './App.css';
import Create from './components/create'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Update from './components/update';
import Read from './components/read';

function App() {
  return (
    <Router>
      <div className="container_main">
        <div className="form_container text-light text-center p-5 fs-3 fw-bold">
          <p className="mb-5">React CRUD Operations</p>
          <Routes>
            <Route path='/create' element={<Create />} />
            <Route path='/' element={<Read />} />
            <Route path='/update' element={<Update />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
