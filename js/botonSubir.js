$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

	$("#warningAge").addClass("warningAge");
	$("#warningKm").addClass("warningAge");

	$("#age").change(function(){

		if($("#age").val()  > 1995 && $("#age").val() <= 2022){
			$("#age").removeClass("añoError");
			$("#warningAge").addClass("warningAge");
			$("#btncotizar").removeAttr('disabled','disabled')
		
		} else {
			$("#age").addClass("añoError");
			$("#warningAge").removeClass("warningAge");
			$("#btncotizar").attr('disabled','disabled');
		

		}


	



	});

	
		$("#km").change(function(){

			if(isNaN($("#km").val())){
				$("#km").addClass("añoError");
				$("#btncotizar").attr('disabled','disabled');
				$("#warningKm").removeClass("warningAge");
			} else {
				$("#km").removeClass("añoError");
				$("#btncotizar").removeAttr('disabled','disabled')
				$("#warningKm").addClass("warningAge");
			}
		});
});