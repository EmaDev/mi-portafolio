import React, { useState } from 'react';
import styled from 'styled-components';
import { CardProyecto } from './CardProyecto';
import { ModalProyectos } from './ModalProyectos';

export const CardContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   cursor:pointer;
`;

export const ContenedorCardProyectos = () => {

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    
    return (
        <>
        <ModalProyectos visible={modalVisible} data={{}} cerrarModal={setModalVisible}/>
        <CardContainer>
            <CardProyecto setMostrarModal={ setModalVisible }/>
        </CardContainer>
        </>
    )
}
