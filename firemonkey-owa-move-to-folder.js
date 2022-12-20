// ==UserScript==
// @name       OWA - Move to Folder
// @match				https://outlook.office.com/*
// @version          1.1
// @require       jquery3
// ==/UserScript==


(function() {
    //'use strict';

    document.addEventListener('keydown', function(e) {
        // pressed alt+g
        if ((e.key === 'M') || (e.key === 'm')) {
            document.getElementsByName("Move to")[0].click();
        }

      	if ((e.key === 'S') || (e.key === 's')) {
          	document.getElementsByName("Sweep")[0].click();
        }

      	if ((e.key === 'U') || (e.key === 'u')) {
          document.querySelector('[title="Undo"]').click();
        }

      if (e.key === 'z') {
        console.log('z');
        document.getElementsByClassName("ms-Button fkGnq")[0].click();
      }

      	if (e.key === 'j') {
          e.preventDefault();
          console.log('J pressed');
          //document.dispatchEvent(new KeyboardEvent('keydown', {'keyCode': 40}));
          //var eventObj = document.createEvent("Events");
          //eventObj.initEvent("keydown", true, true);
          //eventObj.which = 40;
          //document.dispatchEvent(eventObj);

          var e = jQuery.Event("keydown");
e.which = 77; // # Some key code value
e.keyCode = 77;
$(document).trigger(e);

        }
    }, false);

})();
