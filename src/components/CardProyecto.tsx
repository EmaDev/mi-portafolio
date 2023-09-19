import { styled } from 'styled-components';
import image from "../assets/pwa-mock.png";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ProyectoInterface } from '../data';

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
const ImgColaborador = styled.div`
  position:relative; 
  margin-top: 1rem;
  
  img{ 
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin-left: -8px;
  }

  }
`;

const colores = ["#b34c4c", "#748574", "#b99833"];

interface Props {
    seleccionarProyecto: ( proyecto: ProyectoInterface) => void;
    proyecto: ProyectoInterface;
}
export const CardProyecto = ({ seleccionarProyecto, proyecto }: Props) => {

    const { theme, mostrarComoRGBA } = useContext(ThemeContext);

    const coratarCadena = (cadena: string): string => {
        if (cadena.length > 100) {
            return cadena.slice(0, 97) + "...";
        }
        return cadena;
    }

    const abrirModal = () => {
        seleccionarProyecto(proyecto);
    }

    return (
        <Card bgColor={mostrarComoRGBA(theme.bgTerciario, 9)} onClick={abrirModal}>
            <img src={proyecto.imagen} />
            <Titulo style={{ color: theme.txtPrimario }}>{proyecto.titulo}</Titulo>
            <Descripcion style={{ color: theme.txtTerciario }}>{coratarCadena(proyecto.descripcion)}</Descripcion>
            <div className='separador' style={{ background: mostrarComoRGBA(theme.txtTerciario, 5) + "" }}></div>
            <p style={{ margin: 0 }}>
                {
                    proyecto.tecnologias.map((t, i) =>
                        <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: colores[i % colores.length] }}>{`#${t} `}</span>)
                }
            </p>
            <div style={{display: "flex", marginLeft: "1rem"}}>
                {
                    proyecto.colaboradores.map(col => (
                        <ImgColaborador>
                            <img key={col.nombre} src={col.img} title={col.nombre}/>
                        </ImgColaborador>
                    ))
                }
            </div>
        </Card>
    )
}
