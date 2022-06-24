import Alert from './Alert';
import { useState, useEffect } from "react";
import { useSnapshot } from 'valtio';
import state from '../State';
import ErrorBoundary from './ErrorBoundary';

const alertBatch = [2, 4, 3, 12, 6]
//the number of pop ups to be opened during each sequence

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  //progress state starts at 0%
  //setProgress is used to increase the progress once popups have been closed
  const [batchNumber, setBatchNumber] = useState(0);
  //batch number state starts at 0 - the first number in the array ?
  const [showAlert, setShowAlert] = useState(false);
  //showAlert state is initially set to false i.e. not visible
  //setShowAlert is used to make Alert visible
  const snap = useSnapshot(state);
  //set Valtio state
  const [tempBatch, setTempBatch] = useState([-1]);
  //tempBatch state starts with an array containing -1 (not 0)
  //state updated during the useEffect - every time batchNumber changes

  useEffect(() => {
    let x = 0;
    let temp = [];
    //batchNumber state keeps track of which alert batch we are on
    for (let i = 0; i < alertBatch[batchNumber]; i++) {
      //push() adds new item to the end of an array
      //and returns the new length
      //pushes that batch of items from data to temp
      temp.push(data[batchNumber][x]);
      // console.log(data[batchNumber][x]);
      x++
    }
    //tempBatch state is updated with batch data
    setTempBatch(temp)
  }, [batchNumber])
  //when batch number changes, useEffect will run -
  //does this mean it runs as soon as the last useEffect has finished ?
  //setBatchNumber depends how many loops the for/loop iterates through
  //each time it loops, a 1 is pushed to temp array
  //the length of temp is equal to the batchNumber state

  useEffect(() => {
    if (snap.startProgress) {
      setProgress(
        prevState => prevState + 0
      )
      setShowAlert(
        prevState => !prevState
      )
    }
  }, [snap.startProgress])
  //array of dependance, the things that the useEffect depends on
  //when anything inside the array changes, the useEffect runs
  //in this case, if the submit button has been clicked, then startProgress starts ?
  //progress state increases by 10% and Alert becomes visible ?

  useEffect(() => {
    if (tempBatch.length === 0) {
      setBatchNumber(prev => prev + 1)
    }
  }, [tempBatch])
  //when tempBatch changes, useEffect runs and checks if equal to 0
  //new batchNumber is 1 more than the last state which
  //pushes the alertBatch onto the next number in the array

  function handleAlert() {
    setProgress(
      prevState => prevState + (100 / 27)
    )
    let temp = [...tempBatch];
    //copy contents of tempBatch into temp
    temp.pop();
    //pop() method removes the last item from an array
    //and returns it
    setTempBatch(temp)
  }
  //when handleAlert is called, progress also increases by 10% ?

  return (
    <div className="tracker-wrap">
      <div className="tracker">
        <div className="progress" style={{ width: `${progress}%` }}>{Math.round(progress)}%</div>
        {/* width of progress div is equal to progress state as a percentage ? */}
      </div>
      {tempBatch.map(text => <ErrorBoundary><Alert
        index={tempBatch.indexOf(text)}
        status={`${showAlert ? "block" : "none"}`}
        handleAlert={handleAlert}
        src={text}
        key={text}
      /></ErrorBoundary>)}
      {/* status and handleAlert are props that get passed to Alert.js 
      handleAlert gets called when X button is clicked ? */}
      {/* number of Alerts created depends on tempBatch state */}
      {/* {tempBatch.length} */}
    </div>
  );
}

export default ProgressBar;

// SEQUENCE OF POP UPS

// Sequence 1.
// At 10% progress
// Show 2 pop ups
// Close last pop up and progress moves 10%

// Sequence 2.
// At 20% progress
// Show 4 pop ups
// Close last pop up and progress moves 5%

// Sequence 3.
// At 25% progress
// Show 3 pop ups
// Close last pop up and progress moves 5%

// Sequence 4.
// At 30% progress
// Show 12 pop ups
// Close last pop up and progress moves 40%

// Sequence 5.
// At 70% progress
// Show 6 pop ups
// Close last pop up and progress moves 30%

// Closing sequence.
// At 100% progress
// Play some kind of animation

// const data = [
//   ["Melting", "I'm"],
//   ["Horror", "The", "Horror", "The"],
//   ["Perfect", "Nobody's", "Well"],
//   ["You", "To", "Leave", "I", "Choice", "A", "Is", "Here", "From", "Go", "We", "Where"],
//   ["Day", "Another", "Is", "Tomorrow", "All", "After"]
// ]

const data = [
  [
    "melting-02.png",
    "I'm-01.png"
  ],
  [
    "HORROR-04.png",
    "THE-03.png",
    "horror-02.png",
    "the-01.png"
  ],
  [
    "PEFECT-03.png",
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
    "WheRe-01.png"
  ],
  [
    "day-06.png",
    "another-05.png",
    "is-04.png",
    "tommoro-03.png",
    "all-02.png",
    "After-01.png"
  ]
]