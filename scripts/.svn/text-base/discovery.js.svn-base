  var it = 0;
        function discovery(){
            var status = document.getElementById("camStatus");
                status.innerHTML = "Finding Cameras...";            
            $.get("/discovery", function(data){     
                var camBox = document.getElementById("cameras");
                if(data.length !== camBox.length){
                for(var i = 0; i < data.length; i++){                    
                    var currentCam = data[i];                    
                    var cam = document.createElement("option");
                    cam.textContent = currentCam;
                    cam.value = currentCam;                    
                    camBox.appendChild(cam);
                }                
            }
            status.innerHTML = "Found "+camBox.length+ " Cameras";                
            })            
        }