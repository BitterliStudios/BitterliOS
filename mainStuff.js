function consoleLog() {
    let chars = [
        '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '<br>',
                        '&nbsp;', '&nbsp;', 'BitterliOS Command Line', '<br>',
                        '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', 'Version 1.0', '<br>',
                        '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '<br>', '<br>',
        'C', ':', '/', 'I', 'N', 'I', 'T', '.', 'E', 'X', 'E', '<br>', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '-', '=', '<br>', 'PRESS C TO START'];
        
    var i = 0;
    var myVar = setInterval(paste(), 50);
    
    
    function paste(chars) {
        var x = document.getElementById("console").textContent; 
        x += chars[i];
        document.getElementById("console").innerHTML = x;
        i++;
    }
}

function initialize() {
    //open the none theme on load.
    var cssId = 'theme';
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'http://bitterli.us/os/themes/none.css';
    link.media = 'all';
    head.appendChild(link);
    
}

/* Written by www.w3schools.com
 *
 * I have no idea how this works.
 *
 */
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  var name = "" + elmnt.id + "Header";
  
  if (document.getElementById(name)) {
    /* if present, the header is where you move the DIV from:*/
    //alert("here");
    document.getElementById(name).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var toolbarTabNames = ["BitterliOS Center"];
var toolbarTabIcons = ["http://bitterli.us/os/win98png/channels-2.png"];
var toolbarTabTypes = ["Control Center"];

function addToolBarTab(name, icons, type) {
    var index = toolbarTabTypes.indexOf(type);
    if (index == -1) {
        toolbarTabNames.push(name);
        toolbarTabIcons.push(icons);
        toolbarTabTypes.push(type);
    } else {
        toolbarTabNames[index] = name;
    }
    
    updateToolBarTab();
    
}

function removeToolBarTab(type) {
    //alert("type: " + type)
    var index = toolbarTabTypes.indexOf(type);
    
    if (index >= 0) {
        delete toolbarTabNames[index];
        delete toolbarTabIcons[index];
        delete toolbarTabTypes[index];
        
        var filter1 = toolbarTabNames.filter(function(x) {
           return x !== undefined;
        });
        toolbarTabNames = filter1;
        
        var filter2 = toolbarTabIcons.filter(function(x) {
           return x !== undefined;
        });
        toolbarTabIcons = filter2;
        
        var filter3 = toolbarTabTypes.filter(function(x) {
           return x !== undefined;
        });
        toolbarTabTypes = filter3;
        
        updateToolBarTab();
    } else {
        alert("error while removing: " + name + "(" + index + ") -- " + toolbarTabNames);
    }
    
}

function hideAllTabs() {
    var x1 = document.getElementById("window1");
    x1.style.display = "none";
    var x2 = document.getElementById("window2");
    x2.style.display = "none";
    var x3 = document.getElementById("window3");
    x3.style.display = "none";
    var x4 = document.getElementById("window4");
    x4.style.display = "none";
    var x5 = document.getElementById("window5");
    x5.style.display = "none";
    var x6 = document.getElementById("window6");
    x6.style.display = "none";
}

function updateToolBarTab() {
    
    hideAllTabs();
    
    //alert(toolbarTabNames.length);
    
    var i;
    
        for (i = 0; i < toolbarTabNames.length; i++) {
            if (i == 0) {
                document.getElementById("window1Name").innerHTML = toolbarTabNames[0];
                document.getElementById('window1Icon').src = toolbarTabIcons[0];
                x = document.getElementById("window1");
                x.style.display = "block";
            } else if (i == 1) {
                document.getElementById("window2Name").innerHTML = toolbarTabNames[1];
                document.getElementById('window2Icon').src = toolbarTabIcons[1];
                x = document.getElementById("window2");
                x.style.display = "block";
            } else if (i == 2) {
                document.getElementById("window3Name").innerHTML = toolbarTabNames[2];
                document.getElementById('window3Icon').src = toolbarTabIcons[2];
                x = document.getElementById("window3");
                x.style.display = "block";
            } else if (i == 3) {
                document.getElementById("window4Name").innerHTML = toolbarTabNames[3];
                document.getElementById('window4Icon').src = toolbarTabIcons[3];
                x = document.getElementById("window4");
                x.style.display = "block";
            } else if (i == 4) {
                document.getElementById("window5Name").innerHTML = toolbarTabNames[4];
                document.getElementById('window5Icon').src = toolbarTabIcons[4];
                x = document.getElementById("window5");
                x.style.display = "block";
            } else if (i == 5) {
                document.getElementById("window6Name").innerHTML = toolbarTabNames[5];
                document.getElementById('window6Icon').src = toolbarTabIcons[5];
                x = document.getElementById("window6");
                x.style.display = "block";
            }
        }
}

var startMenuActive = false;
var firstTimeA = true;
var firstTimeV = true;
var firstTimeF = true;
var firstTimePV = true;
var firstTimeDP = true;

//I tried close but it didnt work so I named it bRUH
function bruh(i) {
    if (i == 1) {
        var x2 = document.getElementById("folder");
        x2.style.display = "none";
        if (!firstTimeF) {
            removeToolBarTab("Folder");
        } else {
            firstTimeF = false;
        }
    } else if (i == 10) {
        var x1 = document.getElementById("photoViewer");
        x1.style.display = "none";
        if (firstTimePV) {
            firstTimePV = false;
        } else {
            removeToolBarTab("Photo Viewer");
        }
    }
    // left overs
    else if (i == 20) {
        var x4 = document.getElementById("audioPlayer");
        x4.style.display = "none";
        if (firstTimeA) {
            firstTimeA = false;
        } else {
            audioControls(2);
            removeToolBarTab("Audio Player");
        }
    } else if (i == 30) {
        var x5 = document.getElementById("videoPlayer");
            x5.style.display = "none";
        if (firstTimeV) {
            firstTimeV = false;
        } else {
            videoControls(2);
            removeToolBarTab("Video Player");
        }
    } else if (i == 40) {
        var x40 = document.getElementById("displayProperties");
        x40.style.display = "none";
        if (firstTimeDP) {
            firstTimeDP = false;
        } else {
            removeToolBarTab("Display Properties");
        }
    }
}

function fileOpen(i) {
    //1 - Meme Folder
    //2 - Demo Projects Folder
    //10 - mcj.jpg
    //11 - spoonge.png
    //20 - sponge remix.mp3
    //30 - mac tonight.mp4
    if (i == 1) {
        document.getElementById("folderName").innerHTML = "Memes";
        document.getElementById("folderAddress").innerHTML = "C:\\BitterliOS\\Memes";
        document.getElementById("folderNameBig").innerHTML = "Memes";
        document.getElementById("folderDesc").innerHTML = "All the memes you could imagine.";
        
        var inject1 = "<button type=\"button\" class=\"folderbutton\" onclick=\"fileOpen(10)\" style=\"cursor: url('http://bitterli.us/os/cursor/w98normal.cur'), default;\"><center>\
                        <img src=\"http://bitterli.us/os/win98png/camera3-2.png\" width=\"32px\" height=\"32px\"><br>\
                        mcj_garfield<br>.jpg\
                    </center></button>\
                    <button type=\"button\" class=\"folderbutton\" onclick=\"fileOpen(11)\" style=\"cursor: url('http://bitterli.us/os/cursor/w98normal.cur'), default;\"><center>\
                        <img src=\"http://bitterli.us/os/win98png/camera3-2.png\" width=\"32px\" height=\"32px\"><br>\
                        spoonge.png<br>&nbsp;\
                    </center></button>\
                    <button type=\"button\" class=\"folderbutton\" onclick=\"fileOpen(12)\" style=\"cursor: url('http://bitterli.us/os/cursor/w98normal.cur'), default;\"><center>\
                        <img src=\"http://bitterli.us/os/win98png/camera3-2.png\" width=\"32px\" height=\"32px\"><br>\
                        spoonge-color.png\
                    </center></button>\
                    <button type=\"button\" class=\"folderbutton\" onclick=\"fileOpen(13)\" style=\"cursor: url('http://bitterli.us/os/cursor/w98normal.cur'), default;\"><center>\
                        <img src=\"http://bitterli.us/os/win98png/camera3-2.png\" width=\"32px\" height=\"32px\"><br>\
                        peter-eat.png\
                    </center></button>\
                    <button type=\"button\" class=\"folderbutton\" onclick=\"fileOpen(14)\" style=\"cursor: url('http://bitterli.us/os/cursor/w98normal.cur'), default;\"><center>\
                        <img src=\"http://bitterli.us/os/win98png/camera3-2.png\" width=\"32px\" height=\"32px\"><br>\
                        homer-eat.png\
                    </center></button>\
                    <button type=\"button\" class=\"folderbutton\" onclick=\"fileOpen(15)\" style=\"cursor: url('http://bitterli.us/os/cursor/w98normal.cur'), default;\"><center>\
                        <img src=\"http://bitterli.us/os/win98png/camera3-2.png\" width=\"32px\" height=\"32px\"><br>\
                        bort.png<br>&nbsp;\
                    </center></button>\
                    <button type=\"button\" class=\"folderbutton\" onclick=\"fileOpen(16)\" style=\"cursor: url('http://bitterli.us/os/cursor/w98normal.cur'), default;\"><center>\
                        <img src=\"http://bitterli.us/os/win98png/camera3-2.png\" width=\"32px\" height=\"32px\"><br>\
                        BITCH.png<br>&nbsp;\
                    </center></button>\
                    <button type=\"button\" class=\"folderbutton\" onclick=\"fileOpen(17)\" style=\"cursor: url('http://bitterli.us/os/cursor/w98normal.cur'), default;\"><center>\
                        <img src=\"http://bitterli.us/os/win98png/camera3-2.png\" width=\"32px\" height=\"32px\"><br>\
                        bruh-sponge.png\
                    </center></button>\
                    <button type=\"button\" class=\"folderbutton\" onclick=\"fileOpen(18)\" style=\"cursor: url('http://bitterli.us/os/cursor/w98normal.cur'), default;\"><center>\
                        <img src=\"http://bitterli.us/os/win98png/camera3-2.png\" width=\"32px\" height=\"32px\"><br>\
                        Sqoodword<br>.png\
                    </center></button>\
                    <button type=\"button\" class=\"folderbutton\" onclick=\"fileOpen(19)\" style=\"cursor: url('http://bitterli.us/os/cursor/w98normal.cur'), default;\"><center>\
                        <img src=\"http://bitterli.us/os/win98png/camera3-2.png\" width=\"32px\" height=\"32px\"><br>\
                        YO_POGO<br>.png\
                    </center></button>";
        document.getElementById("folderContents").innerHTML = inject1;
        
        var x1 = document.getElementById("folder");
        x1.style.display = "block";
        
        addToolBarTab("Memes", "http://bitterli.us/os/win98png/directory_open_cool-4.png", "Folder");
        
    } else if (i == 2) {
        document.getElementById("folderName").innerHTML = "Demo Projects";
        document.getElementById("folderAddress").innerHTML = "C:\\BitterliOS\\Demo Projects";
        document.getElementById("folderNameBig").innerHTML = "Demo Projects";
        document.getElementById("folderDesc").innerHTML = "A few of my music tracks.";
        
        var inject2 = "<button type=\"button\" class=\"folderbutton\" onclick=\"fileOpen(20)\" style=\"cursor: url('http://bitterli.us/os/cursor/w98normal.cur'), default;\"><center>\
                        <img src=\"http://bitterli.us/os/win98png/midi_bl-2.png\" width=\"32px\" height=\"32px\"><br>\
                        spongebob<br>remix.mp3\
                    </center></button>\
                    <button type=\"button\" class=\"folderbutton\" onclick=\"fileOpen(30)\" style=\"cursor: url('http://bitterli.us/os/cursor/w98normal.cur'), default;\"><center>\
                        <img src=\"http://bitterli.us/os/win98png/video_-2.png\" width=\"32px\" height=\"32px\"><br>\
                        mac<br>tonight.mp4\
                    </center></button>";
        document.getElementById("folderContents").innerHTML = inject2;
        
        var x2 = document.getElementById("folder");
        x2.style.display = "block";
        
        addToolBarTab("Demo Projects", "http://bitterli.us/os/win98png/directory_open_cool-4.png", "Folder");
    } else if (i == 10) {
        document.getElementById("photoName").innerHTML = "mcj_garfield.jpg";
        document.getElementById("photoContent").innerHTML = "<img src=\"http://bitterli.us/os/memes/mcj_garfield.jpg\" width=\"440\" height=\"456\">";
        var x10 = document.getElementById("photoViewer");
        x10.style.display = "block";
        addToolBarTab("mcj_garfield.jpg", "http://bitterli.us/os/win98png/camera3-2.png", "Photo Viewer");
        
    } else if (i == 11) {
        document.getElementById("photoName").innerHTML = "spoonge.png (ORIGINAL ART)";
        document.getElementById("photoContent").innerHTML = "<img src=\"http://bitterli.us/os/memes/spoonge.png\" width=\"575\" height=\"350\">";
        var x11 = document.getElementById("photoViewer");
        x11.style.display = "block";
        addToolBarTab("spoonge.png", "http://bitterli.us/os/win98png/camera3-2.png", "Photo Viewer");
        
    } else if (i == 12) {
        document.getElementById("photoName").innerHTML = "spoonge-color.png (Colored by Momo)";
        document.getElementById("photoContent").innerHTML = "<img src=\"http://bitterli.us/os/memes/spoonge-color.png\" width=\"575\" height=\"350\">";
        var x12 = document.getElementById("photoViewer");
        x12.style.display = "block";
        addToolBarTab("spoonge-color.png", "http://bitterli.us/os/win98png/camera3-2.png", "Photo Viewer");
        
    } else if (i == 13) {
        document.getElementById("photoName").innerHTML = "peter-eats.png (by Momo)";
        document.getElementById("photoContent").innerHTML = "<img src=\"http://bitterli.us/os/memes/peter-eats.png\" width=\"460\" height=\"460\">";
        var x13 = document.getElementById("photoViewer");
        x13.style.display = "block";
        addToolBarTab("peter-eats.png", "http://bitterli.us/os/win98png/camera3-2.png", "Photo Viewer");
        
    } else if (i == 14) {
        document.getElementById("photoName").innerHTML = "homer-eats.png (by Momo)";
        document.getElementById("photoContent").innerHTML = "<img src=\"http://bitterli.us/os/memes/homer-eats.png\" width=\"460\" height=\"460\">";
        var x14 = document.getElementById("photoViewer");
        x14.style.display = "block";
        addToolBarTab("homer-eats.png", "http://bitterli.us/os/win98png/camera3-2.png", "Photo Viewer");
        
    } else if (i == 15) {
        document.getElementById("photoName").innerHTML = "bort.png (by Momo)";
        document.getElementById("photoContent").innerHTML = "<img src=\"http://bitterli.us/os/memes/bort.png\" width=\"460\" height=\"460\">";
        var x15 = document.getElementById("photoViewer");
        x15.style.display = "block";
        addToolBarTab("bort.png", "http://bitterli.us/os/win98png/camera3-2.png", "Photo Viewer");
        
    } else if (i == 16) {
        document.getElementById("photoName").innerHTML = "BITCH.png (by Momo)";
        document.getElementById("photoContent").innerHTML = "<img src=\"http://bitterli.us/os/memes/BITCH.png\" width=\"460\" height=\"460\">";
        var x16 = document.getElementById("photoViewer");
        x16.style.display = "block";
        addToolBarTab("BITCH.png", "http://bitterli.us/os/win98png/camera3-2.png", "Photo Viewer");
        
    } else if (i == 17) {
        document.getElementById("photoName").innerHTML = "bruh-sponge.png (by Momo)";
        document.getElementById("photoContent").innerHTML = "<img src=\"http://bitterli.us/os/memes/bruh-sponge.png\" width=\"560\" height=\"460\">";
        var x17 = document.getElementById("photoViewer");
        x17.style.display = "block";
        addToolBarTab("bruh-sponge.png", "http://bitterli.us/os/win98png/camera3-2.png", "Photo Viewer");
        
    } else if (i == 18) {
        document.getElementById("photoName").innerHTML = "Sqoodword.png (by Momo)";
        document.getElementById("photoContent").innerHTML = "<img src=\"http://bitterli.us/os/memes/Sqoodword.png\" width=\"479\" height=\"460\">";
        var x18 = document.getElementById("photoViewer");
        x18.style.display = "block";
        addToolBarTab("Sqoodword.png", "http://bitterli.us/os/win98png/camera3-2.png", "Photo Viewer");
        
    } else if (i == 19) {
        document.getElementById("photoName").innerHTML = "YO_POGO.png (by Momo)";
        document.getElementById("photoContent").innerHTML = "<img src=\"http://bitterli.us/os/memes/YO_POGO.png\" width=\"346\" height=\"460\">";
        var x19 = document.getElementById("photoViewer");
        x19.style.display = "block";
        addToolBarTab("YO_POGO.png", "http://bitterli.us/os/win98png/camera3-2.png", "Photo Viewer");
        
    } else if (i == 20) {
        var inject20 = "<source src=\"http://bitterli.us/os/demo%20projects/sponge.ogg\" type=\"audio/ogg\">\
        <source src=\"http://bitterli.us/os/demo%20projects/sponge.mp3\" type=\"audio/mpeg\">\
        Ironically, your browser doesn't support this audio swag.";
        document.getElementById("audioFile").innerHTML = inject20;
        
        document.getElementById("audioFileName").innerHTML = "spongebob remix.mp3 ";
        document.getElementById("audioShow").innerHTML = "Bitterli's Demo Songs";
        document.getElementById("audioClip").innerHTML = "Imagination";
        document.getElementById("audioAuthor").innerHTML = "Bitterli";
        document.getElementById("audioCopyright").innerHTML = "(C) 2019 BitterliStudios";
        
        var x20 = document.getElementById("audioPlayer");
        x20.style.display = "block";
        addToolBarTab("sponge.mp3", "http://bitterli.us/os/win98png/media_player-0.png", "Audio Player");
        
    } else if (i == 30) {
        var inject30 = "<source src=\"http://bitterli.us/os/demo%20projects/mac%20tonight.ogg\" type=\"video/ogg\">\
                    Your browser does not support HTML video.";
        document.getElementById("videoFile").innerHTML = inject30;
        
        document.getElementById("videoFileName").innerHTML = "mac tonight.mp4 ";
        document.getElementById("videoShow").innerHTML = "Bitterli's Demo Songs";
        document.getElementById("videoClip").innerHTML = "Make it a Mac Tonight!";
        document.getElementById("videoAuthor").innerHTML = "Bitterli";
        document.getElementById("videoCopyright").innerHTML = "(C) 2019 BitterliStudios";
        
        var x30 = document.getElementById("videoPlayer");
        x30.style.display = "block";
        addToolBarTab("mac tonight.mp4", "http://bitterli.us/os/win98png/media_player-0.png", "Video Player");
    }
}

function audioControls(i) {
    var x = document.getElementById("audioFile"); 
    if (i == 0) {
        x.pause();
    } else if (i == 1) {
        x.play();
    } else if (i == 2) {
        x.pause();
        x.currentTime = 0;
    }
}

function videoControls(i) {
    var x = document.getElementById("videoFile"); 
    if (i == 0) {
        x.pause();
    } else if (i == 1) {
        x.play();
    } else if (i == 2) {
        x.pause();
        x.currentTime = 0;
    }
}

function audioTiming() {
    
    var audioSlider = document.getElementById("audioSlider");
    var audioFile = document.getElementById("audioFile");
    
    
    var timer = setInterval(function() {
        audioSlider.value = (audioFile.currentTime * 100) / audioFile.duration;
        var audioctMinutes = Math.floor(audioFile.currentTime / 60);
        var audioctSeconds = Math.floor(audioFile.currentTime - (audioctMinutes * 60));
        if (audioctSeconds < 10) {
            audioctSeconds = "0" + audioctSeconds;
        }
        
        var injectaudioct = audioctMinutes + ":" + audioctSeconds;
        document.getElementById("audioPosition").innerHTML = injectaudioct;
        
        audioSlider.value = (audioFile.currentTime * 100) / audioFile.duration;
        
        var audiotMinutes = Math.floor(audioFile.duration / 60);
        var audiotSeconds = Math.floor(audioFile.duration - (audiotMinutes * 60));
        if (audiotSeconds < 10) {
            audiotSeconds = "0" + audiotSeconds;
        }
        
        var injectaudiot = audiotMinutes + ":" + audiotSeconds;
        document.getElementById("audioTotal").innerHTML = injectaudiot;
    }, 100);

    audioSlider.oninput = function() {
        audioFile.currentTime = (audioSlider.value / 100) * audioFile.duration;
    }
}

function videoTiming() {
    
    var videoSlider = document.getElementById("videoSlider");
    var videoFile = document.getElementById("videoFile");
    
    
    var timer = setInterval(function() {
        videoSlider.value = (videoFile.currentTime * 100) / videoFile.duration;
        var videoctMinutes = Math.floor(videoFile.currentTime / 60);
        var videoctSeconds = Math.floor(videoFile.currentTime - (videoctMinutes * 60));
        if (videoctSeconds < 10) {
            videoctSeconds = "0" + videoctSeconds;
        }
        
        var injectvideoct = videoctMinutes + ":" + videoctSeconds;
        document.getElementById("videoTime").innerHTML = injectvideoct;
        
        videoSlider.value = (videoFile.currentTime * 100) / videoFile.duration;
        
        var videotMinutes = Math.floor(videoFile.duration / 60);
        var videotSeconds = Math.floor(videoFile.duration - (videotMinutes * 60));
        if (videotSeconds < 10) {
            videotSeconds = "0" + videotSeconds;
        }
        
        var injectvideot = videotMinutes + ":" + videotSeconds;
        document.getElementById("videoTotal").innerHTML = injectvideot;
    }, 100);

    videoSlider.oninput = function() {
        //alert("here");
        videoFile.currentTime = (videoSlider.value / 100) * videoFile.duration;
    }
}

function windowState(i) {
    if (i == 1) {
        removeToolBarTab("Control Center");
        var xf = document.getElementById("window");
        xf.style.display = "none";
    } else {
        windowHome();
        addToolBarTab("BitterliOS Center", "http://bitterli.us/os/win98png/channels-2.png", "Control Center");
        var xt = document.getElementById("window");
        xt.style.display = "block";
    }
}

function windowHome() {
    var inject = "\
<font size=\"8\">BitterliStudios - Welcome Screen</font><br>\
    Greetings, and welcome to BitterliOS. On the desktop you will find various pages, files and links of mine. Feel free to explore!\
    <div class=\"windowSocails\">\
        <font style=\"position: relative; bottom: 2px;\">\
            <center>\
                <font color=\"#00000\" size=\"5\" style=\"position: relative; bottom: 4px;\">|</font>\
                <button type=\"button\" class=\"deskbutton\" onclick=\"yt()\" style=\"cursor: url('http://bitterli.us/os/cursor/w98hand.cur'), pointer;\">\
                    <img src=\"http://bitterli.us/os/ytlogo.png\" width=\"20px\" height=\"20px\">\
                </button>\
                <font color=\"#00000\" size=\"5\" style=\"position: relative; bottom: 4px;\">|</font>\
                <button type=\"button\" class=\"deskbutton\" onclick=\"twitter()\" style=\"cursor: url('http://bitterli.us/os/cursor/w98hand.cur'), pointer;\">\
                    <img src=\"http://bitterli.us/os/twitterlogo.png\" width=\"20px\" height=\"20px\">\
                </button>\
                <font color=\"#00000\" size=\"5\" style=\"position: relative; bottom: 4px;\">|</font>\
                <button type=\"button\" class=\"deskbutton\" onclick=\"twitch()\" style=\"cursor: url('http://bitterli.us/os/cursor/w98hand.cur'), pointer;\">\
                    <img src=\"http://bitterli.us/os/twitchlogo.png\" width=\"20px\" height=\"20px\">\
                </button>\
                <font color=\"#00000\" size=\"5\" style=\"position: relative; bottom: 4px;\">|</font>\
                <button type=\"button\" class=\"deskbutton\" onclick=\"soundcloud()\" style=\"cursor: url('http://bitterli.us/os/cursor/w98hand.cur'), pointer;\">\
                            <img src=\"http://bitterli.us/os/sclogo.png\" width=\"20px\" height=\"20px\">\
                </button>\
                <font color=\"#00000\" size=\"5\" style=\"position: relative; bottom: 4px;\">|</font>\
                <button type=\"button\" class=\"deskbutton\" onclick=\"spotify()\" style=\"cursor: url('http://bitterli.us/os/cursor/w98hand.cur'), pointer;\">\
                    <img src=\"http://bitterli.us/os/spotifylogo.png\" width=\"20px\" height=\"20px\">\
                </button>\
                <font color=\"#00000\" size=\"5\" style=\"position: relative; bottom: 4px;\">|</font>\
                <button type=\"button\" class=\"deskbutton\" onclick=\"bandcamp()\" style=\"cursor: url('http://bitterli.us/os/cursor/w98hand.cur'), pointer;\">\
                    <img src=\"http://bitterli.us/os/bclogo.png\" width=\"20px\" height=\"20px\">\
                </button>\
                <font color=\"#00000\" size=\"5\" style=\"position: relative; bottom: 4px;\">|</font>\
            </center>\
        </font>\
    </div>\
    <br>\
    <div class=\"news\">\
        <center><font size=\"6\" color=\"#7a00a6\">News and Updates:</font></center>\
        \
        <center><hr style=\"width: 100%; border: 2px solid DarkOrchid; border-radius: 2px;\"></center>\
            <div class=\"newsHeader\"><center>\
                <font size=\"6\" color=\"#B22222\">I REVAMPED MY WEBSITE</font><br>\
                -=[ December 1st, 2020 by Bitterli ]=-\
                <hr style=\"width: 25%; position: relative; left: 0px;\">\
                </center></div>\
                <font size=\"5\"><center>\
                    After many months of work, it's finally here! The long awaited BitterliOS. I have been working really hard to get this project to work and I hope you guys appreciate the new website design. With the new Windows 98 look, BitterliOS is now fully running and working. Explore the page, see what you can find. I will continuely update the page and add more stuff. See if you can find all the hidden stuff, too! Anyway, hope the facelift is pretty cool for you epic people out there!\
                </center></font>\
                \
                <center><hr style=\"width: 100%; border: 2px solid DarkOrchid; border-radius: 2px;\"></center>\
                <div class=\"newsHeader\"><center>\
                    <font size=\"6\" color=\"#008710\">NOW ON SPOTIFY!</font><br>\
                        -=[ August 1st, 2020 by Bitterli ]=-\
                    <hr style=\"width: 25%; position: relative; left: 0px;\">\
                </center></div>\
                <font size=\"5\"><center>\
                    My music is now streaming on SPOTIFY or any other streaming service<br>\
                    you may use! Click the links below to start jamming out to the beats!\
                </center></font>\
                <div style=\"padding: 10px;\">\
                    <div style=\"border-style: solid; border-width: 5px; border-color: rgb(221, 221, 221, 0.5); padding: 10px; background-color: rgb(20, 20, 20);\"><center>\
                        <div>\
                            <font size=\"5\" color=\"#fffff\">\"its samplable\" (2020)</font><br><br>\
                            <img src=\"http://bitterli.us/icons/its_samplable_100px.png\"><br><br>\
                            <a href=\"https://open.spotify.com/album/6wwCRzgPYPv97cwykIEk8G\"><button id=\"announceBtn\" style=\"cursor: url('http://bitterli.us/os/cursor/w98hand.cur'), pointer;\"><img src=\"http://bitterli.us/icons/spotify.png\" alt=\"Spotify\" height=\"50\" width=\"50\"></button></a>\
                            <a href=\"https://music.apple.com/us/album/its-samplable/1525446739\"><button id=\"announceBtn\" style=\"cursor: url('http://bitterli.us/os/cursor/w98hand.cur'), pointer;\"><img src=\"http://bitterli.us/icons/apple-music.png\" alt=\"Apple Music\" height=\"50\" width=\"50\"></button></a>\
                            <a href=\"https://play.google.com/store/music/album/Bitterli_Its_Samplable?id=Btcupinayhagxtgneqrmyx2xkyu\"><button id=\"announceBtn\" style=\"cursor: url('http://bitterli.us/os/cursor/w98hand.cur'), pointer;\"><img src=\"http://bitterli.us/icons/google-play-music.png\" alt=\"Google Play\" height=\"50\" width=\"50\"></button></a>\
                            <a href=\"https://soundcloud.com/bitterli/sets/its-samplable\"><button id=\"announceBtn\" style=\"cursor: url('http://bitterli.us/os/cursor/w98hand.cur'), pointer;\"><img src=\"http://bitterli.us/icons/soundcloud.png\" alt=\"Soundcloud\" height=\"50\" width=\"50\"></button></a>\
                            <a href=\"https://bitterli.bandcamp.com/album/its-samplable\"><button id=\"announceBtn\" style=\"cursor: url('http://bitterli.us/os/cursor/w98hand.cur'), pointer;\"><img src=\"http://bitterli.us/icons/bandcamp.png\" alt=\"Bandcamp\" height=\"50\" width=\"50\"></button></a>\
                        </div>\
                        <br>\
                            <div>\
                                <font size=\"5\" color=\"#fffff\">\"Television\" (2019)</font><br><br>\
                                <img src=\"http://bitterli.us/icons/television_100px.jpg\"><br><br>\
                                <a href=\"https://open.spotify.com/album/1JkpJabcTEVThlRZLQuUHo\"><button id=\"announceBtn\" style=\"cursor: url('http://bitterli.us/os/cursor/w98hand.cur'), pointer;\"><img src=\"http://bitterli.us/icons/spotify.png\" alt=\"Spotify\" height=\"50\" width=\"50\"></button></a>\
                                <a href=\"https://music.apple.com/us/album/television/1525000231\"><button id=\"announceBtn\" style=\"cursor: url('http://bitterli.us/os/cursor/w98hand.cur'), pointer;\"><img src=\"http://bitterli.us/icons/apple-music.png\" alt=\"Apple Music\" height=\"50\" width=\"50\"></button></a>\
                                <a href=\"https://play.google.com/store/music/album/Bitterli_Television?id=Bfuwohv6flaldd7ltj4e6za3vuu\"><button id=\"announceBtn\" style=\"cursor: url('http://bitterli.us/os/cursor/w98hand.cur'), pointer;\"><img src=\"http://bitterli.us/icons/google-play-music.png\" alt=\"Google Play\" height=\"50\" width=\"50\"></button></a>\
                                <a href=\"https://soundcloud.com/bitterli/sets/television\"><button id=\"announceBtn\" style=\"cursor: url('http://bitterli.us/os/cursor/w98hand.cur'), pointer;\"><img src=\"http://bitterli.us/icons/soundcloud.png\" alt=\"Soundcloud\" height=\"50\" width=\"50\"></button></a>\
                                <a href=\"https://bitterli.bandcamp.com/album/television\"><button id=\"announceBtn\" style=\"cursor: url('http://bitterli.us/os/cursor/w98hand.cur'), pointer;\"><img src=\"http://bitterli.us/icons/bandcamp.png\" alt=\"Bandcamp\" height=\"50\" width=\"50\"></button></a>\
                            </div>\
                            <br>\
                        </center></div>\
                    </div>\
                    <center><hr style=\"width: 100%; border: 2px solid DarkOrchid; border-radius: 2px;\"></center>\
                    <br>This is the end of the news updates. :)<br><br>\
                </div>";
    document.getElementById("windowTabContent").innerHTML = inject;
}

function windowAboutMe() {
    var inject = "<img style= \" float: right; top: 20px; position:relative; \" src= \"http://bitterli.us/os/400pxlogo.png\" height=\"200px\" width=\"200px\">\
    <font size=\"8\">About Bitterli</font><br>\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello, I am a small content creator with a passion for making music and YouTube videos.\
    I first started making YouTube videos as far back as 2010 but didn't go all in until 2013. I\
    started creating music in 2016. My works have been uploaded to Soundcloud, Spotify, YouTube, etc.<br>\
    <br>\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I mainly produce \"Twitch Funny Moments\" content on my YouTube page, vaporave-ish music on\
    my music media pages and I mostly stream Minecraft with my friends. I guess I code as a hobby, I\
    mean I made this page because I got tired of editing and I was sick. I am also a bit of a memer (HAHAHA)\
    and like to make MEMES when I AM BORED! YES MEMES! I have a folder on the desktop filled with memes I\
    have made which you can explore.<br>\
    <br>\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On Twitch, I try to stream every Saturday at 9PM EST. I may stream on Friday at 9PM EST but that isn't a guarantee. Follow me on Twitter\
    for updates on when I go live. I try to upload on YouTube once a month but sometimes I do more, sometimes I do less. Once again, Twitter is the place\
    where I will update on stuff like that. I tend to make music every now and again and plan on a complete album release every August of each year. You\
    can view and listen to my discography in the \"Listen\" application on the desktop.<br>\
    <br>\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have a few YouTube handles. My main one is \"BitterliStudios\" and my old one is now called \"BitterliClassic\". My channel where I upload\
    full stream vods is called \"BitterliLive\". My Twitter handle is @BitterliMine and my Twitch, Soundcloud, Spotify and Bandcamp handle is just \"Bitterli\".\
    My Instagram handle (which I don't use often, if at all) is \"BitterliStudios\". I do not have a Facebok profile.<br>\
    <br>\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you wish to contact me, press the \"Contact Me\" icon on the desktop or just email me with the email \"me@bitterli.us\" or\
    \"bitterliminecraft@gmail.com\". Ultimately, the best way to contact me is through Discord: \"Bitterli#4274\" or Twitter \"@BitterliMine\". I am more\
    active on there than anything.\
    ";
    document.getElementById("windowTabContent").innerHTML = inject;
}

function windowContactMe() {
    var inject = "<iframe class=\"windowContactForm\" src=\"https://docs.google.com/forms/d/e/1FAIpQLSe6zL8wIaSAkU_FoRPr7fU-kRGxYsfqpy0sfPXad23-LtwMWw/viewform?embedded=true\" width=\"950\" height=\"585\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\" style=\"font-family: \'VT323\', sans-serif; top: 7px;\">Loading…</iframe>";
    document.getElementById("windowTabContent").innerHTML = inject;
}

function windowInfo() {
    //Purple <font color=\"#a40083\">
    //Blue <font color=\"#0052a4\">
    //Red <font color=\"#c20d00\">
    var inject = "<img style= \" float: right; right: -40px; top: 20px; position:relative; \" src= \"http://bitterli.us/os/BitterliOS-400px.png\" height=\"200px\" width=\"200px\">\
    <font size=\"8\">Website information</font><br>\
    This website was created entirely from scratch. I got basically no help with the code.<br>\
    This page uses JavaScript and HTML magic. This is my first time really using JavaScript! :)<br>\
    <br>\
    <div class =\"changelog\">\
    <center><font size=\"5\">Current Website Version 0.4.5.5</font></center>\
    <center>Planned Implementations for next version (0.4.6.0):</center>\
    <ul>\
    <li>Add more demo projects.\
    </ul><br>\
    <center>Website changelog:</center>\
    <center>Key: Red = Error, Blue = Feature Implemented, Purple = Fixes, Minor Changes</center>\
    <ul>\
    <li><font color=\"#a40083\">0.4.5.5 - 07 October 2020 - Fixed audio slider glitches</font>\
    <li><font color=\"#0052a4\">0.4.5.0 - 07 October 2020 - Added media player sliders, correct time values in text area</font>\
    <li><font color=\"#a40083\">0.4.4.0 - 05 October 2020 - Made Operation Center a closeable window, added desk icon</font>\
    <li><font color=\"#a40083\">0.4.3.0 - 05 October 2020 - Edited Operation Center</font>\
    <li><font color=\"#0052a4\">0.4.3.0 - 04 October 2020 - Rewrote toolbar tabs, now supports all windows and in order</font>\
    <li><font color=\"#a40083\">0.4.2.3 - 02 October 2020 - Added pointer for Operation Center link buttons.</font>\
    <li><font color=\"#a40083\">0.4.2.2 - 02 October 2020 - Finished cursor updates.</font>\
    <li><font color=\"#0052a4\">0.4.2.1 - 02 October 2020 - Started custom cursor on page</font>\
    <li><font color=\"#0052a4\">0.4.2.0 - 02 October 2020 - Added theme (background) changer (no toolbar tab implementation)</font>\
    <li><font color=\"#a40083\">0.4.1.2 - 01 October 2020 - Updated information page logo</font>\
    <li><font color=\"#a40083\">0.4.1.1 - 01 October 2020 - Updated favicons to BitterliOS Logo</font>\
    <li><font color=\"#a40083\">0.4.1.0 - 01 October 2020 - Added more memes by Momo, proves that muli-line folders work</font>\
    <li><font color=\"#0052a4\">0.4.0.0 - 01 October 2020 - Added video player (window, controls, text, tab)</font>\
    <li><font color=\"#a40083\">0.3.9.9 - 30 September 2020 - Fixed toolbar active window bug</font>\
    <li><font color=\"#0052a4\">0.3.9.5 - 30 September 2020 - Added volume slider, flags for slider val of 0</font>\
    <li><font color=\"#0052a4\">0.3.9.0 - 30 September 2020 - Added volume button, window and mute function</font>\
    <li><font color=\"#0052a4\">0.3.8.0 - 30 September 2020 - Added toolbar tabs for photo and audio player</font>\
    <li><font color=\"#a40083\">0.3.7.5 - 30 September 2020 - Fixed issue with audio player still playing after close</font>\
    <li><font color=\"#0052a4\">0.3.7.0 - 29 September 2020 - Set My Computer to the Welcome Page</font>\
    <li><font color=\"#0052a4\">0.3.6.0 - 29 September 2020 - Implemented new code for the taskbar window tabs</font>\
    <li><font color=\"#c20d00\">0.3.5.0 - 29 September 2020 - Moved CSS back to index html, removed taskbar window</font>\
    <li><font color=\"#a40083\">0.3.4.0 - 29 September 2020 - Fully color coded the changelog, reformatted</font>\
    <li><font color=\"#c20d00\">0.3.3.0 - 29 September 2020 - Separated CSS code into separate file</font>\
    <li><font color=\"#0052a4\">0.3.2.0 - 29 September 2020 - Added Audio Player (basic level)\
    <li>0.3.1.0 - 28 September 2020 - Added demo music folder, music icons\
    <li>0.3.0.0 - 28 September 2020 - Added memes folder, photoviewer and closing functions\
    <li>0.2.9.0 - 28 September 2020 - Added News and Updates to home screen\</font>\
    <li><font color=\"#a40083\">0.2.8.5 - 28 September 2020 - Fixed center window to proper sizes\</font>\
    <li><font color=\"#0052a4\">0.2.8.0 - 28 September 2020 - Added information on the About Me text\</font>\
    <li><font color=\"#a40083\">0.2.7.0 - 28 September 2020 - Updated Change Log to scroll but have no visible scroll bar\
    <li>0.2.6.0 - 28 September 2020 - Changed Window Content to Div\</font>\
    <li><font color=\"#0052a4\">0.2.5.0 - 28 September 2020 - Added Change Log\</font>\
    <li><font color=\"#a40083\">0.2.4.0 - 28 September 2020 - Updated Start Menu, made it a div.\</font>\
    <li><font color=\"#0052a4\">0.2.3.0 - 28 September 2020 - Added Footer to Operation Window\</font>\
    <li><font color=\"#a40083\">0.2.2.0 - 28 September 2020 - Fixed Computer Clock Format\</font>\
    <li><font color=\"#0052a4\">0.2.1.0 - 28 September 2020 - Added Basic Clock\
    <li>0.2.0.0 - 28 September 2020 - Added Information Page\
    <li>0.1.9.0 - 27 September 2020 - Added toggle switch of active window to start menu\</font>\
    <li><font color=\"#a40083\">0.1.8.0 - 28 September 2020 - Removed Video Background\
    <li>0.1.7.0 - 27 September 2020 - Sizing Adjustments to Active Window\</font>\
    <li><font color=\"#c20d00\">0.1.6.0 - 27 September 2020 - Changed Background to Video</font>\
    <li><font color=\"#0052a4\">0.1.5.0 - 27 September 2020 - Added Icon to Operational Window\
    <li>0.1.4.0 - 27 September 2020 - Added Proper Taskbar Icons\
    <li>0.1.3.0 - 27 September 2020 - Added Taskbar window for Operation Center\
    <li>0.1.2.0 - 27 September 2020 - Added mini links and spacers\
    <li>0.1.1.0 - 27 September 2020 - Set up basic start menu\
    <li>0.1.0.0 - 27 September 2020 - Started initial design of the taskbar</font>\
    <li><font color=\"#a40083\">0.0.9.0 - 27 September 2020 - Shifted .link to second row\</font>\
    <li><font color=\"#0052a4\">0.0.8.0 - 27 September 2020 - Added Contact Me\
    <li>0.0.7.0 - 27 September 2020 - Added Social Links\
    <li>0.0.6.0 - 27 September 2020 - Added About Me Text\
    <li>0.0.5.0 - 27 September 2020 - Added Basic My Computer Window\
    <li>0.0.4.0 - 27 September 2020 - Set up basic opening window\
    <li>0.0.3.0 - 27 September 2020 - Repositioned Window and Icons\
    <li>0.0.2.0 - 27 September 2020 - Applied basic button for icons\
    <li>0.0.1.0 - 27 September 2020 - Initial Prototype</font>\
    </ul>\
    </div>\
    ";
    document.getElementById("windowTabContent").innerHTML = inject;
}

function theme(i) {
    if (i == 0) {
        var oldlink = document.getElementsByTagName("link").item(0);
    
        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", "http://bitterli.us/os/themes/none.css");
    
        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
        currentBG = 0;
    } else if (i == 1) {
        var oldlink = document.getElementsByTagName("link").item(0);

        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", "http://bitterli.us/os/themes/Starfield.css");
    
        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
        currentBG = 1;
    } else if (i == 2) {
        var oldlink = document.getElementsByTagName("link").item(0);

        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", "http://bitterli.us/os/themes/clouds.css");
    
        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
        currentBG = 2;
    } else if (i == 3) {
        var oldlink = document.getElementsByTagName("link").item(0);

        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", "http://bitterli.us/os/themes/mall.css");
    
        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
        currentBG = 3;
    } else if (i == 4) {
        var oldlink = document.getElementsByTagName("link").item(0);

        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", "http://bitterli.us/os/themes/forest.css");
    
        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
        currentBG = 4;
    } else if (i == 5) {
        var oldlink = document.getElementsByTagName("link").item(0);

        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", "http://bitterli.us/os/themes/snowy-mountain.css");
    
        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
        currentBG = 5;
    } else if (i == 6) {
        var oldlink = document.getElementsByTagName("link").item(0);

        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", "http://bitterli.us/os/themes/stars.css");
    
        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
        currentBG = 6;
    } else {
        var x= document.getElementById("displayProperties");
        x.style.display = "block";
        addToolBarTab("Display Properties", "http://bitterli.us/os/win98png/themes-4.png", "Display Properties")
    }
}

var currentBG = 0;
var currentPreview = 0;

function background(i) {
    var inject = " ";
    
    if (i == 0) {
        inject = "<img src=\"http://bitterli.us/os/themes/noneBG.png\" width=\"152px\" height=\"112px\">";
        document.getElementById("previewBG").innerHTML = inject;
        currentPreview = 0;
    } else if (i == 1) {
        inject = "<img src=\"http://bitterli.us/os/themes/Starfield.png\" width=\"152px\" height=\"112px\">";
        document.getElementById("previewBG").innerHTML = inject;
        currentPreview = 1;
    } else if (i == 2) {
        inject = "<img src=\"http://bitterli.us/os/themes/clouds.jpg\" width=\"152px\" height=\"112px\">";
        document.getElementById("previewBG").innerHTML = inject;
        currentPreview = 2;
    } else if (i == 3) {
        inject = "<img src=\"http://bitterli.us/os/themes/mall.png\" width=\"152px\" height=\"112px\">";
        document.getElementById("previewBG").innerHTML = inject;
        currentPreview = 3;
    } else if (i == 4) {
        inject = "<img src=\"http://bitterli.us/os/themes/forest.jpg\" width=\"152px\" height=\"112px\">";
        document.getElementById("previewBG").innerHTML = inject;
        currentPreview = 4;
    } else if (i == 5) {
        inject = "<img src=\"http://bitterli.us/os/themes/snowy-mountain.jpg\" width=\"152px\" height=\"112px\">";
        document.getElementById("previewBG").innerHTML = inject;
        currentPreview = 5;
    } else if (i == 6) {
        inject = "<img src=\"http://bitterli.us/os/themes/stars.png\" width=\"152px\" height=\"112px\">";
        document.getElementById("previewBG").innerHTML = inject;
        currentPreview = 6;
    }
}

function dpBottom(i) {
    if (i == 0) {
        //okay
        theme(currentPreview);
        bruh(40);
    } else if (i == 1) {
        //cancel
        bruh(40);
        background(currentBG);
    } else if (i == 2) {
        //apply
        theme(currentPreview)
    }
}

function yt() {
    window.open("https://youtube.com/BitterliStudios");
}

function twitter() {
    window.open("https://twitter.com/BitterliMine");
}

function twitch() {
    window.open("https://twitch.tv/bitterli");
}

function soundcloud() {
    window.open("https://soundcloud.com/bitterli");
}

function spotify() {
    window.open("https://open.spotify.com/artist/5EG3BNxwYeDiT32fTBpnEt?si=QALvHNXUTx28_sCGxk4Dyg");
}

function bandcamp() {
    window.open("https://bitterli.bandcamp.com/");
}

function start() {
    // none means no
    // block means show
    var x = document.getElementById("startBox");
    if (!startMenuActive) {
        x.style.display = "block";
        //taskbarWindow(0);
        startMenuActive = true;
    } else {
        x.style.display = "none";
        //taskbarWindow(1);
        startMenuActive = false;
    }
}

function hideStart() {
    var x = document.getElementById("startBox");
    x.style.display = "none";
}

function time() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    
    var seg = "AM";
    if (minutes < 10){
        minutes = "0" + minutes
    }
    
    if (hours == 12) {
        seg = "PM";
    } else if (hours == 0) {
        seg = "AM";
        hours = 12;
    } else if(hours > 11) {
        hours = hours - 12;
        seg = "PM";
    }
    
    var theTime = "" + hours + ":" + minutes + " " + seg;
    document.getElementById("time").innerHTML = theTime;
    setTimeout(time, 1000);
}

