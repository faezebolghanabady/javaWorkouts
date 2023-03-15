//نام کاربر را در آرایه جستوجو کرده درصورت عدم موجودیت کاربر را به ابتدای لیست اضافه نماید
const users = [ 
    user1 = {
        name:'faeze',
        family:'bolghanabady',
        id:9595
    },
    user2 = {
        name:'mina',
        family:'bolboly',
        id:958
    },
    user1 = {
        name:'sina',
        family:'ahmadi',
        id:95581
    },
    user1 = {
        name:'nima',
        family:'hashemy',
        id:9785
    },
    user1 = {
        name:'ahmad',
        family:'bolbolyy',
        id:959321
    },

 ]

const resalt = users.find(function(user){
    return user.id ===9785
})
console.log(resalt)
console.log(کاربر مورد نظر )