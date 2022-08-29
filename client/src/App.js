import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx'
import DogCreate from './components/DogCreate/DogCreate.jsx'
import Detail from './components/Detail/Detail.jsx'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {LandingPage}/>
        <Route exact path = '/home' component = { Home }/>
        <Route exact path = '/dogs' component = { DogCreate }/>
        <Route exact path = '/dogs/:id' component = { Detail }/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
