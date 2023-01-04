export class Visitor {
    constructor(id, firstName, lastName, address, city, state, zip, phone, email){
       this.id = id;
       this.firstName = firstName;
       this.lastName = lastName;
       this.address = address;
       this.city = city;
       this.state = state;
       this.zip = zip;
       this.email = email;
       this.phone = phone;
       //etc.
    }
    get fullName(){ 
        //returns concatenated first and last name fields 
        return this.firstName + " " + this.lastName; 
    }
    get fullAddress() {
        //returns concatenated address fields
        return this.address + " " + this.city + " " + this.state + " " + this.zip;
    }
 }
 
export let visitors = [ 
  new Visitor(1,"Rand","Al'Thor","1234 Dragonmount lane","Two Rivers","Utah","84664","555-555-5555","rand@gmail.com"),
  new Visitor(2,"Kaladin","Stormblessed","1234 Surgeon lane","Hearthstone","Utah","84664","555-555-5555","kal@gmail.com")
];
 
export function modelAddVisitor(visitor) {
     //adds new visitor object to your array
    visitors.push(visitor);
}

export function modelDeleteVisitor(id) {
     //removes visitor object with given 'id' from array
    for(let i=0;i<visitors.length;i++){
        if(visitors[i].id == id) visitors.splice(i,1);
    }
    for(let i=0;i<visitors.length;i++){
        visitors[i].id = i + 1;
    }
}

export function findVisitor(id) {
     //returns visitor object with given 'id' from array
    for(i=0;i<visitors.length;i++){
        if(visitors[i].id == id) return visitors[i];
    }
}

export function findVisitorIndex(id) {
     //returns index in the array of the visitor object with given 'id'.  Handy when trying to delete an object
    for(i=0;i<visitors.length;i++){
        if(visitors[i].id == id) return i;
    }
}

export function modelUpdateVisitor(visitor) {
     //finds and updates a visitor object a your array}   //Only for extra credit 'edit' function
}