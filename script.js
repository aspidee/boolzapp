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

      $(message).addClass("message");
      $(message).addClass("received");
      $(messageOptions).addClass("fas fa-angle-down");

      newMessageContent = $(".new-message-inputs").val();
      console.log(newMessageContent);

      $(messageContent).text(newMessageContent);
      $(messageDetail).text(date.getHours() + ":" + date.getMinutes());

      message.append(messageContent);
      message.append(messageDetail);
      message.append(messageOptions);
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

  $(message).addClass("message");
  $(message).addClass("sent");
  $(messageOptions).addClass("fas fa-angle-down");


  $(messageContent).text("OK");
  $(messageDetail).text(date.getHours() + ":" + date.getMinutes());

  message.append(messageContent);
  message.append(messageDetail);
  message.append(messageOptions);
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


function init() {

  addNewMessage();

  var input =$("#chat_input");
  input.keyup(search);


  // funzione che apre il menu a tendina
    $(document).on('click', '.message_options', function() {

      var me = $(this);
      me.parent().find(".message_options_menu").toggle();

      // $(".message_options").click(function(){
      //   $(".message_options_menu").toggle();
      // });
    });


  // funzione cancella messaggio
    $(document).on('click', '.message_delete', function() {

      var messageParent = $(this).parent().parent();
      messageParent.hide();
    });


  // funzione che mostra la conversazione del contatto cliccato
    $(".wrapper_left_chat_user").click(function() {

      $(".wrapper_right_msg").addClass("visible");

    })


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
