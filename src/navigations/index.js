import { Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'


const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <LoginForm />
      </Route>
      <Route path="/hr">
      </Route>
    </Switch>
  )
}

export default Router;
