$(document).ready(function() {

	$(".Head").css({top: '0', position: 'fixed', zIndex:'10000'});
	$('iframe').css('frameborder','0');
	$('.mySlider h2, #gallery h2').hide();

	var lastId,lastId2,
	topMenu = $("#menu"),
	topMenu2 = $("#hideMenu"),
	topMenuHeight = topMenu.outerHeight(),
	topMenuHeight2 = topMenu2.outerHeight(),
	menuItems = topMenu.find("a"),
	menuItems2 = topMenu2.find("a"),
	scrollItems = menuItems.map(function(){
		var item = $($(this).attr("href"));
		if (item.length) { return item; }
	});
	scrollItems2 = menuItems2.map(function(){
		var item2 = $($(this).attr("href"));
		if (item2.length) { return item2; }
	});

	$(window).scroll(function() {
		if ($(document).scrollTop() > 200) {
			$('#pageUp').css('display','block');
		} else {
			$('#pageUp').css('display','none');
		}


		var fromTop = $(this).scrollTop()+topMenuHeight;
		var fromTop2 = $(this).scrollTop()+topMenuHeight2;
		var cur = scrollItems.map(function(){
			if ($(this).offset().top < fromTop) return this;
		});
		var cur2 = scrollItems2.map(function(){
			if ($(this).offset().top < fromTop2) return this;
		});

		cur = cur[cur.length-1];
		cur2 = cur2[cur2.length-1];
		var id = cur && cur.length ? cur[0].id : "";
		var id2 = cur2 && cur2.length ? cur2[0].id : "";
		  
		if (lastId !== id) {
		   	lastId = id;
			menuItems.parent().removeClass("Current").end().filter("[href=#"+id+"]").parent().addClass("Current");
			}

		if (lastId2 !== id2) {
		   	lastId2 = id2;
			menuItems2.parent().removeClass("Current").end().filter("[href=#"+id2+"]").parent().addClass("Current");
			}
		});

	$('#menu a').hover(function() {
		$(this).css('color','#34A0C7');
	},
	function() {
		$(this).css('color','#FFFFFF');
	});

	$('#hideMenu a').hover(function() {
		$(this).css('color','#34A0C7');
	},
	function() {
		$(this).css('color','#FFFFFF');
	});

	$('#hideMenu li').click(function() {
		$('#hideMenu').hide('slow');
	});

	$('#pageUp').hover(function() {
		$('#pageUp').css('opacity','1');
	}, 
	function() {
		$('#pageUp').css('opacity','0.7');
	});

	$('.bxslider').bxSlider({
		auto: true,
		autoControls: true
	});

	var screenWidth = $(window).width();
	$('#mySlider img').css('width', screenWidth);

	$('#logo').click(function(){
		$("html, body").animate({ scrollTop: 0 }, "fast");
		$('.Layout').toggle();
		$('.PopUp').toggle();
	});

	$('#pageUp').click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});


	$('.Other').hover (function() {
		$(this).css({'color': '#FFFFFF', 'backgroundColor':'#34A0C7'});
		$(this).find('i').css('color','#FFFFFF');
	},
	function() {
		$(this).css({'color': '#23262C', 'backgroundColor':'#878c97'});
		$(this).find('i').css('color','#23262C');
	});

	$('.contactItemAll a').hover (function() {
		$(this).css('color', '#FFFFFF');
	},
	function() {
		$(this).css('color', '#3C3F45');
	});

	$('.submit').hover (function() {
		$(this).css({'color': '#FFFFFF', 'backgroundColor':'#34A0C7'});
		$(this).find('i').css('color','#FFFFFF');
	},
	function() {
		$(this).css({'color': '#23262C', 'backgroundColor':'#3C3F45'});
		$(this).find('i').css('color','#23262C');
	});

	$('.GalleryMenu li').hover (function() {
		$(this).css('color', '#FFFFFF');
		$(this).find('i').css('color','#FFFFFF');
		$(this).find('a').css('color','#FFFFFF');
	},
	function() {
		$(this).css('color', '#7F8289');
		$(this).find('i').css('color','#7F8289');
		$(this).find('a').css('color','#7F8289');
	});


	$('.social i').hover (function() {
		$(this).css('color', '#FFFFFF');
	},
	function() {
		$(this).css('color', '#7F8289');
	});

	$('#photo, #video').click(function() {
		$('#gallery li').removeClass('active');
		$('.block').removeClass('shown');
	});

	$('#video').click(function() {
		$('#video').addClass('active');
		$('.videoblock').addClass('shown');
	});

	$('#photo').click(function() {
		$('#photoBlock').addClass('active');
		$('.photoblock').addClass('shown');
	});



	$('#museumNight,#danceCity,#allPhoto,#plastforma,#kufar,#backstage,#probel' ).click(function() {
		$('#gallery li').removeClass('active');
		$('.galleryItem').css('display','none');
	});

	$('#museumNight').click(function() {
		$('#museumNight').addClass('active');
		$('.night').css('display','inline');
	});

	$('#danceCity').click(function() {
		$('#danceCity').addClass('active');
		$('.danceCity').css('display','inline');
	});

	$('#allPhoto').click(function() {
		$('#allPhoto').addClass('active');
		$('.galleryItem').css('display','inline');
	});

	$('#plastforma').click(function() {
		$('#plastforma').addClass('active');
		$('.plastforma').css('display','inline');
	});

	$('#kufar').click(function() {
		$('#kufar').addClass('active');
		$('.kufar').css('display','inline');
	});

	$('#backstage').click(function() {
		$('#backstage').addClass('active');
		$('.backstage').css('display','inline');
	});

	$('#probel').click(function() {
		$('#probel').addClass('active');
		$('.probel').css('display','inline');
	});

	$('.Layout').hide();
	$('.PopUp').hide();

	$('img').click(function(){
		var popUpcontent = '<img src=' +
							$(this).attr('src') +
							' class="Image">';
		$('#popupContent').html(popUpcontent);
		$('#popupContent .Image').css('display','block').css('opacity','1');
		$('.Layout').toggle('fast');
		$('.PopUp').toggle('fast');
	});

	$('img').hover(function() {
		$(this).not('.bxslider img, #logo img').css('opacity','1')
	}, function() {
		$(this).not('.bxslider img, #logo img').css('opacity','0.6')
	});

	$('.Layout').click(function() {
		$('.Layout').toggle();
		$('.PopUp').toggle();
	});

	$('#close').click(function() {
		$('.Layout').toggle();
		$('.PopUp').toggle();
	});

	$('#hideMenuIcon').click(function() {
		$('#hideMenu').toggle('slow');
	});

});

//////form validation

function validate() {
	valid = true;

	var elems = document.forms['contactForm'];
	var nameElem = elems.elements['name'];
	var emailElem = elems.elements['email'];
	var messageElem = elems.elements['message'];

	var nameValue = nameElem.value;
	var emailValue = emailElem.value;
	var messageValue = messageElem.value; 

	console.log(nameValue, emailValue, messageValue);

	var mistake = document.getElementById('response');

	if (nameValue.length == 0) {
		mistake.innerHTML += '<br>Введите, пожалуйста, Имя и Фамилию';
		valid = false;
	}

	if (messageValue.length < 5) {
		mistake.innerHTML += '<br>Введите, пожалуйста, сообщение длинной больше 5 символов';
		valid = false;
	}

	var r = /^\w+@\w+\.\w{2,4}$/i;
	
	if (!r.test(emailValue)) {
    	mistake.innerHTML += '<br>Введите, пожалуйста, ваш реальный email';
		valid = false;
	}

	if (valid) {
		mistake.innerHTML += '<br>Ваше сообщение отправлено';
		document.forms["contactForm"].reset();
	}
	return valid;

}

function mistakeClear() {
   document.getElementById('response').innerHTML="";
}

