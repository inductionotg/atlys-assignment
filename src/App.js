
import './App.css';
import LoginForm from './Components/LoginForm';
import Comment from './Components/Comment';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/comment" element={<Comment/>} />
       </Routes>
    </div>
  );
}

export default App;
