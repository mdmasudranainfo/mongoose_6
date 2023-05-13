// const express = require("express");
import mongoose from "mongoose";
// const mongoose = require("mongoose");
import app from "./app";

const port: number = 5000;

// Using cors

// Databse Connection
async function bootstarp() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/modiul1");

    console.log("Database conntection seccesful");

    app.listen(port, () => {
      console.log(`Server is Running  listening on port ${port}`);
    });
  } catch (err) {
    console.log("fail to database connection ", err);
  }
}

bootstarp();
