'use server'

import { redirect } from "next/navigation";
import { object, string, enum as enum_ } from "zod";

export type BasicInformation = {
    data: {
        nim: string;
        firstname: string;
        lastname: string;
    } | null;
    errors: {
        nim: string[];
        firstname: string[];
        lastname: string[];
    } | null;
    message: string | null;
};

export type Registration = {
    data: {
        nim: string;
        firstname: string;
        lastname: string;
        role: string;
        password: string;
        retypePassword: string;
    } | null;
    errors: {
        password: string[];
        retypePassword: string[];
    } | null;
    message: string | null;
}

const credential = object({
    nim: string().min(1, { message: "Nim tidak boleh kosong" }),
    firstname: string().min(1, { message: "Nama depan tidak boleh kosong" }),
    lastname: string().min(1, { message: "Nama belakang tidak boleh kosong" }),
    password: string().min(1, { message: "Password tidak boleh kosong" }),
    retypePassword: string().min(1, { message: "Password tidak boleh kosong" }),
    role: enum_(["class citizen", "class president", "vice class president", "treasurer", "secretary"])
});

const login = credential.omit({ 
    firstname: true, 
    lastname: true,
    role: true,
    retypePassword: true
});

const registerFirstStep = credential.omit({ 
    role: true,
    password: true,
    retypePassword: true 
});

const registerSecondStep = credential;

export default async function action(prevState: any, params: FormData) {
    const validation = login.safeParse({
        nim: params.get("Nim"),
        password: params.get("Password")
    });

    if (!validation.success) {
        return {
            errors: validation.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Create Invoice."
        }
    } 
    // else {
    //     const state: any = {
    //         nim: undefined,
    //         password: undefined
    //     };

    //     for (const error of validation.error.issues) {
    //         state[error.path[0]] = error.message;
    //     }
    //     return state;
    // }
}

export async function createAccountValidation(prevState: any, params: FormData) {
    const validation = registerFirstStep.safeParse({
        nim: params.get("Nim"),
        firstname: params.get("Nama depan"),
        lastname: params.get("Nama belakang"),
    });

    if (!validation.success) {
        return {
            data: null,
            errors: validation.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Create Invoice."
        } as BasicInformation;
    } 

    return { 
        data: validation.data,
        errors: null,
        message: null
    } as BasicInformation;
}

export async function createAccount(prevState: any, params: FormData) {
    const validation = registerSecondStep.safeParse({
        nim: params.get("nim"),
        firstname: params.get("firstname"),
        lastname: params.get("lastname"),
        password: params.get("Buat password"),
        retypePassword: params.get("Ketik ulang password"),
        role: params.get("role")
    });

    if (!validation.success) {
        return {
            data: null,
            errors: validation.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Create Invoice."
        } as Registration;
    }
    redirect("/");
}