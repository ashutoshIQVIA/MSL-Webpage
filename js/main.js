$(document).scroll(function () {
  "use strict";
  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });


  var toppos1 = document.querySelector("#character-annimation1").getBoundingClientRect().top;
  //console.log(toppos1);
  if (toppos1 > 30 && toppos1 < 410) {
    $(".boy-char").animate({
      "left": "0%"
    }, 1000);
    $(".boy-char-text").fadeIn(3000);
  }


  var toppos2 = document.querySelector("#character-annimation2").getBoundingClientRect().top;
  //console.log(toppos2);
  if (toppos2 > 30 && toppos2 < 410) {
    $(".boy-char2").animate({
      "left": "10%"
    }, 1000);
    $(".boy-char-text2").fadeIn(3000);
  }



});


let clicksEvent1 = document.getElementsByClassName('checkValues');
let changecolor = document.getElementsByClassName('inputDesign');
let outercolor = document.getElementsByClassName('checkboxOuter');
let boxcolor = document.getElementsByClassName('option-box');
let answerValidation = [];
var htmlbox = `

          <div class="kitnoo1 kitanu-left"><img src="images/kitanoo1.png" alt="Virus"></div>
          <div class="kitnoo2 kitanu-right"><img src="images/kitanoo6.png" alt="Virus"></div>
		  <div class="kitnoo2 kitanu-bottom"><img src="images/kitanoo7.png" alt="Virus"></div>
          <div class="kitnoo1 kitanu-right"><img src="images/kitanoo3.png" alt="Virus"></div>
          <div class="kitnoo1 kitanu-bottom"><img src="images/kitanoo4.png" alt="Virus"></div>
          <div class="kitnoo1 kitanu-left"><img src="images/kitanoo1.png" alt="Virus"></div>
          <div class="kitnoo3 kitanu-left"><img src="images/kitanoo5.png" alt="Virus"></div>
		  <div class="kitnoo3 kitanu-right"><img src="images/kitanoo7.png" alt="Virus"></div>

          `

var htmlboxReduced = `

          <div class="kitnoo1 kitanu-left"><img src="images/kitanoo1.png" alt="Virus"></div>
		  <div class="kitnoo3 kitanu-left"><img src="images/kitanoo5.png" alt="Virus"></div>
 		  <div class="kitnoo3 kitanu-right"><img src="images/kitanoo7.png" alt="Virus"></div>
		  <div class="kitnoo2 kitanu-bottom"><img src="images/kitanoo7.png" alt="Virus"></div>
          `


