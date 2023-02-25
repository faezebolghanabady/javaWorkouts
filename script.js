//Constructor Function

function Users(name, family, id ){
    this.name = name;
    this.family = family;
    this.id = id;
    this.registration = function(){
        console.log('ثبت نام با موفقیت انجام شد')
    }

}

const user = new Users('faeze' , 'bolghanabady' , 23);
console.log(user)

const user1 = new Users('sina' , 'porjalal' , 24)
console.log(user1)