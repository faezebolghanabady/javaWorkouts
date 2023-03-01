//find , findIndex
let users = [
    {
        name :'faeze',
        family : 'bolghanabady',
        id : 23 ,
    },
    {
        name :'sina',
        family : 'porjalal',
        id : 23 ,
    },
    {
        name :'mahdi',
        family : 'khomarian',
        id : 23 ,
    }
]

let admin = users.find(function(user){
    return user.name === 'sina'
})

console.log(admin)

