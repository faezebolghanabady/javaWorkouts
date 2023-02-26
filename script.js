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

//کلون کردن آبجکت
const admin = {...users}
console.log(admin)
