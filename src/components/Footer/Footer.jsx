import React from "react";
import { FOOTER } from "../../const.js"
import './Footer.css'

export default function Footer() {
    return (
        <section id="footer">
            <footer className="footer-bar">
                {FOOTER.map((footer) => {
                    return (
                        <div className="footer-content" key={footer.id}>
                            <a href={footer.link}>
                                <img src={footer.src} alt={footer.alt} />
                            </a>
                        </div>
                    );
                })} 
            </footer>
        </section>
    )
}
