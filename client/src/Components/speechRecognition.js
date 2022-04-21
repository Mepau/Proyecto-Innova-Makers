
import { useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap"
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { handle } from "express/lib/application";

function SpeechRecognitionMenu(props) {
    const { handleDescritpion } = props
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [isListening, setIsListening] = useState(false);
    const microphoneRef = useRef(null);
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return (
            <div className="mircophone-container">
                Browser is not Support Speech Recognition.
            </div>
        );
    }
    const handleListing = () => {
        setIsListening(true);
        microphoneRef.current.classList.add("listening");
        SpeechRecognition.startListening({
            continuous: true,
        });
        

    };
    const stopHandle = () => {
        setIsListening(false);
        microphoneRef.current.classList.remove("listening");
        SpeechRecognition.stopListening();
    };
    const handleReset = () => {
        stopHandle();
        resetTranscript();
    };
    return (
        <div className="microphone-wrapper">
            <div className="mircophone-container">
                <Row>
                    <Col xs={2}>
                        <div className="microphone-icon-container"
                            ref={microphoneRef}
                            onClick={handleListing}>
                            <FontAwesomeIcon icon={faMicrophone} />
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className="microphone-status">
                            Click to start Listening
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="microphone-status">
                            {isListening ? "Listening........." : "Click to start Listening"}
                        </div>
                        {isListening && (
                            <button className="microphone-stop btn" onClick={stopHandle}>
                                Stop
                            </button>
                        )}
                    </Col>
                </Row>

            </div>

            {transcript && (
                <div className="microphone-result-container">
                    <div className="microphone-result-text">{transcript}</div>
                    <button className="microphone-reset btn" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            )}

        </div>
    );
}

export default SpeechRecognitionMenu