const confirmHealth = (snack) => {
  if (
    typeof snack.protein !== "number" &&
    typeof snack.fiber !== "number" &&
    typeof snack.added_sugar !== "number"
  ) {
    return null;
  }

  if (snack.protein >= 5 && snack.added_sugar < 5) {
    return true;
  }
  if (snack.fiber >= 5 && snack.added_sugar < 5) {
    return true;
  }
  if (snack.protein > 5 && snack.fiber > 5 && snack.added_sugar < 5) {
    return true;
  }
  return false;
};

module.exports = confirmHealth;

// const protein = 5;
// const fiber = 5;
// const sugar = 5;
// const health = protein && fiber && sugar;

// if (snack.fiber > 5) {
//   return true;
// } else if (snack.protein > 5) {
//   return true;
// } else if (snack.protein > 5 && snack.fiber > 5) {
//   return true;
// } else if (snack.sugar > 5) {
//   return false;
// } else if (snack.protein > 5 && snack.sugar > 5) {
//   return false;
// } else if (snack.protein < 6 && snack.fiber < 6 && snack.sugar > 5) {
//   return false;
// } else if (snack.protein < 5 || (snack.fiber < 5 && snack.sugar > 5)) {
//   return false;
// } else if (!health) {
//   return res.status(404).json("Provide a fiber, protein, and sugar value!");
// }
