{
    //

    type Numbers = number[];

    const removeDuplicates = (arrayOfNumbers:Numbers): Numbers => {
        
        const uniqueNumbers: Numbers = [];

        for (const number of arrayOfNumbers) {
            if (!uniqueNumbers.includes(number)) {
                uniqueNumbers.push(number)
            }
        }

        return uniqueNumbers;
    }

    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 7, 3, 7, 5]));



//


}