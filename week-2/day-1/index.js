import React from "react"
import ReactDOM from "react-dom/client"
const r = document.getElementById('root')
const heading1 = React.createElement("h1",{},"Hello! I am Ashish Thakur ")
        const heading2 = React.createElement("h1",{},"I am learning everything about react, parcel ")
        const root = ReactDOM.createRoot(r)
        root.render([heading1,heading2])