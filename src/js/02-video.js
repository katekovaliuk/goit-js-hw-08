import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

 const iframe = document.querySelector('iframe');
const player = new Player(iframe);
 
const STORAGE_KEY = 'videoplayer-current-time';

 

    player.on('play', function() {
        console.log('played the video!');
    });

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime() {
    player.getCurrentTime().then(function (seconds) {
    
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds));
        
    });
}


player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);
    