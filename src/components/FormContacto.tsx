import { useState } from "react";
import styled from "styled-components";
import { hexToRgba } from "../helpers";
import { ThemeProps } from "../context/ThemeContext";


const Formulario = styled.form`
   width: 90%;
   max-width: 600px;
   margin: auto;
   margin-top: 2rem;
   margin-bottom: 2rem;
`;
const Input = styled.input`
   width: 100%;
   padding: 1.5rem;
   background-color: #fff;
   font-size: 2rem;
   color: var(--primary);
   border-radius: 6px;
   margin: 1rem 0;
`;
const TextArea = styled.textarea`
   width: 100%;
   min-height: 350px;
   padding: 1.5rem;
   background-color: #fff;
   font-size: 2rem;
   color: var(--primary);
   border-radius: 6px;
   margin: 1rem 0;
`;
/*
const BotonSubmit = styled.input`
   width: 100%;
   padding: 1.5rem;
   background-color: #1e2428;
   font-size: 2rem;
   border-radius: 6px;
   color: var(--secondary);
`;*/

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
        <Formulario action="https://formsubmit.co/emanuel00developer@gmail.com" method="POST">
            <Input
                type="text"
                placeholder='Nombre'
                name='name'
                value={name}
                onChange={onInputStateChange}
            />
            <Input
                type="email"
                name="email"
                placeholder='Correo electronico'
                value={email}
                onChange={onInputStateChange}
            />
            <TextArea placeholder='Mensaje'
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