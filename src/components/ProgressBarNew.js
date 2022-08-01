import Alert from './Alert';
import { useState, useEffect } from "react";
import { useSnapshot } from 'valtio';
import state from '../State';
import ErrorBoundary from './ErrorBoundary';

function ProgressBarNew() {
    const [count, setCount] = useState(0);
    //count state displayed on progress bar
    const [batchNumber, setBatchNumber] = useState(-1);
    //batchNumber state keeps track of which alert batch we are on
    const [showAlert, setShowAlert] = useState(false);
    //setShowAlert is used to make Alert visible
    const snap = useSnapshot(state);
    //set Valtio state (contains startProgress, showForm, progressFinished)
    const [tempBatch, setTempBatch] = useState([0]);
    //tempBatch state starts with an array containing 0
    //state updated during the useEffect - every time batchNumber changes
    //tempBatch receives data for current Alert batch
    const [progressBar, setProgressBar] = useState(0);
    //progress state with equal increments between batches

    //functions used to increment and stop the progress bar % counter
    let interval = null;
    function CountUp() {
        setCount((prev) => prev + 1);
    }
    function StopCount() {
      clearInterval(interval);
    }

    //every time tempBatch.length = 0 (Alerts are closed)
    //progressBar state is increased, count starts and stops
    //and batchNumber moves on to the next
    useEffect(() => {
        if (tempBatch.length === 0) {
            if (progressBar < 100) {
              setProgressBar((prev) => prev + 100 / 6);
              interval = setInterval(CountUp, (56));
              setTimeout(StopCount, 1000);
            }
            if (batchNumber < 5) {
              setBatchNumber((prev) => prev + 1);
            }
            if (progressBar >= 100) {
                state.progressFinished = true;
            }
          }
    }, [snap.startProgress, tempBatch])

    //every time batchNumber moves on to the next batch,
    //for loop gathers Alert data for next alert batch
    useEffect(() => {
        function ShowAlert() {
          let x = 0;
          let temp = [];
          for (let i = 0; i < alertBatch[batchNumber]; i++) {
            //push() adds new item to the end of an array
            //and returns the new length.
            //each time for loop iterates,
            //push data in sequence and increment x
            //until all items from that batch have been pushed to temp
            temp.push(data[batchNumber][x]);
            x++;
          }
          //tempBatch state is updated with batch data
          setTempBatch(temp);
          setShowAlert(true);
        }
        //get popup data 1s after batchNumber changes
        //to allow for progress bar to increase
        setTimeout(ShowAlert, 1000);
      }, [batchNumber]);
      
      //function called by x button on alerts
      //and removes Alert from tempBatch and therefore UI
      function handleAlert() {
        let temp = [...tempBatch];
        //copy contents of tempBatch into temp
        temp.pop();
        //pop() method removes the last item (closed alert batch data) from array
        setTempBatch(temp);
      }

      const progressRounded = Math.round((1000000000 * (count / 100)) * 100) / 100;
    
      return (
        <>
        <p style={{color: "white"}}>BIRDCOIN {progressRounded} (= ${progressRounded}) has been transferred.</p>
        <div className="tracker-wrap">
          <div className="tracker">
            <ErrorBoundary>
              <div className="progress" style={{ width: `${progressBar}%` }}>
                {count >= 100 ? 100 : count}%
              </div>
            </ErrorBoundary>
          </div>
          {tempBatch.map((text) => (
            <ErrorBoundary>
              <Alert
                index={tempBatch.indexOf(text)}
                status={`${showAlert ? "block" : "none"}`}
                handleAlert={handleAlert}
                src={text}
                key={text}
              />
            </ErrorBoundary>
          ))}
        </div>
        </>
      );
}

export default ProgressBarNew;

//the number of pop ups to be opened during each sequence
const alertBatch = [2, 4, 3, 12, 6];

//Alert data
const data = [
    ["melting-02.png",
    "I'm-01.png"
    ],
    ["HORROR-04.png",
    "THE-03.png",
    "horror-02.png",
    "the-01.png"
    ],
    ["PEFECT-03.png",
    "nobodie's-02.png",
    "Well-01.png"
    ],
    [
      "you-12.png",
      "to-11.png",
      "LEAVe-10.png",
      "i-09.png",
      "Choice-08.png",
      "a-07.png",
      "Is-06.png",
      "here-05.png",
      "From-04.png",
      "Go-03.png",
      "WE-02.png",
      "WheRe-01.png",
    ],
    [
      "day-06.png",
      "another-05.png",
      "is-04.png",
      "tommoro-03.png",
      "all-02.png",
      "After-01.png",
    ]
  ];