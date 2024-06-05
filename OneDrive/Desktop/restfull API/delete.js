const express = require('express');
const app = express();
const port = 4444;

app.use(express.urlencoded({ extended: true }));

let students = [
    { id: 1, name: "abc" },
    { id: 2, name: "def" },
    { id: 3, name: "xyz" }
];

// DELETE endpoint to remove student by ID
app.delete('/student/:id', (req, res) => {
    const { id } = req.params;

    students = students.filter((student) => student.id != id);

    res.status(200).json(students); // Sending the updated list of students as JSON
});

// PUT endpoint to update student by ID
app.put('/student/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    students.forEach((student) => {
        if (student.id == id) {
            student.name = name; // Update the name of the student with the matching id
        }
    });

    res.status(200).json(students); // Sending the updated list of students as JSON
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
