import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const experiencias = [

    {
        titulo: "Desarrollador React Native",
        empresa: "NetOne Software",
        tiempo: "Octubre 2022 - Actualidad",
        tareas: [
            "Diseño y desarrollo de interfaces de usuario.",
            "Implementacion de servicios: APIs, autenticacion, notificaciones push, Google Maps, etc.",
            "Implementacion de logica de negocio.",
            "Desarrollo backend con Java y NodeJs.",
            "Base de datos: MySql y Mongo DB.",
            "Depuracion y pruebas.",
        ]
    },
    {
        titulo: "Desarrodor Full Stack",
        empresa: "NetOne Software",
        tiempo: "Agosto 2022 -  Abril 2023",
        tareas: [
            "Tecnologias : Java , Spring , Hibernate , Servlets , Javascript , JQuery , Boostrap",
            "Bases de datos relacionales con MySQL, No relacionales MongoDB.",
            "Plataforma de cobro automatico de documentos con medios de pago recurrentes.",
            "Desarrollo de soluciones ágiles para el ámbito empresarial.",
            "Sistema de plantillas de impresion para PDF, en documentos fiscales. Comprobantes, Recibos, Notas de Debito/Credito, etc"
        ]
    },
    {
        titulo: "Desarollador Freelance",
        empresa: "Emanuel Cisterna",
        tiempo: "Julio 2021 - Actualidad",
        tareas: [
            "Construccion de sitios web interactivos y visualmente impactantes. Meticuloso con el código limpio y las experiencias de usuario fluidas",
            "Desarrollo completo de sitios web dinamicos",
            "Creacion y manteniento de base de datos",
            "Monejo de posicionamiento SEO"
        ]
    },
];
export const LineaDeTiempo = () => {

    const {theme} = useContext(ThemeContext);
    return (
        <div className="wrapper">
            <div className="center-line" style={{background:  theme.txtPrimario }}></div>
            {
                experiencias.map((exp, i) => (
                    <div key={exp.titulo + i} id={exp.titulo + i} className={`row ${(i % 2 == 0) ? "row-2" : "row-1"}`}>
                        <section style={{ color: "#000", boxShadow: "3px 3px 10px rgba(0,0,0,0.6)" }}>
                            <div className="icon fas fa-home" style={{boxShadow: `${(theme.modo == "LIGHT") && `0 0 0 3px ${theme.txtPrimario}`}` }}>
                                <div>
                                    {(i % 2 == 0) ?
                                        <span style={{ position: "absolute", left: "-250px", color: theme.btnColor2 }}>{exp.tiempo}</span>
                                        :
                                        <span style={{ position: "absolute", right: "-250px", color: theme.btnColor2 }}>{exp.tiempo}</span>
                                    }
                                </div>
                            </div>
                            <div>
                                <h3 style={{ margin: 0, fontWeight: "bold", fontSize: "1.9rem", color: theme.txtSecundario}} className="title">{exp.titulo}</h3>
                                <span style={{ fontWeight: "bold", display: "block", color: theme.txtTerciario }}>{exp.empresa}</span>
                            </div>
                            <ul>
                                {
                                    exp.tareas.map((tarea, j) => (
                                        <li key={j} style={{color: theme.txtSecundario}}><span>•</span>{tarea}</li>
                                    ))
                                }
                            </ul>

                        </section>
                    </div>
                ))
            }
        </div>
    )
}