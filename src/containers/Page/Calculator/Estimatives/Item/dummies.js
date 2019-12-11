import React from 'react';

import {
    Icon
} from 'antd';

import './dummies.css';

export default function DummyForm() {
    const str = "Economize até 72% nos preços pagos conforme o uso com Instâncias de Máquinas Virtuais Reservadas de um ou três anos. As Instâncias Reservadas são ótimas para aplicativos com uso de criação contínua e também para aplicativos que necessitam de uma capacidade reservada. <a href=\"https://azure.microsoft.com/pt-br/pricing/reserved-vm-instances\" target=\"_blank\">Saiba mais sobre os preços de instâncias de VM reservadas</a>";

    return (
        <>
            <div className="form-group">
                <div className="form-group-inputs"></div>
            </div>

            <div className="form-group">
                <span className="group-title">Opções de cobrança</span>

                <p dangerouslySetInnerHTML={{ __html: str }}></p>

                <div className="form-group-inputs"></div>
            </div>

            <div className="form-group">
                <span className="group-title">Opções de utilização</span>

                <p dangerouslySetInnerHTML={{ __html: str }}></p>

                <div className="form-group-inputs"></div>

                <div className="form-group-info">
                    <div className="form-group-info-icon">
                        <Icon type="info-circle" />
                    </div>

                    <div>
                        <span dangerouslySetInnerHTML={{ __html: str }}></span>
                    </div>
                </div>
            </div>

            <div className="item-subtotal">
                <div>
                    <span className="subtotal">Subtotal</span>
                    <span>US$ 152,62</span>
                </div>
            </div>
        </>
    )
}