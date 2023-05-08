
const user = {
    name : 'faeze' ,
    family : 'bolghanabady',
}

console.log(user);

const newUser = Object.assign({age : 24} ,user )
console.log(newUser);

const users = {name : 'mobin' , ...user }
    console.log(users);