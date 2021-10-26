import {useState, useEffect} from "react";
import { useSnapshot } from 'valtio';
import state from '../State';

function TransferForm() {
  const [privateKey, setPrivateKey] = useState("");
  //privateKey is the string that's input into the input field by the user
  //setPrivateKey is used to update the state as the user types
  const [correctKey, setCorrectKey] = useState("password");
  //set the correctKey to 'password'
  //setCorrectKey is available in case we need to update the correctKey state
  const [isCorrect, setIsCorrect] = useState(false);
  //isCorrect state is initially set to false
  //setIsCorrect state is updated to true if privateKey is equal to correctKey

  useEffect(() => {
    if (correctKey === privateKey) {
      setIsCorrect(true)
    }
    else {
      setIsCorrect(false)
    }
  },[privateKey])

  function handleChange(e) {
    setPrivateKey(e.target.value)
    //Update the privateKey state to match the user input
  }
  function handleSubmit(e) {
    e.preventDefault();
    state.startProgress = true;
  }
  return (
    <div>
      <form>
          <input
            placeholder="Input private key.."
            type="password"
            onChange={handleChange}
            value={privateKey}
          />
          <input
            type="submit"
            value="Submit"
            onClick={handleSubmit}
            disabled={!isCorrect}
          />
      </form>
  {isCorrect && privateKey}
  </div>
  );
}

export default TransferForm;