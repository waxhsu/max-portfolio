import React from "react";
import './TitleComponent.css'


export default function TitleComponent({ children }) {
    return (
        <section className="container title-component">
            {children}

        </section>

    )


}