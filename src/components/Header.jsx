// Importing CSS and Assets: ___________________________
// Importing Style 
// Importing logo
import LightLogo from '../assets/light-logo.png';
// import devLogo from '../assets/DevRecruit.png';
// import devLogo1 from '../assets/DevRecruit..png';
// import dev from '../assets/Dev.png';
// _____________________________________________________
// Importing Link from React router dom library:
import { Link } from 'react-router-dom';
// _____________________________________________________

// Importing styled-components library:
import styled from 'styled-components';

// NavContainer nav:
const NavContainer = styled.nav`
   padding: 15px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: #F6F7C4;
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
   background-color: #7cc6fe;
   border-radius: 5px;
   border: 3px solid #191919;
   box-shadow: 5px 5px #191919;
   &:hover {
    background-color: #5a9ee8;
    /* Add any additional styles you want for the hover effect */
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
               Accueil
            </StyledLink>
            <StyledLink to="/quiz">
               Profils
            </StyledLink>
            <StyledLink to="/quiz">
               Pass the test
            </StyledLink>
         </div>
      </NavContainer>
   );
};

export default Header;
