export default function SavedButton({ text, icon, onClick }) {
  return (
    <button className="my-btn" id="save-btn" onClick={onClick}>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {text}
    </button>
  );
}
