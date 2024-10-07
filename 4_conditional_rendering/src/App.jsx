import { useState } from "react";
import LoginButton from "./components/LoginButton";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
    const [user, setUser] = useState({
        name: "Rami",
        isAdmin: true,
        isLoggedIn: false,
    });

    const loginUser = () => {
        setUser((currentUser) => {
            return {
                ...currentUser,
                isLoggedIn: true,
            };
        });
    };

    return (
        <div className="page-container w-screen h-screen flex flex-col justify-center items-center">
            {user.isLoggedIn ? (
                <Dashboard user={user} />
            ) : (
                <LoginButton onClick={loginUser} />
            )}
        </div>
    );
}

export default App;
