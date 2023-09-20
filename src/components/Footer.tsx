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
   background: ${({ background }) => background};
   color:${({ color }) => color}; 
   h6{
    font-size: 2rem;
    text-align:center;
   }

   @media(max-width:600px){
    display:flex;
    flex-direction: column;
   }
`

export const Footer = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <Contenedor color={theme.txtPrimario} background={theme.bgPrimario}>
            <div>
                <p style={{textAlign: "center", margin: 0}}><b>Trabaja conmigo</b> <br /> emanuelcisterna@outlook.com</p>
            </div>
            <h6>Todos los derechos reservados</h6>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <p style={{ textAlign: "right" }}><b>Encontrame aca</b></p>
                <div style={{ display: "flex", columnGap: "1rem"}}>
                    <BsGithub size={"2.5rem"} onClick={() => { window.location.href = "https://github.com/EmaDev" }} />
                    <BsLinkedin size={"2.5rem"} onClick={() => { window.location.href = "https://www.linkedin.com/in/emanuel-cisterna" }} />
                </div>
            </div>
        </Contenedor>
    )
}
