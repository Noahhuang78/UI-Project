import React, { useState } from "react";

export default function RegisterButton({ text, icon, event, setRegisteredEvents, isRegistered }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if(isRegistered){
      alert("you have already registered for this event")
      return
    }
    // 1. Open Google form
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSd1U2JKM5xornzoShJ9pI7mLpkS65YPXI4aL8sDkYj1v4dr2w/viewform?usp=dialog"
    );

    // 2. Show modal
    setShowModal(true);
  };

  const handleYes = async () => {
    setShowModal(false);
    setRegisteredEvents((prev)=>[...prev, event])
    try{
         await fetch("http://localhost:8000/myevents", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(event),
        })
    }catch(e){
        console.error(`failed to register: ${e}`)

    }
    // ⚠️ Here is where you call your backend if needed
  };

  const handleNo = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* APPLY BUTTON */}
      <button onClick={handleClick}>
        <span className="material-symbols-outlined">{icon}</span>
        {text}
      </button>

      {/* MODAL */}
      {showModal && (
        <div style={styles.backdrop}>
          <div style={styles.modal}>
            <p>Have you Registered?</p>

            <button style={styles.yes} onClick={handleYes}>
              Yes
            </button>

            <button style={styles.no} onClick={handleNo}>
              No
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
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    minWidth: "250px",
  },
  yes: {
    margin: "10px",
    padding: "8px 16px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  no: {
    margin: "10px",
    padding: "8px 16px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};
