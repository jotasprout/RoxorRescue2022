(function() {

    const width = 320;
    const height = 0;

    let streaming = false;

    let video = null;
    let canvas = null;
    let photo = null;
    let startButton = null;

    function startup(){
        video = document.getElementById('video');
        canvas = document.getElementById('canvas');
        photo = document.getElementById('photo');
        startButton = document.getElementById('startButton');

        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function(stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function(err) {
                console.log("Ann error occurred! " + err);
            });
    }
})