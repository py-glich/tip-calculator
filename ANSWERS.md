# ANSWERS

## 1. How to run

Download or clone the project and open `index.html` in a browser.

For a better development experience, run the project using the VS Code Live Server extension.


---

## 2. Stack & design choices

I chose vanilla HTML, CSS, and JavaScript because I am still in the early stage of learning frontend development, and this stack allows me to focus on the fundamentals without adding framework complexity.

At this stage, I am more confident with HTML and CSS, and I am currently learning JavaScript. Building this project in vanilla JavaScript helped me understand how structure, logic, and user interactions work together in a real application.

One design decision I made was using a responsive CSS grid for the tip buttons with `auto-fit` and `minmax()`. This ensures the buttons adapt naturally to different screen sizes instead of breaking or overflowing.

Another interaction decision was showing validation messages inline under each field instead of using alerts. This keeps the user experience smoother and makes the interface feel more modern and controlled while still being simple to understand and maintain.

---

## 3. Responsive & accessibility

On a 360px mobile screen, the layout becomes more compact and result rows stack vertically for readability. On larger laptop screens, the calculator stays centered with a limited width to avoid excessive stretching.

For accessibility, I added proper labels and keyboard-friendly tab navigation so users can move through the form naturally.

One accessibility improvement I did not fully implement was screen reader announcements for changing totals. With more time, I would add ARIA live regions for dynamic updates.

---

## 🤖 AI Usage

I used ChatGPT as a learning and development assistant while building this project.

Since I am still a beginner in JavaScript (although I have a stronger background in Python), I used AI to help me understand how to structure the logic for a frontend application and how different parts of the calculator should connect together.

Specifically, I used AI for:
- Planning the overall project structure (inputs, outputs, and flow of calculation)
- Understanding how to handle live updates in JavaScript
- Designing validation logic for user inputs
- Improving responsive layout decisions in CSS

One example of improvement I made was changing a fixed layout suggestion for tip buttons into a responsive grid using `repeat(auto-fit, minmax())`, so the UI adapts better on different screen sizes.

While AI helped me speed up development, I made sure to understand every part of the code and how it works, rather than copying it blindly.

---

## ⚠️ Honest Gap

One area that is still not fully polished is my confidence in writing JavaScript from scratch without assistance.

I understand the logic and what each part of the code does, but I still rely on guidance when structuring larger frontend features and organizing JavaScript code cleanly.

With more practice, I would improve this by:
- Rebuilding the project without AI assistance
- Practicing small JavaScript challenges daily
- Learning better code organization patterns for frontend projects
