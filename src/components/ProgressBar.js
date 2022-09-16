import Alert from "./Alert";
import { useState, useEffect } from "react";
import { useSnapshot } from "valtio";
import state from "../State";
import ErrorBoundary from "./ErrorBoundary";

const alertBatch = [2, 4, 3, 12, 6];
//the number of pop ups to be opened during each sequence

function ProgressBar() {
  const [count, setCount] = useState(0);
  //counter displayed on ProgressBar
  const [batchNumber, setBatchNumber] = useState(0);
  //batch number state starts at 0 for the first item in alertBatch[]
  const [showAlert, setShowAlert] = useState(false);
  //showAlert state is initially set to false i.e. not visible
  //setShowAlert is used to make Alert visible/invisible
  const snap = useSnapshot(state);
  //set Valtio state (contains startProgress and showForm)
  const [tempBatch, setTempBatch] = useState([-1]);
  //tempBatch state starts with an array containing -1 (not 0)
  //state updated during the useEffect - every time batchNumber changes
  //tempBatch receives data for open alerts
  const [progressBar, setProgressBar] = useState(0);
  //new progress state with equal increments between batches

  let interval = null;
  function CountUp() {
    setCount((prev) => prev + 1);
  }
  function StopCount() {
    clearInterval(interval);
  }

  useEffect(() => {
    console.log({ tempBatch1: `${tempBatch}` }); //-1
    //if progress has started, increase progress bar
    requestAnimationFrame(startAnimation);
    function startAnimation() {
      setProgressBar((prev) => prev + 100 / 6);
      //!! call Counter function for the first time here
      //!! count up to progressBar
      interval = setInterval(CountUp, 48);
      //wait 1s to allow for progress bar to grow
      //before showing popups
      setTimeout(ShowAlert, 1000);
      function ShowAlert() {
        StopCount();
        console.log({ showAlert1: `${showAlert}` }); //false
        setShowAlert((prevState) => !prevState);
        console.log({ showAlert2: `${showAlert}` }); //false -> why not true ?? answer below!!!
        //setting state eg with setShowAlert((prevState) => !prevState) is an asynchrounus process. that means
        //your console.log is running whilst setshowalert is still running
        //but if you put your console in a useeffect that is listening for "showalert" then it will
        //console.log to true when it has finished changing
        console.log({ tempBatch3: `${tempBatch}` }); //-1
      }
      //tempBatch = -1
    }
  }, [snap.startProgress]);
  //if the submit button has been clicked, then startProgress starts
  //therefore progressBar state increases and Alert becomes visible

  function handleAlert() {
    //function called by x button on alerts
    let temp = [...tempBatch];
    //copy contents of tempBatch into temp
    temp.pop();
    //pop() method removes the last item (closed alert batch data) from array
    setTempBatch(temp);
    //tempBatch = alert data
  }

  useEffect(() => {
    //progress bar increases with each new alert batch
    console.log({ tempBatch2: `${tempBatch}` }); //-1 -> why is this the second console.log to get logged when tempBatch doesn't change ??
    //i think when the component mounts it sets tempBatch to [-1], that why it's running
    //it's kinda changing from undefined to [-1]
    if (tempBatch.length === 0) {
      if (progressBar < 100) {
        setProgressBar((prev) => prev + 100 / 6);
        interval = setInterval(CountUp, 59);
        setTimeout(StopCount, 1000);
      }
      if (batchNumber < 5) {
        setBatchNumber((prev) => prev + 1);
      }
    }
  }, [tempBatch]);
  //when tempBatch changes, useEffect runs and checks if equal to 0
  //new batchNumber is 1 more than the last state which
  //pushes the alertBatch onto the next number in the array

  useEffect(() => {
    function ShowAlert() {
      let x = 0;
      let temp = [];
      //batchNumber state keeps track of which alert batch we are on
      for (let i = 0; i < alertBatch[batchNumber]; i++) {
        //push() adds new item to the end of an array
        //and returns the new length
        //each time for loop iterates,
        //push data in sequence and increment x
        //until all items from that batch have been pushed to temp
        temp.push(data[batchNumber][x]);
        x++;
      }
      //tempBatch state is updated with batch data
      setTempBatch(temp);
    }
    //get popup data 1s after batchNumber changes
    //to allow for progress bar to increase
    setTimeout(ShowAlert, 1000);
  }, [batchNumber]);
  //when batch number changes, useEffect will run
  //and gather the next set of popups
  //setBatchNumber depends how many loops the for/loop iterates through
  //each time it loops, a 1 is pushed to temp array
  //the length of temp is equal to the batchNumber state

  return (
    <div className="tracker-wrap">
      <div className="tracker">
        {/* width of progress div is equal to progressBar state as a percentage */}
        <ErrorBoundary>
          <div className="progress" style={{ width: `${progressBar}%` }}>
            {count}%
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
      {/* status and handleAlert are props that get passed to Alert.js 
      handleAlert gets called when X button is clicked */}
      {/* number of Alerts created depends on tempBatch state */}
    </div>
  );
}

export default ProgressBar;

// const data = [
//   ["Melting", "I'm"],
//   ["Horror", "The", "Horror", "The"],
//   ["Perfect", "Nobody's", "Well"],
//   ["You", "To", "Leave", "I", "Choice", "A", "Is", "Here", "From", "Go", "We", "Where"],
//   ["Day", "Another", "Is", "Tomorrow", "All", "After"]
// ]

const data = [
  ["melting-02.png", "I'm-01.png"],
  ["HORROR-04.png", "THE-03.png", "horror-02.png", "the-01.png"],
  ["PEFECT-03.png", "nobodie's-02.png", "Well-01.png"],
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
  ],
];

// ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 4M -pass 1 -an -f null /dev/null &&
// ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 4M -pass 2 -c:a libopus output.webm

// ffmpeg -i title.mov -c:v libvpx-vp9 -b:v 4M -pass 1 -an -f null /dev/null &&
// ffmpeg -i title.mov -c:v libvpx-vp9 -b:v 4M -pass 2 -c:a libopus title.webm
