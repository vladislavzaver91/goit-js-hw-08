import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const onTimeUpdate = function (data) {
    localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));

const savingData = localStorage.getItem(LOCAL_STORAGE_KEY);
console.log(savingData);
if (savingData) {
    player.setCurrentTime(savingData)
    .then(function() {})
    .catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        };
    });
};

// function resumesPlayback() {
//     const savingData = localStorage.getItem(LOCAL_STORAGE_KEY);
//     if (savingData) {
//     player.setCurrentTime(savingData)
//     .then(function() {})
//     .catch(function(error) {
//         switch (error.name) {
//             case 'RangeError':
//                 break;
//             default:
//                 break;
//         };
//     });
// };
// };