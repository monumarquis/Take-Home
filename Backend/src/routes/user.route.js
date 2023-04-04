const express = require('express')
const app = express.Router()
const userModel = require("../models/user.model")

app.post('/', async (req, res) => {
    const { name, email, destination, travellers, budgetPerPerson, currency } = req.body
    if (!name || !email || !destination || !travellers || !budgetPerPerson || !currency) return res.status(403).send({ message: "Please Enter All Details" })

    const exsist = await userModel.findOne({ email })
    if (exsist) return res.status(404).send({ message: "User Already Created Try Logging in" })

    const user = await userModel({ name, email, destination, travellers, budgetPerPerson, currency });
    user.save()

    return res.status(201).send({ user, message: "Your Details Added Successfully" });
})

module.exports = app