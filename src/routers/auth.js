import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { userRegistrationSchema } from '../validation/userRegistrationSchema.js';
import { registerUserController } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(userRegistrationSchema),
  ctrlWrapper(registerUserController),
);

export default authRouter;
