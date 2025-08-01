import { Router } from "express";
import {
  changeLeaveApplicationStatus,
  getPendingLeaves,
  managerLogin,
} from "../controllers/manager.controller.js";

const router = Router();

router.route("/login").post(managerLogin);
router.route("/get-pending-leaves").get(getPendingLeaves);
router
  .route("/change-leave-application-status")
  .put(changeLeaveApplicationStatus);

export default router;
