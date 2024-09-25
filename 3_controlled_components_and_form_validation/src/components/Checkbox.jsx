import React from "react";

const Checkbox = ({ label, id, value, setValue, isError }) => {
    return (
        <div
            className={`mt-4 p-1 rounded-md 
            ${isError ? "border-red-400 border-2" : ""}
        `}
        >
            <input
                type="checkbox"
                id={id}
                checked={value}
                onChange={(e) => {
                    setValue(!value);
                }}
            />
            <label htmlFor={id} className="ml-2">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
