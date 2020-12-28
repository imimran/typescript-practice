

enum Role { ADMIN, USER, AUTHOR}
const person = {
    name: 'Imran',
    age: 28,
    hobbies: ['Sports', "Cooking"],
    roles: [2, 'author'],
    role: Role.ADMIN
}

console.log(person.name);
for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    //console.log(hobby.map());    
}

if (person.role === Role.ADMIN){
    console.log("is admin");
    
}


 