const cameraFeed = document.getElementById('cameraFeed');
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    console.log("btn");
    openCamera();
})

function openCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            cameraFeed.srcObject = stream;
        })
        .catch(error => {
            console.error(alert(error));
        })
}