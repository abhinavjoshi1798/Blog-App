import { Router } from "express"
import { createUser, deleteUser, fetchUsers, showUser, updateUser } from "../controllers/userController.js"

const router = Router()

router.get("/usersdata",fetchUsers)
router.get("/showuser/:id",showUser)
router.post("/registeruser",createUser)
router.put("/updateuser/:id",updateUser)
router.delete("/deleteuser/:id",deleteUser)

export default router