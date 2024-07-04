'use client'

import Logo from "@assets/Logo.svg";

import Image from "next/image";

import React, { useState, useEffect } from "react";
import { BasicInformationForm, RegistrationForm } from "@/app/ui/RegistrationForm"
import { createAccountValidation, BasicInformation } from "@lib/server-action";

import { MainNavbar } from "@components/Navbar";
import { MainSidebar } from "../components/Sidebar";
import { useFormState } from "react-dom";

export default function Register() {
    const [isMounted, setIsMounted] = useState(false);
    const [sidebarState, setSidebarState] = useState<"closed" | "opened">("closed");
    
    const [registerStep, setRegisterStep] = useState("first");
    
    const [validation, validationAction] = useFormState(createAccountValidation, {
        message: null,
        errors: null,
        data: null
    });
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <main className="h-screen w-screen px-4 sm:px-6 lg:px-12 flex flex-col items-center gap-y-6">

            <MainNavbar
                onClickMenuHandler={() => setSidebarState("opened")}
            />

            <MainSidebar 
                state={sidebarState}
                onClickCloseHandler={() => setSidebarState("closed")}
            />

            <section className="w-full max-w-[400px] pt-32 flex flex-col items-center gap-y-6">
                <article className="w-full flex items-center justify-center gap-x-2">
                    <Image
                        src={Logo}
                        alt="Madingku Logo"
                        height={55}
                        width={55}
                    />
                    <h1 className="font-medium text-h4-small sm:text-h4-medium lg:text-h4-large text-neutral-700 dark:text-neutral-0">
                        Buat akun di <span className="text-fiera-400 dark:text-fiera-100">Madingku</span>
                    </h1>
                </article>

                {registerStep === "first" ? (
                    <BasicInformationForm
                        validation={validation}
                        validate={(payload) => validationAction(payload)}
                        setRegisterStep={() => setRegisterStep("second")} 
                    />
                ) : (
                    <RegistrationForm validation={validation} />
                )}

            </section>
        </main>
    );
}