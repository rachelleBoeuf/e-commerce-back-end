const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
    try {
        //first: pull our category data
        const data = await Tag.findAll({ include: Product });
        if (!data) {
            res.status(404).json({ message: "No tags Exists" });
            return;
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id',  async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
    try {
        //first: pull our category data
        const data = await Tag.findByPk(req.params.id, { include: Product });
        if (!data) {
            res.status(404).json({ message: "No tag with this id!" });
            return;
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
  // create a new tag
    try {
        //first check if our category already exists
        let data = await Tag.findOne({ where: req.body });
        if (data === null) {
            //no record found so create a new record
            data = await Tag.create(req.body);
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
    try {
        await Tag.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
            .then(() => { res.status(200).json({"success": true}) })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
    await Tag.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then(() => { res.status(200).json({"success": true}) })
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
});

module.exports = router;
