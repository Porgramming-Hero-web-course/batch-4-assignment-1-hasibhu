{
    //
    


    const validateKeys = <T extends object>(inputObject: T, keysOfInputObject: (keyof T)[]): boolean => {
    
        return  keysOfInputObject.every((keyOfInputObject) => keyOfInputObject in inputObject);
    };

        
        
    // Test cases
    // const person = { name: "Alice", age: 25, email: "alice@example.com" };

    // Valid keys
    // console.log(validateKeys(person, ["name", "age"]));
    // console.log(validateKeys(person, ["email"]));







    //
}