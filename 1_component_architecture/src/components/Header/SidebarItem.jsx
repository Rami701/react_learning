import React from "react";
import PropTypes from "prop-types";

const SidebarItem = ({ title, icon, onClick }) => {
    return (
        <div
            className="w-full bg-slate-400 p-4 mt-4 cursor-pointer rounded-md hover:bg-slate-500 transition ease-in-out duration-300 drop-shadow-md flex justify-between items-center"
            onClick={onClick}
        >
            <p className="font-bold">{title}</p>
            <img src={icon} alt="" />
        </div>
    );
};

SidebarItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

SidebarItem.defaultProps = {
    onClick: () => {},
  };

export default SidebarItem;
