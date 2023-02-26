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

//چک کردن یک پراپرتی در یک آبجکت
if('user1' in users){
    console.log('yes')
    console.log('user1' in users)
}else{
    console.log('No')
}