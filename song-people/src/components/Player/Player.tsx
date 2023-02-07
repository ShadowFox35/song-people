import { useEffect, useState } from 'react';
// import useSound from 'use-sound'; //для работы со звуком
// import {
//   AiFillPlayCircle,
//   AiFillPauseCircle,
// } from 'react-icons/ai'; // иконки для воспроизведения и паузы
// import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'; // иконки для следующего и предыдущего трека
// import { IconContext } from 'react-icons'; // для кастомизации иконок
// import qala from '../../../src/assets/BillieEilish.mp3';

// import './Player.scss';

// const Player: React.FC = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [play, { pause, duration, sound }] = useSound(qala);

//   const playingButton = () => {
//     if (isPlaying) {
//       pause(); // приостанавливаем воспроизведение звука
//       setIsPlaying(false);
//     } else {
//       play(); // воспроизводим аудиозапись
//       setIsPlaying(true);
//     }
//   };

//   const [currTime, setCurrTime] = useState({
//     min: '',
//     sec: '',
//   }); // текущее положение звука в минутах и секундах

//   const [seconds, setSeconds] = useState(); // текущая позиция звука в секундах

//   useEffect(() => {
//     const sec = duration / 1000;
//     const min = Math.floor(sec / 60);
//     const secRemain = Math.floor(sec % 60);
//     const time = {
//       min: min,
//       sec: secRemain,
//     };
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (sound) {
//         setSeconds(sound.seek([])); // устанавливаем состояние с текущим значением в секундах
//         const min = Math.floor(sound.seek([]) / 60);
//         const sec = Math.floor(sound.seek([]) % 60);
//         setCurrTime({
//           min,
//           sec,
//         });
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [sound]);

//   return (
//     <div className="component">
//       <h2>Playing Now</h2>
//       <img
//         className="musicCover"
//         src="https://picsum.photos/200/200"
//         alt=""
//       />
//       <div>
//         <h3 className="title">Rubaiyyan</h3>
//         <p className="subTitle">Qala</p>
//       </div>
//       <div>
//         <button className="playButton">
//           <IconContext.Provider
//             value={{ size: '3em', color: '#27AE60' }}>
//             <BiSkipPrevious />
//           </IconContext.Provider>
//         </button>
//         {!isPlaying ? (
//           <button
//             className="playButton"
//             onClick={playingButton}>
//             <IconContext.Provider
//               value={{ size: '3em', color: '#27AE60' }}>
//               <AiFillPlayCircle />
//             </IconContext.Provider>
//           </button>
//         ) : (
//           <button
//             className="playButton"
//             onClick={playingButton}>
//             <IconContext.Provider
//               value={{ size: '3em', color: '#27AE60' }}>
//               <AiFillPauseCircle />
//             </IconContext.Provider>
//           </button>
//         )}
//         <button className="playButton">
//           <IconContext.Provider
//             value={{ size: '3em', color: '#27AE60' }}>
//             <BiSkipNext />
//           </IconContext.Provider>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Player;
