function calcularDescuento(){

    let opcion=prompt("Escribi aqui el precio al que deseas aplicar el descuento")
    let opcion2=prompt("Escribi aqui el % de descuento que quieras aplicar a " + opcion)

    let calculo=( opcion * opcion2 / 100)
    let calculo2=(opcion-calculo)

    alert ("El decuento que se va a aplicar es de " + calculo );

    alert ("El precio final con el descuento incluido es de " + calculo2)

    }





