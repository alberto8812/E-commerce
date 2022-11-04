import React, { useEffect } from 'react'

const Chat = () => {

    useEffect(() => {
        
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"f85b2d36e1fc9607417a66233221af92","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            (window as any).kommunicate = m; m._globals = kommunicateSettings;
        })(document, (window as any).kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
 
    }, [])
    
  return (
    <div>
       
    </div>
  )
}

export default Chat