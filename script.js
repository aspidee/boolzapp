// funzione che aggiunge un nuovo messaggio
function addNewMessage() {
  $(".new-message-inputs").keyup(function(e) {

    if (e.which == 13) {

      var wrapper = $(".wrapper_right_msg");

      var message = document.createElement("div");
      var messageContent = document.createElement("p");
      var messageDetail = document.createElement("span");

      $(message).addClass("message");
      $(message).addClass("received");

      messageContent = $(".new-message-inputs").val();
      console.log(messageContent);

      $(messageContent).text(messageContent);
      $(messageDetail).text("00:00");

      message.append(messageContent);
      message.append(messageDetail);

      wrapper.append(message);

    }
  })
}


function init() {
  addNewMessage();
}

$(document).ready(init);


// function testAddMessage1() {
//
//   var wrapper = $(".wrapper");
//
//   var message = document.createElement("div");
//   var messageContent = document.createElement("p");
//   var messageDetail = document.createElement("small");
//
//   $(message).addClass("message");
//   $(message).addClass("sent");
//
//   $(messageContent).text("messaggio dinamico");
//   $(messageDetail).text("dettagli messaggio dinamico");
//
//   message.append(messageContent);
//   message.append(messageDetail);
//
//   wrapper.append(message);
// }
//
// function testAddMessage2() {
//
//   var wrapper = $(".wrapper");
//
//   var message = document.createElement("div");
//   var messageContent = document.createElement("p");
//   var messageDetail = document.createElement("small");
//
//   $(message).addClass("message");
//   $(message).addClass("received");
//
//   $(messageContent).text("messaggio dinamico");
//   $(messageDetail).text("dettagli messaggio dinamico");
//
//   message.append(messageContent);
//   message.append(messageDetail);
//
//   wrapper.append(message);
// }
//
// function init() {
//   var btn1 = $("#myBtn1");
//   btn1.click(testAddMessage1);
//
//   var btn2 = $("#myBtn2");
//   btn2.click(testAddMessage2);
// }
