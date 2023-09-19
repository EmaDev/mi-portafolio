import { useContext } from "react";
import styled from 'styled-components';
import { FormuContacto } from './FormContacto';
import { ThemeContext } from '../context/ThemeContext';
import imgDev from "../assets/developer.svg";
import { useMediaQuery } from "react-responsive";


const Contenedor = styled.div`
   width: 90%;
   display: grid; 
   grid-template-columns: 60% 40%;
   margin:auto;
`;

export const Contacto = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 850px)' });
    const { theme } = useContext(ThemeContext);

    return (
        <Contenedor>
            <FormuContacto theme={theme} />
            {!isMobile &&
                <div>
                    <img src={imgDev} alt="developer" />
                </div>
            }
        </Contenedor>
    )
}