for (let index = 0; index < clicksEvent1.length; index++) {
  clicksEvent1[index].addEventListener('click', () => {
	  
	 //deactivate more than 2 selections starts 
	  let check = document.getElementsByClassName('checkValues');
		let indexcount = document.querySelectorAll('input[type="checkbox"]:checked').length;
		for(i = 0 ; i<check.length ; i++){
		if(indexcount == 2 ){
			 if(!check[i].checked){
				  check[i].disabled = true;
				 if(check[i].disabled == true){
					outercolor[i].style.border = 'solid rgba(140,140,140,0.1)';
      				changecolor[i].style.border = 'solid rgba(140,140,140,0.1)';
					}
			 }
		}else{
			check[i].disabled = false;
			outercolor[i].style.border = 'solid rgba(140,140,140,1)';
      		changecolor[i].style.border = '2px solid rgba(140,140,140,1)';
		}
		}
	  //deactivate more than 2 selections end
	  
	  
	  
	if (clicksEvent1[index].checked > 1) {
		clicksEvent1[index].hide();
	}

    if (clicksEvent1[index].checked) {
      changecolor[index].style.background = '#319F6F'
      outercolor[index].style.border = 'solid #F68721'
      boxcolor[index].style.border = 'solid #F68721'
      //console.log(clicksEvent1[index].checked)
		
		
		//	Red color for wrong Selection starts 
		if(clicksEvent1[2].checked || clicksEvent1[3].checked){
		   if(clicksEvent1[2].checked && clicksEvent1[3].checked){
			   changecolor[2].style.background = '#ff0000'
			   changecolor[3].style.background = '#ff0000'
		   }else if(clicksEvent1[2].checked){
			   changecolor[2].style.background = '#ff0000'
		   }else{
				changecolor[3].style.background = '#ff0000'
		   }
		}
	//	Red color for wrong Selection end
		

      if (clicksEvent1[0].checked && clicksEvent1[1].checked) {
        if (!clicksEvent1[2].checked && !clicksEvent1[3].checked) { 
		document.querySelector('.kitanoos').style.backgroundColor = 'rgba(255,255,255,0.1)';
		document.getElementsByClassName('kitanoo-box')[0].innerHTML = htmlboxReduced;
		document.getElementsByClassName('kitanoo-box')[2].innerHTML = htmlboxReduced;
        document.getElementsByClassName('kitanoo-box')[1].innerHTML = htmlboxReduced;
		document.getElementsByClassName('kitanoo-box')[3].innerHTML = htmlboxReduced;
		document.getElementsByClassName('kitanoo-box')[4].innerHTML = htmlboxReduced;
	    document.getElementsByClassName('kitanoo-box')[5].innerHTML = htmlboxReduced;
		setTimeout(function(){ 
          $(".congrats-pop").show();
          congratsPage();
		setTimeout(function(){  	
          $(".congrats-pop").show();
		  $(".cong-text").hide();
		  $(".cong-content").show();
          congratsPage();
		  $(".cong-boy img").css({"width": "15%","bottom": "2%","min-width": "125px"});
        }, 4000);
		}, 2000);
	   }
	   
      }else {

        //kidanu bharo
        //console.log('wrong value selected')
        
        document.getElementsByClassName('kitanoo-box')[0].innerHTML += htmlbox;
        document.getElementsByClassName('kitanoo-box')[2].innerHTML += htmlbox;
        document.getElementsByClassName('kitanoo-box')[1].innerHTML += htmlbox;
		document.getElementsByClassName('kitanoo-box')[3].innerHTML += htmlbox;
		document.getElementsByClassName('kitanoo-box')[4].innerHTML += htmlbox;
	    document.getElementsByClassName('kitanoo-box')[5].innerHTML += htmlbox;

        let newopacity = ''
        let opacity = parseFloat(document.querySelector('.kitanoos').style.opacity)

        document.querySelector('.kitanoos').style.backgroundColor = 'rgba(255,0,0,0.1)';
      
      }
    } else {
      changecolor[index].style.background = 'white'
      outercolor[index].style.border = 'solid #8C8C8C'
      boxcolor[index].style.border = 'solid #8C8C8C'
      //console.log(clicksEvent1[index].checked)
      if (clicksEvent1[0].checked && clicksEvent1[1].checked) {
        if (!clicksEvent1[2].checked && !clicksEvent1[3].checked) {
		  document.querySelector('.kitanoos').style.backgroundColor = 'rgba(255,255,255,0.1)';
		document.getElementsByClassName('kitanoo-box')[0].innerHTML = htmlboxReduced;
		document.getElementsByClassName('kitanoo-box')[2].innerHTML = htmlboxReduced;
        document.getElementsByClassName('kitanoo-box')[1].innerHTML = htmlboxReduced;
		document.getElementsByClassName('kitanoo-box')[3].innerHTML = htmlboxReduced;
		document.getElementsByClassName('kitanoo-box')[4].innerHTML = htmlboxReduced;
	    document.getElementsByClassName('kitanoo-box')[5].innerHTML = htmlboxReduced;
		  setTimeout(function(){ 
          $(".congrats-pop").show();
          congratsPage();
		  setTimeout(function(){  	
          $(".congrats-pop").show();
		  $(".cong-text").hide();
		  $(".cong-content").show();
          congratsPage();
		  $(".cong-boy img").css({"width": "15%","bottom": "2%","min-width": "125px"});
        }, 4000);
	    }, 2000);
        }
      } 
    }

  })

}


var audio = new Audio("audio/gong-bg-music.mp3");
$(".gong-game,.begin-battle").on("click", function () {
  $(".gong-game").hide();
  $(".gong-game-gif").show();
  audio.play();
});

