const videoElement=document.getElementById('video');
const button=document.getElementById('button');

async function selectMediaStream(){
    try {
        const mediaStream= await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadmetadata=() =>{
            videoElement.onplay();
        }
    } catch (error) {
        
    }
}

button.addEventListener('click',async () => {
    button.disabled=true;
    await videoElement.requestPictureInPicture();
    videoElement.play();
    button.disabled=false;

})
selectMediaStream();