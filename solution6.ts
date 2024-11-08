{



interface Profile {
    name: string;
    age: number;
    email: string;
}


    
const updateProfile = (profileInput: Profile, updates: Partial<Profile>): Profile => {
   
    if (Object.keys(updates).length > 1 || Object.keys(updates).length<1) {
        console.log("Error: Only single key-value pair is accepted in the second argument.");
        return profileInput;
    }

    const x = Object.keys(updates)[0]
    let profileKeys: string[] = Object.keys(profileInput);


    if (!profileKeys.includes(x)) {
        console.log(`Invalid key "${x}" in updates.`);
        return profileInput;
    }


    return { ...profileInput, ...updates };

  
};

// Sample usage
const currentProfile: Profile = { name: "Alice", age: 30, email: "alice@example.com" };
    // const updatedProfile = updateProfile(currentProfile, { age: 31, name:'hello' });
const updatedProfile = updateProfile(currentProfile, { age: 31 });
console.log(updatedProfile); 


    
    
    
    
    
    

}