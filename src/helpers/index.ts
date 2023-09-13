import imgReact from "../assets/iconos/react-icon.svg";
import imgFirebase from "../assets/iconos/firebase-icon.svg";
import imgCss from "../assets/iconos/css-icon.svg";
import imgGit from "../assets/iconos/git-icon.svg";
import imgHtml from "../assets/iconos/html-icon.svg";
import imgJava from "../assets/iconos/java-icon.svg";
import imgJs from "../assets/iconos/js-icon.svg";
import imgMongo from "../assets/iconos/mongo-icon.svg"
import imgMysql from "../assets/iconos/mysql-icon.svg"
import imgTs from "../assets/iconos/ts-icon.svg";
import imgRN from "../assets/iconos/react-native.png";
import imgNode from "../assets/iconos/node-icon.svg";
import imgNpm from "../assets/iconos/npm-icon.svg";


export function hexToRgba(hex: string, alpha: number) {
    // Elimina el signo '#' si está presente
    hex = hex.replace('#', '');

    // Verifica si el valor hexadecimal tiene 3 o 6 caracteres
    if (hex.length === 3) {
        hex = hex.split('').map(function (char) {
            return char + char;
        }).join('');
    }

    // Convierte los valores hexadecimales a decimales
    var r = parseInt(hex.slice(0, 2), 16);
    var g = parseInt(hex.slice(2, 4), 16);
    var b = parseInt(hex.slice(4, 6), 16);

    // Asegúrate de que alpha esté en el rango [0, 1]
    alpha = Math.min(Math.max(0, alpha), 1);

    // Crea la cadena rgba
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
}

export const truncarArray = (array: [], partes:number): any[] => {
    const arrayDeArrays = [];
    const corte = array.length / partes;
    
    for(let i = 0; i < partes; i++){

    }
    
    return [["erv", "wevwev"]];
}

export const LISTA_SKILLS: {nombre:string, imagen:any}[] = [
    {
        nombre: "React",
        imagen: imgReact
    },
    {
        nombre: "Firebase",
        imagen: imgFirebase
    },
    {
        nombre: "Css",
        imagen: imgCss
    },
    {
        nombre: "HTML",
        imagen: imgHtml
    },
    {
        nombre: "Java Script",
        imagen: imgJs
    },
    {
        nombre: "Git",
        imagen: imgGit
    },
    {
        nombre: "TypeScript",
        imagen: imgTs
    },
    {
        nombre: "React",
        imagen: imgReact
    },
    {
        nombre: "Mongo DB",
        imagen: imgMongo
    },
    {
        nombre: "Mys SQL",
        imagen: imgMysql
    }
]