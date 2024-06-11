const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Todo = require("./modals/todo");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://sasamarten082:5vg3209jN2zSQYAr@cluster0.kk5fyoo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Failed to connect to MongoDB", err));

app.use(cors());
app.use(express.json());
app.use(express.static("FrontEnd-Api"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "FrontEnd-Api", "index.html"));
});

app.get("/api/todos", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

app.post("/api/todos", async (req, res) => {
    const newTodo = new Todo({
        text: req.body.text,
        completed: req.body.completed || false,
    });

    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
});

app.put("/api/todos/:id", async (req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updatedTodo);
});

app.delete("/api/todos/:id", async (req, res) => {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
        return res.status(404).json({message: "Todo not found"});
    }
    res.json({message: "Todo deleted"});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
