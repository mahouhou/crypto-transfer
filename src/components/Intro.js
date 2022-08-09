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
            {/* <h2>Welcome to crypto-transfer.co.uk</h2>
            <h3>Please be advised:</h3>
            <ul>
                <li>This is an unregulated service</li>
                <li>Transferred funds cannot be 'un-transferred'</li>
                <li>Transferred funds will probably reach the intended recipient</li>
                <li>Learn to live with uncertainty</li>
                <li className="scam">CBD is a scam</li>
            </ul> */}
            <button className="button" onClick={handleClick}>NEW Transfer?</button>
        </section>
    );
};

export default Intro;