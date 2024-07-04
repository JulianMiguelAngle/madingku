'use client'

import React, { useState, useEffect } from "react";
import { useFormState } from "react-dom";

import { createAccount, BasicInformation } from "@lib/server-action";

type RegisteredData = {
    nim?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
    password?: string | undefined;
    retypePassword?: string | undefined;
    role?: string | undefined;
} | undefined;

import { Button } from "@components/Button";
import { Input } from "@components/Input";

function BasicInformationForm ({ validate, validation, setRegisterStep }: {
    validate: (payload: FormData) => void;
    validation: BasicInformation;
    setRegisterStep: (step: string) => void;
}) {
    useEffect(() => {
        if (!validation.errors && validation.data) {
            setRegisterStep("second");
        } 
    }, [validation])      

    return (
        <>
            <article className="w-full flex flex-col gap-y-3 text-neutral-600 dark:text-neutral-100">
                <h2 className="font-medium text-h4-small sm:text-h4-medium lg:text-h4-large te">
                    Langkah ke-1
                </h2>

                <p className="text-body-small sm:text-body-medium">
                    Pengumpulan Informasi Dasar
                </p>
            </article>
        
            <form action={validate}
                className="w-full max-w-[400px] flex flex-col gap-y-3">
                <Input
                    type="text"
                    state="active"
                    label="Nim"
                    placeholder="2211826864"
                    messageType="error"
                    message={validation?.errors?.nim}
                />

                <Input
                    type="text"
                    state="active"
                    label="Nama depan"
                    placeholder="Zahra"
                    messageType="error"
                    message={validation?.errors?.firstname}
                />
                    
                <Input
                    type="text"
                    state="active"
                    label="Nama belakang"
                    placeholder="Putri"
                    messageType="error"
                    message={validation?.errors?.lastname}
                />

                <section className="w-full max-w-[400px] flex flex-col gap-y-4">
                    <Button
                        variant="primary"
                        state={"active"}
                        behavior="fill-container"
                        size="large"
                        label="Selanjutnya"
                    />
                </section>
            </form>
        </>
    );
}

function RegistrationForm({ validation }: { validation: BasicInformation; }) {
    const [state, dispatch] = useFormState(createAccount, {
        message: null,
        errors: null,
        data: null
    });

    const [role, setRole] = useState<"class citizen" | "class president" | "">("");

    return (
        <>
            <article className="w-full flex flex-col gap-y-3 text-neutral-600 dark:text-neutral-100">
                <h2 className="font-medium text-h4-small sm:text-h4-medium lg:text-h4-large te">
                    Langkah ke-2
                </h2>

                <p className="text-body-small sm:text-body-medium">
                    Memastikan Keamanan dan Peran Mu
                </p>
            </article>

            <form action={(FormData) => {
                
                if (validation.data) {
                    const formData = FormData;
                    
                    formData.append("nim", validation.data.nim)
                    formData.append("firstname", validation.data.firstname)
                    formData.append("lastname", validation.data.lastname)
                    formData.append("role", role);

                    console.info(formData)

                    dispatch(formData);
                }
            }}
                    className="w-full max-w-[400px] flex flex-col gap-y-6">
                    <Input
                        type="password"
                        state="active"
                        label="Buat password"
                        placeholder="ZahraPutri13174"
                        messageType="error"
                        message={state?.errors?.password}
                    />
                    
                    <Input
                        type="password"
                        state="active"
                        label="Ketik ulang password"
                        placeholder="ZahraPutri13174"
                        messageType="error"
                        message={state?.errors?.retypePassword}
                    />
                
                <section className="w-full max-w-[400px] flex flex-col gap-y-4">
                    <p className="text-center">
                        Buat akun sebagai?
                    </p>

                    <Button
                        variant="primary"
                        state="active"
                        behavior="fill-container"
                        size="large"
                        label="Warga kelas"
                        onClickHandler={() => {
                            setRole("class citizen");
                        }}
                    />

                    <Button
                        variant="secondary"
                        state="active"
                        behavior="fill-container"
                        size="large"
                        label="Ketua kelas"
                        onClickHandler={() => {
                            setRole("class president");
                        }}
                    />
                </section>
            </form>
        </>
    );
}

export { BasicInformationForm, RegistrationForm };