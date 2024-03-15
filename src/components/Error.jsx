export default function Error({ title, message, onConfirm }) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
      {onConfirm && (
        <div id="confirmations-actions">
          <button className="button" onClick={onConfirm}>
            Okay
          </button>
        </div>
      )}
    </div>
  );
}
