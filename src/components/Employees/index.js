import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";
import { useAccount } from "../../providers/Account";

import {
  EmployeeStyled, ListEmployeesStyled
} from './style'

const EmployeesSection = () => {
  const [employees, SetEmployees] = useState([])

  const { auth } = useAccount()

  const renderEmployees = (employeesList = []) => {
    return employeesList.map((employee) => {
      return (
        <EmployeeStyled>
          <p className="id">ID: {employee.id}</p>
          <p className="name">Name: {employee.name}</p>
          <p className="email">E-mail: {employee.email}</p>
          <div className="shortInfos">
            <p className="personal_code">Código Pessoal: {employee.personal_code}</p>
            <p className="phone_number">Celular: {employee.phone_number}</p>
          </div>
        </EmployeeStyled>
      )
    })
  }

  useEffect(()=> {
    api
      .get('/employees/', {
        headers: {
          "Authorization": `Token ${auth}`
        }
      })
      .then((response) => {
        SetEmployees(response.data)
        console.log(response.data)
      })
      .catch((err) => {
        toast.error("Acesso negado")
        console.log(err)
      })
  }, [])

  return (
    <ListEmployeesStyled>
      {renderEmployees(employees)}
    </ListEmployeesStyled>
  )
}

export default EmployeesSection;