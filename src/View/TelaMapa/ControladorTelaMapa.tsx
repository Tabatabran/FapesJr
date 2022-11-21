import React, { useState } from 'react';
import TelaMapa from './TelaMapa';


function ControladorTelaMapa() {
    const [urlBarco, setUrlBarco] = useState('');

    function handleUrlBarco() {

    }

    return (

        <TelaMapa
            urlBarco={urlBarco}
        />
    );

}

export default ControladorTelaMapa
