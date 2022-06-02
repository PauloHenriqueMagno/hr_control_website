import { DivBox, HeaderBox, Nav } from "./style"

const Header = () => {
    return (
        <HeaderBox>
            <DivBox>
                <h1>Company</h1>
                <Nav>
                    <a href="#">LINK 1</a>
                    <a href="#">LINK 2</a>
                    <a href="#">LINK 3</a>
                </Nav>
            </DivBox>
        </HeaderBox>
    )
}

export default Header