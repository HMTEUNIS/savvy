import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Talk({ setTT }) {
  const [rec, setRec] = useState(true);
  const { transcript } = useSpeechRecognition();
  const handleRec = (e) => {
    setRec(!rec);
  };

  setTT(transcript);
  return (
    <div className="talk" onClick={handleRec}>
      {rec ? (
        <span className="micOff" onClick={SpeechRecognition.startListening}>
          🎤
        </span>
      ) : (
        <span className="micOn" onClick={SpeechRecognition.stopListening}>
          REC 🔴
        </span>
      )}
    </div>
  );
}
export default Talk;
