import React from 'react';
import { BrowserRouter, Route, Switch,  Link} from 'react-router-dom'

import App from './components/main'
import Comments from './components/comments'


  const routes = (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movie">Movie</Link></li>
        </ul>

        <hr/>
          <Switch>
            <Route path="/"  exact component={App}/>
            <Route path="/movie" exact component={Comments}/>
          </Switch>
      </div>
    </BrowserRouter>
    )



export default routes
