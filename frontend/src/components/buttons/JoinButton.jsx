export default function JoinButton({ text, icon, onClick }) {
  return (
    <button className="my-btn" onClick={onClick}>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {text}
    </button>
  );
}
