import { useContext } from "react";
import styled from 'styled-components';
import { FormuContacto } from './FormContacto';
import { ThemeContext } from '../context/ThemeContext';
import imgDev from "../assets/developer.svg";
import { useMediaQuery } from "react-responsive";
import "animate.css";

const Contenedor = styled.div`
   display: grid; 
   margin:auto;
   justify-content:center;
   align-items:center;
   width: 100%;

   @media(min-width: 850px){
    grid-template-columns: 60% 40%;
    width: 90%;
   }
`;

const Imagen = styled.img`
   animation: jello; 
   animation-duration: 3s;
   animation-delay: 5s;
   animation-iteration-count: infinite;

   max-width: 450px;
`;

export const Contacto = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 850px)' });
    const { theme } = useContext(ThemeContext);

    return (
        <Contenedor>
            <FormuContacto theme={theme} />
            {!isMobile &&
                <div style={{}}>
                    <Imagen src={imgDev} alt="developer"/>
                </div>
            }
        </Contenedor>
    )
}
