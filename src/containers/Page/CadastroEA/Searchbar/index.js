import React from 'react'
import styled from 'styled-components';

import { Form, Icon, Input, Button, Checkbox  } from 'antd';

const TabDescription = styled.div`
    position: absolute;
    width: 100%;
    top: -1px;
    left: 1px;
    color: black;
    background-color: #e8ecef;
    height: 5rem;
    padding: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 1rem;
    font-weight: 300;
`;



const InputSearch = styled.div`
    width: 100%;
    margin-top: 5rem;

    > .ant-input {
        border: solid 1px rgb(150, 150, 150);
        color: rgb(76, 76, 81);

        &::placeholder {
            color: rgb(76, 76, 81);
        }

        &:focus {
            box-shadow: 0 0 0 1px rgba(24, 144, 255, 0.2);
        }
    },
`;


export default function SearchBar(props) {
    return (
        <>
            <TabDescription>
                <p style={{margin: 0}}>
                <br /><br /> <br /><br /><br />
                 <table border="0">
                    <tr>
                       
                      <td><center> <a href={'/store/${item._id}'} > <img src="./images/salvar.png"  width="30" height="30"/><br />Salvar</a></center></td>
                      <td><center><a href={'/clear/${item._id}'} > <img src="./images/cancelar.png"  width="30" height="30"/><br />Cancelar</a></center></td>
                      <td><center><a href={'/clone/${item._id}'} ><img src="./images/colar.png"  width="30" height="30"/><br />Colar</a></center></td>
                      <td></td>
                      <td></td>  
                     <td>
                          <center><br />
                                  <a href={'/recort/${item._id}'} ><img src="./images/recortar.png"  width="30" height="30"/>Recorta</a><br />
                                  <a href={'/copy/${item._id}'} ><img src="./images/copiar.png"  width="30" height="30"/>Copiar</a></center>
                       </td>  

                       <td><center><a href={'/delete/${item._id}'} ><img src="./images/excluir.png"  width="30" height="30"/>Excluir</a></center></td>
                       <td><center><a href={'/nexo/${item._id}'} ><img src="./images/anexar.png"  width="30" height="30"/>Anexar</a></center></td>
                       <td></td> 
                       <td></td>   
                      <td><center><a href={'/store/${item._id}'} ><img src="./images/abc.png"  width="30" height="30"/>Verificar Ortografia</a></center></td>
                   </tr>
                   <tr>
                    <td colSpan="2"><center>Confirmar</center></td>
                    
                    <td><center></center></td>
                    <td><center></center></td>
                    <td><center></center></td>
                   
                    <td><center>Área deTransferência</center></td>
                    <td colSpan="2"><center>Ações</center></td>
                    <td><center></center></td>
                    <td colSpan="3"><center>Verificar Ortográfia</center></td>
                    
                   </tr>
                 </table>
                  <br /><br /> <br /><br />
                
                </p>
                <br /><br />
            </TabDescription>bDescription>
            <InputSearch>
                <Input
                    onChange={props.onQueryChange}
                    placeholder="Localizar" style={{ borderRadius: 0 }}/>
            </InputSearch>
            
            <br /><br />
                    
            

        </>
 
        )
}