import './MaxJamBox.css';
import DirtyBox from './dirtybox.gif'

export default function MaxJamBox() {
    return (
        <section id="maxjambox">
            <div className="dirty-box-container">
                <img id="dirty-box" src={DirtyBox} alt="dirty-box" />
            </div>
        </section>

    )


}