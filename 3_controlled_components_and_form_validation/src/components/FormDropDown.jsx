import React from "react";

const FormDropDown = ({ label, options, value, setValue }) => {
    return (
        <div className="flex justify-center items-start flex-col">
            <label className="text-sm">{label}</label>
            <select
                value={value}
                onChange={(e) => {setValue(e.target.value)}}
                className="p-2 border-2 border-cyan-400 rounded-md outline-none cursor-pointer w-36"
            >
                {options.map((option, key) => {
                    return (
                        <option key={key} value={option}>
                            {option}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default FormDropDown;
