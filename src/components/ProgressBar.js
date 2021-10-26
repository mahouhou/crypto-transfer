import Alert from './Alert';
import {useState, useEffect} from "react";
import { useSnapshot } from 'valtio';
import state from '../State';

function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const snap = useSnapshot(state);

    useEffect(() => {
        if (snap.startProgress) {
          setProgress(
              prevState => prevState + 10
          )
          setShowAlert(
            prevState => !prevState
        )
        }
      },[snap.startProgress])
      //array of dependance, the stuff that the useEffect depends on
      //when anything inside the array changes, the useEffect runs

      function handleAlert() {
        setProgress(
            prevState => prevState + 10
        )

      }
      
  return (
    <>
        <div className="tracker">
            <div className="progress" style={{width: `${progress}%`}}></div>
        </div>
        <Alert status={`${ showAlert ? "block" : "none" }`} handleAlert={handleAlert} />
        {/* Status and handleAlert are props that get passed to Alert.js */}
        {progress}
    </>
  );
}

export default ProgressBar;