//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

var favoriteThings = {
  band: "Violet Helm",
  food: "Tacos",
  person: "Marcos",
  book: "Pride and Predjudice",
  movie: "Monty Python",
  holiday: "Christmas"
}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = "Jeep";
favoriteThings.brand = "Nestle";

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";

//Now, alert your favorite person, then alert your favorite book.

  alert(favoriteThings.person);
  alert(favoriteThings.book);



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

  for(var key in user) {
    if(!user[key]) {
      delete user[key]
    }
  }

//Once you get your truthy array, Change the remaining values in the array to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //How do I get an array?
  user.name = "Kellee Martins";
  user.email = "kelleemartins@gmail.com";
  user.pwHash = "asdfjkl";
  user.birthday = "Feb. 1, 1992";
  user.username = "kellsbells";
  user.age = 22;

//Now console.log your object and make sure it looks right.

console.log (user);





//create an empty object called methodCollection. 

 var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

methodCollection.alertHello = function_name;


//Now call your alertHello and logHello methods. 

  //Your code here











