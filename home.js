$('a[href*="#"]:not([href="#"])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			        $('html, body').animate({
			          scrollTop: target.offset().top
			        }, 1000);
			        return false;
			      }
			    }
			  });

  			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scroll-top').fadeIn();
					$('nav').addClass('background');
				} else {
					$('.scroll-top').fadeOut();
					$('nav').removeClass('background');
				}

				//Click event to scroll to top
			$('.scroll-top').click(function(){
				$('html, body').animate({scrollTop : 0},800);
				return false;
				});
			});

			function validateText(id) {
		if($("#"+id).val()==null || $("#"+id).val()=="") {
			var div = $("#"+id).closest("div");
			div.removeClass("has-success");
			$("#glypcn"+id).remove();
			div.addClass("has-error has-feedback");
			div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
			return false;
		} else {
			var div = $("#"+id).closest("div");
			div.removeClass("has-error");
			div.addClass("has-success has-feedback");
			$("#glypcn"+id).remove();
			div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
			return true;
		}
	}

	$(document).ready(
		function() {
			$("#contactbtn").click(function(){
				if(!validateText("contactname")){
					return false;
				}
				if(!validateText("contactemail")){
					return false;
				}
				if(!validateText("contactsubject")){
					return false;
				}
				if(!validateText("contactmessage")){
					return false;
				}
			
				$("form#contactform").submit()

			});
		}


		);
