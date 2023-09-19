import {useContext} from 'react'
import { NavBar } from './NavBar'
import { Header } from './Header'
import { Seccion } from './Seccion'
import { LineaDeTiempo } from './LineaDeTiempo'
import { ThemeContext } from '../context/ThemeContext'
import { ContenedorCardProyectos } from './ContenedorCardProyectos'
import { Footer } from './Footer'
import { FormuContacto } from './FormContacto'
import { Contacto } from './Contacto'

export const MiPortafolio = () => {

    const {theme} = useContext(ThemeContext);
    
    return (
        <div>
            <NavBar />
            <Header />
            <Seccion idSeccion='proyectos' theme={theme} background={theme.bgSecundario} titulo="Proyectos" subtitulo="Mira mis mejores proyectos, son la fusión de creatividad y código, brindando experiencias de usuario atractivas como nunca antes.">
                <ContenedorCardProyectos/>
            </Seccion>
            <Seccion idSeccion='experiencia' theme={theme} background={theme.bgPrimario} titulo="Experiencia Laboral." subtitulo="Lo que hice hasta ahora">
                <LineaDeTiempo/>
            </Seccion>
            <Seccion background={theme.bgSecundario} theme={theme} idSeccion='contacto' titulo='Contacto'>
                <Contacto/>
            </Seccion>
            <Footer/>
        </div>
    )
}
