import express, {
  Application,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

// using Cors
app.use(cors());

// use json ()
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // insearting Mongoose
  /*
step 1 : interface
step 2:Schema
step 3: Databse Query 

$*/
  // create interface
  interface iUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      lastname: string;
    };
    dataOfBirth?: string;
    gander: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContact: string;
    address: string;
    permanentAddress: string;
  }

  // Create Schema using interface

  const schema = new Schema<iUser>({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
    },
    dataOfBirth: {
      type: String,
      required: true,
    },
    gander: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContact: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
  });

  res.send("Hello World!");
  next();
});

export default app;
