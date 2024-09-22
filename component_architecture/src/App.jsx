import DashboardContent from "./components/Dashboard content/DashboardContent";
import Header from "./components/Header/Header";

function App() {
    return <div className="page-container w-screen h-screen bg-slate-800 flex flex-col justify-start items-center">
        <Header></Header>
        <DashboardContent></DashboardContent>
    </div>;
}

export default App;