$(".congrats-pop").on("click", function () {
  window.location.reload();
});

'use strict';

function congratsPage() {
  // Globals
  var random = Math.random
    , cos = Math.cos
    , sin = Math.sin
    , PI = Math.PI
    , PI2 = PI * 2
    , timer = undefined
    , frame = undefined
    , confetti = [];

  var particles = 10
    , spread = 40
    , sizeMin = 3
    , sizeMax = 12 - sizeMin
    , eccentricity = 10
    , deviation = 100
    , dxThetaMin = -.1
    , dxThetaMax = -dxThetaMin - dxThetaMin
    , dyMin = .13
    , dyMax = .18
    , dThetaMin = .4
    , dThetaMax = .7 - dThetaMin;

  var colorThemes = [
    function () {
      return color(200 * random() | 0, 200 * random() | 0, 200 * random() | 0);
    }, function () {
      var black = 200 * random() | 0; return color(200, black, black);
    }, function () {
      var black = 200 * random() | 0; return color(black, 200, black);
    }, function () {
      var black = 200 * random() | 0; return color(black, black, 200);
    }, function () {
      return color(200, 100, 200 * random() | 0);
    }, function () {
      return color(200 * random() | 0, 200, 200);
    }, function () {
      var black = 256 * random() | 0; return color(black, black, black);
    }, function () {
      return colorThemes[random() < .5 ? 1 : 2]();
    }, function () {
      return colorThemes[random() < .5 ? 3 : 5]();
    }, function () {
      return colorThemes[random() < .5 ? 2 : 4]();
    }
  ];
  function color(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  // Cosine interpolation
  function interpolation(a, b, t) {
    return (1 - cos(PI * t)) / 2 * (b - a) + a;
  }

  // Create a 1D Maximal Poisson Disc over [0, 1]
  var radius = 1 / eccentricity, radius2 = radius + radius;
  function createPoisson() {
    // domain is the set of points which are still available to pick from
    // D = union{ [d_i, d_i+1] | i is even }
    var domain = [radius, 1 - radius], measure = 1 - radius2, spline = [0, 1];
    while (measure) {
      var dart = measure * random(), i, l, interval, a, b, c, d;

      // Find where dart lies
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i + 1], interval = b - a;
        if (dart < measure + interval) {
          spline.push(dart += a - measure);
          break;
        }
        measure += interval;
      }
      c = dart - radius, d = dart + radius;

      // Update the domain
      for (i = domain.length - 1; i > 0; i -= 2) {
        l = i - 1, a = domain[l], b = domain[i];
        // c---d          c---d  Do nothing
        //   c-----d  c-----d    Move interior
        //   c--------------d    Delete interval
        //         c--d          Split interval
        //       a------b
        if (a >= c && a < d)
          if (b > d) domain[l] = d; // Move interior (Left case)
          else domain.splice(l, 2); // Delete interval
        else if (a < c && b > c)
          if (b <= d) domain[i] = c; // Move interior (Right case)
          else domain.splice(i, 0, c, d); // Split interval
      }

      // Re-measure the domain
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i + 1] - domain[i];
    }

    return spline.sort();
  }

  // Create the overarching container
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '0';
  container.style.overflow = 'visible';
  container.style.zIndex = '9999';

  // Confetto constructor
  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style, innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis = 'rotate3D(' +
      cos(360 * random()) + ',' +
      cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = window.innerWidth * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top = this.y + 'px';

    // Create the periodic spline
    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function (height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      // Compute spline and convert to polar
      var phi = this.frame % 7777 / 7777, i = 0, j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height + deviation;
    };
  }

  function poof() {
    if (!frame) {
      // Append the container
      document.body.appendChild(container);

      // Add confetti
      var theme = colorThemes[0]
        , count = 0;
      (function addConfetto() {
        var confetto = new Confetto(theme);
        confetti.push(confetto);
        container.appendChild(confetto.outer);
        timer = setTimeout(addConfetto, spread * random());
      })(0);

      // Start the loop
      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = window.innerHeight;

        for (var i = confetti.length - 1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length)
          return frame = requestAnimationFrame(loop);

        // Cleanup
        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }

  poof();
};