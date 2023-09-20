import { useState } from "react";
import styled from "styled-components";
import { hexToRgba } from "../helpers";
import { ThemeProps } from "../context/ThemeContext";


const Formulario = styled.form`
   width: 90%;
   max-width: 600px;
   margin: 2rem auto;
   background: #e1e1e1;
   padding:3rem;
   border-radius:8px;
   color: #0a103f;

   label{
    font-size: 2rem;
    font-weight: 600;
    margin:0;
   }

   h2{
    font-size: 3rem;
    margin:0;
   }
   @media(min-width: 850px){
    h2{
        font-size: 5rem;
    }
    label{

    }
   }
`;
const Input = styled.input`
   width: 100%;
   padding: 1.5rem;
   background-color: #fff;
   font-size: 2rem;
   color: var(--primary);
   border-radius: 6px;
   margin: 1rem 0;
   border-style:none;
   box-shadow: 1px 1px 3px rgba(0,0,0,0.2); 
`;
const TextArea = styled.textarea`
   width: 100%;
   min-height: 250px;
   padding: 1.5rem;
   background-color: #fff;
   font-size: 2rem;
   color: var(--primary);
   border-radius: 6px;
   margin: 1rem 0;
   border-style:none;
   box-shadow: 1px 1px 3px rgba(0,0,0,0.2); 
`;

const BotonSubmit = styled.input<any>`
   position:absolute;
   padding: 1rem;
   top: 0;
   bottom:0;
   left:0; right:0;
   margin:auto;
   text-align:center;
   cursor:pointer;
   border-radius: 8px;
   border-style:none;
   font-size: 2rem;
   font-weight: 600;
   color: ${({ color }) => color};
   background: ${({ background }) => background};
   width:100%;

   &:hover{
    padding: 1.5rem;
    height: 120%;
    width: 100%;
    font-size: 2.2rem;
    box-shadow: 2px 2px 20px ${({ background }) => hexToRgba(background, 0.6)};
   }

   transition: .3s ease all;

`;

interface Props {
    theme: ThemeProps;
}
export const FormuContacto = ({theme}:Props) => {

    const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formValues;

    const onInputStateChange = ({ target }: any) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    return (
        <Formulario action="https://formsubmit.co/emanuel00developer@gmail.com" method="POST"
        style={{background: theme.modo == "LIGHT" ? "#0a103f" : ""}}
        >
            <h2 style={{color: theme.modo == "LIGHT" ? theme.txtTerciario : ""}}>Contacto.</h2>
            <label>Tu nombre</label>
            <Input
                type="text"
                placeholder='Como puedo llamarte'
                name='name'
                value={name}
                onChange={onInputStateChange}
            />
            <label>Tu correo</label>
            <Input
                type="email"
                name="email"
                placeholder='Cual es tu correo?'
                value={email}
                onChange={onInputStateChange}
            />
            <label>Mensaje</label>
            <TextArea placeholder='Que tenes para decirme?'
                name="message"
                value={message}
                onChange={onInputStateChange}
            />
            <div style={{ width: "90%", height: "60px", position: "relative", margin: "auto" }}>
                <BotonSubmit color={theme.txtPrimario} background={theme.btnColor2} type="submit" value="Enviar mensaje" />
            </div>
        </Formulario>
    )
}