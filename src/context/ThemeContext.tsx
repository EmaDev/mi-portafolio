import { createContext, useState } from "react"

export type ThemeType = "LIGHT" | "DARK";

export interface ThemeProps {
    modo: ThemeType;
    bgPrimario: string;
    bgSecundario: string;
    bgTerciario: string;
    txtPrimario: string;
    txtSecundario: string;
    txtTerciario: string;
    btnColor: string;
    btnColor2: string;
}

const temas: { DARK: ThemeProps, LIGHT: ThemeProps } = {
    DARK: {
        modo: "DARK",
        bgPrimario: "#000214",
        bgSecundario: "#0f1628",
        bgTerciario: "#2b2c3c",
        txtPrimario: "#fff",
        txtSecundario: "#0a103f",
        txtTerciario: "#7b99af",
        btnColor: "#fce96a",
        btnColor2: "#0284c7" 
    },
    LIGHT: {
        modo: "LIGHT",
        bgPrimario: "#fff",
        bgSecundario: "#e1e1e1",
        bgTerciario: "#fff",
        txtPrimario: "#0a103f",
        txtSecundario: "#161d4f",
        txtTerciario: "#61668d",
        btnColor: "#fce96a",
        btnColor2: "#0284c7"
    }
}
interface ThemeContextProps {
    theme: ThemeProps;
    cambiarTema: (tema: ThemeType) => void;
    mostrarComoRGBA: (hex:string, transparencia?:number) => void;
    switchTema: (dark: boolean) => void;
}
export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeContextProvider = ({ children }: any) => {

    const [theme, setTheme] = useState<ThemeProps>(temas.DARK);

    const cambiarTema = (tema: ThemeType) => {
        setTheme(temas[tema])
    }

    const switchTema = (dark: boolean) => {
        if(dark){
            setTheme(temas["DARK"])
        }else{
            setTheme(temas["LIGHT"])
        }
    }

    const mostrarComoRGBA = (hex:string, transparencia?:number):string => {
        hex = hex.replace(/^#/, '');

        // Verificar si el valor hexadecimal es válido
        if (hex.length !== 6 && hex.length !== 3) {
            throw new Error('El valor hexadecimal debe tener 3 o 6 dígitos');
        }

        // Convertir valor hexadecimal a RGB
        let r, g, b, a = "1";
        if (hex.length === 3) {
            // Si es un valor corto (ejemplo: "#123"), expandir a valor largo ("#112233")
            r = parseInt(hex[0] + hex[0], 16);
            g = parseInt(hex[1] + hex[1], 16);
            b = parseInt(hex[2] + hex[2], 16);
        } else {
            r = parseInt(hex.slice(0, 2), 16);
            g = parseInt(hex.slice(2, 4), 16);
            b = parseInt(hex.slice(4, 6), 16);
        }
        if(transparencia){
            a = "0." + transparencia;
        }
        return `rgba(${r},${g},${b},${a})`; //rgba(0,0,0,0.1)
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            cambiarTema,
            mostrarComoRGBA,
            switchTema
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
