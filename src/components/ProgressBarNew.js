import Alert from './Alert';
import { useState, useEffect } from "react";
import { useSnapshot } from 'valtio';
import state from '../State';
import ErrorBoundary from './ErrorBoundary';

const alertBatch = [2, 4, 3, 12, 6];
//the number of pop ups to be opened during each sequence

function ProgressBarNew() {
    const [count, setCount] = useState(0);
    //count starts at 0
    const [batchNumber, setBatchNumber] = useState(0);
    //batch number state starts at 0 - the first item in alertBatch[]
    const [showAlert, setShowAlert] = useState(false);
    //showAlert state is initially set to false i.e. not visible
    //setShowAlert is used to make Alert visible
    const snap = useSnapshot(state);
    //set Valtio state
    const [tempBatch, setTempBatch] = useState([-1]);
    //tempBatch state starts with an array containing -1 (not 0)
    //state updated during the useEffect - every time batchNumber changes
    //tempBatch receives data for open alerts
    const [progressBar, setProgressBar] = useState(0);
    //new progress state with equal increments between batches

    useEffect(() => {
        
    }, [snap.startProgress, tempBatch])

}

export default ProgressBarNew;