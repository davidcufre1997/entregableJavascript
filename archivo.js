function saqueSuTurno(){
    
    for (let i=0; i<10; i++){
        let opcion = prompt("Introduzca el nombre del paciente");
        alert ("Buenos dias " + opcion+ ", le informamos que su turno es el Nº " + i+ " con el doctor Saravia. Dia Lunes a partir de las 8:00")

    let confirmar = confirm('Quiere agregar otro turno?')
        if(!confirmar){
            alert('muchas Gracias')
            break
        }
    }
}



