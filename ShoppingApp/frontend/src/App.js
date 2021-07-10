import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './screens/Home';

import Accessories from './screens/Accessories';

import Cart from './screens/Cart';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/store/accessories' component={Accessories}/>
          <Route exact path='/cart' component={Cart}/>
          
        </Switch>
      </main>
    </Router>
  );
}

export default App;