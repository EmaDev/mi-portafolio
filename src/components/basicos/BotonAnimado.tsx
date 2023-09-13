import { useContext, useEffect } from "react";
import { styled } from 'styled-components';
import { ThemeContext } from "../../context/ThemeContext";


const Boton = styled.button<any>`
   background: ${({ bgColor }) => bgColor};
   color: ${({ color }) => color};
   font-weight: bold;
   border-style:none;
   border-radius: 10px;
   margin: 1rem 0;
   ${({ size }) => size == "MINI" && 
    `
    font-size: 1.4rem;
    padding: 1rem;
    `}
   ${({ size }) => size == "MEDIO" && 
    `
    font-size: 1.8rem;
    padding: 1.5rem 2rem;
    `}
    ${({ size }) => size == "GRANDE" && 
    `
    font-size: 2rem;
    padding: 1.6rem;`}

    ${({outline, bgColor}) => outline && 
    `
    background: rgba(0,0,0,0.5);
    border: 1px solid ${bgColor};
    backdrop-filter: blur(5px);
    `
    }
   
   &:hover{
    /*filter: brightness(0.5);*/
    font-size: 2.2rem;
    background: #0284c7;
    transition: .3s ease all;
   }
`;

interface Props {
  titulo: string;
  onclick: any;
  size: "MINI" | "MEDIO" | "GRANDE";
  outline?: boolean;
}
export const BotonAnimado = ({ titulo, onclick, size, outline = false }: Props) => {

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const btns = document.querySelectorAll(".button");

    btns.forEach((btn: any) => {
      btn.onclick = (data: any) => {
        const { pageX, pageY, currentTarget } = data;
        console.log(pageX, pageY, currentTarget)
      }
    })

  }, []);

  return (
    <Boton className="button"
      onClick={onclick}
      bgColor={theme.btnColor}
      size={size}
      outline={outline}
      color="#fff">
      {titulo}
    </Boton>
  )
}
