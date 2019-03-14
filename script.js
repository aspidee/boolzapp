// funzione che aggiunge un nuovo messaggio
function addNewMessage() {
  $(".new-message-inputs").keyup(function(e) {

    if (e.which == 13) {

      var wrapper = $(".wrapper_right_msg");
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

  var wrapper = $(".wrapper_right_msg");
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

  // $(".message_options").click(function(){
  //   $(".message_options_menu").toggle();
  // });
  var me = $(this);
  me.parent().find(".message_options_menu").toggle();
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

// funzione che mostra la conversazione del contatto cliccato
function chatShow() {

  var wrapper = $(".wrapper_right_msg");
  var index = $(this).index();

  wrapper.addClass("hidden");
  wrapper.eq(index).removeClass("hidden");

}



function init() {

  addNewMessage();

  var input = $("#chat_input");
  input.keyup(search);



  var doc = $(document);

  // doc.on('click', 'wrapper_left_chat_user', chatShow)
  doc.on('click', '.message_options', menuDropdownOn);
  doc.on('mouseleave', '.message', menuDropdownOff);
  doc.on('click', '.message_delete', deleteMessage);


//perchè non si può spostare???
  $(".wrapper_left_chat_user").click(function() {

    $(".wrapper_right_msg").addClass("visible");

  });


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
