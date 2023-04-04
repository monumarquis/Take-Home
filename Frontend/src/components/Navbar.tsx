import { Button, Flex, Image } from '@chakra-ui/react'
import { FC } from 'react'
import Logo from "../assets/Logo.png"
import { NavLink, NavLinkProps } from 'react-router-dom'

interface CustomNavLinkProps extends NavLinkProps {
    exact?: boolean;
    activeclassname: string;
    route: string;
}

const Navbar: FC = () => {
    return (
        // Navbar section
        <nav style={{
            position: "fixed", top: 0, left: 0, width: "100%", background: "#fff", zIndex: "99", boxShadow: " 0 8px 6px -6px black"
        }} >
            <Flex w="80%" m="auto" p="10px" alignItems={"center"}  >
                {/* Logo */}
                <Flex mr="100px" >
                    <Image src={Logo} alt="Logo" />
                </Flex>
                {/* Menu */}
                <Flex flexDir={"row"} w="14%" justifyContent={"space-between"} mr="500px" alignItems={"center"} >
                    <CustomNavLink activeclassname="active" to="/" route="Home" />
                    <CustomNavLink activeclassname="active" to="/all-user" route="Users" />
                </Flex>
                <Flex flexDir={"row"} w="30%" justifyContent={"space-between"} alignItems={"center"} >
                    <Button bg="#ffe01b" color="#000" border="1px solid #000" borderRadius="99px" boxShadow={"transparent"} _hover={{ bg: "#e2e8f0", transform: "translateY(-10px)", boxShadow: "0px 8px 0px #000", }} mr="20px" w="70%" >
                        Signup
                    </Button>
                    <Button bg="#ffe01b" color="#000" border="1px solid #000" borderRadius="99px" boxShadow={"transparent"} _hover={{ bg: "#e2e8f0", transform: "translateY(-10px)", boxShadow: "0px 8px 0px #000", }} w="70%" >
                        Login
                    </Button>
                </Flex>
            </Flex>
        </nav >
    )
}

function CustomNavLink(props: CustomNavLinkProps) {
    return (
        <Flex>
            <NavLink {...props} ><span>{props.route}</span></NavLink>
        </Flex>

    );
}
export default Navbar