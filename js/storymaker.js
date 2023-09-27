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
randomNoun1._on_click = function() {
    selectedNoun1 = randomValueFromArray(insertNoun1);
    result();
};

randomVerb._on_click = function() {
    selectedVerb = randomValueFromArray(insertVerb);
    result();
};

randomAdj._on_click = function() {
    selectedAdj = randomValueFromArray(insertAdj);
    result();
};

randomNoun2._on_click = function() {
    selectedNoun2 = randomValueFromArray(insertNoun2);
    result();
};

randomSetting._on_click = function() {
    selectedSetting = randomValueFromArray(insertSetting);
    result();
};

//attach the simulated click event to the buttons
randomNoun1.addEventListener('click', function() {
    randomNoun1._on_click();
});

randomVerb.addEventListener('click', function() {
    randomVerb._on_click();
});

randomAdj.addEventListener('click', function() {
    randomAdj._on_click();
});

randomNoun2.addEventListener('click', function() {
    randomNoun2._on_click();
});

randomSetting.addEventListener('click', function() {
    randomSetting._on_click();
});

//get "Generate Random Story" button by its id
var randomStoryButton = document.querySelector('#randomStory');

//added an event listener to "Generate Random Story" button
randomStoryButton.addEventListener('click', function() {
    //generate a random story when the button is clicked
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

//get the "Add Student Name" button by its id
var addStudentNameButton = document.getElementById('addStudentName');

//attach the simulated click event to the "Add Student Name" button
addStudentNameButton.addEventListener('click', function() {
    addStudentName();
});

//FUNCTION TO ADD STUDENT NAME
function addStudentName() {
    var studentNameInput = document.getElementById('name');
    var studentNameParagraph = document.getElementById('studentName');
    var name = studentNameInput.value;
    studentNameParagraph.textContent = "Student Name: " + name;
}

//get "Reset" button by its id
var resetStoryButton = document.getElementById('resetStory');

//added an event listener to the "Reset" button
resetStoryButton.addEventListener('click',function() {
    selectedNoun1 = '';
    selectedVerb = '';
    selectedAdj = '';
    selectedNoun2 = '';
    selectedSetting = '';
    story.textContent = '';
    story.style.visibility = 'hidden';
});