import { styled } from 'styled-components';
import image from "../assets/pwa-mock.png";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
const tech = [
    "Java",
    "React",
    "Styled-components",
    "firebase",
    "TypeScript",
    "Next.Js"
]

const Card = styled.div<any>`
   width: 300px;
   padding: 1.5rem;
   margin: 1rem;
   background: ${({ bgColor }) => bgColor};
   border-radius: 6px;
   display: flex;
   flex-direction: column;
   justify-content: center;

   img{
    height: 180px;
    border-radius: 6px;
    width: 250px;
    margin: auto;
   }
   .separador{
     width: 100%;
     height: 2px;
     background: rgba(255,255,255,0.2); 
     margin: 1rem 0;
   }

   @media(min-width: 800px){
    margin: 2.3rem 2rem;
   }

   &:hover{
    box-shadow: 1px 1px 12px rgba(0,0,0,0.3);
    transition: all 0.7s ease-in-out;
   }

`;

const Titulo = styled.h2`
  margin: 1rem 0;
  font-size: 1.9rem;
`;
const Descripcion = styled.p`
  margin: 0;
  font-size: 1.5rem;
`;
const colores = ["#b34c4c", "#748574", "#b99833"];

interface Props {
    setMostrarModal: (mostrar:boolean) => void;
}
export const CardProyecto = ({setMostrarModal}:Props) => {

    const { theme, mostrarComoRGBA } = useContext(ThemeContext);

    const coratarCadena = (cadena: string): string => {
        if (cadena.length > 100) {
            return cadena.slice(0, 97) + "...";
        }
        return cadena;
    }
    
    const abrirModal = () => {
        setMostrarModal(true);
    }

    return (
        <Card bgColor={mostrarComoRGBA(theme.bgTerciario, 9)} onClick={abrirModal}>
            <img src={image} />
            <Titulo style={{ color: theme.txtPrimario }}>Instagram Clone</Titulo>
            <Descripcion style={{ color: theme.txtTerciario }}>{coratarCadena("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ramleamet consectetur adipisicing elit adipisicing elit")}</Descripcion>
            <div className='separador' style={{ background: mostrarComoRGBA(theme.txtTerciario, 5) + "" }}></div>
            <p style={{margin: 0}}>
            {
                tech.map((t, i) =>
                    <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: colores[i % colores.length] }}>{`#${t} `}</span>)
            }
            </p>
        </Card>
    )
}
