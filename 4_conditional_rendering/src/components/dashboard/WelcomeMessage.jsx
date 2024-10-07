import React from "react";

const WelcomeMessage = ({ username }) => {
    return (
        <h1 className="w-full py-4 bg-blue-400 text-3xl text-white font-bold text-center drop-shadow-md">
            Welcome {username}
        </h1>
    );
};

export default WelcomeMessage;
