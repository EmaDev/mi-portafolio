import { useState } from "react";
import styled from "styled-components";
import { hexToRgba } from "../helpers";
import { ThemeProps } from "../context/ThemeContext";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Formulario = styled.form`
   width: 90%;
   max-width: 600px;
   margin: 2rem auto;
   background: #e1e1e1;
   padding:3rem 1.5rem;
   border-radius:8px;
   color: #0a103f;

   @media(max-width: 850px){
    width: 100%;
   }

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
    padding: 3rem;
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
   min-height: 150px;
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
export const FormuContacto = ({ theme }: Props) => {

    const [formValues, setFormValues] = useState({ name: '', email: '', message: '', phone: "" });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { name, email, message, phone } = formValues;

    const onInputStateChange = ({ target }: any) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const resetForm = () => {
        setFormValues({ name: '', email: '', message: '', phone: "" })
    }

    const handleSubmit = async () => {
        setIsLoading(true);
        if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
            setIsLoading(false);
            return Swal.fire({
                title: "Faltan datos obligatorios",
                icon: "warning"
            })
        }
        const resp = await emailjs.send("service_1sz7mit", "template_xmndj6k",
            {
                to_name: "Emanuel Cisterna",
                to_email: "emanuel00developer@gmail.com",
                from_name: name,
                from_mail: email,
                from_phone: phone,
                message: message,
            },
            "IRpKX0tzEcKYY7rM0"
        )
        setIsLoading(false);
        if (resp.status == 200) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Gracias por contactarme, pronto me comunicare contigo.",
                showConfirmButton: false,
                timer: 2300
            });
            resetForm();
        } else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Ups, algo salio mal, Por favor intentalo nuevamente.",
                showConfirmButton: false,
                timer: 2000
            });
        }
        console.log(resp);
    }


    return (
        <Formulario
            style={{ background: theme.modo == "LIGHT" ? "#0a103f" : "" }}
        >
            <h2 style={{ color: theme.modo == "LIGHT" ? theme.txtTerciario : "" }}>Contacto.</h2>
            <label>Nombre</label>
            <Input
                type="text"
                placeholder='¿Cómo puedo llamarte?'
                name='name'
                value={name}
                onChange={onInputStateChange}
            />
            <label>Correo</label>
            <Input
                type="email"
                name="email"
                placeholder="¿Cuál es tu correo electronico?"
                value={email}
                onChange={onInputStateChange}
            />
            <label>{"Telefono (opcional)"}</label>
            <Input
                type="number"
                name="phone"
                placeholder="¿Cuál es tu numero?"
                value={phone}
                onChange={onInputStateChange}
            />
            <label>Mensaje</label>
            <TextArea placeholder="¿Qué tienes para decirme?"
                name="message"
                value={message}
                onChange={onInputStateChange}
            />
            <div style={{ width: "90%", height: "60px", position: "relative", margin: "auto" }}>
                <BotonSubmit color={theme.txtPrimario} background={theme.btnColor2} type={"button"}
                    value="Enviar mensaje" onClick={handleSubmit} disabled={isLoading}/>
            </div>
        </Formulario>
    )
}