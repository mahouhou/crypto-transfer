import state from "../State";

function Intro() {

  function handleClick() {
    state.showForm = !state.showForm;
  }

  return (
    <section className="new-transfer">
      <button className="button" onClick={handleClick}>
        NEW Transfer?
      </button>
    </section>
  );
}

export default Intro;
