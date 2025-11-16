import React, { useState } from "react";

export default function ApplyButton({ text, icon, internship, setAppliedInternships, isApplied }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if(isApplied){
      alert("you have already applied for this internship")
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
    setAppliedInternships((prev)=>[...prev, internship])
   
    }
    // ⚠️ Here is where you call your backend if needed


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
            <p>Have you applied?</p>

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
  )};


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
