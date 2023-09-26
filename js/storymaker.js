//Assignment 1 | COMP1073 Client-Side JavaScript

//VARIABLE DECLARATIONS
var randomNoun1 = document.querySelector('.randomNoun1'); //get the button with class "randomNoun1".
var randomVerb = document.querySelector('.randomVerb'); //get the button with class "randomVerb".
var randomAdj = document.querySelector('.randomAdj'); //get the button with class "randomAdj".
var randomNoun2 = document.querySelector('.randomNoun2'); //get the button with class "randomNoun2".
var randomSetting = document.querySelector('.randomSetting'); //get the button with class "randomSetting".
var story = document.querySelector('.story'); //get the paragraph for final story.

//ARRAYS FOR RANDOMIZING
var insertNoun1 = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var insertVerb = ['sat on', 'ate', 'danced with', 'saw', 'doesnt like', 'kissed'];
var insertAdj = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var insertNoun2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var insertSetting = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

//variables to store selected values for each category
var selectedNoun1 = '';
var selectedVerb = '';
var selectedAdj = '';
var selectedNoun2 = '';
var selectedSetting = '';

//FUNCTION TO GENERATE THE STORY
function result() {
    //generate a new story text with placeholders replaced by selected values
    var newStory = `${selectedNoun1} ${selectedVerb} ${selectedAdj} ${selectedNoun2} ${selectedSetting}`;

    //set the textContent property of the story paragraph to newStory
    story.textContent = newStory;
    story.style.visibility = 'visible'; // Make the paragraph visible
}

//EVENT LISTENERS
randomNoun1.addEventListener('click', function() {
    selectedNoun1 = randomValueFromArray(insertNoun1); //set selectedNoun1 to a random value from insertNoun1
    currentCategory = 'noun1'; //set the currentCategory to 'noun1'
    result(); //result() function to update the story
});
randomVerb.addEventListener('click', function() {
    selectedVerb = randomValueFromArray(insertVerb); //set selectedVerb to a random value from insertVerb
    currentCategory = 'verb'; //set the currentCategory to 'verb'
    result(); //result() function to update the story
});
randomAdj.addEventListener('click', function() {
    selectedAdj = randomValueFromArray(insertAdj); //set selectedAdj to a random value from insertAdj
    currentCategory = 'adj'; //set the currentCategory to 'adj'
    result(); //result() function to update the story
});
randomNoun2.addEventListener('click', function() {
    selectedNoun2 = randomValueFromArray(insertNoun2); //set selectedNoun2 to a random value from insertNoun2
    currentCategory = 'noun2'; //set the currentCategory to 'noun2'
    result(); //result() function to update the story
});
randomSetting.addEventListener('click', function() {
    selectedSetting = randomValueFromArray(insertSetting); //set selectedSetting to a random value from insertSetting
    currentCategory = 'setting';  //set the currentCategory to 'setting'
    result(); //result() function to update the story
});

//get "Generate Random Story" button by its id
var randomStoryButton = document.querySelector('#randomStory');

//added an event listener to "Generate Random Story" button
randomStoryButton.addEventListener('click', function() {
    //generate a random story when button is clicked
    generateRandomStory();
});

//FUNCTION TO GENERATE A RANDOM NEW STORY
function generateRandomStory() {
    //generate a new story with random values for each category
    selectedNoun1 = randomValueFromArray(insertNoun1);
    selectedVerb = randomValueFromArray(insertVerb);
    selectedAdj = randomValueFromArray(insertAdj);
    selectedNoun2 = randomValueFromArray(insertNoun2);
    selectedSetting = randomValueFromArray(insertSetting);

    //call result() function to update the story
    result();
}

//FUNCTION TO RANDOMLY SELECT AN ITEM FROM AN ARRAY
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//FUNCTION TO ADD STUDENT NAME
function addStudentName() {
    var studentNameInput = document.getElementById('name'); //get input field by id
    var studentNameParagraph = document.getElementById('studentName'); //paragraph where student name will be displayed
    var name = studentNameInput.value; // Get the name from the input field
    studentNameParagraph.textContent = "Student Name: " + name; //display student name in paragraph
}

//get the "Add Student Name" button by its id
var addStudentNameButton = document.getElementById('addStudentName');

//added an event listener to the "Add Student Info" button
addStudentNameButton.addEventListener('click', function() {
    addStudentName();
});

//get "Reset" button by its id
var resetStoryButton = document.getElementById('resetStory');

//added an event listener to the "Reset" button
resetStoryButton.addEventListener('click', function() {
    //reset selected values and hide the story from user
    selectedNoun1 = '';
    selectedVerb = '';
    selectedAdj = '';
    selectedNoun2 = '';
    selectedSetting = '';
    story.textContent = '';
    story.style.visibility = 'hidden';
});