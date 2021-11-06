

function Purchase()
{
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let categoria = parseInt(document.getElementById("categoria").value);
    let precio = 200;
    let total

    

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

}

function Delete()
{
    document.getElementById("total").innerHTML = "Total a pagar: $ ";
}