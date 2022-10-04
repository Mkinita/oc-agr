import  express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";
import embalajeRoutes from "./routes/embalajeRoutes.js";
import remaRoutes from "./routes/remaRoutes.js";
import colRoutes from "./routes/colRoutes.js";
const app = express();
app.use(express.json());
dotenv.config();

conectarDB();

const dominiosPermitidos =[process.env.FRONTEND_URL]

const corsOptions ={
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin)!== -1 ){
            //el origen del request esta permitido
            callback(null, true)
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
}

app.use(cors(corsOptions))


app.use("/api/veterinarios",veterinarioRoutes);
app.use("/api/paciente",pacienteRoutes);
app.use("/api/embalaje",embalajeRoutes);
app.use("/api/rema",remaRoutes);
app.use("/api/col",colRoutes);

const PORT = process.env.PORT || 4000;


app.listen(PORT, () =>{
    console.log(`funcionando en el puerto ${PORT}`);
});