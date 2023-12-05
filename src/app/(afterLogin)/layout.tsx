import { ReactNode } from "react";
export default function AfterLoginLayout({children}: {children: ReactNode}){
    return (
        <>
            <h1>After Login Layout</h1>
            {children}
        </>
    )
}
