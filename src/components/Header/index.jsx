import Menu from "./Menu";
import { DivBox, HeaderBox } from "./style"

const Header = () => {
    return (
        <HeaderBox>
            <DivBox>
                <h1>Company</h1>
                <Menu /> 
            </DivBox>
        </HeaderBox>
    )
}

export default Header