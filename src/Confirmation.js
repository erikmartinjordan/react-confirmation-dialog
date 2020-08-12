import React, { useState }   from 'react';
import Loading               from './Loading';
import './Confirmation.css';

const Confirmation = ({mainMessage, acceptFunction, acceptButton, cancelFunction, cancelButton}) => {
    
    const [status, setStatus] = useState('ok');
    
    const handleAccept = () => {
        
        setStatus('processingAccept');
        acceptFunction();
        setStatus('ok');
        
    }

    const handleCancel = () => {
        
        setStatus('processingCancel');
        cancelFunction();
        setStatus('ok');
        
    }
    
    return(
        <div className = 'Confirmation'>
            <div className = 'Confirmation-Wrap'>
                <p>{mainMessage}</p>
                <button className = 'Accept' onClick = {handleAccept} disabled = {status === 'processingAccept'}>
                    { status === 'processingAccept' 
                    ? <Loading/> 
                    : acceptButton
                    }
                </button>
                <button className = 'Cancel' onClick = {handleCancel} disabled = {status === 'processingCancel'}>
                    { status === 'processingCancel'
                    ? <Loading/>
                    : cancelButton
                    }
                </button>
            </div>
         </div>
    );
    
}

export default Confirmation;