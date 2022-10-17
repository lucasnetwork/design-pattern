class DataBase{
    private static instance :DataBase

    private constructor(){}

    static setInstance(){

        if(!this.instance){
            this.instance = new DataBase()
        }

        return this.instance
    }
}

class CrudExample{
    database:DataBase

    constructor(){
        this.database = DataBase.setInstance()
    }

    save(){

    }
}

class CrudExample2{
    database:DataBase

    constructor(){
        this.database = DataBase.setInstance()
    }

    save(){

    }
}

const crudExample = new CrudExample()
const crudExample2 = new CrudExample2()

console.log("Verificando se as instancias do banco de dados são as mesmas")
console.log(crudExample.database === crudExample2.database)