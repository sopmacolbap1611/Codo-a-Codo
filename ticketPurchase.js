const btnBorrar = document.getElementById("btnBorrar");
const btnResumen = document.getElementById("btnResumen");

 btnBorrar.addEventListener("click", (e)=>{
     e.preventDefault();
     Delete();
 });



btnResumen.addEventListener("click", (e)=>{
    e.preventDefault();
    Purchase();
});



function Purchase()
{
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let categoria = parseInt(document.getElementById("categoria").value);
    let precio = 200;
    let total = 0;
    

    switch (categoria) {
        case 1: 

            total = cantidad * precio * 0.2;

            break;
        
        case 2:

            total = cantidad * precio * 0.5;
            
            break;
        
        case 3:

            total = cantidad * precio * 0.85;
            
            break;

        default:
            break;
    }

    document.getElementById("total").innerHTML = "Total a pagar: $ " + total;

    //alert("Vas a comprar " + cantidad + " entradas por un total de $ " + total);

}

function Delete()
{
    document.getElementById("total").innerHTML = "Total a pagar: $ ";
    document.getElementById("cantidad").placeholder = "cantidad de entradas"
   

    

}

