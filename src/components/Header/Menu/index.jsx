/* eslint-disable jsx-a11y/anchor-is-valid */
import { Nav } from "./style"
import { useAccount } from "../../../providers/Account"

const Menu = () => {
    const { auth } = useAccount();

    return (
        <Nav>
            {
                auth? <>
                    <a href="/candidate">Candidatar-se</a>
                    <a href="/hr/employees">Funcionarios</a>
                    <a href="#">LINK 2</a>
                    <a href="#">LINK 3</a>
                </> : <>
                    <a href="/hr/login">RH</a>
                    <a href="/candidate">Candidatar-se</a>
                </>
            }
        </Nav>
    )
}
export default Menu