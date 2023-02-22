
//تمرینی برای  عملگر ها که در آن چنانچه کاربر پول کافی داشته باشد و محصول نیز وجود داشته باشد 
//به عبارتی هر دو شرط برقرار باشد مقدار true 
//وگرنه مقدار false
function buyProduct( productCount , productPrice , credit){
    
    let buy = productCount > 0 &&  credit > productPrice ;
    console.log(buy)
}


buyProduct( 3 , 100 , 5000)