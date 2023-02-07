const express = require("express");
const snacks = express.Router();
const { checkName, checkBoolean } = require("../validations/validSnacks");
//Log in should be here
const {
  getAllSnacks,
  getAsnack,
  createSnacks,
  updateSnacks,
  deleteSnacks,
} = require("../queries/snacks");

const confirmHealth = require("../confirmHealth");

//INDEX
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json(allSnacks);
  } else {
    res.status(500).json({ error: "Problem With The Server" });
  }
});

//SHOW
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getAsnack(id);
  if (!snack.message) {
    res.status(200).json(snack);
  } else {
    res.status(404).json({ error: "Page Not Found" });
  }
});

//CREATE
snacks.post("/", checkName, checkBoolean, async (req, res) => {
  const snack = req.body;
  snack.is_healthy = confirmHealth(snack);
  try {
    const createSnack = await createSnacks(snack);
    res.status(200).json(createSnack);
  } catch (error) {
    res.status(500).json({ error: "Problem With The Server" });
  }
});

//UPDATE
snacks.put('/:id', checkName, checkBoolean, async(req,res)=>{
    try {
        const {id}=req.params
        const updatedSnack = await updateSnacks(id, req.body)
        res.status(200).json(updatedSnack)
    } catch (error) {
        res.status(404).json({error:"Problem With The Server"})
    }
  })

//DELETE
snacks.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSnack = await deleteSnacks(id);
    res.status(200).json(deleteSnack);
  } catch (error) {
    res.status(404).json({ error: "Page Not Found" });
  }
});

module.exports = snacks;
