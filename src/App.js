import { useEffect, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [curState, setCurState] = useState(1);
  const [message, setMessage] = useState(messages[curState - 1]);
  const [isOpen, setIsOpen] = useState(true);
  console.log(curState);
  useEffect(() => {
    setMessage(messages[curState - 1]);
  }, [curState]);
  const handleNext = () => {
    if (curState === 3) return;
    setCurState((prevState) => prevState + 1);
    console.log("current state", curState);
  };
  const handlePrev = () => {
    if (curState === 1) return;
    setCurState((prevState) => prevState - 1);
    console.log("current state", curState);
  };
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${curState >= 1 ? "active" : ""}`}>1</div>
            <div className={`${curState >= 2 ? "active" : ""}`}>2</div>
            <div className={`${curState >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {curState}: {message}
          </p>
          <div className="buttons">
            <button
              onClick={handlePrev}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
