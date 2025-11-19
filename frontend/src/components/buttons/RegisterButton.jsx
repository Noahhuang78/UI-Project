import React, { useState } from "react";

export default function RegisterButton({
  text,
  icon,
  event,
  setRegisteredEvents,
  isRegistered,
}) {
  const [showModal, setShowModal] = useState(false); 
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClick = () => {
    if (isRegistered) {
      alert("You have already registered for this event");
      return;
    }

    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSd1U2JKM5xornzoShJ9pI7mLpkS65YPXI4aL8sDkYj1v4dr2w/viewform?usp=dialog"
    );

    setShowModal(true);
  };

  const handleYes = async () => {
    setShowModal(false);

    setRegisteredEvents((prev) => [...prev, event]);

    try {
      await fetch("http://localhost:8000/myevents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
      });
    } catch (e) {
      console.error(`failed to register: ${e}`);
    }

    setShowSuccess(true);
  };

  const handleNo = () => {
    setShowModal(false);
  };

  // All 3 buttons in success popup just close for now — you can add real logic later
  const handleAdd = () => {
    window.open("https://calendar.google.com/calendar")
    setShowSuccess(false);
  };

  const handleSkip = () => {
    setShowSuccess(false);
  };

  const handleRemindLater = () => {
    setShowSuccess(false);
  };

  return (
    <div>
      {/* REGISTER BUTTON */}
      <button onClick={handleClick}>
        <span className="material-symbols-outlined">{icon}</span>
        {text}
      </button>

      {/* POPUP 1 — Have you registered? */}
      {showModal && (
        <div style={styles.backdrop}>
          <div style={styles.modal}>
            <p>Have you registered via the form?</p>

            <button style={styles.yes} onClick={handleYes}>
              Yes
            </button>

            <button style={styles.no} onClick={handleNo}>
              No
            </button>
          </div>
        </div>
      )}

      {/* POPUP 2 — Add to Calendar */}
      {showSuccess && (
        <div style={styles.backdrop}>
          <div style={styles.modal}>
            <h3>Registration Successful!</h3>
            <p>Add to your calendar?</p>

            <button style={styles.yes} onClick={handleAdd}>
              Yes, add
            </button>

            <button style={styles.no} onClick={handleSkip}>
              No
            </button>

            <button style={styles.later} onClick={handleRemindLater}>
              Remind me later
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    minWidth: "260px",
  },
  yes: {
    width: "90%",
    marginBlock: "12px",
    padding: "10px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  no: {
    width: "90%",
    marginBlock: "12px",
    padding: "10px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  later: {
    width: "90%",
    marginBlock: "12px",
    padding: "10px",
    background: "#888",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
