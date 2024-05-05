// Assuming you have a variable named theme
var theme = "dark"; // or "white" based on your logic

// Select the image element
var snakeImage = document.getElementById("snakeImage");

// Set the image source based on the theme
if (theme === "dark") 
{
  snakeImage.src = "https://github.com/AllamF5J/AllamF5J/blob/output/github-contribution-grid-snake-dark.svg";
} 
else 
{
  snakeImage.src = "https://github.com/AllamF5J/AllamF5J/blob/output/github-contribution-grid-snake.svg";
}
