import { styled } from 'styled-components';
import { ThemeProps } from '../context/ThemeContext';

const SeccionScreen = styled.section<any>`
   background-color: ${({ background }) => background};
   padding: 2rem;
   display:flex;
   flex-direction: column;
   align-items:center;
   justify-content:center;

   @media(min-width: 850px){
    min-height: 100vh;
   }

`;
const Titulo = styled.h1`
    font-size: 4rem;
    margin-top: 2rem;
    @media(max-width: 600px){
        font-size: 2.6rem;
    }
`;
const SubTitulo = styled.h2`
    font-size: 2.2rem;
    margin-top: .5rem; 
    text-align:center;
    max-width: 85vh;
    @media(max-width: 600px){
        font-size: 1.6rem;
    }
`;
interface Props {
    theme: ThemeProps;
    titulo: string;
    subtitulo?: string;
    background?: string;
    idSeccion: string;
    children: any;
}

export const Seccion = ({ children, titulo, idSeccion ,subtitulo, background = "#1c1c1c", theme}: Props) => {

    return (
        <SeccionScreen background={background} id={idSeccion}>
            <Titulo style={{color: theme.txtPrimario}}>{titulo}</Titulo>
            {subtitulo && 
            <SubTitulo style={{color: theme.txtPrimario}}>{subtitulo}</SubTitulo>
            }
            {children}
            
        </SeccionScreen>
    )
}


