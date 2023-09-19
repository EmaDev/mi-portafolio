import { useState } from 'react';
import styled from 'styled-components';
import { CardProyecto } from './CardProyecto';
import { ModalProyectos } from './ModalProyectos';
import { PROYECTOS, ProyectoInterface } from '../data';

export const CardContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   cursor:pointer;
`;

export const ContenedorCardProyectos = () => {

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [proyectoActivo, setProyectyoActivo] = useState<ProyectoInterface>(PROYECTOS[0]);

    const seleccionarProyecto = (proyecto:ProyectoInterface) => {
        setProyectyoActivo(proyecto);
        setModalVisible(true);
    }
   
    return (
        <>
            <ModalProyectos data={proyectoActivo} visible={modalVisible} cerrarModal={setModalVisible} />
            <CardContainer>
                {PROYECTOS.map(proyecto => (
                    <CardProyecto key={proyecto.titulo} proyecto={proyecto} seleccionarProyecto={seleccionarProyecto} />
                ))}
            </CardContainer>
        </>
    )
}
