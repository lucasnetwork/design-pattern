abstract class TemplateDatabase{
    
    protected abstract detalhesEspecificos():void
    
    efetuarConsulta(){
        console.log("query template")

        this.detalhesEspecificos()
    }



}

class Oracle extends TemplateDatabase{
    protected detalhesEspecificos(): void {
        console.log("query oracle")
    }
}

class SQL extends TemplateDatabase{
    protected detalhesEspecificos(): void {
        console.log("query sql")
    }
}


function consultar(query:TemplateDatabase){
    query.efetuarConsulta()
}

consultar(new SQL())
