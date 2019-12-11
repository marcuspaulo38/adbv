import React from 'react'
import styled from 'styled-components';

import { Input } from 'antd';

const TabDescription = styled.div`
    position: absolute;
    width: 100%;
    top: -1px;
    left: 1px;
    color: white;
    background-color: #0078d4;
    height: 3rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 1rem;
    font-weight: 300;
`;

const InputSearch = styled.div`
    width: 100%;
    margin-top: 3rem;

    > .ant-input {
        border: solid 1px rgb(150, 150, 150);
        color: rgb(76, 76, 81);

        &::placeholder {
            color: rgb(76, 76, 81);
        }

        &:focus {
            box-shadow: 0 0 0 1px rgba(24, 144, 255, 0.2);
        }
    }
`;

export default function SearchBar(props) {
    return (
        <>
            <TabDescription>
                <p style={{margin: 0}}>Selecione um produto para incluir na estimativa</p>
            </TabDescription>
            <InputSearch>
                <Input
                    onChange={props.onQueryChange}
                    placeholder="Search Products" style={{ borderRadius: 0 }}/>
            </InputSearch>
        </>
    )
}