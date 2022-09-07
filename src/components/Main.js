import TransferForm from './TransferForm';
import ProgressBarNew from './ProgressBarNew';
import Intro from './Intro';
import { useSnapshot } from 'valtio';
import state from '../State';
import ErrorBoundary from './ErrorBoundary';

function Main() {
    const snap = useSnapshot(state);

    return (
        <main>
            <aside className="banner">
                <img id="sligoil-ad" src={require("../assets/images/sligoil-banner-2.gif")} alt="Sligoil: Your Power Is In Our Hands" />
            </aside>
            <header className="banner" id="title" >
                <h1>
                <img src={require("../assets/images/crypto-transfer-logo-texture.gif")} alt="crypto-transfer" />
                </h1>
            </header>
            <ErrorBoundary>
            <div className="transfer-wrap">
            <section className="intro">
                <h2>Welcome to crypto-transfer.co.uk</h2>
                <h3>Please be advised:</h3>
                <ul>
                    <li>This is an unregulated service</li>
                    <li>Transferred funds cannot be 'un-transferred'</li>
                    <li>Transferred funds will probably reach the intended recipient</li>
                    <li>Learn to live with uncertainty</li>
                    <li className="scam">CBD is a scam</li>
                </ul>
            </section>
                {state.startProgress ?
                    <ErrorBoundary><ProgressBarNew /></ErrorBoundary> : (state.showForm ?
                        <ErrorBoundary><TransferForm /></ErrorBoundary> : <Intro />) }
            </div>
            </ErrorBoundary>
            <aside className="banner">
                <img src={require("../assets/images/vox-ad-2.gif")} alt="You Are Being Watched" />
            </aside>
         </main>
    )
}

export default Main;