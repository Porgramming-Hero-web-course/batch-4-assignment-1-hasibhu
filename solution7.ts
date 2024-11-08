{

    //


    class Car {
        make: string;
        model: string;
        year: number

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year= year
        }


        getCarAge() {
            const currentYear = new Date().getFullYear()

            if (this.year > currentYear) {
                console.log("Future date is not possible as a car production year.");
            } else {
                console.log(currentYear - this.year);
            }
        }



    }


    // testing input 
    
        // const car = new Car("Honda", "Civic", 2007);
        // car.getCarAge();








    //

}