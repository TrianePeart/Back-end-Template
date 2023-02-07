const db = require("../db/dbConfig.js");
//MEMO: This is the same as Bookmarks2  with slight verations to fit if don't like change

//INDEX
const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    return error;
  }
};

//SHOW
const getAsnack = async (id) => {
  try {
    const snack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
    return snack;
  } catch (error) {
    return error;
  }
};

//CREATE
//Protein was spelled incorrectly as"protien"
const createSnacks = async (snack) => {
  try {
    const createSnack = await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, price, image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        snack.name,
        snack.fiber,
        snack.protein,
        snack.added_sugar,
        snack.is_healthy,
        snack.price,
        snack.image,
      ]
    );
    return createSnack;
  } catch (error) {
    return error;
  }
};

//UPDATE
const updateSnacks = async (id, snack) => {
  //I figure edit snacks would be this to keep them from meshing -TRIANE
  //Protein was spelled incorrectly as"protien"
  try {
    const updateSnack = await db.one(
      "UPDATE snacks SET name=$1, fiber=$2, protein=$3, added_sugar=$4, is_healthy=$5, price=$6, image=$7 WHERE id=$8 RETURNING *",
      [
        snack.name,
        snack.fiber,
        snack.protein,
        snack.added_sugar,
        snack.is_healthy,
        snack.price,
        snack.image,
        id,
      ]
    );
    return updateSnack;
  } catch (error) {
    error;
  }
};

//DELETE
const deleteSnacks = async (id) => {
  try {
    const deleteSnack = await db.one(
      "DELETE FROM snacks WHERE ID = $1 RETURNING *",
      id
    );
    return deleteSnack;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSnacks,
  getAsnack,
  createSnacks,
  updateSnacks,
  deleteSnacks,
};
