export default function Button({text}) {
  return (
    <button
      onClick={() =>
        window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSd1U2JKM5xornzoShJ9pI7mLpkS65YPXI4aL8sDkYj1v4dr2w/viewform?usp=dialog"
        )
      }
    >
      <span class="material-symbols-outlined">task_alt</span>
      {text}
    </button>
  );
}
