// function add(n1: number, n2: number){
//     return n1 + n2
// }
// const num1 = 5
// const num2 = 2.5
// const result = add(num1, num2)
// console.log(result); 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Imran',
    age: 28,
    hobbies: ['Sports', "Cooking"],
    roles: [2, 'author'],
    role: Role.ADMIN
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //console.log(hobby.map());    
}
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
