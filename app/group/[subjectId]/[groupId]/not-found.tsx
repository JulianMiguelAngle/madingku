"use client"

import { useRouter } from "next/router";
 
export default function NotFound() {
    const router = useRouter();
    return (
        <div>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <button onClick={() => router.back()}>Return Home</button>
        </div>
    )
}