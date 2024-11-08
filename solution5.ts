{



    // 

    type GetPropertyFn = <T, K extends keyof T>(inputObject: T, inputObjectKey: K) => T[K];

    const getProperty: GetPropertyFn = (inputObject, inputObjectKey) => {

        return inputObject[inputObjectKey];
        
    };



    // Sample Input
    // const person = { name: "Alice", age: 30 };
    // console.log(getProperty(person, "name"));
    // console.log(getProperty(person, "age")); 





}