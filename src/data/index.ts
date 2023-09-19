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
        imagen: "",
        tecnologias: ["NextJs","React","TypScript", "Firebase", "styled-components", "swiper js"],
        imagenes: []
    },
    {
        titulo: "Lista de tareas",
        descripcion: `Cuenta con autenticacion de usuario mediante correo y contraseña o Google. Almacenamiento 
        permante de las tareas, pudiendolas clasificar por importancia y fecha de creacion.`,
        colaboradores: [{nombre:"Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4"}],
        imagen: "",
        tecnologias: ["React Js", "JavaScript", "Firebase", "React Router Dom", "sweetalert2"],
        imagenes: [],
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
        imagen: "",
        colaboradores: [{nombre:"Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4"}],
        imagenes: [],
        tecnologias: ["Next Js", "TypeScript", "React", "Firebase", "WhatsApp API", "Mercado Pago API", "react-google-maps", "styled-components"]
    },
    {
        titulo: "AdrogueBus",
        descripcion: `El sistema de reservas de AdrogueBus te permite tener organizada tu compra de tickets, reservas y pasajes.
        Con esta app puedes ver los vehículos cercanos, reservar y programar tus viajes.
        También podrás cargar crédito y administrar tus saldos`,
        colaboradores: [
            {nombre:"Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4"},
            {nombre: "Maximiliano Ramos", img: "https://avatars.githubusercontent.com/u/26845674?v=4"}
        ],
        imagen:"",
        imagenes:[],
        tecnologias: ["React Native", "TypeScript", "react-native-vision-camera", "vision-camera-code-scanner"],

    },
    {
        titulo: "Sistema de Gestion",
        descripcion: `Sistema ERP que cuenta con todas las herramientas para simplificar la gestión de pymes en un solo lugar. Cuenta con roles de 
        usuario, reportes de ventas, control de articulos y stock, facturacion, integracion con E-commerce.`,
        colaboradores: [{nombre:"Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4"}],
        imagen: "",
        imagenes: [],
        tecnologias: ["Next js","React","Mongo DB", "Firebase", "recharts","styled-components", "Axios"]
    },
    {
        titulo: "Prode Qatar 2022",
        descripcion: "",
        colaboradores: [{nombre:"Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4"}],
        imagen: "",
        imagenes: [],
        tecnologias: ["Next js","React", "Firebase","styled-components", "swiper Js", "sweetalert2", "emoji-flags"]
    }
]

