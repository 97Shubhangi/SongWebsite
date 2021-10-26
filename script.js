console.log("welcome to spotify");

//initialize the variable
let songIndex=0;
let audioElement= new Audio('song1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songitems= Array.from(document.getElementsByClassName('songItems'));

//audioElement.play();



let songs= [
    {songName: "kar har maiden fateh", filePath: "song1.mp3", coverPath: "cover1.jpg"},
    {songName: "Aashayein aashayein", filePath: "song2.mp3", coverPath: "cover2.jpg"},
    {songName: "Badal pe paon hain ya", filePath: "song3.mp3", coverPath: "cover3.jpg"},
    {songName: "Tu na jaane aas paas h", filePath: "song4.mp3", coverPath: "cover4.jpg"},
    {songName: "Besabriyaan- MS Dhoni", filePath: "song5.mp3", coverPath: "cover5.jpg"},
    {songName: "Give me some sunshine", filePath: "song6.mp3", coverPath: "cover6.jpg"},

] 

songitems.forEach((element, i) =>{
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity= 0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
     //update seekbar
     progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value= progress;
})

myProgressBar.addEventListener('change',()=>{

    audioElement.currentTime= myProgressBar.value*audioElement.duration/100;

})

const MakeALLplays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
    })
}

const newLocal = audioElement.src = songs;
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    MakeALLplays();
    songIndex= parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src= `song${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity= 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
      })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>5){
        songIndex=0
    }
    else{
    songIndex+= 1;
    }

    audioElement.src= `song${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
    songIndex-= 1;
    }

    audioElement.src= `song${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

    


