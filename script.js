// funzione che aggiunge un nuovo messaggio
function addNewMessage() {

  $(".new-message-inputs").keyup(function(e) {

    if (e.which == 13) {

      var wrapper = $(".wrapper_right_msg.visible");
      var date = new Date();
      var message = document.createElement("div");
      var messageContent = document.createElement("p");
      var messageDetail = document.createElement("span");
      var messageOptions = document.createElement("i");
      var messageOptions1 = document.createElement("div");
      var messageOptions2 = document.createElement("div");
      var messageOptions3 = document.createElement("div");

      $(message).addClass("message");
      $(message).addClass("received");
      $(messageOptions).addClass("fas fa-angle-down message_options");
      $(messageOptions1).addClass("message_options_menu hidden");
      $(messageOptions2).addClass("message_info");
      $(messageOptions3).addClass("message_delete");


      newMessageContent = $(".new-message-inputs").val();
      console.log(newMessageContent);

      $(messageContent).text(newMessageContent);
      $(messageOptions2).text("Info messaggio");
      $(messageOptions3).text("Cancella messaggio");
      $(messageDetail).text(date.getHours() + ":" + date.getMinutes());

      message.append(messageContent);
      message.append(messageDetail);
      message.append(messageOptions);
      message.append(messageOptions1);
      messageOptions1.append(messageOptions2);
      messageOptions1.append(messageOptions3);

      wrapper.append(message);

      // al trascorrere del timeout lancio la funzione autoReply
      // e cancello i valori dall'input
      setTimeout(autoReply, 1000);
      $(".new-message-inputs").val("");
    }
  })
}

// funzione che restituisce una risposta automatica
// all'inserimento di un nuovo messaggio
function autoReply() {

  var wrapper = $(".wrapper_right_msg.visible");
  var date = new Date();
  var message = document.createElement("div");
  var messageContent = document.createElement("p");
  var messageDetail = document.createElement("span");
  var messageOptions = document.createElement("i");
  var messageOptions1 = document.createElement("div");
  var messageOptions2 = document.createElement("div");
  var messageOptions3 = document.createElement("div");


  $(message).addClass("message");
  $(message).addClass("sent");
  $(messageOptions).addClass("fas fa-angle-down message_options");
  $(messageOptions1).addClass("message_options_menu hidden");
  $(messageOptions2).addClass("message_info");
  $(messageOptions3).addClass("message_delete");


  $(messageContent).text("OK");
  $(messageOptions2).text("Info messaggio");
  $(messageOptions3).text("Cancella messaggio");
  $(messageDetail).text(date.getHours() + ":" + date.getMinutes());

  message.append(messageContent);
  message.append(messageDetail);
  message.append(messageOptions);
  message.append(messageOptions1);
  messageOptions1.append(messageOptions2);
  messageOptions1.append(messageOptions3);

  wrapper.append(message);
}


// funzione che ricerca un contatto
function search() {

  var me = $("#chat_input");
  var content = me.val().toLowerCase();

  var list = $(".wrapper_left_chat_user");

  list.removeClass("hidden");

  for (var i = 0; i < list.length; i++) {

    var contact = list.eq(i);
    console.log(contact);
    var name = contact.find("h3");
    var listContent = name.text().toLowerCase();

    if (!listContent.includes(content)) {

      contact.addClass("hidden");
    }
  }
}

// funzione che apre il menu a tendina
function menuDropdownOn() {

  var me = $(this);
  me.parent().find(".message_options_menu").toggle();

  // $(".message_options").click(function(){
    //   $(".message_options_menu").toggle();
    // });
}

// funzione che nasconde il menu al passaggio del mouse
function menuDropdownOff() {

  var me = $(this);
  me.parent().find(".message_options_menu").hide();
}

// funzione che cancella un messaggio
function deleteMessage() {

  var me = $(this);
  var message = me.closest(".message");
  message.remove();
}
// funzione che aggiorna il nome del contanitore della propria chat
function nameUpdate() {

  var me = $(this);
  var name = me.find(".chat_user_message h3").text();

  $(".contact_name").text(name);
  console.log(name);
}


// funzione che mostra la conversazione del contatto cliccato
// attivo la classe active al contatto selezionato
function userActiveClass() {

  var old = $(".wrapper_left_chat_user.active");
  old.removeClass("active");
  var me = $(this);
  me.addClass("active");
}
// mostro il contenitore dei messaggi del contatto selezionato
function msgUserChat() {

  var me = $(this);
  var indBox = me.index();

  var boxes = $(".wrapper_right_msg");
  boxes.removeClass("visible");
  var boxSelected = boxes.eq(indBox);
  boxSelected.addClass("visible");
}



function init() {

  addNewMessage();

  var input = $("#chat_input");
  input.keyup(search);


  var doc = $(document);

  doc.on('click', '.message_options', menuDropdownOn);
  doc.on('mouseleave', '.message', menuDropdownOff);
  doc.on('click', '.message_delete', deleteMessage);
  doc.on('click', '.wrapper_left_chat_user', userActiveClass);
  doc.on('click', '.wrapper_left_chat_user', msgUserChat);
  doc.on('click', '.wrapper_left_chat_user', nameUpdate);

}

$(document).ready(init);



// MILESTONES
//
// Milestone 1 - 11/03/19
// Replica della grafica
// Aggiunta di un messaggio
//
// Milestone 2 - 12/03/19
// Risposta dell'interlocutore "Ok" dopo un secondo
// Ricerca di utenti
//
// Milestone 3 - 13/03/19
// Click sul contatto
// Cancella messaggio
