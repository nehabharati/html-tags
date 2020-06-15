const express = require('express')
const router = express.Router()
const Tag = require('../models/tag')

//Get all
router.get('/', async (req,res) => {
    try {
        const tags = await Tag.find()
        res.json(tags)
    }
    catch {
        res.status(500).json({message:Response.message})
    }
})

//Get one
router.get('/:id',getTag, (req,res) => {
    res.json(res.tag)
})


//Post 
router.post('/', async (req,res) => {
    const tag = new Tag({ 
        command: req.body.command,
        description: req.body.description,
        link: req.body.link
    })
    try {
        const newTag = await tag.save()
        res.status(201).json(newTag)
    }
    catch (err) {
        res.status(400).json({message:err.message})
    }
})

//Update
router.patch('/:id', getTag, async (req,res) => { 
    if (req.body.command != null) {
        res.tag.command = req.body.command
    }
    if (req.body.description != null) {
        res.tag.description = req.body.description
    }
    if (req.body.link != null) {
        res.tag.link = req.body.link
    }
    try {
        const updatedTag = await res.tag.save()
        res.json(updatedTag)
    }
    catch (err) {
        res.status(400).json({ message:err.message })
    }
})

//Delete
router.delete('/:id', getTag, async (req,res) => {
    try {
        await res.tag.remove()
        res.json({ message:"Deleted tag" })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getTag(req,res,next) {
    let tag
    try {
        tag = await Tag.findById(req.params.id)
        if(tag == null) {
            return res.status(404).json({ message:"Cannot find tag" })
        }
    }
    catch (err) {
        return res.status(500).json({ message:err.message })
    }

    res.tag = tag
    next()
}

module.exports = router