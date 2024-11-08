

{

    type Circle = {
        shape: 'circle';
        radius: number
    };
    
    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number

    };

    type Shape = Circle | Rectangle;


    const calculateShapeArea = (inputForShape: Shape) : number => {
        
        if (inputForShape.shape === 'circle') {
            return parseFloat((Math.PI * inputForShape.radius ** 2).toFixed(2));
        } else {
            return inputForShape.height * inputForShape.width;
        }

        return 0;
    }


    const circleInput: Shape = {
        shape: 'circle',
        radius: 5
    }
    const rectangleInput: Shape = {
        shape: 'rectangle',
        width:10,
        height: 12
    }

    // call function with objects 
    // console.log(calculateShapeArea(circleInput));
    // console.log(calculateShapeArea(rectangleInput));

    // console.log(calculateShapeArea(
    //     {
    //     shape: "rectangle",
    //     width: 4,
    //     height: 6,
    //     }
    // ));



}