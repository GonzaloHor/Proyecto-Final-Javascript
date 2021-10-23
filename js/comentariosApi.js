
document.addEventListener("DOMContentLoaded", function(){
        
    let btnCotizar =  document.getElementById("btncotizar");
    const cajaCotizaciones = document.getElementById("cajaCotizaciones");
    btnCotizar.addEventListener("click",realizarCotización);

    // Conexión a Api para "comentarios de clientes"

    const URLGET = "https://randomuser.me/api/"

        for (i = 0; i < 2; i++){
            $.get(URLGET, function (response, estado, state) {
                if(state.status === 200){
      
      
              
                  let nombre = response.results[0].name;
                  let foto = response.results[0].picture.large;

      
    
      
              var Frases=new Array()
              Frases[0] = "De las mejores coberturas que puede tener en mi vida, desde que la contrate me cambio la vida ";
              Frases[1] = "Nunca tuve una cobertura que respondió tan rapido a un siniestro, la verdad super satisfecho, muy recomendable";
              Frases[2] = "Si tendría que describir esta cobertura, diría que es como una milanesa a caballo completa, con papas y un buen postre, perfecta...";
              Frases[3] = "Nada de que quejarme, respondieron a tiempo y forma cuando tuvieron que, y de yapa me dieron un descuento cuando quise dar de baja, unos copados";
              Frases[4] = "Este seguro fue lo mejor que me paso en la vida, en mis 40 años nunca tuve una cobertura tan perfecta, tan justa y barata, dale contrata";
              Frases[5] = "Una de las mejores coberturas del mercado, no duden en contratar";
              Frases[6] = "Me la recomendó un amigo, la verdad no le tenía mucha fe, pero al final me termino sorprendiendo la calidad del servicio";
              Frases[7] = "Excelente cobertura, duda un poco al principio de contratarla, pero después de que lo pensé bien, contrate y me gusto";



      
      
              var Q = Frases.length;
      
              var numAleatorio=Math.round(Math.random()*(Q-1));
      
      
          
              $("#cajaComentarios").prepend(`
              
              
                      <div class="col-6 d-flex cajaComentario">
                          <div>
                              <img class="imgCliente" src="${foto}" alt="">
                          </div>
      
                          <div class="d-flex flex-column text-start ms-4">
                              <h3><strong>${nombre.first}</strong></h3>
                              <h4><strong>${nombre.last}</strong></h4>
                              <p class="cajaComentariosClientes" >" ${Frases[numAleatorio]} "</p>
                          </div>
                      </div>
                      
                      
                      
                      `);
      
                  } else console.log('Fallo el pedido');
              });
      
        }

    
});


