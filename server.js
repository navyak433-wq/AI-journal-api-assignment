const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Journal API Running")
})



app.post("/api/journal", (req,res)=>{
    app.get("/api/journal/:userId",(req,res)=>{

const userId = req.params.userId

const userEntries = journals.filter(j => j.userId === userId)

res.json(userEntries)

})

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

    const mostUsedAmbience = userEntries[0]?.ambience || "unknown"

const recentKeywords = userEntries
  .map(j => j.text.split(" ")[0])
  .slice(0,3)

res.json({
  totalEntries,
  topEmotion: "calm",
  mostUsedAmbience,
  recentKeywords
})
})
app.get("/api/journal/insights/:userId", (req,res)=>{
  
const userId = req.params.userId

const userEntries = journals.filter(
  j => j.userId === userId
)

const totalEntries = userEntries.length

const mostUsedAmbience = userEntries[0]?.ambience || "unknown"

const recentKeywords = userEntries
.map(j => j.text.split(" ")[0])
.slice(0,3)

res.json({
  totalEntries,
  topEmotion: "calm",
  mostUsedAmbience,
  recentKeywords
})

})


app.post("/api/journal/analyze", (req,res)=>{

 const { text } = req.body

 let emotion = "neutral"

 if(text.includes("happy") || text.includes("great")){
  emotion = "happy"
 }
 else if(text.includes("sad") || text.includes("bad")){
  emotion = "sad"
 }
 else if(text.includes("calm") || text.includes("peace")){
  emotion = "calm"
 }

 const words = text.split(" ")
 const keywords = words.slice(0,3)

 res.json({
  emotion,
  keywords,
  summary: `User seems ${emotion} while writing the journal`
 })

})
app.use(express.json())

app.use(express.static("."))
let journals = []

app.listen(5000, () => {
console.log("Server running on port 5000")
})