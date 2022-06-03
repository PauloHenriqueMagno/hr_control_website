import { useAccount } from "../../providers/Account"
import Menu from "./Menu";
import { DivBox, HeaderBox } from "./style"

const Header = () => {
    const { auth } = useAccount();
    return (
        <HeaderBox>
            <DivBox>
                <h1>Company</h1>
                {auth ? <Menu /> : " "}
            </DivBox>
        </HeaderBox>
    )
}

export default Header