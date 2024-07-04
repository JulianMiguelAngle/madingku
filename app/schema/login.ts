import { z } from "zod";

const loginSchema = z.object({
    nim: z.string().length(1, { message: "Nim tidak boleh kosong" }),
    password: z.string().length(1, { message: "Password tidak boleh kosong" })
});