import { z } from 'zod'

export const InsuranceSchema = z.object({
    name: z.string().min(2, { message: "Name is too short" }),
    company: z.string().min(2, { message: "Company name is too short write the full company info" }),
    insuranceCost: z.number().min(10000, { message: "Cost is too low" }),
})