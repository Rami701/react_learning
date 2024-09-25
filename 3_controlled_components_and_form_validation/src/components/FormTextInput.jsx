import React, { useState } from "react";
import InputDescription from "./InputDescription";

const FormTextInput = ({
    label,
    placeholder,
    value,
    setValue,
    validate,
    validationRules,
    isError,
}) => {
    
    return (
        <div className="flex justify-center items-start flex-col mt-4 relative">
            <label className="text-sm">{label}</label>
            <input
                type="text"
                onBlur={() => validate()}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={`w-full outline-none p-2 bg-white border-2  rounded-md
                    ${isError ? "border-red-400" : "border-cyan-400"}
                    `}
            />

            <InputDescription
                validationRules={validationRules}
            ></InputDescription>
        </div>
    );
};

export default FormTextInput;
