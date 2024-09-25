import React from "react";
import RadioButton from "./RadioButton";
const RadioGroup = ({ label, value, setValue }) => {
    return (
        <div className="flex flex-col justify-center items-start mt-4">
            <label className="text-sm">{label}</label>
            <div className="flex justify-start items-center">
                <RadioButton
                    groupName={"gender"}
                    value={"male"}
                    label={"Male"}
                    isChecked={value === "male"}
                    onChange={setValue}
                ></RadioButton>
                <RadioButton
                    groupName={"gender"}
                    value={"female"}
                    label={"Female"}
                    isChecked={value === "female"}
                    onChange={setValue}
                ></RadioButton>
                <RadioButton
                    groupName={"gender"}
                    value={"preferNotToSay"}
                    label={"Prefer not to say"}
                    isChecked={value === "preferNotToSay"}
                    onChange={setValue}
                ></RadioButton>
            </div>
        </div>
    );
};

export default RadioGroup;
