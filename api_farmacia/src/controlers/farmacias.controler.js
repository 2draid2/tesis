import { getConnection } from "./../database/database";
//obtener todas las farmacias
const getFarmacia = async (req, res) => {
   try {
      const pos = parseInt(req.params.pos);
   // console.log(pos);
      const connection = await getConnection();
      const result = await connection.query("SELECT * FROM farmacias WHERE f_id LIMIT ?, 25", pos);
      res.json(result);
   } catch (error) {
      res.status(500);
      res.send(error.message);
   }
};
const getFarmacialg = async (req, res) => {
   try {
         console.log('poskvfgffdxddxdxdxdxdxdxdxdxdxdxdxd');
      const connection = await getConnection();
      const result = await connection.query("SELECT COUNT(*) AS len FROM farmacias");
      console.log(result);
      res.json(result);
   } catch (error) {
      res.status(500);
      res.send(error.message);
   }
};

//optener farmacia por id
const getFarmaciaId = async (req, res) => {
   try {
      //console.log(req.params);
      const id = req.params;
      const connection = await getConnection();
      const result = await connection.query("SELECT * FROM farmacias WHERE  ?", id);
      res.json(result);
   } catch (error) {
      res.status(500);
      res.send(error.message);
   }
};

//actualizar farmacia

const updateFarmaciaId = async (req, res) => {
   try {
     // console.log(req.params);
      const id = req.params;
      const { a_m_id, nombre, direccion } = req.body;
      if (id === undefined || a_m_id === undefined || nombre === undefined || direccion === undefined) {
         res.status(400).json({ message: "peticion erronea, por favor llene todos los campos" });
      };
      const farmacia = {a_m_id, nombre, direccion };
      const connection = await getConnection();
      const result = await connection.query("UPDATE farmacias SET ? WHERE ?", [farmacia, id]);
      res.json(result);
   } catch (error) {
      res.status(500);
      res.send(error.message);
   }
};

//eliminar farmacia

const deleteFarmaciaId = async (req, res) => {
   try {
      console.log(req.params);
      const id = req.params;
      const connection = await getConnection();
      const result = await connection.query("DELETE FROM farmacias WHERE  ?", id);
      res.json(result);
   } catch (error) {
      res.status(500);
      res.send(error.message);
   }
};



//agregar farmacia
const addFarmacia = async (req, res) => {
   try {
      const { a_m_id, nombre, direccion } = req.body;
      if (a_m_id === undefined || nombre === undefined || direccion === undefined) {
         res.status(400).json({ message: "peticion erronea, por favor llene todos los campos" });
      };
      const farmacia = { a_m_id, nombre, direccion };
      const connection = await getConnection();
      const result = await connection.query("INSERT INTO farmacias SET ?", farmacia);

      res.json({ message: "Farmacia añadida" });

   } catch (error) {
      res.status(500);
      res.send(error.message);
   }
};

//metodos exportados

export const methods = {
   getFarmacia,
   addFarmacia,
   getFarmaciaId,
   deleteFarmaciaId,
   updateFarmaciaId,
   getFarmacialg,
}