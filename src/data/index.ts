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

export interface ProyectoInterface {
    titulo: string;
    descripcion: string;
    colaboradores:{nombre: string; img:string}[];
    tecnologias:string[];
    imagenes:string[];
    imagen:string;
    url?: string;
    git?:string;
}

/* 
{
        titulo: "Amazon Prime Clon",
        descripcion: "",
        colaboradores: [{nombre:"Emanuel Cisterna", img: ""}],
        imagen: "",
        tecnologias: [],
        imagenes: []
    }
*/
export const PROYECTOS: ProyectoInterface[] = [
    {
        titulo: "Amazon Prime Clon",
        descripcion: `Sitio Web inspirado en Amazon Prime Video, respetando su diseño en su totalidad. Utilizando la 
        API "themoviedb", es posible filtrar el contenido, por peliculas y series, categorias, generos, entre otros. 
        El sition cuento con autenticacion de usuario mediante Firebase Auth. El usuario puede agregar y quitar el contenido en 
        su lista de favoritos.
        `,
        colaboradores: [{nombre:"Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4"}],
        imagen: "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Fportada-cine.jpg?alt=media&token=441320d4-8a73-4fe7-aad0-00bfa787ec84",
        tecnologias: ["NextJs","React","TypScript", "Firebase", "styled-components", "swiper js"],
        imagenes: [
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Fcine4.jpg?alt=media&token=75252cf1-1215-4b18-b7f7-d5b172ffeff2",
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Fcine1.jpg?alt=media&token=4cf780ca-6c44-4759-b500-adc5ce85f1fe",
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Fcine2.jpg?alt=media&token=e1156d5c-eacb-4a44-a2f9-d346bae9e775",
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Fcine3.jpg?alt=media&token=e4d5f5d0-e25a-4730-a745-2d9ee3490ebf"
        ]
    },
    {
        titulo: "Lista de tareas",
        descripcion: `Cuenta con autenticacion de usuario mediante correo y contraseña o Google. Almacenamiento 
        permante de las tareas, pudiendolas clasificar por importancia y fecha de creacion.`,
        colaboradores: [{nombre:"Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4"}],
        imagen: "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Fnotas.jpg?alt=media&token=43593f7f-1fdd-4d6e-9cf6-b2ab88d9487e",
        tecnologias: ["React Js", "JavaScript", "Firebase", "React Router Dom", "sweetalert2"],
        imagenes: [
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Fnotas1.jpg?alt=media&token=25d9575c-dd65-4841-8759-3fc6c128622d",
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Fnotas2.jpg?alt=media&token=8ef733cd-49ce-4c6d-9eee-f8dde1942cd2",
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Fnotas3.jpg?alt=media&token=b742bf66-8905-48bc-9a39-c11c1c827209",
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Fnotas4.jpg?alt=media&token=a7e92ce2-a0c7-41cd-af31-61213ce837d4"
        ],
        url: "https://notas-app-fdb45.web.app/",
        git: "https://github.com/EmaDev/notas-app"
    },
    {
        titulo: "PokeApp",
        descripcion: `Aplicacion movil desarrollado con React Native, utilizando la API "PokeApi" se muestran una lista de todos los Pokemones, 
        pero mostrandolos de manera perezosa mendiante un FlatList. A su vez se puede acceder una pantalla particular para el pokemon donde se mostrara
        toda la informacion respectiva al Pokemon seleccionado.`,
        colaboradores: [{nombre:"Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4"}],
        imagen: "",
        tecnologias: ["React Native", "React Navigation", "TypeScript","Axios","react-native-image-colors", ],
        imagenes: []
    },
    {
        titulo: "E-commerce",
        descripcion: `Este sitio es un e-comerce completamente funcional, el mismo proporciona un listado de productos desde una base de datos integrada a un 
        sistema de gestion, tambien desarrollado por mi. El cliente 
        podra filtrar articulos por multiples condiciones, agregarlos a su carrito, seleccionando las variones que desee (talle, color, ingrendiente, etc). 
        Posteriormente podra realizar el pago medieante mercado pago.`,
        imagen: "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Ftienda.jpg?alt=media&token=e88a075e-a4a0-4d84-9569-3d3cd8807174",
        colaboradores: [{nombre:"Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4"}],
        imagenes: [
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Ftienda2.jpg?alt=media&token=a62a50a2-77c0-4463-a084-172144a6cd8a",
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Ftienda1.jpg?alt=media&token=cafc419e-fe5f-4e91-9838-c63c8ee23ab7"
        ],
        tecnologias: ["Next Js", "TypeScript", "React", "Firebase", "WhatsApp API", "Mercado Pago API", "react-google-maps", "styled-components"]
    },
    {
        titulo: "FonoBus",
        descripcion: `El sistema de reservas de FonoBus te permite tener organizada tu compra de tickets, reservas y pasajes.
        Con esta app puedes ver los vehículos cercanos, reservar y programar tus viajes.
        También podrás cargar crédito y administrar tus saldos`,
        colaboradores: [
            {nombre:"Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4"},
            {nombre: "Maximiliano Ramos", img: "https://avatars.githubusercontent.com/u/26845674?v=4"}
        ],
        imagen:"https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Ffono.jpg?alt=media&token=fe9002db-056c-4e2d-9e2f-26f0d18fd107",
        imagenes:[
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Ffono4.jpg?alt=media&token=8ce31311-5ecb-4c80-92b6-aca164865ed4",
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Ffonobus1.jpg?alt=media&token=d4cc715d-c994-4b04-a2c5-18a1c154bce1",
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Fifonobus2.jpg?alt=media&token=4b0eaea7-1401-4f75-a8b7-b7ea9233060f"
        ],
        tecnologias: ["React Native", "TypeScript", "react-native-vision-camera", "vision-camera-code-scanner"],

    },
    {
        titulo: "Sistema de Gestion",
        descripcion: `Sistema ERP que cuenta con todas las herramientas para simplificar la gestión de pymes en un solo lugar. Cuenta con roles de 
        usuario, reportes de ventas, control de articulos y stock, facturacion, integracion con E-commerce.`,
        colaboradores: [{nombre:"Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4"}],
        imagen: "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Ferp.jpg?alt=media&token=62c9841c-e29f-4d25-a4e2-b54ad2714229",
        imagenes: [
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Ferp1.jpg?alt=media&token=c6787e1e-cfa5-4595-9883-33fb231e12e7",
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Ferp2.jpg?alt=media&token=91360735-caf0-4fee-a882-a1e8c57bd81b",
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Ferp3.jpg?alt=media&token=b640563e-fc0e-433e-89dc-e3b16f388d01"
        ],
        tecnologias: ["Next js","React","Mongo DB", "Firebase", "recharts","styled-components", "Axios"]
    },
    {
        titulo: "Prode Qatar 2022",
        descripcion: "",
        colaboradores: [{nombre:"Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4"}],
        imagen: "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Fprode.jpg?alt=media&token=59678a54-9a3d-4650-863c-7c7d6643bd7e",
        imagenes: [
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Fprode2.jpg?alt=media&token=13c1ca0c-5041-4859-bdd5-9c7a4eaa7bed",
            "https://firebasestorage.googleapis.com/v0/b/portafolio-3c6e9.appspot.com/o/proyectos%2Fprode1.jpg?alt=media&token=322555fe-9826-45ad-ac1c-68bcd6152251"
        ],
        tecnologias: ["Next js","React", "Firebase","styled-components", "swiper Js", "sweetalert2", "emoji-flags"]
    }
]

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
        nombre: "JAVA",
        imagen: imgJava
    },
    {
        nombre: "Mongo DB",
        imagen: imgMongo
    },
    {
        nombre: "Mys SQL",
        imagen: imgMysql
    },
    {
        nombre: "Node Js",
        imagen: imgNode
    }
]