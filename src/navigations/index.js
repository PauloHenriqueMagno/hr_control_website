import { Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'


const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
      </Route>
      <Route path="/hr/login">
        <Header />
        <LoginForm />
      </Route>
    </Switch>
  )
}

export default Router;
