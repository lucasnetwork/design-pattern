class Header{
    init(){
        console.log("header")
    }
}

class Footer{
    init(){
        console.log("footer")
    }
}

class Main{
    init(){
        console.log("main")
    }
}

class FacadeWindows{
    private header:Header
    private footer:Footer
    private main:Main

    constructor(){
        this.header = new Header()
        this.footer = new Footer()
        this.main = new Main()
    }

    show(){
        this.header.init()
        this.footer.init()
        this.main.init()
    }
}

const fWindow = new FacadeWindows()
fWindow.show()