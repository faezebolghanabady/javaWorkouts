function buyProduct( productCount , productPrice , credit){
    
    let buy = productCount > 0 && productPrice > credit ;
    console.log(buy)
}

buyProduct( 3 , 200 , 5000)