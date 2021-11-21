


let balance = 0;
let opt= []

const registro = (tipo, valor) => {

    opt.push({
        tipo,
        valor
    })


    valor = parseInt(valor)

    if (tipo === "ingreso") {
        balance += valor;
    }

    if (tipo === 'egreso') {
        balance -= valor;
    }

    console.log(balance);
    console.log(opt);
   //     localStorage.setItem("balance", JSON.stringify(balance))
}



const metaCumplida = (meta)=>{

//let bal = JSON.parse(localStorage.getItem("balance")) 

        if(balance> meta){
            return "cumple"
        }else{
            return "no cumple"
        }


}


module.exports.registroOperacion = registro
module.exports.metaCumplida = metaCumplida