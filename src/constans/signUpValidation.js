import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
  first_name: z.string().min(1, { message: "Firstname is required" }),
  last_name: z.string().min(1, { message: "Lastname is required" }),
});
