import React from 'react';

const BlockText = ({ title, description }) => {
    return (
        <div className="text-center">
            <h3><strong>{title}</strong></h3>
            <p>{description}</p>
        </div>
    );
}

export default BlockText;
