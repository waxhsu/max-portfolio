import './About.css';
import Me from '../../images/me.png'

export default function About() {
    return (
        <section id="About">
            <div className="about-container">
                <div className="me">
                    <img src={Me} alt="me" />
                </div>

                <div className="about-content">
                    <p>Hi, I’m Max – an artist and developer – splitting my time between Taipei and New York City (depending on the project, of course).
                    </p>
                    <p>I love diving into new challenges and making sure every project teaches me something fresh.
                    </p>
                    <p>With over 15 years of dance experience, I’ve brought that same spirit of experimentation and play into web development as my next creative outlet.
                    </p>
                    <p>Feel free to&nbsp;
                        <a href="mailto:maxhsuwork@gmail.com">
                            
                        reach out and say hi!
                        </a>
                    </p>
</div>



            </div>


        </section>

    )


}