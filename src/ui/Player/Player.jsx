import s from "./player.module.scss";
import React from "react";
// import { useEffect, useState } from "react";
// import { useAddVoiceMutation } from "../../reduxStore/ApiSlice.js";

export const Player = ({ recordId, partnerID }) => {
  // const ctx = new AudioContext();
  // const [addVoice] = useAddVoiceMutation();
  // const [voice, setVoice] = useState("");

  // useEffect (() => {
  //     const getVoice = async (recordId, partnerID) =>  {await addVoice({
  //         recordId: recordId,
  //         partnerID: partnerID,
  //       }).then(data => data.arrayBuffer())
  //       .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
  //       .then(voice => setVoice(voice))
  //     }
  //     getVoice(recordId, partnerID)

  //   }, [])
  //     console.log(voice)

  // function playback() {
  //   const playSound = ctx.createBufferSource();
  //   playSound.buffer = voice;
  //   playSound.connect(ctx.destination);
  //   playSound.start(ctx.currentTime);
  // }

  return (
    <div className={s.background}>
      <div>
        <button
          className={s.playButton}
          //   onClick={playback}
        ></button>
      </div>
    </div>
  );
};
