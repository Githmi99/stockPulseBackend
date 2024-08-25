const express = require('express');
const Component = require('../models/Component');

const router = express.Router();

// Get all components
router.get('/', async (req, res) => {
    try {
        const components = await Component.find();
        res.json(components);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Add a new component
router.post('/', async (req, res) => {
    const component = new Component(req.body);
    try {
        await component.save();
        res.status(201).send(component);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Update a component
router.put('/:id', async (req, res) => {
    try {
        const component = await Component.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!component) {
            return res.status(404).send();
        }
        res.send(component);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete a component
router.delete('/:id', async (req, res) => {
    try {
        const component = await Component.findByIdAndDelete(req.params.id);
        if (!component) {
            return res.status(404).send();
        }
        res.send(component);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
