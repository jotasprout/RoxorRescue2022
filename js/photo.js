(function() {

    const width = 320;
    const height = 0;

    let streaming = false;

    let video = null;
    let canvas = null;
    let photo = null;
    let snap = null;

    function startup(){
        video = document.getElementById('video');
        canvas = document.getElementById('canvas');
        photo = document.getElementById('photo');
        snap = document.getElementById('snap');

        navigator.mediaDevices.getUserMedia(
            { 
                video: true, 
                audio: false 
            }
        )
        .then(function(stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function(err) {
            console.log("Ann error occurred! " + err);
        });

        video.addEventListener('canplay', function(ev){
            if (!streaming){
                height = video.videoHeight / (video.videoWidth/width);

                video.setAttribute('width', width);
                video.setAttribute('height', height);
                canvas.setAttribute('width', width);
                canvas.setAttribute('height', height);
                streaming = true;
            }
        }, false);

        snap.addEventListener('click', function(ev){
            takePicture();
            ev.preventDefault();
        }, false);

        clearPhoto();
    }

    function clearPhoto(){
        var context = canvas.getContext('2d');
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, canvas.width, canvas.height);

        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }

    function takePicture (){
        var context = canvas.getContext('2d');
        if (width && height) {
            canvas.width = width;
            canvas.height = height;
            context.drawImage(video, 0, 0, width, height);

            var data = canvas.toDataURL('image/png');
            photo.setAttribute('src', data);
        } else {
            clearPhoto();
        }
    }
})