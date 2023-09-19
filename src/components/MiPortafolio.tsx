import {useContext, useState} from 'react'
import { NavBar } from './NavBar'
import { Header } from './Header'
import { Seccion } from './Seccion'
import { LineaDeTiempo } from './LineaDeTiempo'
import { ThemeContext } from '../context/ThemeContext'
import { ContenedorCardProyectos } from './ContenedorCardProyectos'
import { SideBar } from './SideBar'
import { Footer } from './Footer'

export const MiPortafolio = () => {

    const {theme} = useContext(ThemeContext);
    
    return (
        <div>
            <NavBar />
            <Header />
            <Seccion theme={theme} background={theme.bgSecundario} titulo="Proyectos" subtitulo="Mira mis mejores proyectos, son la fusión de creatividad y código, brindando experiencias de usuario atractivas como nunca antes.">
                <ContenedorCardProyectos/>
            </Seccion>
            <Seccion theme={theme} background={theme.bgPrimario} titulo="Experiencia Laboral." subtitulo="Lo que hice hasta ahora">
                <LineaDeTiempo/>
            </Seccion>
            <Footer/>
        </div>
    )
}
