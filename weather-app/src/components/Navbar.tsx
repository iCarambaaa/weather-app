import logo from '../logo.svg';
import {Navbar, Container} from 'react-bootstrap'


const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          wwweather
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}
export default NavBar