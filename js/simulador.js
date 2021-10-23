

function realizarCotización(event) {

    let btnCotizar =  document.getElementById("btncotizar");

    event.preventDefault();

    cotizadorDeAuto();




    let age = document.getElementById("age").value;
    let km = document.getElementById("km").value;


    if (age == "" || km == ""){
        alert("Por favor, para poder cotizar, completa todos los datos");
        return
    } else {



        let carga = $("#preloader");

        for(i = 0; i < 1000;i++){
            carga.addClass("preloader");
        }
    
    
        setTimeout(function() {
            
        carga.removeClass("preloader");
        
        let vehicleAswer =  JSON.parse(localStorage.vehicleAswer);
    
        cajaCotizaciones.innerHTML += `<h2 class="mensajeDatosauto">Te comentamos las coberturas diponibles para tu vehículo ${vehicleAswer.modelo} del año ${vehicleAswer.age}, con un kilometraje de ${vehicleAswer.km} km y tu zona de residencia en  ${vehicleAswer.residenceZone}</h2>`
        
    
    
        cajaCotizaciones.innerHTML += `<div class="card ms-4 mb-4 mt-4 d-inline-flex cajasCoti" style="width: 19rem;">
        <div class="card-body">
        <h5 class="card-title cajasDentro"><strong>Reposabilidad Civil</strong></h5>
        <h5 class="card-title">Precio del seguro : $ ${vehicleAswer.precio}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Cobertura Básica</h6>
        <p class="card-text">Una cobertura básica para que puedas circular</p>
        </div>`;
    
        cajaCotizaciones.innerHTML += `<div class="card ms-4 mb-4 mt-4 d-inline-flex cajasCoti" style="width: 19rem;">
        <div class="card-body">
        <h5 class="card-title cajasDentro"><strong>Terceros Básicos</strong></h5>
        <h5 class="card-title">Precio del seguro : $ ${vehicleAswer.precio + 1700}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Cobertura Intermedia</h6>
        <p class="card-text">Un plan completo para proteger tu auto</p>
        </div>`;
    
        cajaCotizaciones.innerHTML += `<div class="card ms-4 mb-4 mt-4 d-inline-flex cajasCoti" style="width: 19rem;">
        <div class="card-body">
        <h5 class="card-title cajasDentro"><strong>Contra todo Riesgo</strong></h5>
        <h5 class="card-title">Precio del seguro : $ ${vehicleAswer.precio * 3}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Cobertura Avanzada </h6>
        <p class="card-text">La mejor cobertura que vas a encontrar en el mercado</p>
        </div>`;
        
    
    
        
        
        }, 2000);
    
    
        btnCotizar.setAttribute('disabled','disabled')
    





    }


}


function cotizadorDeAuto(){




    class vehicle {
        constructor(model ,age ,residenceZone ,km){
            this.model = model;
            this.age = age;
            this.residenceZone = residenceZone;
            this.km = km;
        }
    }
    
    let model = document.getElementById("model").value;
    let age = document.getElementById("age").value;
    let residenceZone = document.getElementById("residenceZone").value;
    let km = document.getElementById("km").value;

 
    
    
    const vehicleAswer = new vehicle(model, age, residenceZone, km);
 
    if (age >= 1995 && age <= 2022){
        let price = 0;

        if (age <= '2000'){
            price = price + 1500;
        } else if (age <= '2005'){
            price = price + 1700;
        }  else if (age <= '2010'){
            price = price + 1300;
        }  else if (age <= '2015'){
            price = price + 1100;
        } else if (age <= '2021'){
            price = price + 1400;
        } else if (age >= '2022'){
            price = price + 1000;
        }
    
        if (model == 'Renault'){
            price = price + 1000;
        } else if (model == 'Fiat'){
            price = price + 1700;
        }  else if (model == 'Peugeot'){
            price = price + 1400;
        }  else if (model == 'Volkswagen'){
            price = price + 1100;
        }


        vehicleAswer.precio = price;
        vehicleAswer.modelo = model;

        let cotización = JSON.stringify(vehicleAswer);
        localStorage.setItem("vehicleAswer", cotización)


    
    } else {
        return
    } 

}
