import { Switch, Route } from 'react-router-dom'
import CandidateForm from '../components/CandidateForm'
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
      <Route path="/candidate">
        <Header />
        <CandidateForm />
      </Route>
    </Switch>
  )
}

export default Router;
