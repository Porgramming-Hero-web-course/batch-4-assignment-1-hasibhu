{

//

    const countWordOccurrences = (sentence: string, word: string): number => {
        
        let wordCount: number=0;
        const senSplit = sentence.split(' ');

        console.log(senSplit);

        if (word.trim().length === 0 || word.split(' ').length > 1) {
        console.log('Please insert only 1 word in 2nd argument.');
        return 0; 
        }


        for (let i = 0; i < senSplit.length; i++){
            if (senSplit[i].toLowerCase() === word.toLowerCase()) {
                wordCount += 1;
            }
        }
        

        return wordCount;


    }


    // testing input 

    // console.log(countWordOccurrences("TypeScript is great. I love TypeScript", "typescript"));

    





//

}