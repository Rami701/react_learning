import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import OptionsButton from "./OptionsButton";

const Dashboard = ({ user }) => {
    return (
        <div className="w-full h-full flex flex-col justify-start items-center">
            <WelcomeMessage username={user.name} />

            <div className="w-full h-full flex flex-col justify-center items-center relative">
                {user.isAdmin && <OptionsButton />}
                <h1 className="text-2xl">Dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;
