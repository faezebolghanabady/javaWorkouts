//object

const users = {
    user1 :{
        name :'faeze',
        family : 'bolghanabady',
        id : 23 ,
    },
    user2 :{
        name :'sina',
        family : 'porjalal',
        id : 23 ,
    },
    user3 :{
        name :'mahdi',
        family : 'khomarian',
        id : 23 ,
    }
}

//template
let admin = `hi ${users.user1.name}  welcome`
let information = ` other admins ${ users.user2.family } and ${users.user3.family}`
console.log(admin , information)