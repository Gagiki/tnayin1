let TashirPizza = {
    color:"red and yellow",
    area:"two-story",
    consistOf:{
        sad:2,
        word:1,
        kitchen:2,
        sink:1,
        toilet:2,
        warehouse:2,
    },
    size:{
        hegiht:5600,
    width:10500,
},
workers:50,
manager:2,
word:4,
kitchen:10,
dishwasher:4,
cleaner:6,
sad:{
    table:52,
    chair:208,
},
pizza_menu:{
    menu:true,
    pizza_count:24,
    salad:10,
    Spaghetti:20,
    drink_kind_of:20,
    madeIn:"Italy",
},
managers:[{
    name:"Poxos",
    phoneNumber:"+395874215",
    age:38,
    name:"Qnarik",
    phoneNumber:"+395876589",
    age:60,
},
],
};
function makeTashirPizza (
    color,
    area,
    workers,
    manager,
    kitchen,
    dishwasher,
    cleaner,


){
return {
    color,
    area,
    workers,
    manager,
    kitchen,
    dishwasher,
    cleaner,

};
};
function makeConsistOf (
            sad,
            word,
            kitchen,
            sink,
            toilet,
            warehouse,
        
   
    ){
        return {
            sad,
            word,
            kitchen,
            sink,
            toilet,
            warehouse,
    
        };
    };
    console.log(makeConsistOf);
    
    function makeManagers (
        name,
        phoneNumber,
        age,
        name,
        phoneNumber,
        age,
    

){
    return {
        name,
        phoneNumber,
        age,
        name,
        phoneNumber,
        age,

    };
};
console.log(makeManagers);

let tashirPizza = makeTashirPizza("red and yellow","two-story",50,2,4,10,4,6);
let managerOfPoxos =makeManagers("Poxos","+395874215");
console.log(makeTashirPizza("red and yellow","two-story",50,2,4,10,4,6));
// clone
let managers = {
    name,
    phoneNumber:"+395876589",
    age:60,
   
};
let newManagers = JSON.parse(JSON.stringify(managers));
managers = "Qnarik";
console.log(managers);
console.log(newManagers);

    


