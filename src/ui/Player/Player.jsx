import s from "./player.module.scss"
import React from 'react'
import { useEffect} from "react"; 
// import useSound from "use-sound";

export const Player = ({recordId, partnerID}) => {
    const ctx = new AudioContext();
    let audio;
    // const [isPlaying, setIsPlaying] = useState(audio);
    // const [play, { pause}] = useSound(audio);
    // const playingButton = () => {
    //     if (isPlaying) {
    //       pause(); // приостанавливаем воспроизведение звука
    //       setIsPlaying(false);
    //     } else {
    //       play(); // воспроизводим аудиозапись
    //       setIsPlaying(true);
    //     }
    //   };

      function playback() {
        const playSound = ctx.createBufferSource();
        playSound.buffer = audio;
        playSound.connect(ctx.destination);
        playSound.start(ctx.currentTime);
      }



      useEffect(() => {fetch(`https://api.skilla.ru/mango/getRecord?record=${recordId}&partnership_id=${partnerID}`,{
        method: 'POST',
        headers: {
            "Authorization": "Bearer testtoken",
            'Content-Type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
            'Content-Transfer-Encoding': 'binary',
            'Content-Disposition': 'filename="record.mp3'
          }})
          .then(data => data.arrayBuffer())
          .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
          .then(decodedAudio => {
              audio = decodedAudio;
          })
      })

      useEffect(()=> {fetch(`https://api.skilla.ru/partnership/getProfile`,{
        method: 'POST',
        headers:{
            "Authorization": "Bearer testtoken",
            'Content-Type' : 'application/json' 
        }}).then(data => (data.json())).then(data => console.log(data))
    })

  return (
        <div className={s.background}>
          <div>
              <button className={s.playButton} onClick={playback}></button>    
           
          </div>
        </div>
      );
}
