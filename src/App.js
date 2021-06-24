import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeList from './components/EmployeeList';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <Router>
    <div className="App">
      
      <Route exact path="/" component={EmployeeList} />
    </div>
    </Router>
  );
}

export default App;
