function PrevButton({ dispatch, index }) {
  if (index > 0)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "prevQuestion" })}
      >
        Prev
      </button>
    );
}

export default PrevButton;
