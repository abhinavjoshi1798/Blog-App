import {Router} from "express"
import UserRoutes from "./userRoutes.js"
import PostRoutes from "./postRoutes.js"
import CommentRoutes from "./commentsRoutes.js"

const router = Router()

router.use("/user",UserRoutes)
router.use("/post",PostRoutes)
router.use("/comment",CommentRoutes)

export default router