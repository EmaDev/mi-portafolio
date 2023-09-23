import { useContext, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsLink45Deg, BsGithub } from "react-icons/bs";
//import { MdCancel } from "react-icons/md";
import { ThemeContext } from '../context/ThemeContext';
import 'animate.css';
import { ProyectoInterface } from '../data';
import { aclararColorRGBA, hexToRgba } from '../helpers';

const Contenedor = styled.div<any>`
   position:fixed;
   top: 0;
   left:0;
   background: ${({ theme }) => theme == "DARK" ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.8)"};
   width: 100vw;
   height: 100vh;
   z-index: 999;
   display: flex;
   justify-content:center;
   align-items:center;
   margin:auto;
   transition: all 1s ease-out;
   overflow:auto;
`;

const Modal = styled.div<any>`
   position:relative;
   background: ${({ background }) => background};
   border-radius: 6px;
   max-width: 750px;
   max-height: 90vh;
   overflow:auto;
   @media(max-width: 800px){
    width: 90%;  
    height: 90vh;  
   }
   
   border: 1px solid ${({ background }) => aclararColorRGBA(hexToRgba(background, 1), 25)};
   box-shadow: 2px 2px 25px rgba(0,0,0,0.7);
   animation: bounceInUp; 
   animation-duration: 1s;
`;

const ContenedorImagen = styled.div<any>`
  margin:auto;
  width: 100%;
  overflow:hidden;
  position:relative;
  .imagen{
    margin:auto;
    min-width:100%;
    max-height: 500px;
    border-radius: 8px 8px 0 0;
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
   background: rgba(255,255,255,0.5);
   top:0; bottom:0;
   margin:auto;
   ${({ left }) => left ? `left: 1rem;` : `right:1rem;`}
   z-index: 9;

   display:flex;
   align-items:center;
   justify-content:center;
   padding: .3rem;
   font-size: 2.2rem;
`;

const DotSlide = styled.span<any>`
   width: 10px;
   height:10px;
   border-radius: 50%;
   background: ${({ activo, color }) => activo == "true" ? color : "grey"};
`;

const Titulo = styled.h2`
   @media(min-width: 850px){
    display:flex;
   justify-content: space-between;
   aling-items:center;
   }

   h2{
    font-size: 2.6rem;
    font-weight:800;
    color: ${({ color }) => color};
    margin:0;
   }

   div{
    display:flex;
    column-gap: 2rem;

    a{
       color: ${({ color }) => hexToRgba(color, 0.6)};
       font-size: 2.8rem;
       &:hover{
        color: ${({ color }) => color};
        transition: .2s ease all;
       }
    }
   }

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

const ContenidoModal = styled.div`
  padding: 0rem 2rem 4rem 2rem;
  color:${({ color }) => color};

  .separador{
    width: 95%;
    height: 2px;
    background: rgba(255,255,255,0.2); 
    margin: 2rem auto;
  }
  label{
    margin: 1rem 0;
    margin-top: 2rem;
    font-weight: 600;
    display: block;
  }
`;

const Colaborador = styled.div`
   display:flex;
   align-items:center;
   column-gap: 1rem;
   span{
    font-size: 1.4rem;
    font-weight: 600;
    display:flex;

    &:after{
        content:"";
        margin: 0 1rem;
        margin-right: 2rem;
        width: 1px;
        color:#e1e1e1;
       }
   }
   
   img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
   }
   
`;
/*
const Boton = styled.button<any>`
   position:absolute;
   border-style:none;
   background: none;
   top:-1rem;
   right: -1rem;
   color: red;
   font-size: 3rem;
   z-index: 99999;

   &:hover{
    font-size: 4rem;
   }
   transition: .3s ease all;
`;*/


interface Props {
    visible: boolean;
    cerrarModal: (mostrar: boolean) => void;
    data: ProyectoInterface;
}

const colores = ["#b34c4c", "#748574", "#b99833"];

export const ModalProyectos = ({ visible, cerrarModal, data }: Props) => {

    const { theme, mostrarComoRGBA } = useContext(ThemeContext);
    const [posicionImagen, setPosicionImagen] = useState<number>(0);
    const [translateX, setTranslateX] = useState<string>("0");
    const sliderRef: any = useRef(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setPosicionImagen(0);
        setTranslateX("0");
    }, [data]);

    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        if (visible) {
            body.classList.add("bloquear");
        } else {
            body.classList.remove("bloquear");
        }
    }, [visible]);

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            cerrarModal(false);
        }
    }

    const volverItemSlider = () => {
        if (posicionImagen > 0) {
            const widthSlider = sliderRef.current.offsetWidth;
            setTranslateX(`-${widthSlider}px*${posicionImagen - 1}`);
            setPosicionImagen((prev) => prev - 1);
        }
    }
    const siguienteItemSlider = () => {
        if (posicionImagen < data.imagenes.length - 1) {
            const widthSlider = sliderRef.current.offsetWidth;
            setTranslateX(`-${widthSlider}px*${posicionImagen + 1}`);
            setPosicionImagen((prev) => prev + 1);
        }
    }

    if (!visible) return <></>;

    return (
        <Contenedor theme={theme.modo} onClick={handleClickOutside}>
            <Modal background={theme.bgSecundario} ref={modalRef}>
                <ContenedorImagen posicion={translateX}>

                    <BotonSlide left="true" onClick={volverItemSlider}><IoIosArrowBack /></BotonSlide>
                    <BotonSlide onClick={siguienteItemSlider}><IoIosArrowForward /></BotonSlide>
                    <div className='contenido' ref={sliderRef}>
                        {data.imagenes.map((img, i) => (
                            <img key={img + "-" + i} className='imagen' src={img} />
                        ))}
                    </div>
                    <div style={{ margin: "1rem auto", display: "flex", alignItems: "center", justifyContent: "center", columnGap: "1rem" }}>
                        {data.imagenes.map((img, i) => (
                            <DotSlide key={img + "-dot"} activo={(i == posicionImagen) ? "true" : "false"} color={theme.btnColor2} />
                        ))}
                    </div>
                </ContenedorImagen>
                <ContenidoModal color={`${mostrarComoRGBA(theme.txtPrimario, 7)}`}>
                    <Titulo color={theme.txtPrimario}>
                        <h2>{data.titulo}</h2>
                        <div>
                            {data.git && <a target={"_blank"} href={data.git}><BsGithub /></a>}
                            {data.url && <a target={"_blank"} href={data.url}><BsLink45Deg /></a>}
                        </div>
                    </Titulo>
                    <Descripcion color={(theme.modo == "DARK") ? theme.txtPrimario : theme.txtSecundario}>{data.descripcion}</Descripcion>
                    <div className='separador' style={{ background: mostrarComoRGBA(theme.txtTerciario, 5) + "" }}></div>
                    <label>Colaboradores: </label>
                    <div style={{ display: "flex", overflow: "auto" }}>
                        {data.colaboradores.map(col => (
                            <Colaborador>
                                <img src={col.img} />
                                <span>{col.nombre}</span>
                            </Colaborador>
                        ))}
                    </div>
                    <label>Principales tecnologias utilizadas:</label>
                    <p style={{ margin: 0, textAlign: "center" }}>
                        {
                            data.tecnologias.map((t, i) =>
                                <span key={t} style={{ fontSize: "1.3rem", fontWeight: "800", color: colores[i % colores.length] }}>{`#${t} `}</span>)
                        }
                    </p>
                </ContenidoModal>
            </Modal>
        </Contenedor>
    )
}
