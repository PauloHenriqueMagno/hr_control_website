import { Switch, Route } from 'react-router-dom'
import CandidateForm from '../components/CandidateForm'
import EmployeesSection from '../components/Employees'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Container from '../components/Container'


const Router = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/hr/login">
            <LoginForm />
          </Route>
          <Route path="/hr/employees">
            <EmployeesSection />
          </Route>
          <Route path="/candidate">
            <CandidateForm />
          </Route>
        </Switch>
      </Container>
    </>
  )
}

export default Router;
