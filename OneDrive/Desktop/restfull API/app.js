const express = require('express');
const path = require('path');
const app = express();
const port = 4444;
const methodOverride = require('method-override')
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

let students = [
    { id: 1, name: "abc" },
    { id: 2, name: "def" },
    { id: 3, name: "xyz" }
];

// PUT endpoint to update student by ID
app.put('/student/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    students = students.map((student) => {
        if (student.id == id) {
            return { ...student, name }; // Update the name of the student with the matching id
        } else {
            return student;
        }
    });

    res.status(200).json(students); // Sending the updated list of students as JSON
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
