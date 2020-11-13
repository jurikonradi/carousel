import React from 'react';
import './Chevron.sass'

function ChevronRight(props) {
    return (
        <button 
            onMouseDown={props.moveFunction}        
            type='button' className='chevron-button'>
                <div className='chevron chvr-right'>
                </div>
        </button>
    )
}

export default ChevronRight;