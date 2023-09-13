import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const experiencias = [

    {
        titulo: "Desarrodor React Native",
        empresa: "NetOne Software",
        tiempo: "Octubre 2022 - febrero 2023",
        tareas: [
            "Desarrollo de soluciones ágiles para el ámbito empresarial.",
            "Uso de tecnología Salesforce & Saleforce Industry.",
            "Programación en APEX, SOQL, LWC, HTML, CSS, JavaScript, Omnistudio"
        ]
    },
    {
        titulo: "Desarrodor Full Stack",
        empresa: "NetOne Software",
        tiempo: "Febrero 2023 - Actualidad ",
        tareas: [
            "Tecnologias : Java , Spring , Hibernate , Servlets , Javascript , JQuery , Boostrap",
            "Bases de datos relacionales con MySQL, No relacionales MongoDB.",
            "Programación en APEX, SOQL, LWC, HTML, CSS, JavaScript, Omnistudio",
            "Plataforma de cobro automatico de documentos con medios de pago recurrentes."
        ]
    },
    {
        titulo: "Programador Freelance",
        empresa: "NetOne Software",
        tiempo: "2021 - Actualidad",
        tareas: [
            "Desarrollo de soluciones ágiles para el ámbito empresarial.",
            "Uso de tecnología Salesforce & Saleforce Industry.",
            "Programación en APEX, SOQL, LWC, HTML, CSS, JavaScript, Omnistudio"
        ]
    },
];
export const LineaDeTiempo = () => {

    const {theme, mostrarComoRGBA} = useContext(ThemeContext);
    return (
        <div className="wrapper">
            <div className="center-line" style={{background:  theme.txtPrimario }}></div>
            {
                experiencias.map((exp, i) => (
                    <div id={exp.titulo + i} className={`row ${(i % 2 == 0) ? "row-2" : "row-1"}`}>
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