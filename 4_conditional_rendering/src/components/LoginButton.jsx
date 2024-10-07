import React from "react";

const LoginButton = ({onClick}) => {
    return (
        <button 
        onClick={onClick}
        className=" bg-blue-500 py-2 px-12 text-xlg text-white font-bold shadow-md rounded-md hover:bg-blue-600">
            LOGIN
        </button>
    );
};

export default LoginButton;
