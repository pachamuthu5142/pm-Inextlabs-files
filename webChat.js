const botName = "Genie";
const baseUrl = "https://directline.botframework.com/v3/directline/tokens/";
const webChatIcon =
  "https://www.inextlabs.ai/webchat/inextlabs-demo/images/webChatIcon.jpg";
const brandColor = "#1f99c2";
const botAvatar =
  "https://www.inextlabs.ai/webchat/inextlabs-demo/images/webChatIcon.jpg";
const fontFamilyURL =
  "https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap";
const youtubeURL = "https://www.youtube.com/channel/UCJDvWr__3VODxszufzBUHcw";
const instagramURL = "https://www.instagram.com/inextlabs/";
const linkedInURL =
  "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHsCpx-FJHG8AAAAYQ3jPMYdRwt1juv-ZZm_eUNIATx42W4rFrHMaQ9UiU1UyHV1Z7l9bQ0e2iz5gCuQa2mxnRUH_2KHsJO7-7d1lDSfNUYWQsCOe4rO99ZklADOndwb8AqMIw=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Finextlabs";
const facebookURL = "https://www.facebook.com/iNextLabs";
const fontFamily = "Jost";
const floatingIconWelcomeBoxBackgroundColor = "#3888E5";
const floatingIconWelcomeBoxFontColor = "#FFFFFF";
const webChatContainerBackgroundColor = "#FFFFFF";
const webChatHeaderBackgroundColor = "#FFFFFF";
const webChatHeaderFontColor = "black";
const webChatBodyBackgroundColor = "#FFFFFF";
const webChatFooterBackgroundColor = "#FFFFFF";
const webChatFooterFontColor = "#909090";

const cookie_exp_days = 1;
const botUserId = "iNextBot";

