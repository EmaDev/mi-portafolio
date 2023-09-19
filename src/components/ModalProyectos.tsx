import { useContext, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ThemeContext } from '../context/ThemeContext';
import 'animate.css';
import { ProyectoInterface } from '../data';

const Contenedor = styled.div<any>`
   position:fixed;
   top: 0;
   left:0;
   background: ${({ theme }) => theme == "DARK" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.8)"};
   width: 100vw;
   height: 100vh;
   z-index: 999;
   display: flex;
   justify-content:center;
   align-items:center;
   margin:auto;
   transition: all 1s ease-out;
`;

const Modal = styled.div<any>`
   width: 60vw;
   height: 80vh;
   background: ${({ background }) => background};
   border-radius: 10px;
   max-width: 650px;
   box-shadow: 2px 2px 12px rbga(0,0,0,0.5);
   position:absolute;
   @media(max-width: 800px){
    width: 90%;  
    height: 90vh;  
   }
   animation: bounceInUp; 
   animation-duration: 1s;
   .separador{
    width: 95%;
    height: 2px;
    background: rgba(255,255,255,0.2); 
    margin: 1rem auto;
  }
`;

const ContenedorImagen = styled.div<any>`
  margin:auto;
  width: 100%;
  overflow:hidden;
  position:relative;
  .imagen{
    margin:auto;
    min-width:100%;
    max-height: 320px;
  }
  .contenido{
    display:flex;
    transform: translateX( ${({ posicion }) => `calc(${posicion})`});
    transition: all 0.3s ease-in-out;
  }
`;

const BotonSlide = styled.button<any>`
   position:absolute;
   width: 35px;
   height: 35px;
   border-style:none;
   border-radius: 50%;
   background: #fff;
   top:0; bottom:0;
   margin:auto;
   ${({ left }) => left ? `left: 1rem;` : `right:1rem;`}
   z-index: 9;
`;

const DotSlide = styled.span<any>`
   width: 10px;
   height:10px;
   border-radius: 50%;
   background: ${({ activo, color }) => activo == "true" ? color : "grey"};
`;

const Titulo = styled.h2`
   foint-size: 2rem;
   font-weight:bold;
   color: ${({ color }) => color};
`;
const Descripcion = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ color }) => color};

  @media(max-width: 500px){
    max-height: 170px;
    overflow:auto;
  }
`;

const Boton = styled.button<any>`
   position:absolute;
   width: 100%;
   margin:auto;
   border-style:none;
   background: ${({ background }) => background};
   bottom:0;
   border-radius: 5px;
   color: #fff;
   font-size: 1.8rem;
   font-weight: 600;
   padding: 1rem 2rem;

   &:hover{
    width: 105%;
    padding: 1.6rem 2.4rem;
    font-size: 2.2rem;
   }

   transition: .2s ease all;
`;


interface Props {
    visible: boolean;
    cerrarModal: (mostrar: boolean) => void;
    data: ProyectoInterface;
}

const arrImagenes = ["red", "green", "orange", "yellow", "brown", "purple"];
const colores = ["#b34c4c", "#748574", "#b99833"];

export const ModalProyectos = ({ visible, cerrarModal, data }: Props) => {

    const { theme, mostrarComoRGBA } = useContext(ThemeContext);
    const [posicionImagen, setPosicionImagen] = useState<number>(0);
    const [translateX, setTranslateX] = useState<string>("0");
    const sliderRef: any = useRef(null);
    const modalRef: any = useRef(null);

    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        if (visible) {
            body.classList.add("bloquear");
        } else {
            body.classList.remove("bloquear");
        }
    }, [visible]);

    
    const volverItemSlider = () => {
        if (posicionImagen > 0) {
            const widthSlider = sliderRef.current.offsetWidth;
            setTranslateX(`-${widthSlider}px*${posicionImagen - 1}`);
            setPosicionImagen((prev) => prev - 1);
        }
    }
    const siguienteItemSlider = () => {
        if (posicionImagen < arrImagenes.length - 1) {
            const widthSlider = sliderRef.current.offsetWidth;
            setTranslateX(`-${widthSlider}px*${posicionImagen + 1}`);
            setPosicionImagen((prev) => prev + 1);
        }
    }

    if (!visible) return <></>;

    return (
        <Contenedor theme={theme.modo}>
            <Modal background={theme.bgPrimario} ref={modalRef}>
                <ContenedorImagen posicion={translateX}>

                    <BotonSlide left="true" onClick={volverItemSlider}><IoIosArrowBack /></BotonSlide>
                    <BotonSlide onClick={siguienteItemSlider}><IoIosArrowForward /></BotonSlide>
                    <div className='contenido' ref={sliderRef}>
                        {arrImagenes.map( (img, i) => (
                            <img key={ img + "-"+ i} className='imagen' style={{ background: img }} src="https://png.pngtree.com/background/20230612/original/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-picture-image_3180467.jpg" />
                        ))}
                    </div>
                    <div style={{ margin: "1rem auto", display: "flex", alignItems: "center", justifyContent: "center", columnGap: "1rem" }}>
                        {arrImagenes.map((img, i) => (
                            <DotSlide key={img + "-dot"} activo={(i == posicionImagen) ? "true" : "false"} color={theme.btnColor2} />
                        ))}
                    </div>
                </ContenedorImagen>
                <div style={{ padding: "1rem", margin: "0 1rem" }}>
                    <Titulo color={theme.txtPrimario}>{data.titulo}</Titulo>
                    <Descripcion color={(theme.modo == "DARK") ? theme.txtPrimario : theme.txtSecundario}>{data.descripcion}</Descripcion>
                </div>
                <div style={{ position: "absolute", width: "80%", left: 0, right: 0, bottom: "2rem", margin: "auto", display: "flex", columnGap: "2.5rem" }}>
                    <div style={{ position: "relative", width: "100%", height: "2rem" }}>
                        <Boton background={theme.btnColor2} onClick={() => cerrarModal(false)}>Ver sitio</Boton>
                    </div>
                    <div style={{ position: "relative", width: "100%", height: "2rem" }}>
                        <Boton background={"#ff4b4b"} onClick={() => cerrarModal(false)}>Cerrar</Boton>
                    </div>
                </div>
                <div className='separador' style={{ background: mostrarComoRGBA(theme.txtTerciario, 5) + "" }}></div>
                <p style={{ margin: 0, textAlign: "center"}}>
                    {
                        data.tecnologias.map( (t, i) =>
                            <span key={t} style={{ fontSize: "1.3rem", fontWeight: "800", color: colores[i % colores.length] }}>{`#${t} `}</span>)
                    }
                </p>
            </Modal>
        </Contenedor>
    )
}
