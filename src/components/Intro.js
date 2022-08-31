// import {useState} from "react";
// import { useSnapshot } from 'valtio';
import state from '../State';

function Intro() {
    // const [showForm, setShowForm] = useState(false);
    // const snap = useSnapshot(state);
    // const setShowForm = state.showForm;

    function handleClick() {
        state.showForm = !state.showForm;
    };

    return (
        <section className="new-transfer">
            <button className="button" onClick={handleClick}>NEW Transfer?</button>
        </section>
    );
};

export default Intro;