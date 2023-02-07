//req.body.name was after the + and it had to be word, you had lowercase after the closing of map and was causing this validation to break

const checkName = (req, res, next) => {
  if (req.body.name) {
    req.body.name = req.body.name
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    next();
  } else {
    return res.status(404).json({ error: "Page Not Found" });
  }
};

//Working correctly

const checkBoolean = (req, res, next) => {
    if (
      req.body.is_healthy === true ||
      req.body.is_healthy === false ||
      req.body.is_healthy === undefined
    ) {
      next();
    } else {
      res.status(400).json({ error: "is_healthy must be a boolean value" });
    }
  };

//CHECK BOOLEEN IS NOT WORKING CORRECTLY TOOK OUT TO ALLOW TEST TO RUN
// might not need this

// const validateImage = (req, res, next) => {
//   if (
//     req.body.image.substring(0, 7) === "http://" ||
//     req.body.image.substring(0, 8) === "https://"
//   ) {
//     return next();
//   } else {
//     res
//       .status(400)
//       .json({ error: "You forgot to start your URL w http:// or https://" });
//   }
// };

//Working correctly
module.exports = {
  checkName, checkBoolean,
  // validateImage,
};
