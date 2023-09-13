import { useContext, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ThemeContext } from '../context/ThemeContext';

const Contenedor = styled.div`
   position:fixed;
   top: 0;
   left:0;
   background: rgba(0,0,0,0.5);
   width: 100vw;
   height: 100vh;
   z-index: 999;
   display: flex;
   justify-content:center;
   align-items:center;
   margin:auto;
`;

const Modal = styled.div<any>`
   width: 60vw;
   height: 80vh;
   background: ${({ background }) => background};
   border-radius: 10px;
   max-width: 650px;
   @media(max-width: 800px){
    width: 90%;    
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
`;
interface Props {
    visible: boolean;
    cerrarModal: (mostrar:boolean) => void;
    data: any;
}

const arrImagenes = ["red", "green", "orange", "yellow", "brown", "purple"];
export const ModalProyectos = ({ visible, cerrarModal }: Props) => {

    const { theme } = useContext(ThemeContext);
    const [posicionImagen, setPosicionImagen] = useState<number>(0);
    const [translateX, setTranslateX] = useState<string>("0");
    const sliderRef: any = useRef(null);
    const modalRef:any = useRef(null);

    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        if (visible) {
            body.classList.add("bloquear");
        } else {
            body.classList.remove("bloquear");
        }
    }, [visible]);

    useEffect(() => {
        function handleClickOutside(event:any) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                cerrarModal(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

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
        <Contenedor>
            <Modal background={theme.bgPrimario} ref={modalRef}>
                <ContenedorImagen posicion={translateX}>

                    <BotonSlide left="true" onClick={volverItemSlider}><IoIosArrowBack /></BotonSlide>
                    <BotonSlide onClick={siguienteItemSlider}><IoIosArrowForward /></BotonSlide>
                    <div className='contenido' ref={sliderRef}>
                        {arrImagenes.map(img => (
                            <img key={img} className='imagen' style={{ background: img }} src="https://png.pngtree.com/background/20230612/original/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-picture-image_3180467.jpg" />
                        ))}
                    </div>
                    <div style={{ margin: "1rem auto", display: "flex", alignItems: "center", justifyContent: "center", columnGap: "1rem" }}>
                        {arrImagenes.map((img, i) => (
                            <DotSlide key={img + "-dot"} activo={(i == posicionImagen) ? "true" : "false"} color={theme.btnColor2} />
                        ))}
                    </div>
                </ContenedorImagen>
                <div style={{ padding: "1rem" }}>
                    <Titulo color={theme.txtPrimario}>Amazon Prime Clon</Titulo>
                    <Descripcion color={(theme.modo == "DARK") ? theme.txtPrimario : theme.txtSecundario}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem incidunt, hic mollitia atque ab odit eos quibusdam ipsam deserunt laboriosam nisi! In provident totam voluptatem, ex sunt suscipit repudiandae non.</Descripcion>
                </div>
            </Modal>
        </Contenedor>
    )
}
