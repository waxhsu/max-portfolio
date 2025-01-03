import './Work.css';
import { WORK } from "../../const"
import GithubCat from "../../images/IconGithub2.gif"
import ChainLink from "../../images/IconLink.gif"
import paper_card0 from "./paper_card0.png"
import paper_card1 from "./paper_card1.png"
import paper_card2 from "./paper_card2.png"
import paper_card3 from "./paper_card3.png"


export default function Work() {
    const paperCards = [paper_card0, paper_card1, paper_card2, paper_card3];

    return (
        <section id="Work">
            <div className="work-container">
                {WORK.map((work, index) => {
                    const background = paperCards[index % paperCards.length];
                    return (
                        <div
                            key={work.id}
                            className="work-content"
                            style={{ backgroundImage: `url(${background})` }}
                        >
                            <div className="work-title">
                                <h2>{work.title}</h2>
                            </div>
                            <a href={work.link1}>
                                <img className="work-preview" src={work.src} alt={work.alt} />
                            </a>
                            <p>{work.desc}</p>

                            <div className="work-link-container">
                            <a href={work.link1}>
                                <img className="work-chain-link" src={ChainLink} alt="GitHub link" />
                            </a>
                            <a href={work.link2}>
                                <img className="work-github-link" src={GithubCat} alt="GitHub link" />
                            </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}


