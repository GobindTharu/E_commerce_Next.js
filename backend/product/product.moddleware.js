import ProductTable from "./product.model";

export const isOwnerOfProduct = async (req, res, next) => {
  const productId = req.body.params;

  if (!productId) {
    return res.status(404).send({ message: "Product does not exist." });
  }
  const isOwnerOfProduct = productId.adminId?.equals(req.loggedInUserId);

  if (!isOwnerOfProduct) {
    return res
      .status(409)
      .send({ message: "You have no access to this resource." });
  }
  next();
};
