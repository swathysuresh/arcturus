import Bollywood from './components/bollywood';
import Heading from './components/heading'
import React from 'react'
import Technology from './components/technology'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = ()=>{
    return(
        <>
        <BrowserRouter>
            <Switch>
                <Route path = '/home'exact><Heading /></Route>
                <Route path = '/bollywood'exact><Bollywood /></Route>
                <Route path = '/technology'exact><Technology /></Route>
                <Route path = '/'exact><Heading /></Route>

            </Switch>
        </BrowserRouter>
        
        </>
    );
}
export default App;