const lista =[]
const registrodepacientes =(event)=> {
    event.preventDefault()
let nombre=document.getElementById("nombre")
let correo=document.getElementById("correo")
let domicilio=document.getElementById("domicilio")
let numerodetelefo=document.getElementById("numero")
let problemadesalud= document.getElementById("problemadesalud")

let pacientes ={
    nombre: nombre.value,
    correo: correo.value,
    domicilio: domicilio.value,
    numero: numerodetelefo.valueAsNumber,
    problemadesalud: problemadesalud.value,
    
}

lista.push(pacientes)
mostrarlista()
}

const mostrarlista =()=>{
    let salida= document.getElementById("salida")
    salida.innerHTML=""
    lista.map((registro) =>{
        salida.innerHTML+=`
        <tr class="table-primary">
       <th> ${registro.nombre}</th>
        <th> ${registro.correo}</th>
        <th>${registro.domicilio}</th>
        <th> ${registro.numero} </th>
        <th> ${registro.problemadesalud} </th>
    </tr>
        `

        
    })

}
