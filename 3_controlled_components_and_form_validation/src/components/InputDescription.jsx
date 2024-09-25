import React from "react";
import { useState } from "react";

const InputDescription = ({validationRules}) => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <>
            <img
                src="/question_mark.png"
                className="absolute right-2 top-8"
                onMouseEnter={() => {
                    setIsVisible(true);
                }}
                onMouseLeave={() => setIsVisible(false)}
            />
            <div
                className={`bg-cyan-300 rounded-md shadow-lg absolute right-2 top-14 z-10 p-2
                ${isVisible ? "absolute" : "hidden"}
                `}
            >
                <div className="text-sm text-[#222222]">
                    {validationRules.map((rule, key) => {
                        return <p key={key}>{rule}</p>
                    })}
                </div>
            </div>
        </>
    );
};

export default InputDescription;
