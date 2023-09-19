import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
import { SelectorTema } from "./SelectorTema";


const Contenedor = styled.div<any>`
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.6);
  position:fixed;
  top: 0;
  left:0;
  z-index: 998;
  ${({ visible }) => visible == "false" && "display:none;"}
  transition: all 1s ease-in-out;
`;

const Barra = styled.div<any>`
  width: 260px;
  height: 100vh;
  background: ${({ background }) => background};
  border-left: 1px solid #e1e1e1;
  position:fixed;
  z-index: 999;
  top:0;
  right: ${({ visible }) => visible == "true" ? '0' : '-270px'};
  transition: all 0.7s ease-in-out;

`;
const Ul = styled.ul`
  posiiton:relative;

  .icono{
    position:absolute;
    left: 1rem;
    top:1rem;
    color:#fff;
  }

`;

interface Props {
    visibiladad: boolean; 
    setVisibilidad: (modo:boolean) => void;
}
export const SideBar = ({visibiladad, setVisibilidad}:Props) => {

    //const [visible, setVisible] = useState<boolean>(false);
    const { theme } = useContext(ThemeContext);
    const isMobile = useMediaQuery({ query: '(max-width: 850px)' });

    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        if (visibiladad) {
            body.classList.add("bloquear");
        } else {
            body.classList.remove("bloquear");
        }
    }, [visibiladad]);

    if(!isMobile) return <></>
    return (
        <>
            <Contenedor tema={theme} visible={visibiladad.toString()} />

            <Barra background={theme.bgPrimario} visible={visibiladad.toString()}>
                <Ul>
                    <MdCancel className="icono" size={"3.5rem"} 
                    color={ theme.btnColor }
                    onClick={() => setVisibilidad(false)} />
                </Ul>
                <SelectorTema/>
            </Barra>
        </>

    )
}
