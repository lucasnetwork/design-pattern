abstract class DataBase{
    abstract save():void   
}

class DatabaseA extends DataBase{
    save(): void {
        console.log("save in dataBaseA")
    }
}

class DatabaseB{
    create(){
        console.log("create in dataBaseB")
    }
}

class AdapterDatabaseB extends DataBase{
    private databaseB:DatabaseB
    constructor(){
        super()
        this.databaseB = new DatabaseB()   
    }
    save(){
        this.databaseB.create()
    }
}

function salvar(database:DataBase){
    database.save()
}

salvar(new DatabaseA())
salvar(new AdapterDatabaseB())