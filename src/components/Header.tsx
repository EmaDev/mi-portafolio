import { useContext, useState } from "react";
import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { ThemeContext } from "../context/ThemeContext";
import { LogosSlider } from "./LogosSlider";
import { BotonAnimado } from "./basicos/BotonAnimado";
import { LISTA_SKILLS } from "../helpers";
import { SelectorTema } from "./SelectorTema";


const HeaderSection = styled.header<any>`
   position:relative;
   background: ${({ background }) => background};
   @media(min-width: 850px){
    min-height: 100vh;
   }

   padding: 2rem .5rem;
   display: flex;
   flex-direction: column;
   justify-content:center;
   align-items:center;
   color: ${({ color }) => color};
`;

const Titulo = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 5rem;
  text-align:center;
`;

const Subtitulo = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  width: 70vw;
  text-align:center;
  color: ${({ color }) => color};
`;

export const Header = () => {

  const { theme, switchTema } = useContext(ThemeContext);
 
  return (
    <HeaderSection background={theme.bgPrimario} color={theme.txtPrimario}>
      <SelectorTema/>
      <Titulo>Programador Full Stack <br />& Diseñador Web</Titulo>
      <Subtitulo color={theme.txtTerciario}>Apasionado por aprender nuevas habilidades y resolver problemas. Trabajo usando el desarrollo y el diseño para un impacto positivo, realmente disfruto creando experiencias humanas, placenteras y centradas en el usuario.</Subtitulo>
      <br />
      <LogosSlider listaImagenes={Array.from({ length: 2 }, () => [...LISTA_SKILLS.slice(0, (LISTA_SKILLS.length / 2))]).flat()} />
      <LogosSlider direccion="LEFT" sincro={false} listaImagenes={Array.from({ length: 2 }, () => [...LISTA_SKILLS.slice((LISTA_SKILLS.length / 2))]).flat()} />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", columnGap: "1rem", margin: "3rem 1rem" }}>
        <BotonAnimado titulo="Contactame" size="MEDIO" onclick={() => { }} />
        <BotonAnimado titulo="Mis proyectos" size="MEDIO" outline onclick={() => { }} />
      </div>

      <div style={{ display: "flex", gap: "5rem" }}>
        <BsGithub size={"3rem"} />
        <BsLinkedin size={"3rem"} />
      </div>
    </HeaderSection>
  )
}