const styles = `
  @import url(${fontFamilyURL});
  
    #inextlabs-floating-chat-icon {
        bottom: 22px;
        right: 20px;
        position: fixed;
        width: 140px;
        object-fit: contain;
        cursor: pointer;
        z-index: 999 !important;
    }

    #inextlabs-webchat-welcome-box{
        visibility: hidden;
    }

    #inextlabs-floating-chat-icon-welcome-box {
        font-family: ${fontFamily};
        display: block;
        position: absolute;
        bottom: 70px;
        right:135px;
        background-color: ${floatingIconWelcomeBoxBackgroundColor};
        padding: 15px;
        font-size:15px;
        color: ${floatingIconWelcomeBoxFontColor};
        border-radius: 5px;
        position: fixed;
        z-index: 999 !important;
    }

    #inextlabs-floating-chat-icon-welcome-box-triangle-right {
        display: block;
        position: absolute;
        bottom:100px;
        right: 125px;
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-left: 10px solid ${floatingIconWelcomeBoxBackgroundColor};
        border-bottom: 6px solid transparent;
        position: fixed;
        z-index:999;
    }

    #inextlabs-webchat-container {
        font-family: ${fontFamily};
        background-color: ${webChatContainerBackgroundColor} !important;
        font-size: 15px;
        display: none;
        position: fixed;
        height: 680px;
        width: 420px;
        bottom: 20px;
        right: 20px;
        box-shadow: 1px 1px 20px grey;
        z-index: 1000;
        border: 1px solid #eaebea;
        border-radius: 20px;
    }
    

    #inextlabs-webchat-header {
        background-color: ${webChatBodyBackgroundColor} !important;
        color: ${webChatHeaderFontColor};
        height: 10%;
        display: flex;
        justify-content: space-between;
        align-items: center !important;
        font-size: 20px;
        padding: 0px 10px;
        border-radius: 20px;
    }

    
    #inextlabs-webchat-header-botname{
        position: absolute;
        margin-top:7px;
        margin-left: 50px;
        font-size: 15px;
      
    }
    #inextlabs-webchat-header-botname span{
        font-weight: bold;
        margin-top:7px;
    }


    #inextlabs-webchat-header img{
        width: 50px;
        margin-top: 1px;
    }

    #inextlabs-webchat-body {
        font-family: ${fontFamily} !important;
        font-size: 13px;
        height: 83%;
        background-color: ${webChatBodyBackgroundColor};
        
    }
    }

    #inextlabs-webchat-body-welcome-form {
        display: none;
        padding: 20px;
        height: 100%;
    }

    #inextlabs-webchat-body-botframework-content {
        display: none;
        height: 100%;
    }

    .inextlabs-webchat-welcome-form-title {
        font-size: 25px;
        font-weight: bold;
        margin: 20px 0px;
    }

    .inextlabs-webchat-welcome-form-message {
        font-size: 16px;
        text-align: justify;
        font-weight: 300;
        margin: 20px 0px;
    }

    .inextlabs-webchat-welcome-form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    

    .inextlabs-webchat-welcome-form-item {
        display:flex;
        flex-direction: column;
        gap: 5px;
    }

    .inextlabs-webchat-welcome-form-item-textbox {
        font-family: Jost;
        border: 1px solid #c0c0c0;
        font-size: 15px;
        padding: 10px;
        
    }

    #inextlabs-webchat-welcome-form-item-button {
        color: #ffffff;
        background-color: #df760d;
        text-transform: uppercase;
        vertical-align: bottom;
        border: 0;
        box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%), 0 2px 10px 0 rgb(0 0 0 / 10%);
        font-weight: 500;
        padding: 0.625rem 1.5rem 0.5rem;
        font-size: .75rem;
        line-height: 2;
        border-radius: 0.3rem;
        display: block;
        width: 100%;
        cursor: pointer;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        font-family: Jost;
        font-size: 14px;
        // margin: 5px 0px 15px 0px;
        // letter-spacing: 1px;
    }

    #inextlabs-webchat-welcome-form-item-button:hover {
        color: #fff;
        background-color: #df760d;
        box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 10%);
    }

    #inextlabs-webchat-footer p{
        font-size: 13px;
        text-align: center;
        margin-top: -40px;
        color: #A6A6A6;
    }
    
    #inextlabs-webchat-footer span{
        color: #909090;
        font-weight: bolder;
   }


    //  #inextlabs-webchat-footer {
    //     // display: flex;
        // background-color: ${webChatFooterBackgroundColor};
        // color: ${webChatFooterFontColor};
        // height: 7%;
        // justify-content: space-around;
        // align-items: center;
        // font-size: 13px;
    // }

    // #inextlabs-webchat-footer span{
        // font-weight:bold;
    // }

    #inextlabs-webchat-footer-social-media{
        margin-left:300px;
        margin-top:27px;
    }
    #inextlabs-webchat-footer-social-media img{
        width:15px;
        margin-left:5px;
        opacity: 0.5;
        cursor: pointer;
    }
    #inextlabs-webchat-footer-social-media a img:hover{
        opacity:1.0;  
    }



`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.getElementsByTagName("head")[0].appendChild(styleSheet);

const styleOptions = {
  rootwidth: "100%",
  rootHeight: "100%",
  backgroundColor: "none",
  botAvatarImage: botAvatar,
  botAvatarBorderRadius: "50",
  botAvatarBorderColor: brandColor,
  bubbleBackground: "#edf7fc",
  botAvatarInitials: "",
  //   userAvatarInitials: "",
  //   userAvatarImage: "",
  bubbleMaxWidth: 600,
  hideUploadButton: true,
  sendBoxButtonColor: brandColor,
  bubbleFromUserBackground: brandColor,
  bubbleFromUserBorderRadius: 100,
  bubbleFromUserBorderColor: brandColor,
  bubbleFromUserTextColor: "#FFFFFF",
  emojiSet: true,
  bubbleBorderRadius: 20,
  suggestedActionBorderColor: brandColor,
  suggestedActionTextColor: "#000000",
  suggestedActionBackground: "#EEFBFF",
  suggestedActionBorderRadius: 50,
};

var webchatScript = document.createElement("script");
webchatScript.type = "text/javascript";
webchatScript.crossorigin = "anonymous";
webchatScript.async = true;
webchatScript.src =
  "https://cdn.botframework.com/botframework-webchat/4.14.1/webchat.js";
document.getElementsByTagName("head")[0].appendChild(webchatScript);

if (!window.jQuery) {
  var jQueryScript = document.createElement("script");
  jQueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
  jQueryScript.type = "text/javascript";
  jQueryScript.onload = function () {
    init();
  };
  document.getElementsByTagName("head")[0].appendChild(jQueryScript);
} else {
  init();
}

