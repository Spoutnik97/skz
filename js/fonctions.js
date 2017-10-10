

$(document).ready(function() {
    $('select').material_select();
  });

 $(function() {

	$(document).ready(function() {
        // Sections height

            var sH = $(window).height() + 30;
            $('.img_fullscreen').css('height', sH + 'px');
			$('.img_fullscreen').css('width', $(window).width());
			$('.sfullscreen').css('min-height', sH + 'px');
			$('.sfullscreen').css('width', $(window).width());
			$('iframe').css('height', sH*0.70 + 'px');
			$('iframe').css('width', $(window).width() * 0.7 + 'px');

			/*var options = [{selector: '#monpack_infos', offset: 500, callback:
						function(el) { Materialize.showStaggeredList($(el)); } }}];
			Materialize.scrollFire(options); */
			var options = [
		{selector: '#mon_pack', offset: 300, callback: function(el){Materialize.showStaggeredList('#monpack_infos');}},
		{selector: '#historique', offset: 300, callback: function(el){Materialize.showStaggeredList('#historique');}}
		];
		Materialize.scrollFire(options);


		/*Scroll smooth*/
		$('a[href^="#"]').on('click', function(evt){
               // bloquer le comportement par défaut: on ne rechargera pas la page
               evt.preventDefault();
               // enregistre la valeur de l'attribut  href dans la variable target
        		var target = $(this).attr('href');
               /* le sélecteur $(html, body) permet de corriger un bug sur chrome
               et safari (webkit) */
        		$('html, body')
               // on arrête toutes les animations en cours
               .stop()
               /* on fait maintenant l'animation vers le haut (scrollTop) vers
                notre ancre target */
               .animate({scrollTop: $(target).offset().top}, 1000 );
        });

        $('.switch_masque input[type=checkbox]').on('click', function(evt){
            if($(this).prop('checked') == true){
               $('#choix_masque').css('display', 'block');
           }
           else {
               $('#choix_masque').css('display', 'none');
           }
       });

       $('.masque').on('mouseover', function(evt){
           if($('#couleur_cadre').val() == 1){
               if($('#couleur_verre').val() == 1){
                  $('.img_ryft').attr('src', 'images/masque/ryft_11.jpg');
               }
               else if ($('#couleur_verre').val() == 2) {
                   $('.img_ryft').attr('src', 'images/masque/ryft_12.jpg');
               }
               else if ($('#couleur_verre').val() == 3) {
                   $('.img_ryft').attr('src', 'images/masque/ryft_13.jpg');
               }
           }
           else if($('#couleur_cadre').val() == 2){
               if($('#couleur_verre').val() == 1){
                  $('.img_ryft').attr('src', 'images/masque/ryft_21.jpg');
               }
               else if ($('#couleur_verre').val() == 2) {
                   $('.img_ryft').attr('src', 'images/masque/ryft_22.jpg');
               }
               else if ($('#couleur_verre').val() == 3) {
                   $('.img_ryft').attr('src', 'images/masque/ryft_23.jpg');
               }
           }
           else if($('#couleur_cadre').val() == 3){
               if($('#couleur_verre').val() == 1){
                  $('.img_ryft').attr('src', 'images/masque/ryft_31.jpg');
               }
               else if ($('#couleur_verre').val() == 2) {
                   $('.img_ryft').attr('src', 'images/masque/ryft_32.jpg');
               }
               else if ($('#couleur_verre').val() == 3) {
                   $('.img_ryft').attr('src', 'images/masque/ryft_33.jpg');
               }
           }
           else if($('#couleur_cadre').val() == 4){
               if($('#couleur_verre').val() == 1){
                  $('.img_ryft').attr('src', 'images/masque/ryft_41.jpg');
               }
               else if ($('#couleur_verre').val() == 2) {
                   $('.img_ryft').attr('src', 'images/masque/ryft_42.jpg');
               }
               else if ($('#couleur_verre').val() == 3) {
                   $('.img_ryft').attr('src', 'images/masque/ryft_43.jpg');
               }
           }
           else if($('#couleur_cadre').val() == 5){
               if($('#couleur_verre').val() == 1){
                  $('.img_ryft').attr('src', 'images/masque/ryft_51.jpg');
               }
               else if ($('#couleur_verre').val() == 2) {
                   $('.img_ryft').attr('src', 'images/masque/ryft_52.jpg');
               }
               else if ($('#couleur_verre').val() == 3) {
                   $('.img_ryft').attr('src', 'images/masque/ryft_53.jpg');
               }
           }
           else{
               $('.img_ryft').attr('src', 'images/masque/ryft_11.jpg');
           }
       });

    });
	 });
