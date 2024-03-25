import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Jobs from './components/Jobs'
import AboutJobItem from './components/AboutJobItem'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/jobs" component={Jobs} />
        <ProtectedRoute exact path="/jobs/:id" component={AboutJobItem} />
        <Route path="/Not-Found" component={NotFound} />
        <Redirect to="Not-Found" />
      </Switch>
    )
  }
}

export default App
