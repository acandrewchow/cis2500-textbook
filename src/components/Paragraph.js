import React from 'react';

const Paragraph = ({ children }) => {
    return (
        <p className="text-gray-300 mb-4 text-lg">
            {children}
        </p>
    );
};

export default Paragraph;