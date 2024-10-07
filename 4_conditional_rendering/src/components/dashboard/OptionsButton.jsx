import React from "react";

const OptionsButton = () => {
    return (
        <button
            title="For admins only"
            className="bg-blue-500 py-2 px-6 text-md text-white font-bold rounded-md shadow-md hover:bg-blue-600 absolute top-4 left-4"
        >
            Admin Options
        </button>
    );
};

export default OptionsButton;
