import { useContext } from 'react';
import styled from 'styled-components';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ThemeContext } from '../context/ThemeContext';

const Contenedor = styled.footer<any>`
   padding: 2rem;
   padding-top: 4rem;
   display: grid;
   grid-template-columns: 33% 33% 33%;
   align-items:center;
   margin:auto;
   background: ${({background}) => background};
   color:${({color}) => color}; 
   h6{
    font-size: 2rem;
    text-align:center;
   }
`

export const Footer = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <Contenedor color={theme.txtPrimario} background={theme.bgPrimario}>
            <div>
                <p><b>Trabaja conmigo</b> <br/> emanuelcisterna@outlook.com</p>
            </div>
            <h6>Todos los derechos reservados</h6>
            <div style={{display: "flex", flexDirection: "column", alignItems: "end", justifyContent: "end"}}>
                <p style={{textAlign: "right"}}><b>Encontrame aca</b></p>
                <div style={{display: "flex", gap: "1rem", marginTop: "1rem"}}>
                    <BsLinkedin size={"2rem"}/>
                    <BsGithub size={"2rem"}/>
                </div>
            </div>
        </Contenedor>
    )
}
