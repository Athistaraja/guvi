1) movie class

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(arr) {
        let pgArray = arr.filter((movie) => movie.rating == "PG");
        return pgArray;
    }
}

let a = new Movie("Casino Royale", "Eon Productions", "PG13");
let b = new Movie("Inception", "Warner Bros", "PG");
let c = new Movie("Iron Man", "Marvel Studios");
let d = new Movie("Orphan", "Dark Castle Entertainment", "PG13");
let e = new Movie("Cars", "Pixar", "G");

console.log(Movie.getPG([a, b, c, d, e]));

2) Circle Area 

class Circle {
	    constructor(R){
	        this.radius = R;
	        }
	    getArea(){
          return Math.PI*Math.pow(this.radius, 2)
	    }
	    getPerimeter(){
	        return 2*Math.PI*this.radius
	    }
	}
			
	let q = new Circle(1);
	console.log(q.getArea());
 	console.log(q.getPerimeter());



3) Write a “person” class to hold all the details.
     
class Student{
  constructor(a,b,c,d){
    this.studentname = a;
    this.regno = b;
    this.email = c;
    this.address = d;
  }
  
  addr(){
  return "The name of the student is"+this.studentname+"and Reg No is"+this.regno;
  }
  }
  
  var s1= new Student("Raja",3006,"atghisraja45@gmail.com","chennai");
  console.log(s1.addr());

4)write a class to calculate the uber price.


    let baseFee = .44
    let cities = ["Providence", "Boston", "New York", ]
    let uberRates = [5, 10, 15]
    // DRY = don't REPEAT yourself
    //prompts to customer
    let customerName = "Wendy" //prompt("What is your name?")
    let customerCity = "Providence" //prompt("What is your city?")
    //after the prompts, log to console customerName and welcome
    console.log("Hello", customerName+ ", welcome to the Uber Rate Program")
    //function that will getRate based on customerCity
    function getRate(customerCity) {
      //uberRate function that will calculate the rate based on customerCity and index
      function uberRate(customerCity, index) {
        //calculate the final rate
        let finalRate = (uberRates[index]) * baseFee
        return finalRate
      }
      //log to the console customerCity and the finalRate after calling function uberRate and passing customerCity and index as parameters
      console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
    }
    //call the getRate function passing in the customerCity arugment
    getRate(customerCity)