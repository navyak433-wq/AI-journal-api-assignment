const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Journal API Running")
})

let journals = []

app.post("/api/journal", (req,res)=>{

    const {userId, ambience, text} = req.body

    const entry = {
        id: Date.now(),
        userId,
        ambience,
        text
    }

    journals.push(entry)

    res.json(entry)
})

app.get("/api/journal/:userId", (req,res)=>{

    const userId = req.params.userId

    const userEntries = journals.filter(
        j => j.userId === userId
    )

    res.json(userEntries)
})

app.get("/api/journal/insights/:userId", (req,res)=>{

    const userId = req.params.userId

    const userEntries = journals.filter(
        j => j.userId === userId
    )

    const totalEntries = userEntries.length

    res.json({
        totalEntries,
        topEmotion: "calm",
        mostUsedAmbience: "nature",
        recentKeywords: ["peace","nature"]
    })
})

app.listen(5000, ()=>{
    console.log("Server running on port 5000")
})