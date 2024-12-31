import React from 'react';

const CodeBlock = ({ children }) => {
    return (
        <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded ml-1">
            {children}
        </code>
    );
};

export default CodeBlock;