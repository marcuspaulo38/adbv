import React from 'react';

function EmptyEstimative() {
    return (
        <div style={{ backgroundColor: '#fff', padding: '1rem', textAlign: 'center', minHeight: '100px'}}>
            <span style={{ fontSize: '24px', fontWeight: '300' }}>
                Selecione um produto para adicionar a estimativa.
            </span>
        </div>
    );
}

export { EmptyEstimative };