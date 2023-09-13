import { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext, ThemeType } from "../context/ThemeContext";
import { CiSun } from "react-icons/ci";
import { FiMoon } from "react-icons/fi";
 
const Contenedor = styled.div<any>`
   cursor:pointer;
   position: relative;
   width: 100px;
   height: 40px;
   background: grey;
   border-radius: 20px;
   border: 1px solid rgba(0,0,0,0.5);
   box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
   ${({ tema }) => tema == "DARK" ?
        `background:#2b2b2b;`
        :
        `background: #86e3ed;`
    }
    transition: all 0.5s ease-in-out;
`;
const Esfera = styled.div<any>`
   width: 30px;
   height: 30px;
   background:#fff;
   position:absolute;
   top: 0; bottom: 0;
   margin:auto 1rem;
   border-radius: 50%;
   display:flex;

   ${({ tema }) => tema == "DARK" ?
        `transform: translateX(50px);
        `
        :
        `
        background: #ffce83;
        `
    }
    transition: all 0.3s ease-in-out;

    .icono{
        display:flex;
        align-items:center;
        justify-content:center;
        margin: auto;
        color: green;
    }
`;


export const SelectorTema = () => {

    const { theme, cambiarTema } = useContext(ThemeContext);

    const handleCambiarTema = () => {
        let nuevoModo: ThemeType = "LIGHT";
        if (theme.modo == "LIGHT") nuevoModo = "DARK";
        cambiarTema(nuevoModo);
    }

    return (
        <div style={{ position: "absolute", top: "5rem", right: "6rem" }}>
            <Contenedor onClick={handleCambiarTema} tema={theme.modo}>
                <Esfera tema={theme.modo}>
                    {theme.modo == "LIGHT" ? <CiSun className="icono" color="#a97b25"/> : <FiMoon  className="icono" color="#a97b25"/>}
                </Esfera>
            </Contenedor>
        </div>
    )
}
