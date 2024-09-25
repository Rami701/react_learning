import React from "react";
import InputDescription from "./InputDescription";

const FormNumberInput = ({
    label,
    placeholder,
    value,
    setValue,
    minValue,
    maxValue,
    validate,
    validationRules,
    isError,
}) => {
    return (
        <div className="flex justify-center items-start flex-col relative">
            <label className="text-sm">{label}</label>
            <input
                value={value}
                onBlur={validate}
                onChange={(e) => setValue(e.target.value)}
                type="number"
                placeholder={placeholder}
                min={minValue}
                max={maxValue}
                className={`outline-none p-2 bg-white border-2 rounded-md w-36
                    ${isError ? "border-red-400" : "border-cyan-400"}
                    `}
            />
            <InputDescription
                validationRules={validationRules}
            ></InputDescription>
        </div>
    );
};

export default FormNumberInput;
