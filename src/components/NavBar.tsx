import { useEffect, useState, useContext } from 'react';
import { styled } from 'styled-components';
import { LuMenu } from "react-icons/lu";
import { ThemeContext } from '../context/ThemeContext';
import { SideBar } from './SideBar';
import { hexToRgba } from '../helpers';

const Nav = styled.nav<any>`
   background-color: ${({ navHidden }) => (navHidden == "false") ? "#000214" : "rgba(0,0,0,0.5)"};
   padding: ${({ navHidden }) => (navHidden == "false") ? "1.3rem 4rem" : ".4rem 3.5rem"};   
   border-bottom: 1px solid rgba(255,255,255, 0.6);
   display: flex;
   align-items:center;
   justify-content: space-between;
   position: fixed;
   top: 0;
   width: 100%;
   z-index: 997;
   transition: .5s ease all;
   backdrop-filter: blur(5px);

   @media(max-width: 850px){
    padding: ${({ navHidden }) => (navHidden == "false") ? "2rem" : "1rem"};
   }
`;

const Titulo = styled.a`
   color: #fff;
   margin: 0;
   font-size: 2rem;
   font-weight: 800;

   @media(max-width: 600px){
    font-size: 1.5rem;
   }
`;

const BtnMenu = styled.button`
   border-style:none;
   background:none;
   display:flex;
   align-items:center;
   color: ${({ color }) => hexToRgba(color!, 1)};
   font-size: 3rem;

   &:hover{
    color: ${({ color }) => hexToRgba(color!, 0.6)};
   }

   @media(min-width: 850px){
    display: none;
   }
`;

const Ul = styled.ul`
   list-style: none;
   display: flex;
   justify-content: space-between;
   align-items:center;

   li{
    display: inline-block;
    margin: 0 3rem;
    cursor:pointer;

    a{
    color: #fff;
    font-weight: 600;
    }

    &:hover{
        letter-spacing: 4px;
    }
    transition: .3s ease all;
   }

   @media(max-width: 850px){
    display: none;
   }
`;

const BtnContacto = styled.li`
   border-radius: 8px;
   padding: 1rem 2.5rem;
   margin: .5rem 0;
`;


export const NavBar = () => {

    const { theme } = useContext(ThemeContext);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navHidden, setNavHidden] = useState<string>("false");
    const [sideBarActivo, setSideBarActivo] = useState(false);

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
            <SideBar visibiladad={sideBarActivo} setVisibilidad={setSideBarActivo}/>
            <Nav navHidden={navHidden}>
                <Titulo href="#">{"</Emanuel Cisterna>"}</Titulo>
                <Ul>
                    <li><a href='#experiencia'>Experiencia</a></li>
                    <li><a href='#sobre-mi'>Sobre mi</a></li>
                    <BtnContacto style={{ background: theme.btnColor2 }}><a href='#contacto'>Contactame</a></BtnContacto>
                </Ul>
                <BtnMenu color={theme.modo == "DARK" ? theme.txtPrimario : theme.bgTerciario} onClick={() => setSideBarActivo(true)}><LuMenu /></BtnMenu>
            </Nav>
            <br /><br /><br/>
        </>
    )
}
