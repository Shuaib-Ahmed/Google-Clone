import React, { useState, useContext, useEffect } from "react";
import styles from "./css/navbar.module.css";

import { searchContext } from "../Contexts/SearchContextProvider";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    listening,
  } = useSpeechRecognition();

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const { searchText, changeSearchText } = useContext(searchContext);

  const [searchQuery, setSearchQuary] = useState(searchText);

  const submitHanddler = (event) => {
    event.preventDefault();
    changeSearchText(searchQuery);
    if (location.pathname === "/" || location.pathname === "/all") {
      navigate("/all");
    } else {
      navigate(`${location.pathname}`);
    }
  };

  const SearchByVoice = () => {
    setSearchQuary(transcript);
    changeSearchText(transcript);
    onCloseModal();
    if (location.pathname === "/" || location.pathname === "/all") {
      navigate("/all");
    } else {
      navigate(`${location.pathname}`);
    }
  };

  const startMicrophone = () => {
    resetTranscript();
    SpeechRecognition.startListening();
  };

  useEffect(() => {
    if (open) {
      startMicrophone();
    }
  }, [open === true]);

  return (
    <nav className={styles.navContainer}>
      <h1 className={styles.logo}>DOODLE</h1>

      <form className={styles.searchForm} onSubmit={submitHanddler}>
        <input
          type="text"
          placeholder="Enter Your Search Text"
          value={searchQuery}
          onChange={(event) => setSearchQuary(event.target.value)}
        />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <button className={styles.voiceIcon} onClick={onOpenModal}>
        <i className="fa-solid fa-microphone"></i>
      </button>

      <Modal open={open} onClose={onCloseModal} center>
        <section className={styles.modal}>
          {browserSupportsSpeechRecognition && (
            <>
              <h1>
                {listening && "Listening ....."}

                {!listening && "Retry ....."}

                <i className="fa-solid fa-microphone"></i>
              </h1>

              {transcript.trim().length > 0 && (
                <h3>Search Text : {transcript}</h3>
              )}

              <div className={styles.buttonContainer}>
                {transcript.trim().length > 0 && !listening && (
                  <button onClick={SearchByVoice} className={styles.searchBtn}>
                    Search
                  </button>
                )}

                {!listening && (
                  <button onClick={startMicrophone} className={styles.retryBtn}>
                    Retry
                  </button>
                )}
              </div>
            </>
          )}

          {!browserSupportsSpeechRecognition && (
            <h1>Browser doesn't support speech recognition.</h1>
          )}
        </section>
      </Modal>
    </nav>
  );
};

export default Navbar;
