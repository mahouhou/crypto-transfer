import ErrorBoundary from "./ErrorBoundary";

function Alert(props) {
  {/* receives props from Alert element */}
  return (
    <>
    <div  className="alert"
          style={{display: `${props.status}`,
                  left: `${props.index * 5}`+'%',
                  top: `${props.index * 10}`+'px'
                }}>
    {/* toggle visibility based on status state */}
      <button onClick={props.handleAlert}>x</button>
      {/* calls handleAlert which increases progress */}
      <ErrorBoundary>
      <img src={`/alert-copy/${props.src}`} alt={props.text} />
      </ErrorBoundary>
    </div>
    </>
  );
}

export default Alert;