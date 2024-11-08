// hello
// https://github.com/Porgramming-Hero-web-course/batch-4-assignment-1-hasibhu

{
  
    const sumArray = (numberOfArray: number[]): number => {
        
        const sumofArray = numberOfArray.reduce((summ, currentNumber) => summ + currentNumber, 0);

        return sumofArray;
    }


    // Testing input
    
    // console.log(sumArray([1, 2, 3, 4, 5]));
    // console.log(sumArray([10, 20, 30, 40, 50]));
}