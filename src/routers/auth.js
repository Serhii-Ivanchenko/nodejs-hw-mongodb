import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { userRegistrationSchema } from '../validation/userRegistrationSchema.js';
import {
  loginUserController,
  registerUserController,
} from '../controllers/auth.js';
import { userLoginSchema } from '../validation/userLoginSchema.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(userRegistrationSchema),
  ctrlWrapper(registerUserController),
);

authRouter.post(
  '/login',
  validateBody(userLoginSchema),
  ctrlWrapper(loginUserController),
);

export default authRouter;