async function init() {
  $(document).ready(function () {
    var htmlContent = `<img id="inextlabs-floating-chat-icon" src="${webChatIcon}" />
            <div id="inextlabs-webchat-welcome-box">
                 <div id="inextlabs-floating-chat-icon-welcome-box">Hi! My name is ${botName}.<br />How can I help you today?</div><div id="inextlabs-floating-chat-icon-welcome-box-triangle-right"></div>
            </div>

            <div id="inextlabs-webchat-container">
                <div id="inextlabs-webchat-header">
                     <img src="https://media.istockphoto.com/vectors/-vector-id1010001882?k=20&m=1010001882&s=612x612&w=0&h=6ZqzWlYBD3bT2EqJolzC3xbIKVVy350qMQmmS6B-Wd4=" alt="">
                     <p id="inextlabs-webchat-header-botname"><span>Genie</span> <br> Win lifelong customers with iNextLabs</p>
                     <a href="javascript:;" /class="closeBtn"><img id="inextlabs-webchat-container-close" src="https://www.inextlabs.com/images/icons/close.png" width="20px"/></a>
                </div>

                <div id="inextlabs-webchat-body">
                    <div id="inextlabs-webchat-body-welcome-form">
            
                      <p class="inextlabs-webchat-welcome-form-title">Welcome to iNextLabs</p>
                      <p class="inextlabs-webchat-welcome-form-message">Hi there! My name is Genie. I am your virtual assistant. I can help you via chat. To start, please type your name and phone number, and I’ll be happy to assist you right away!</p>
                
                      <form id="form" class="inextlabs-webchat-welcome-form">
                          <div class="inextlabs-webchat-welcome-form-item">
                              <label for="name">Name</label>
                              <input class="inextlabs-webchat-welcome-form-item-textbox" type="text" id="name" name="name" required />
                          </div>
                          <div class="inextlabs-webchat-welcome-form-item">
                              <label for="phone_number">Phone Number</label>
                              <input class="inextlabs-webchat-welcome-form-item-textbox" type="text" id="phone_number" name="phone_number" />
                          </div>
                          <div>
                             <button id="inextlabs-webchat-welcome-form-item-button" type="button" id="openchat">Start
                              Conversation</button>
                          </div>
                        </form>
            
                    </div>

                    <div id="inextlabs-webchat-body-botframework-content">
                    </div>

                </div>

                <div id="inextlabs-webchat-footer">

                    <div id="inextlabs-webchat-footer-social-media">
                     <a href="${youtubeURL}" target="_blank"><img src="https://image.similarpng.com/very-thumbnail/2020/07/Youtube-logo-with--new-style-on-transparent-background-PNG.png" alt="" srcset=""></a>
                     <a href="${linkedInURL}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" srcset=""></a>
                     <a href="${instagramURL}" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png?20200512141346" alt="" srcset=""></a>
                     <a href="${facebookURL}" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="" srcset=""></a> 
                  </div>

                      <p>Powered by <span>iNextLabs</span></p>
              
                </div>
            </div>
        `;

    jQuery("body").append(htmlContent);

    jQuery("#inextlabs-floating-chat-icon").click(function () {
      jQuery("#inextlabs-webchat-container").show();
      jQuery("#inextlabs-floating-chat-icon").hide();
      jQuery("#inextlabs-floating-chat-icon-welcome-box").hide();
      jQuery("#inextlabs-floating-chat-icon-welcome-box-triangle-right").hide();

      if (localStorage.getItem("userdata") != null) {
        jQuery("#inextlabs-webchat-body-welcome-form").hide();
        jQuery("#inextlabs-webchat-body-botframework-content").show();
        // if (!chatInitiated) {
        //   chatInitiated = true;
        initChat();
        // }
      } else {
        jQuery("#inextlabs-webchat-body-welcome-form").show();
        jQuery("#inextlabs-webchat-body-botframework-content").hide();
      }
    });

    jQuery("#inextlabs-webchat-welcome-form-item-button").click(function () {
      chatInitiated = true;
      var form = document.querySelector("form");
      form.reportValidity();
      if (form.checkValidity()) {
        localStorage.setItem(
          "userdata",
          JSON.stringify({
            name: jQuery("#name").val(),
            phone_number: jQuery("#phone_number").val(),
            user_id: checkCookie().toString(),
          })
        );
        initChat();
        jQuery("#inextlabs-webchat-body-welcome-form").hide();
        jQuery("#inextlabs-webchat-body-botframework-content").show();
      }
    });

    jQuery("#inextlabs-webchat-container-close").click(function () {
      jQuery("#inextlabs-webchat-container").hide();
      jQuery("#inextlabs-floating-chat-icon").show();
      jQuery("#inextlabs-floating-chat-icon-welcome-box").show();
      jQuery("#inextlabs-floating-chat-icon-welcome-box-triangle-right").show();
    });
  });
}

