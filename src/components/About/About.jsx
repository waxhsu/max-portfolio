import './About.css';
import Me from '../../images/placeholder.png'

export default function About() {
    return (
        <section id="About">
            <div className="about-container">
                <div className="me">
                    <img src={Me} alt="me" />
                </div>

                <div className="about-content">
                    <p>
                        HI HELLO
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, accusantium doloribus accusamus deserunt tenetur explicabo placeat laudantium nesciunt rerum aliquid illum voluptatum molestiae aut. Velit asperiores quas corrupti voluptatum blanditiis.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, accusantium doloribus accusamus deserunt tenetur explicabo placeat laudantium nesciunt rerum aliquid illum voluptatum molestiae aut. Velit asperiores quas corrupti voluptatum blanditiis.
                    </p>


                </div>


            </div>


        </section>

    )


}