//#cardPile 1-9
//#cardSlots números que se arrastran
//#total_sum 

$(document).ready(function() {

  var cards = [];
  var total = 0;
  var j = 0;
  for (var i = 0; i <= 9; i++) {
    cards[i] = new Card(i);
    $("#cardPile").append( "<div data-card=\""+ cards[i].num +"\">"+ cards[i].num +"</div>" );
  }

  $("#cardPile div").draggable({
    helper:'clone'
  });

  $("#cardSlots").droppable({
    drop:eventoDrop
  });

  function eventoDrop(evento, elemento){
    var carta = elemento.draggable;
    var evento = evento;//pilla el evento *o*
    //console.log(evento);
    //console.log(cards);
    var index = carta.data('card');
    //console.log(cards[i]);
    //alert("Soltado "+ cards[carta_id].num +"! ");
    //for( var prop in carta){ console.log(prop + " : "+ carta[prop]);}
    if (j < 10){
      $("#cardSlots").append( "<div data-card=\""+ cards[index].num +"\">"+ cards[index].num +"</div>" );
      total += cards[index].num
      $("#total_sum").empty().append(total);
      j++;
    }
  }

});//$(document).ready

//Class Card
function Card(num){
  if(isNaN(num)){ alert("Debe ser un numero"); }
  else { this.num = new Number(num) } 
  console.log("create card: "+ this.num)
}
