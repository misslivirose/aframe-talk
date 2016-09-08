
        // Register components
        AFRAME.registerComponent('click-hide-start', {
            init: function () {
            this.el.addEventListener('click', function () {
                var start = this.parentElement;
                start.setAttribute('visible', false);
            });
        }
    });
    // Show various sections of the scene
        AFRAME.registerComponent('show-webvr', {
            init: function () {
            this.el.addEventListener('click', function () {
                var webvr = document.getElementById("webvr");
                webvr.setAttribute('visible', true);
            });
        }
    });

     AFRAME.registerComponent('show-video', {
            init: function () {
            this.el.addEventListener('click', function () {
                var video = document.getElementById("video");
                video.setAttribute('visible', true);
                var finalText = document.getElementById("close");
                finalText.setAttribute('visible', true);
            });
        }
    });

        AFRAME.registerComponent('click-show-hide', {
        init: function(){
            this.el.addEventListener('click', function (){
                var start = this.parentElement;
                var console = document.getElementById("code");
                console.setAttribute('visible', true);
                start.setAttribute('visible', false);
            })
        }
    });
    // Show text when a parent object is clicked
      AFRAME.registerComponent('click-show-text', {
            init: function () {
            this.el.addEventListener('click', function () {
                var text = this.children[0];
                text.setAttribute('visible', true);
            });
        }
    });

    // Start playing the video
    AFRAME.registerComponent('play-video', {
            init: function () {
            this.el.addEventListener('click', function () {
                var video = document.getElementById("gearvrvid")
                video.play();
            });
        }
    });

    // swap between the sky box options
    AFRAME.registerComponent('click-change-sky', {
            init: function () {
            this.el.addEventListener('click', function () {
                var skybox = document.getElementById("defaultsky");
                var otherSkybox = document.getElementById("360sky");
                var stage = document.getElementById("stage");
                var isVisible = stage.getAttribute("visible");
                if(isVisible == true)
                {
                     skybox.setAttribute('visible', false);
                     otherSkybox.setAttribute('visible', true);
                     stage.setAttribute('visible', false);
                     document.getElementById("whyvrtext").setAttribute('visible', false);
                     document.getElementById("whyvrbox").setAttribute('visible', false);


                }
                else
                {
                    skybox.setAttribute("visible", true);
                    otherSkybox.setAttribute('visible', false);
                    stage.setAttribute('visible', true);
                     document.getElementById("whyvrtext").setAttribute('visible', true);
                     document.getElementById("whyvrbox").setAttribute('visible', true);
                }
         
            });
        }
    });