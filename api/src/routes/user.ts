import { Response, Request, Router, NextFunction } from "express";
import { User } from "../models/User";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((error) => next(error));
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("reqbody", req.body);
  const { name, lastName } = req.body;
  if (!name || !lastName) throw new Error("Data is needded");

  User.create(req.body)
    .then((createdUser) => {
      res.status(200).send(createdUser);
    })
    .catch((error) => next(error));
});

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  console.log(id);
  User.destroy({
    where: { id: id },
  })
    .then((response) => {
      res.status(200).send(`usuario con id ${id} eliminado`);
    })
    .catch((error) => next(error));
});

export default router;
