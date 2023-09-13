import { useEffect, useState, useContext} from 'react';
import { styled } from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const Nav = styled.nav<any>`
   background-color: ${({ navHidden }) => (navHidden == "false") ? "#000214" : "rgba(0,0,0,0.5)"};
   padding: ${({ navHidden }) => (navHidden == "false") ? "2rem 4rem" : "1rem 4rem"};   
   border-bottom: 1px solid rgba(255,255,255, 0.6);
   display: flex;
   align-items:center;
   justify-content: space-between;
   position: fixed;
   top: 0;
   width: 100%;
   z-index: 999;
   transition: .5s ease all;
   backdrop-filter: blur(5px);
`;

const Titulo = styled.h2`
   color: #fff;
   margin: 0;
   font-size: 2rem;
`;

const Ul = styled.ul`
   list-style: none;
   display: flex;
   justify-content: space-between;
   align-items:center;

   li{
    display: inline-block;
    margin: 0 3rem;
    color: #fff;
    cursor:pointer;
   }

   @media(max-width: 850px){
    display: none;
   }
`;

const BtnContacto = styled.li`
   border-radius: 8px;
   padding: 1rem 2.5rem;
`;


export const NavBar = () => {

    const {theme} = useContext(ThemeContext);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navHidden, setNavHidden] = useState<string>("false");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setNavHidden(true.toString());
            } else {
                setNavHidden(false.toString());
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
        <Nav navHidden={navHidden}>
            <Titulo>{"</Emanuel Cisterna>"}</Titulo>
            <Ul>
                <li>Experiencia</li>
                <li>Sobre mi</li>
                <BtnContacto style={{background: theme.btnColor2}}>Contactarme</BtnContacto>
            </Ul>
        </Nav>
        <br/><br/><br/>
        </>
    )
}
