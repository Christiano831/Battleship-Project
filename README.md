# Battleship-Project

This projects is a game similar to the board game BATTLESHIP. It is a project for the General Assembly Software Engineering Immersive course. It is the first project assigned.

## Authors

- [@ChristianEspinola](https://www.github.com/christiano831)

## Demo

https://christiano831.github.io/Battleship-Project/

## Screenshots

![Battleship Project](https://i.imgur.com/lpQTTk1.png)

![Wireframe 1](https://i.imgur.com/v79E746.png)

![Wireframe 2](https://i.imgur.com/6KUGb5z.png)

![Wireframe 3](https://i.imgur.com/JmlRzl3.png)

![Wireframe 4](https://i.imgur.com/GXx0PIL.png)

## Technologies Used

HTML, CSS, JavaScript

## Lessons Learned

This project was assigned to us to use HTML, CSS, and Javascript combined. It really focused on using the DOM and making the webpage interactive. Therefore a game was a good project to be assigned. It was my first time making a game and actually using Javascript. I have seen and used a small amount of HTML and CSS before but not as much as in this project. The biggest challenge I faced was when getting event listeners on a specific turn for a button when pressed. Either a button would stop working or the Computer would keep making a move nonstop in the game. I managed to figure out how to make a better loop and stopping at the right time each turn.

## Optimizations

The game originally had the computer make random moves whenever it was its turn. I made a small AI function for the computer to read through the all the buttons on the player's side. If a button came up as a hit piece it would check the piece above it and check to see if it was a piece it can hit. If it wasn't it would check to the right, and then to the bottom, and then to the left. If all sides were unable to be hit, it would give the button a class that would be skipped the next time the AI read the whole code again. This small AI makes it so that all boats will have all the surrouning blocks "clicked" before it went to random choices again.

## Next Steps

- Responsive design

- Boat destroyed notification

- Delay enemy click to show what slot gets chosen

