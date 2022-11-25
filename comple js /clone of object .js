//clone object using object.assign

const object = {
    key1:"value1",
    key2:"value2"
  }
  
  object.key3="value3";
  console.log(object);
  const object2= Object.assign({},object);
  
  console.log(object2);

