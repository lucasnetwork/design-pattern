abstract class ImpostoStrategy{
    abstract calcularImposto():void
}

class ImpostoBrasil extends ImpostoStrategy{
    calcularImposto() {
        console.log("imposto Brasil")
    }
}

class ImpostoEUA extends ImpostoStrategy{
    calcularImposto() {
        console.log("imposto EUA")
    }
}

class ImpostoCanada extends ImpostoStrategy{
    calcularImposto() {
        console.log("imposto Canada")
    }
}

class PedidoVenda{
    private strategy:ImpostoStrategy

    constructor(strategy:ImpostoStrategy){
        this.strategy = strategy
    }

    efetuarVenda(){
       return this.strategy.calcularImposto()
    }
}

const venda = new PedidoVenda(new ImpostoBrasil())
const venda2 = new PedidoVenda(new ImpostoEUA())
venda.efetuarVenda()
venda2.efetuarVenda()

