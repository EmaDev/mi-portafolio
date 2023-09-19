import { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";
import { LogosSlider } from "./LogosSlider";
import { BotonAnimado } from "./basicos/BotonAnimado";
import { LISTA_SKILLS, hexToRgba } from "../helpers";
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

   .divBtns{
    display: grid; justify-content: center;
    margin: 2rem auto; width: 40%; height: 60px; column-gap: 4rem; grid-template-columns: 50% 50%;

    @media(max-width: 600px){
      width: 90%;
    }
   }

`;

const Titulo = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 5rem;
  text-align:center;
  @media(max-width: 600px){
    font-size: 3.4rem;
  }
`;

const Subtitulo = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  width: 70vw;
  text-align:center;
  color: ${({ color }) => color};
  @media(max-width: 600px){
    font-size: 1.6rem;
    width: 96vw;
  }

`;

const Boton = styled.button<any>`
   position:absolute;
   padding: 1rem;
   top: 0;
   bottom:0;
   left:0; right:0;
   margin:auto;
   border-radius: 8px;
   border-style:none;
   font-size: 2rem;
   font-weight: 600;
   color: ${({color}) => color};
   background: ${({background}) => background};
   width:90%;
   height: 90%;

   ${({outline, background, bg2}) => outline && 
   `background: ${hexToRgba(bg2, 0.1)};
    backdrop-filter: blur(5px);
    border: 2px solid ${background};`
   }

   &:hover{
    padding: 1.5rem;
    height: 120%;
    width: 110%;
    font-size: 2.2rem;
    box-shadow: 2px 2px 20px ${({background}) => hexToRgba(background, 0.6)};
   }

   transition: .3s ease all;

`;


export const Header = () => {

  const { theme } = useContext(ThemeContext);
  const isMobile = useMediaQuery({ query: '(max-width: 850px)' });

  return (
    <HeaderSection background={theme.bgPrimario} color={theme.txtPrimario}>
      {!isMobile && <SelectorTema />}
      <Titulo>Programador Full Stack <br />& Diseñador Web</Titulo>
      <Subtitulo color={theme.txtTerciario}>Apasionado por aprender nuevas habilidades y resolver problemas. Trabajo usando el desarrollo y el diseño para un impacto positivo, realmente disfruto creando experiencias humanas, placenteras y centradas en el usuario.</Subtitulo>
      <br />
      <LogosSlider listaImagenes={Array.from({ length: 2 }, () => [...LISTA_SKILLS.slice(0, (LISTA_SKILLS.length / 2))]).flat()} />
      <LogosSlider direccion="LEFT" sincro={false} listaImagenes={Array.from({ length: 2 }, () => [...LISTA_SKILLS.slice((LISTA_SKILLS.length / 2))]).flat()} />

      <div className="divBtns">
        <div style={{ width: "100%", position: "relative" }}>
          <Boton color={theme.txtPrimario} background={theme.btnColor2}>Contacto</Boton>
        </div>
        <div style={{ width: "100%", position: "relative" }}>
          <Boton color={theme.txtPrimario} background={theme.btnColor2} bg2={theme.btnColor} outline="true">Mis proyectos</Boton>
        </div>
      </div>

      <div style={{ display: "flex", gap: "5rem" }}>
        <BsGithub size={"3rem"} />
        <BsLinkedin size={"3rem"} />
      </div>
    </HeaderSection>
  )
}