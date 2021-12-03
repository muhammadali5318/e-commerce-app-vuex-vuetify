/*
System: E-commerce App using Dummy Api
Developer: Muhammad Ali
Date: Dec 3, 2021
Organization: Programmer Force
Purpose: This file validation.js is responsible to handle all the form validations required in Signup and Login.*/


const nameRules = [
    (v) => !!v || "Name is required",
    (v) => (v && v.length >= 3) || "Enter your name correctly",
]

const passwordRules = [
    (value) => !!value || "Password Required.",
    (value) => (value || "").length >= 5 || "Must contain 1 Small and Capital letter, 1 digit (Special Characters not allowed)",
    (value) => {
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return pattern.test(value) || "Invalid Password.";
    },
];

const emailRule = [
    (value) => !!value || "Email Required.",
    (value) => (value || "").length <= 40 || "Max 40 characters",
    (value) => {
        const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // email validation
        return pattern.test(value) || "Invalid e-mail.";
    },
];

const phoneNoRule = [
    (value) => !!value || "Phone No Required.",
    (value) => (value || "").length === 11 || "e.g 03484248371",
    (value) => {
        const pattern = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
        return pattern.test(value) || "Invalid Phone Number. e.g 03484248371";
    },
];

const usernameRule = [
    (value) => !!value || "Username Required.",
    (value) => (value || "").length >= 4 || "Minimum 4 Characters",
    (value) => {
        const pattern = /^[a-zA-Z0-9]+$/;
        return pattern.test(value) || "Invalid Username";
    },
]
export {
    nameRules,
    passwordRules,
    emailRule,
    phoneNoRule,
    usernameRule
}