var vMenuOpen = true;
function volumeMenu() {
    if (vMenuOpen) {
        vMenuOpen = false;
        var x1 = document.getElementById("volumeMenu");
        x1.style.display = "none";
    } else {
        vMenuOpen = true;
        var x2 = document.getElementById("volumeMenu");
        x2.style.display = "block";
    }
}

var muted = false;
var volBeforeA;
var volBeforeV;
function muteAll() {
    if (!muted) {
        muted = true;
        document.getElementById("muteToggle").innerHTML = "<img src=\"http://bitterli.us/os/checkMarkTrue.png\" width=\"13px\" height=\"13px\">";
        document.getElementById("volumeToggle").innerHTML = "<img src=\"http://bitterli.us/os/volume-muted.png\" width=\"16px\" height=\"16px\">";
        var audio = document.getElementById("audioFile");
        volBeforeA = audio.volume;
        audio.volume = 0.0;
        var video = document.getElementById("videoFile");
        volBeforeV = video.volume;
        video.volume = 0.0;
    } else {
        muted = false;
        document.getElementById("muteToggle").innerHTML = "<img src=\"http://bitterli.us/os/checkMarkFalse.png\" width=\"13px\" height=\"13px\">";
        document.getElementById("volumeToggle").innerHTML = "<img src=\"http://bitterli.us/os/volume-playing.png\" width=\"16px\" height=\"16px\">";
        if (volBeforeA == 0 && volBeforeV == 0 ) {
            var audio = document.getElementById("audioFile");
            audio.volume = 0.1;
            var video = document.getElementById("videoFile");
            video.volume = 0.1;
        } else {
            var audio = document.getElementById("audioFile");
            audio.volume = volBeforeA;
            var video = document.getElementById("videoFile");
            video.volume = volBeforeV;
        }
    }
}