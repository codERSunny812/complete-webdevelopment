// sort method in arrays 

const array = [1,2,4,5,6,7,8,9];

// sort merthod change the array 

 

 console.log(array.sort());

//  its  based on the ascii code 

array.sort((a,b)=>{
    return a-b;
})

console.log(array);

// how it's working 


// 2,4
// if a- b is + then number are replaced with each other  and if it come out to be - the no are placed as it's 

const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 3000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
   { productId: 5, produceName: "p5",price: 500}
    ]


    // low to  high sort 

    product.sort(
        (a,b) =>{
            return (a.price -b.price);

        }
    );

    console.log(products);

