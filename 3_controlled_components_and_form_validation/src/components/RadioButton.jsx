import React from "react";

const RadioButton = ({ groupName, label, isChecked, onChange, value }) => {
    return (
        <div className="ml-3">
            <input type="radio" id={label} name={groupName} checked={isChecked} onChange={(e) => onChange(e)} value={value}/>
            <label htmlFor={label} className=" ml-1">
                {label}
            </label>
        </div>
    );
};

export default RadioButton;
