/*$(document).ready(function() {
    $('.venobox').Venobox();
  });*/
  
  // Initiate the wowjs animation library
  new WOW().init();
  $(window).scroll(function() {
    if ($(window).scrollTop() > 200)
     {
   $(".nav-link").css("color","white");
   $(".navbar-brand").css("color","white")
   
   $(".navbar").css("background-color","rgba(128, 128, 128, 0.62)")
  }  
   
  else {
  
  $(".navbar").css("background-color","transparent")
    }
  });
  $(function() {
    var $a = $(".tabs li");
    $a.click(function() {
      $a.removeClass("active");
      $(this).addClass("active");
    });
  });

  /*
  @method Cards
  @description this is for label based radio navigation to change the labels style to 'active'
 */
const Cards = ((() => {
  /*
   * @description dom loaded event listener
   */
  window.addEventListener('DOMContentLoaded', () => {setTimeout(init,1)}, true);

  /*
   * @method init
   * @parameter e {event}
   * @description initiates event listeners on all cards
   */
  function init(e)
  {
    if(document.querySelector(".cards"))
    {
      let cards = document.querySelector(".cards");
      cards.addEventListener('click', clicked, false);
      document.querySelectorAll(".cards .card")[1].click();
    }
  }

  /*
   * @method clicked
   * @parameter e {event}
   * @description this is the callback from the assigned event listener binding
   */
  function clicked(e)
  {
    let card = e.target;
    if(card.getAttribute("data-card")){rearrange(card.getAttribute("data-card"));}
  }

  /*
   * @method rearrange
   * @parameter card {object}
   * @description this is the callback from the assigned event listener binding
   */
  function rearrange(card)
  {
    let cards = document.querySelectorAll(".cards .card");
    for(let n = 0; n < cards.length; n++)
    {
      cards[n].classList.remove("card--left");
      cards[n].classList.remove("card--center");
      cards[n].classList.remove("card--right");
    }
    cards[card].classList.add("card--center");
    if(card == 0)
    {
      cards[2].classList.add("card--left");
      cards[1].classList.add("card--right");
      cards[3].classList.add("card--right");
    }
    if(card == 1)
    {
      cards[0].classList.add("card--left");
      cards[2].classList.add("card--right");
      cards[3].classList.add("card--right");
    }
    if(card == 2)
    {
      cards[1].classList.add("card--left");
      cards[0].classList.add("card--right");
      cards[3].classList.add("card--lelf");
    }
    if(card == 3)
    {
      cards[1].classList.add("card--left");
      cards[2].classList.add("card--right");
      cards[0].classList.add("card--right");
    }
  }

  return {
    init
  }
})());
  