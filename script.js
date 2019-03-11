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
//
//


function init() {
  var btn1 = $("#myBtn1");
  btn1.click(testAddMessage1);

  var btn2 = $("#myBtn2");
  btn2.click(testAddMessage2);
}

$(document).ready(init);
