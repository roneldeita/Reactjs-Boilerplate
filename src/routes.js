import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import NotFound from './components/notFound'
import Cart from './components/cart'

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/cart" component={Cart} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

Routes.propTypes = {
  store: PropTypes.object.isRequired
}

export default Routes
