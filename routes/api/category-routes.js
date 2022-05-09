const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
router.get("/", async (req, res) => {
  //find all categories
  try {
    //first: pull our category data
    const data = await Category.findAll({ include: Product });
    if (!data) {
      res.status(404).json({ message: "No Categories Exists" });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    //first: pull our category data
    const data = await Category.findByPk(req.params.id, { include: Product });
    if (!data) {
      res.status(404).json({ message: "No category with this id!" });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/",  async (req, res) => {
  // create a new category
  try {
    //first check if our category already exists
    let data = await Category.findOne({ where: req.body });
    if (data === null) {
      //no record found so create a new record
      data = await Category.create(req.body);
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  // create a new category
  try {
    await Category.update(req.body, {
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

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
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
