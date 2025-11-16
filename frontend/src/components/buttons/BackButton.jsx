export default function BackButton({text}) {
  return (
    <button onClick={() => window.history.back()}
      style=
      {{
        padding: "8px 14px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        cursor: "pointer",
        fontSize: "14px",
      }}>
      ← Back {text}
    </button>
  );
}
