import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TelaBauDoTesouro from './TelaBauDoTesouro';


function ControladorTelaBauDoTesouro() {
    const navigate = useNavigate();

    useEffect(() => {
        
    }, [])

    function handleSair(){
        navigate('/TelaInicialJogo');
    }

    return (

        <TelaBauDoTesouro
            handleSair={handleSair}
        />
    );

}

export default ControladorTelaBauDoTesouro