function showdiv() {
  document.getElementById("inextlabs-webchat-welcome-box").style.visibility =
    "visible";
}
setTimeout("showdiv()", 3000);

async function initChat() {
  var userData = JSON.parse(localStorage.getItem("userdata"));
  const token = await getToken();
  const store = window.WebChat.createStore(
    {},
    ({ dispatch }) =>
      (next) =>
      (action) => {
        if (action.type === "DIRECT_LINE/CONNECT_FULFILLED") {
          dispatch({
            type: "WEB_CHAT/SEND_EVENT",
            payload: {
              name: "start-chat",
              value: {
                browser: "",
                ipAddress: "",
                location: "",
                phoneNumber: userData.phone_number,
              },
            },
          });
        }
        return next(action);
      }
  );

  window.WebChat.renderWebChat(
    {
      directLine: window.WebChat.createDirectLine({ token }),
      userID: userData.user_id,
      username: userData.name,
      store,
      locale: userData.phone_number,
      styleOptions,
    },
    document.getElementById("inextlabs-webchat-body-botframework-content")
  );

  document
    .querySelector("#inextlabs-webchat-body-botframework-content > *")
    .focus();
}

async function getToken() {
  let promise = new Promise(function (resolve, reject) {
    var token = null;
    if (
      localStorage &&
      localStorage.bearerToken &&
      localStorage.bearerToken != "null" &&
      localStorage.bearerToken != "undefined" &&
      localStorage.tokenExpiry
    ) {
      var tokenExpiryTime = new Date(localStorage.tokenExpiry);
      var currentTime = new Date();
      if (tokenExpiryTime < currentTime) {
        token = generateNewToken();
      } else {
        token = generateRefreshToken();
      }
    } else {
      token = generateNewToken();
    }
    resolve(token);
  });
  return promise;
}

async function generateNewToken() {
  var chatHeaders = new Headers();
  var requestOptions = {
    method: "POST",
    headers: chatHeaders,
    redirect: "follow",
  };
  var response = null;
  chatHeaders.set(
    "Authorization",
    "Bearer K58H2YuKdZQ.4kRxn9xRalmMCUJJ36bxPOhiDb-0kUb7WOeko1ioBj0" //Staging
  );
  response = await fetch(baseUrl + "generate", requestOptions);
  body = await response.json();

  localStorage.bearerToken = body.token;

  var expiryTime = new Date();
  expiryTime.setMinutes(new Date().getMinutes() + 50);
  localStorage.tokenExpiry = expiryTime;
  return localStorage.bearerToken;
}

async function generateRefreshToken() {
  var chatHeaders = new Headers();
  var requestOptions = {
    method: "POST",
    headers: chatHeaders,
    redirect: "follow",
  };
  var response = null;

  chatHeaders.set("Authorization", "Bearer " + localStorage.bearerToken);
  response = await fetch(baseUrl + "refresh", requestOptions);
  body = await response.json();

  if (body?.error?.code === "BadArgument") {
    await generateNewToken();
  } else {
    localStorage.bearerToken = body.token;
  }

  var expiryTime = new Date();
  expiryTime.setMinutes(new Date().getMinutes() + 50);
  localStorage.tokenExpiry = expiryTime;
  return localStorage.bearerToken;
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie(botUserId);
  if (user != "") {
    return user;
  } else {
    user = new Date().getTime();
    if (user != "" && user != null) {
      setCookie(botUserId, user, cookie_exp_days);
      return user;
    }
  }
}
