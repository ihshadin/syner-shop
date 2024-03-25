import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: "Please selet a Name" }),
  year: z.string({ required_error: "Please selet a Year" }),
  startMonth: z.string({ required_error: "Please selet a Start Month" }),
  endMonth: z.string({ required_error: "Please selet a End Month" }),
});

export const academicFacultySchema = z.object({
  name: z.string({ required_error: "Name is required" }),
});
