# Quiz Web Application

A responsive quiz web app built with **HTML, CSS and JavaScript**. It shows one question at a time, runs a countdown timer, calculates the score automatically and lets you review every answer at the end.

## Live Demo

https://yogeshwarits18-tech.github.io/quiz-app/

## Features

- Question display with **Next** and **Previous** navigation
- **Countdown timer** for the test (auto-submits when time ends)
- **Automatic score calculation** and result page
- **Answer review** showing correct (green) and wrong (red) responses
- **Responsive design** for mobile and desktop using CSS Flexbox
- Restart option to retake the quiz
- Hosted on **GitHub Pages**

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 (Flexbox, Media Queries) | Styling and responsive layout |
| JavaScript (ES6) | Quiz logic, timer, score calculation |
| GitHub Pages | Free hosting |

## Project Structure

```
quiz-app/
├── index.html    # Page structure
├── style.css     # Styling and responsive design
├── script.js     # Quiz logic (questions, timer, score, review)
└── README.md     # Project documentation
```

## How to Run Locally

1. Clone the repository:
   ```
   git clone https://github.com/yogeshwarits18-tech/quiz-app.git
   ```
2. Open the `quiz-app` folder.
3. Double-click `index.html` to open it in your browser.

No installation or build tools are needed.

## How to Add Your Own Questions

Open `script.js` and edit the `questions` array:

```javascript
const questions = [
  {
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 1   // index of the correct option (0 = first, 1 = second ...)
  }
];
```
```

To change the time limit, edit this line in `script.js`:

```javascript
const TOTAL_TIME = 60;   // seconds
```

## How It Works

1. Questions are stored in a JavaScript array.
2. The selected answer for each question is saved, so you can move back and forth freely.
3. A timer using `setInterval` counts down and submits the quiz automatically at zero.
4. On submit, the app compares your answers with the correct ones, calculates the score and displays a full review.

## Future Improvements

- Per-question timer
- Start screen with a "Start Quiz" button
- Save high score using `localStorage`
- Multiple quiz categories

## Author

**Yogeshwari TS**
GitHub: [yogeshwarits18-tech](https://github.com/yogeshwarits18-tech)