import express from "express";
import morgan from "morgan";
// routers

import farmaciaRoutes from "./router/farmacia.router";


const app = express();
//settings
app.set("port" , 4000);
//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/farmacias", farmaciaRoutes);

export default app;