//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


function main(){
    $(".full").hide();
    $(".full").fadeIn(1500);
    
      
  
  
  $('.projects-button1').on('click', function() {
		//$(this).next().toggle();
   
    $(this).toggleClass('active');
    $(this).text('A TEAPOT');
	});
    
      $('.projects-button2').on('click', function() {
		//$(this).next().toggle();
    
    $(this).toggleClass('active');
    $(this).text('A COIN');
	});
    
      $('.projects-button3').on('click', function() {
		//$(this).next().toggle();
    
    $(this).toggleClass('active');
    $(this).text('YOUR WORD');
	});
    
      $('.projects-button4').on('click', function() {
		//$(this).next().toggle();
    
    $(this).toggleClass('active');
    $(this).text('AN ECHO');
	});
    
      $('.projects-button5').on('click', function() {
		//$(this).next().toggle();
    $(this).toggleClass('active');
    $(this).text('YOUR NAME');
	});
    
    // SECOND 
      
  $('.projects-button11').on('click', function() {
		//$(this).next().toggle();
   
    $(this).toggleClass('active');
    $(this).text('FORTY');
	});
    
      $('.projects-button22').on('click', function() {
		//$(this).next().toggle();
    
    $(this).toggleClass('active');
    $(this).text('7 * ((3 / 7) + 3) = 24');
	});
    
      $('.projects-button33').on('click', function() {
		//$(this).next().toggle();
    
    $(this).toggleClass('active');
    $(this).text('Solution: 5 => FIVE Half of five => Remove 2 letters out of 4 i.e Remove letter F AND E. It remains, IV The Roman value of IV is 4.');
	});
    
      $('.projects-button44').on('click', function() {
		//$(this).next().toggle();
    
    $(this).toggleClass('active');
    $(this).text('0!');
	});
    
      $('.projects-button55').on('click', function() {
		//$(this).next().toggle();
    $(this).toggleClass('active');
    $(this).text('21982030 Explanation: Next number formed is (number * (number-2)) - number;i.e(5 * 3) - 5 => 10 (10 * 8) - 10 => 70 (70 * 68) - 70 => 4690 (4690 * 4688) - 4690 => 21982030');
	});
    
    // third
      $('.projects-button111').on('click', function() {
		//$(this).next().toggle();
   
    $(this).toggleClass('active');
    $(this).text('JUPITER');
	});
    
      $('.projects-button222').on('click', function() {
		//$(this).next().toggle();
    
    $(this).toggleClass('active');
    $(this).text('ALL 12 MONTHS');
	});
    
      $('.projects-button333').on('click', function() {
		//$(this).next().toggle();
    
    $(this).toggleClass('active');
    $(this).text('THEY WEIGH THE SAME');
	});
    
      $('.projects-button444').on('click', function() {
		//$(this).next().toggle();
    
    $(this).toggleClass('active');
    $(this).text(' THE ANSWER IS 44');
	});
    
      $('.projects-button555    ').on('click', function() {
		//$(this).next().toggle();
    $(this).toggleClass('active');
    $(this).text('SAHARA DESERT');
	});
    
    
    
      
    }


$(document).ready(main);