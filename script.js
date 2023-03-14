//نام کاربر را در آرایه جستوجو کرده درصورت عدم موجودیت کاربر را به ابتدای لیست اضافه نماید
const users = [ 'mahdi' , 'mobin' , 'mina' , 'sina' , 'ahmad' ]
if(users.includes('faeze')){
    console.log('کاربر وجود دارد')
}else{
    console.log('کاربر وجود ندارد')
    users.unshift('faeze')
}
console.log( 'لیست جدید' + ':' +users)