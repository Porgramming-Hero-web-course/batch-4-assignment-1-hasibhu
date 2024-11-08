{
    //
    

    // interface Profile {
    //     name: string;
    //     age: number;
    //     email: string;
    // }

    // type InputObject<T> = <T>
    // type InputKey<T> = 

    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
    
        return keys.every((key) => key in obj);
    };

        
        
    // Test cases
    const person = { name: "Alice", age: 25, email: "alice@example.com" };

    // Valid keys
    console.log(validateKeys(person, ["name", "age"])); // Output: true
    console.log(validateKeys(person, ["email"])); // Output: true







    //
}