# 🎓 Student Card Generator

A lightweight web app that turns student details into an ID-style card instantly. Fill in the registration form, click a button, and the card updates on the screen. It is built with plain HTML, CSS, and JavaScript, with no frameworks or dependencies.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

- Registration form with **Name**, **Email**, **Age**, and **Course**
- Generates the student card with one click, with no page reload
- Default placeholder text shown until the form is submitted
- Clean two-panel layout built with CSS Flexbox
- Works in any modern browser and needs no installation

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure and form |
| CSS3 | Styling and Flexbox layout |
| JavaScript (ES6) | DOM manipulation and event handling |

## 📁 Project Structure

```
Student-Card-Generator/
├── index.html    # Form and card markup
├── SCG.CSS       # Styles
├── SCG.JS        # Card generation logic
└── README.md     # Documentation
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayyub542/Student-Card-Generator.git
   ```
2. **Go to the project folder**
   ```bash
   cd Student-Card-Generator
   ```
3. **Open `index.html`** in your browser, or use the VS Code *Live Server* extension.

## 🧑‍💻 How to Use

1. Enter the student's name, email, and age.
2. Choose a course from the dropdown:
   - MERN Stack
   - Java Full Stack
   - Python
   - Data Science
3. Click **Generate Card**.
4. The student card on the right updates with the entered details.

## ⚙️ How It Works

The script selects the form fields and card elements, then listens for a click on the button. When the button is clicked, it stops the page from reloading and copies the input values into the card.

```javascript
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    cardName.textContent   = name.value
    cardEmail.textContent  = email.value
    cardAge.textContent    = age.value
    cardCourse.textContent = course.value
})
```

## 🔮 Future Improvements

- [ ] Form validation (required fields, valid email, age range)
- [ ] Profile photo upload
- [ ] Download the card as an image or PDF
- [ ] Fully responsive layout for mobile screens
- [ ] Dark mode

## 👤 Author

Ayyub542
GitHub: [@Ayyub542](https://github.com/Ayyub542)

---

⭐ If you like this project, give it a star!
