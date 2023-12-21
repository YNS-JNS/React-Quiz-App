// Importing logo
import LightLogo from '../assets/light-logo.png';
// _____________________________________________________
// Importing Link from React router dom library:
import { Link } from 'react-router-dom';
// _____________________________________________________

// Importing styled-components library:
import styled from 'styled-components';
// _____________________________________________________

// NavContainer nav:
const NavContainer = styled.nav`
   padding: 15px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: #7cc6fe;
   border-bottom: 3px solid #191919;
`;

// HomeLogo img:
const HomeLogo = styled.img`
   height: 70px;
`;

// Link:
const StyledLink = styled(Link)`
   padding: 10px 15px;
   margin-right: 8px;
   color: #191919;
   text-decoration: none;
   font-size: 18px;
   text-align: center;
   &:hover {
      text-decoration: underline;
      text-decoration-thickness: 5px;
 }
`;

const StyledLinkPass = styled(Link)`
   padding: 10px 15px;
   margin-right: 8px;
   color: #191919;
   border: 3px solid #191919;
   box-shadow: 5px 5px #191919;
   border-raduis: 5px;
   text-decoration: none;
   font-size: 18px;
   text-align: center;
   background-color: #F6F7C4;
   &:hover {
      background-color: #7cc6fe;
 }
`;
// border: 3px solid #191919;
//    box-shadow: 10px 10px #191919;
// _______________________________________

const Header = () => {
   return (
      <NavContainer>
         <Link to="/">
            <HomeLogo src={LightLogo} />
            {/* <HomeLogo src={devLogo} /> */}
            {/* <HomeLogo src={dev} /> */}
         </Link>
         <div>
            <StyledLink to="/">
               Home
            </StyledLink>
            <StyledLink to="/">
               Profil
            </StyledLink>
            <StyledLinkPass to="/startquiz">
               Pass the test
            </StyledLinkPass>
         </div>
      </NavContainer>
   );
};

export default Header;
