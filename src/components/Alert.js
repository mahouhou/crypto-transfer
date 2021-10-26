
function Alert(props) {
  return (
    <>
    <div style={{display: `${props.status}`}}>
        Hi this is an alert!
        <button onClick={props.handleAlert}>X</button>
    </div>
    </>
  );
}

export default Alert;