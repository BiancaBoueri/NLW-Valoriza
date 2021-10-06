import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middleware/ensureAdmin";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();


router.post("/tags", ensureAdmin/*middleware*/, createTagController.handle);
router.post("/users", createUserController.handle);


export { router };

