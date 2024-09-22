import SidebarItem from "./SidebarItem";

const Sidebar = ({ isVisible, closeOnClick }) => {
    return (
        <div
            className={`fixed flex-col justify-start items-center h-screen w-96 bg-slate-200 top-0 right-0 p-6
        ${isVisible ? "flex" : "hidden"}
    `}
        >
            <img
                src="/close_icon.svg"
                className="w-8 self-start"
                onClick={() => closeOnClick()}
            />

            <div className="items-list h-full w-full mt-4">
                <SidebarItem title={"Item 1"} icon={"/vite.svg"}></SidebarItem>
                <SidebarItem title={"Item 2"} icon={"/vite.svg"}></SidebarItem>
                <SidebarItem title={"Item 3"} icon={"/vite.svg"}></SidebarItem>
                <SidebarItem title={"Item 4"} icon={"/vite.svg"}></SidebarItem>
            </div>
        </div>
    );
};

export default Sidebar;
