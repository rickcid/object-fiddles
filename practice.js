//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

var me = {
  name: "Rick",
  age: "54"
};

me.name



//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band: "Boyce Avenue",
  food: "Steak",
  person: "Wife",
  book: "Delivering Happiness",
  movie: "The Pursuit of Happiness",
  holiday: "Christmas"
}


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.
var favoriteThings = {
  band: "Boyce Avenue",
  food: "Steak",
  person: "Wife",
  book: "Delivering Happiness",
  movie: "The Pursuit of Happiness",
  holiday: "Christmas"
}

favoriteThings.car = "hoopty";
favoriteThings.brand = "Apple";


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {
  item: 'firstPocket',
}

backPack['firstPocket'] = 'chapstick';
backPack.color = 'black';

alert(backPack);

//After you do the above, alert your entire backPack object.

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backPack);




//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var me = {
  name: 'Rickster',
  age: '56',
  height: '4ft',
  gender: 'Male',
  married: 'Yes',
  eyeColor: 'Silver',
  hairColor: 'Green'
}

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for (var key in me) {
  alert(key + ": " + me[key]);
}




//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

var album = {
  "Beat It": 3.54,
  "Teen Spirit": 3.30,
  "Walk This Way": 3.50,
  "I Need Love": 3.2,
  "We Will Rock U": 3.2
};

//Now, loop through your album object alerting every song title individually.

for (var key in album) {
  alert(key);
};




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
  'Arizona': 6000000,
  'Utah': 4000000,
  'California': 30000000,
  'Nevada': 2000000,
  'Oregon': 25000
}


for (var key in states) {
  if (states[key] > 30000) {
    alert(key);
  }
};
//Now, loop through your states object and if the states population is greater than 30K, alert that state.



//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

for (var key in user) {
  if (user[key] === null || user[key] === 0 || user[key] === '' || user[key] === undefined || user[key] === NaN) {
    delete user[key];
  }
}

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.
var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

for (var key in user) {
  if (user[key] === null || user[key] === 0 || user[key] === '' || user[key] === undefined || user[key] === NaN) {
    delete user[key];
  }
}

user.name = "Rick";
user.pwHash = "U+kdjklajl";
user.username = "rickthecidster";




//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};

user.name = 'Tyler S. McGinnis';
user.email = 'tyler.mcginnis@devmounta.in';

user.sayName();
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

//Now call the sayName method that's on the user object which will alert the users email





//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = {
  alertHello: function(){
    alert("hello");
  },
  logHello: function(){
    console.log('hello');
  }
};

methodCollection.alertHello();
methodCollection.logHello();

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */
//Now call your alertHello and logHello methods.




//NEXT PROBLEM


var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
}


devMountainEmployees.push(tyler, cahlan, ryan, colt);

var removeCahlan = function() {
  for (var i = 0; i < devMountainEmployees.length; i++) {
    if (devMountainEmployees[i] === cahlan) {
      devMountainEmployees.splice(i, 1);
    }
  }
};

removeCahlan();

/*Above you're given an empty array with four objects. Fill the devMountainEmployees
array with those four objects. After that console.log the length of the Array and make
sure that it's equal to 4. */

/*Now let's say Cahlan has a mental breakdown and has to take a leave of absense to 'find himself'.
Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/






//NEXT PROBLEM




/*Now we're going to combine what we've learned today (objects) with what we learned
yesterday (arrays). Yeah, take a deep breathe. You're ready for this, promise.
Let's think back to our itunes example (tylermcginnis.com/itunes).
Notice that when you type in an artist name, iTunes gives us back a LOT of data.
What they're really giving us is an Array full of Objects. It probably looks something
like this. */

var data = [
    {
      artist: 'shakira',
      album: 'hips don\'t lie',
        tracks: 16,
    },
    {
        artist: 'shakira',
        album: 'mariposa',
        tracks: 12,
    },
    {
        artist: 'shakira',
        album: 'greatest hits',
        tracks: 19
    }
];



/*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
of Data is to have an Array full of objects. */

//Create an empty array called users.

var users = [];

var user1 = {
  name: 'Tyler McGinnis',
  email: 'tylermcginnis33@gmail.com',
  password: 'iLoveJavaScript',
  username: 'infiniateLoop'
};

var user2 = {
  name: 'Mickey Mouse',
  email: 'mickeyMouse@gmail.com',
  password: 'iLoveJavaMickey',
  username: 'infiniateMickey'
};

var user3 = {
  name: 'Daffy Duck',
  email: 'DaffyDuck@gmail.com',
  password: 'iLoveDaffy',
  username: 'infiniateDaffy'
};


var addUsers = function() {
  users.push(user1, user2, user3);
  alert(users);
};

var removeAcct = function(array, element) {
  // debugger
  for (var i = 0; i < array.length; i++) {
    for(var key in array[i]){
      // if (element === array[i].name || element === array[i].email || element === array[i].password || element === array[i].username ) {
      if(element === array[i][key]){
        users.splice(i, 1)
      };
    };
  };
};

addUsers();
removeAcct(users, 'tylermcginnis33@gmail.com');

/*Now add three user objects to your users array. Each user object should contain the
following properties. name, email, password, username.*/

/*Now you have a very common data structure. Twitter is a good use case.
It's easy to imagine that your followers list on Twitter is an Array full or objects
and those objects contain properties about the specific person you follow.*/

/*Now let's say that Tyler decided to delete his account. Loop through your array of
objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
Once you find the particular indice he's located in, delete him from the array.*/


//The activity we just did is very much how data works in 'the real world'.



