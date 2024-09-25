import React, { useState } from "react";

import FormTextInput from "./FormTextInput";
import FormPasswordInput from "./FormPasswordInput";
import FormNumberInput from "./FormNumberInput";
import FormDropDown from "./FormDropDown";
import RadioGroup from "./RadioGroup";
import Checkbox from "./Checkbox";

const Form = () => {
    const countries = ["Palestine", "Jordan", "Egypt"];

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const [age, setAge] = useState("");
    const [ageError, setAgeError] = useState(false);

    const [country, setCountry] = useState(countries[0]);

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const [gender, setGender] = useState("male");

    const [isAgreed, setIsAgreed] = useState(false);
    const [isAgreedError, setIsAgreedError] = useState(false);

    const genderValueOnChange = (e) => {
        setGender(e.target.value);
    };

    const validateName = () => {
        if (name.length < 4) {
            setNameError(true);
            return false;
        } else {
            setNameError(false);
            return true;
        }
    };

    const validateEmail = () => {
        const emailRegEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]){2,10}$/;
        const check = emailRegEx.test(email);
        if (!check) {
            setEmailError(true);
            return false;
        } else {
            setEmailError(false);
            return true;
        }
    };

    const validateAge = () => {
        if (age >= 18 && age <= 100) {
            setAgeError(false);
            return true;
        } else {
            setAgeError(true);
            return false;
        }
    };

    const validatePassword = () => {
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        const check = passwordRegex.test(password);
        if (!check) {
            setPasswordError(true);
            return false;
        } else {
            setPasswordError(false);
            return true;
        }
    };

    const validateConfirmPassword = () => {
        if (confirmPassword === "") {
            setConfirmPasswordError(true);
        } else if (confirmPassword !== password) {
            setConfirmPasswordError(true);
            return false;
        } else {
            setConfirmPasswordError(false);
            return true;
        }
    };

    const validateAgreement = () => {
        if (!isAgreed) {
            setIsAgreedError(true);
            return false;
        } else {
            setIsAgreedError(false);
            return true;
        }
    };

    const handleSubmit = () => {
        const validName = validateName();
        const validEmail = validateEmail();
        const validAge = validateAge();
        const validPassword = validatePassword();
        const validConfirmPassword = validateConfirmPassword();
        const validAgreement = validateAgreement();
        if (
            validName &&
            validEmail &&
            validAge &&
            validPassword &&
            validConfirmPassword &&
            validAgreement
        ) {
            console.log("Successful!");
        }
    };

    return (
        <form
            action="#"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
            className="w-3/12 h-full flex flex-col justify-center"
        >
            <h1 className="w-full text-center mb-8 text-xl font-bold">
                Sign up form
            </h1>
            <FormTextInput
                label={"Name"}
                placeholder={"Username"}
                value={name}
                setValue={setName}
                validate={validateName}
                validationRules={["- At least 4 characters."]}
                isError={nameError}
            ></FormTextInput>
            <FormTextInput
                label={"Email"}
                placeholder={"example@gmail.com"}
                value={email}
                setValue={setEmail}
                validate={validateEmail}
                validationRules={["example: my_email@gmail.com"]}
                isError={emailError}
            ></FormTextInput>

            <div className="flex justify-between items-end mt-4">
                <FormNumberInput
                    label={"Age"}
                    placeholder={"18"}
                    value={age}
                    setValue={setAge}
                    minValue={18}
                    maxValue={100}
                    validate={validateAge}
                    isError={ageError}
                    validationRules={["18 - 100"]}
                ></FormNumberInput>
                <FormDropDown
                    label={"Country"}
                    options={countries}
                    value={country}
                    setValue={setCountry}
                ></FormDropDown>
            </div>
            <FormPasswordInput
                label={"Password"}
                value={password}
                setValue={setPassword}
                validate={validatePassword}
                isError={passwordError}
                validationRules={[
                    "- at least 8 characters",
                    "- at least 1 uppercase letter",
                    "- at least 1 lowercase letter",
                    "- at least 1 digit",
                    "- at least 1 special character",
                ]}
            ></FormPasswordInput>
            <FormPasswordInput
                label={"Confirm password"}
                value={confirmPassword}
                setValue={setConfirmPassword}
                validate={validateConfirmPassword}
                isError={confirmPasswordError}
                validationRules={["- must match the password"]}
            ></FormPasswordInput>
            <RadioGroup
                label={"Gender"}
                value={gender}
                setValue={genderValueOnChange}
            ></RadioGroup>

            <Checkbox
                label={"Agree to terms and conditions"}
                id={"agree"}
                value={isAgreed}
                setValue={setIsAgreed}
                isError={isAgreedError}
            ></Checkbox>

            <button
                type="submit"
                className="w-full bg-cyan-400 py-2 mt-6 rounded-md text-white hover:bg-cyan-500 font-bold shadow-md"
            >
                Sign Up
            </button>
        </form>
    );
};

export default Form;
