import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { ThemeContext } from "../context/ThemeContext";
import { LogosSlider } from "./LogosSlider";
import { hexToRgba } from "../helpers";
import { SelectorTema } from "./SelectorTema";
import StarsCanvas from "./Stars";
import { LISTA_SKILLS } from "../data";

const HeaderSection = styled.header<any>`
   position:relative;
   background: ${({ background }) => background};

   @media(max-width: 850px){
    height: 100vh;
   }
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
      width: 80%;
    }
   }

   .arrowScroll{
    margin-top: 2rem;
    animation: slideInDown; 
    animation-duration: 4s;
    animation-iteration-count: infinite;
   }

   .link{
    font-size: 3.5rem;
  }

`;

const Titulo = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 5rem;
  text-align:center;
  @media(max-width: 600px){
    padding-top: 2rem;
    font-size: 3.4rem;
  }
  @media(max-width: 500px){
    padding-top:2rem;
    font-size: 2.6rem;
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
  @media(max-width: 500px){
    font-size: 1.4rem;
  }

`;

const Boton = styled.a<any>`
   position:absolute;
   padding: 1rem;
   top: 0;
   bottom:0;
   left:0; right:0;
   margin:auto;
   cursor:pointer;
   border-radius: 8px;
   border-style:none;
   font-size: 2rem;
   font-weight: 600;
   color: ${({ color }) => color};
   background: ${({ background }) => background};
   width:90%;
   height: 90%;
   display:flex;
   align-items:center;
   justify-content:center;

   ${({ outline, background, bg2 }) => outline &&
    `background: ${hexToRgba(bg2, 0)};
    backdrop-filter: blur(3px);
    border: 2px solid ${background};`
  }

   &:hover{
    padding: 1.5rem;
    height: 120%;
    width: 110%;
    font-size: 2.2rem;
    box-shadow: 2px 2px 20px ${({ background }) => hexToRgba(background, 0.6)};

    @media(max-width:600px){
      font-size: 1.8rem;
     }
   }

   transition: .3s ease all;

   @media(max-width:600px){
    font-size: 1.4rem;
    text-align:center;
   }

`;


export const Header = () => {

  const { theme } = useContext(ThemeContext);
  const isMobile = useMediaQuery({ query: '(max-width: 850px)' });

  return (
    <HeaderSection background={theme.bgPrimario} color={theme.txtPrimario} id="">
      <StarsCanvas />
      {!isMobile && <SelectorTema />}
      <Titulo>Programador Full Stack <br />& Diseñador Web</Titulo>
      <Subtitulo color={theme.txtTerciario}>
        Como desarrollador Full Stack con experiencia en aplicaciones nativas y web, estoy apasionado por aprender nuevas habilidades y resolver problemas, utilizando el desarrollo y el diseño para lograr un impacto positivo en cada proyecto.
      </Subtitulo>
      <br />
      <LogosSlider listaImagenes={Array.from({ length: 2 }, () => [...LISTA_SKILLS.slice(0, (LISTA_SKILLS.length / 2))]).flat()} />
      <LogosSlider direccion="LEFT" sincro={false} listaImagenes={Array.from({ length: 2 }, () => [...LISTA_SKILLS.slice((LISTA_SKILLS.length / 2))]).flat()} />

      <div className="divBtns">
        <div style={{ width: "100%", position: "relative" }}>
          <Boton href='#contacto' color={theme.txtPrimario} background={theme.btnColor2}>Contacto</Boton>
        </div>
        <div style={{ width: "100%", position: "relative" }}>
          <Boton href='#proyectos' color={theme.txtPrimario} background={theme.btnColor2} bg2={theme.btnColor} outline="true">Mis proyectos</Boton>
        </div>
      </div>

      {
        !isMobile ?
          <div style={{ display: "flex", gap: "3rem", marginTop: "2rem", position: "relative", color: "red"}}>
            <a href="https://github.com/EmaDev" target={"_blank"} style={{color: theme.txtPrimario}}><BsGithub size="3.8rem"/></a>
            <a href="https://www.linkedin.com/in/emanuel-cisterna" target={"_blank"} style={{color: theme.txtPrimario}}><BsLinkedin size="3.8rem"/></a>
          </div>
          :
          <IoIosArrowDown size={"3rem"} className="arrowScroll" />
      }

    </HeaderSection>
  )
}