/*
  Welcome to another set of funky code!
  How could you rewrite this to make it more DRY?
*/

$(document).ready(function(){//When the document is ready, run this anonymous function!

/*Note that I am using a different style than you may see in class. Typically we like to keep our selector and method right next to one another, but this is an example of a form you may see in which the selector(or in some cases an object) can be found on a diffrent line than its methods*/

    $('mark') //Ask yourself, what, specifically, have i selected with this tag? If i dynamically create a new mark, will it get this property?
      .mouseover(function(){ //the .mouseover method run on the $('mark') object
        if ($(this).hasClass('method')){ //hey you mean we still need to know if statements? When will this be true?
          $('.method').animate({ //Ask yourself, why is there an if statement for this one class? Is there a more elegant way to write it?
            'font-size':35 //animate will change the font size to 35 for which elements?
          })
        }else{
          $(this).animate({ //what does 'this' represent in this situation
            'font-size':35 //this animate changes the font size for which elements?
          })}

        })
      .mouseout(function(){ //This is a technique known as 'Chaining' methods, which we will cover later. It simply means that we are running a method subsequently after a previous one. In this case, there is an event listener for each mouseover and mouseout.
       if($(this).hasClass('method')){
         $('.method').animate({
           'font-size':15
         })
       }else{
        $(this).animate({
          'font-size':15
        })
      }
      })

    $('#marker')
      .mouseenter(function(){ //note that this is a different method than the previous section. What is different between mouseover and mouseenter? Is there another method I could have used to make this more concise?
        $('#info').text('The JQuery token. This guy is important because he says "Hey, whatever is coming next, make that a JQuery kind of object!" When used by alone, it represents JQuery itself.');
      })
      .mouseleave(function(){
        $('#info').text('')
      })


    $('#selector')//A repeated block with slightly different text, but generally the same form. How could i rewrite this to make it DRY?
      .mouseenter(function(){
        $('#info').text('What JQuery will select, also known as the selector. This is what you\'re telling JQuery to turn into a JQuery object. ');
      })
      .mouseleave(function(){
        $('#info').text('')
      })


    $('#args')
      .mouseenter(function(){
        $('#info').text('The arguments passed into the method. You\'ll probably want to read the docs for what to put in here for whatever method you want to use. Often, you will pass a function in as an argument.');
      })
      .mouseleave(function(){
        $('#info').text('')
      })


    $('.method') //what's different about this selector?
      .mouseenter(function(){
        $('#info').text('What the method that will be run on the selected elements.');
      })
      .mouseleave(function(){
        $('#info').text('')
      })



  });
