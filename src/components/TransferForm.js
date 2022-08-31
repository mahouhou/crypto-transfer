import {useState, useEffect} from "react";
import state from '../State';
import SligoilTickWhite from "./svg/SligoilTickWhite";

function TransferForm() {
  const [privateKey, setPrivateKey] = useState("");
  //privateKey is the string that's input into the input field by the user
  //setPrivateKey is used to update the state as the user types
  const [correctKey, setCorrectKey] = useState("EB8S5G66JHF7SF");
  //set the correctKey to 'password'
  //setCorrectKey is available in case we need to update the correctKey state
  const [isCorrect, setIsCorrect] = useState(false);
  //isCorrect state is initially set to false
  //setIsCorrect state is updated to true if privateKey is equal to correctKey

  useEffect(() => {
    if (correctKey === privateKey.toUpperCase()) {
      setIsCorrect(true)
    }
    else {
      setIsCorrect(false)
    }
  },[privateKey, correctKey])
    //array of dependance, the things that the useEffect depends on
    //when anything inside the array changes, the useEffect runs
    //in this case, the useEffect has to keep an eye on privateKey to check if it changes ?

  function handleChange(e) {
    setPrivateKey(e.target.value)
    //Update the privateKey state to match the user input
  }
  function handleSubmit(e) {
    e.preventDefault();
    state.startProgress = true;
    state.showForm = false;
    //updates startProgress state to true
    //once the submit button has been clicked
  }
  return (
    <div className="form-wrap">
      <img id="big-coin" src={require("../assets/images/coin-spin-300.gif")} alt="" />
      <form>
          <label for="recipient">Recipient:</label>
          <input
            id="recipient"
            placeholder="THE MOVEMENT"
            type="text"
            disabled
           />
           <SligoilTickWhite /><br />
          <label for="currency">Currency:</label>
          <input
            id="currency"
            placeholder="BIRDCOIN"
            type="text"
            disabled
           />
           <SligoilTickWhite /><br />
          <label for="password">Wallet Key:</label>
          <input
            autoFocus
            id="password"
            placeholder="EB8S5G66......"
            type="text"
            onChange={handleChange}
            //calls handleChange when there's user input
            value={privateKey}
          /><br />
          <input
          id="transfer-now"
            type="submit"
            value="Transfer NOW"
            onClick={handleSubmit}
            //calls handleSubmit when submit button is clicked
            disabled={!isCorrect}
            //submit button is disabled until isCorrect is true ?
          />
      </form>
      <img id="big-coin" src={require("../assets/images/coin-spin-300.gif")} alt="" />
      {/* {isCorrect && privateKey} */}
    </div>
  );
}

export default TransferForm;