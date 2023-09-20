import { keyframes, styled } from 'styled-components';
import { hexToRgba } from '../helpers';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ScrollLeft = keyframes`
   0%{
    transform: translateX(0);
   }
   100%{
    transform: translateX(calc(-250px * 5));
   }
`;
const ScrollRight = keyframes`
   0%{
    transform: translateX(0);
   }
   100%{
    transform: translateX(calc(250px * 5));
   }
`;

const SliderContainer = styled.div<any>`
   overflow: hidden;
   margin: 1rem auto; 
   white-space: nowrap;
   display: flex;
   align-items:center;
   width: 60vw;
   @media(max-width: 800px){
    width: 95vw;
   }
   position:relative;

  &:before{
    background: ${({ color }) => `linear-gradient(to right, ${hexToRgba(color, 1)} 0%, ${hexToRgba(color, 0)} 100%)`};
    content: '';
    height: 100%;
    position:absolute;
    width: 25%;
    z-index:2;
    top:0;
    left: 0;
  }
  &:after{
    background:  ${({ color }) => `linear-gradient(to right, ${hexToRgba(color, 1)} 0%, ${hexToRgba(color, 0)} 100%)`};
    content: '';
    height: 100%;
    position:absolute;
    width: 25%;
    z-index:2;
    top:0;
    right: 0;
    transform: rotateZ(180deg);
  }
`;
const Slider = styled.div<any>`
  animation: ${({ direccion }) => (direccion == "LEFT") ? ScrollLeft : ScrollRight} ${({sincro}) => sincro == "true" ? "30s":"20s"} linear infinite;  
  width: calc(250px * 15);
  display:flex;
  &:hover{
    animation-play-state:paused;
    transition: all 0.3s ease-in-out;
  }

  @media(max-width: 600px){
    width: calc(200px * 15);
  }
`;

const ItemSlider = styled.div<any>`
   min-width: 250px;
   height: 120px;
   margin: 0 2rem;
   border-radius: 6px;
   padding: 2rem 2.5;
   background: ${({color}) => color};
   display:flex;
   align-items:center;
   justify-content:center;

   &:hover{
    background: ${({colorHover}) => colorHover};
    border: 3px solid #e1e1e1;
    transition: all 0.3s ease-in-out;
   }
   @media(max-width: 600px){
    min-width: 200px;
    height: 90px;
  }
`;

const ContenidoItem = styled.div<any>`
   margin:auto;
   display:flex;
   cursor:pointer;
   align-items:center;
   justify-content:center;

   img{
    height: 60px;
    max-width: 60px;
    margin:auto;
    transition: .1s ease all;
    ${({modo}) => (modo == "DARK") && "filter: grayscale(100%);"}
   }
   span{
    margin:auto 1rem;
    font-size: 3rem;
    font-weight: bold;
    transition: .1s ease all;
   }

   &:hover{
    span{
      font-size: 3.2rem;
      @media(max-width: 600px){
        font-size: 2.6rem;
      }
    }
    transition: .3s ease all;
   }

   @media(max-width: 600px){
    img{
      height: 40px;
      max-width: 40px;
    }
    span{
      font-size: 2.3rem;
    }
   }
`;

interface Props {
  direccion?: "LEFT" | "RIGHT",
  listaImagenes: { nombre: string, imagen: any }[];
  sincro?:boolean;
}
export const LogosSlider = ({ listaImagenes, direccion = "LEFT", sincro=true }: Props) => {

  const {theme} = useContext(ThemeContext);

  return (
    <SliderContainer color={theme.bgPrimario}>
      <Slider direccion={direccion} sincro={sincro.toString()}>
        {listaImagenes.map((obj, i) => (
          <ItemSlider key={i} color={theme.bgSecundario} colorHover={theme.bgTerciario}>
            <ContenidoItem modo={theme.modo}>
              <img src={obj.imagen} />
              <span>{obj.nombre}</span>
            </ContenidoItem>
          </ItemSlider>
        ))}
      </Slider>
    </SliderContainer>
  )
}
