class Worker{
    constructor(firstname,lastname,rate,hours,overtime=0) {
        this._firstname=firstname
        this._lastname=lastname
        this._rate=rate
        this._hours=hours
        this._overtime=overtime
        if (this._hours > 160) {
            this._overtime = this._hours - 160
            this._hours = 160
        }
    }
    get fullname(){
        return this._firstname+" "+this._lastname
    }
    get Salary()
    {
        return (this._hours+this._overtime)*this._rate
    }

}

class SoftwareEngineer extends Worker {
    constructor(firstname,lastname,rate,hours,overtime,position,role) {
        super(firstname,lastname,rate,hours,overtime)
        this._position=position
        this._role=role
            if(position.toLowerCase()!=="junior" && position.toLowerCase()!=="middle" && position.toLowerCase()!=="senior"){
                this._position="wrong position"
            }
            if (role.toLowerCase()!=="backend" && role.toLowerCase()!=="frontend" && role.toLowerCase()!=="fullstack"){
                this._role='wrong role'
            }

    }
    get bonusCoefficient(){
        this.bonuscof=0
        if(this._position=="junior"){
            this.bonuscof=1.2
        }
        if(this._position=="middle"){
            this.bonuscof=1.5
        }
        if(this._position=="senior"){
            this.bonuscof=1.8
        }

        if (this._role=="backend"){
            this.bonuscof+=0.2
        }
        if (this._role=="frontend"){
            this.bonuscof+=0.3
        }
        if (this._role=="fullstack"){
            this.bonuscof+=0.4
        }
        return this.bonuscof

    }
    get bonus(){
        return this._overtime*this._rate*2*this.bonusCoefficient
    }
    get fullsalary(){
        return this.Salary+this.bonus

    }
    getfullinfo(){

        return this
    }
}
const worker=new Worker("Иванов","Иван","17.5","178","")
console.log(worker)

console.log(worker.fullname)
const eng= new SoftwareEngineer("Иванов","Иван","17.5","178","","junior","fullstack")

console.log(eng)
console.log(eng.bonusCoefficient)
console.log(eng.bonus)
console.log(eng.fullsalary)

console.log("info")
console.log(eng.getfullinfo())

