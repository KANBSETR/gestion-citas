import {pool} from '../db.js'

export const getCitas =  async (req, res) => {
    //Aqui vamos a traer todas las citas de la base de datos (Para probar)
    const result = await pool.query("SELECT * FROM citas;");
    res.json(result.rows)
};


// Buscar citas Paciente
// Este no debería tener alguna autenticación
export const getCitasPaciente = (req, res) =>{
    // Buscar las citas asociadas al rut del paciente
    // En caso de no encontrar, devolver la respuesta correspondiente
    // Devolver las citas asociadas al rut
};

// Buscar citas Médico
// Esta SI debería tener alguna autenticación ya que son datos más sensibles
export const getCitasMedico = (req, res) =>{
    // Buscar las citas asociadas al rut del médico
    // En caso de no encontrar, devolver la respuesta correspondiente.
    // Devolver las citas asociadas al rut
};

// Crear cita
export const createAppointment = (req, res) => {
    // Obtener los datos necesarios para agendar la cita (paciente, médico, fecha)
    // Modificar el formato de la fecha según lo que se necesite
    // Insertar los datos en la base de datos (id_paciente, id_médico, fecha, token, false, false) <-- Los 2 últimos false son de la confirmación y cancelación
    // Responder que la cita se agendó correctamente
};

// Confirmar la cita
export const confirmAppointment = (req, res) => {
    const { token } = req.query; // La query es lo que sigue después del ?. Ejemplo: http://localhost:3000/confirmarCita?token=ikowjenbvcowknd
    if (!token) {
        res.send("No se puede confirmar la cita a una que no existe")
    }
    // Buscar la cita a la que pertene el token ("SELECT fecha FROM citas WHERE token = ?", [token])
    // Si no encuentra la cita, devolver un error
    // Se actualiza el estado de confirmada de la cita encontrada

    // Responde que la cita fue confirmada
    res.send("Cita confirmada")
};

// Reprogramar la cita
export const reProgrammingAppointment = (req, res) =>{
    // Obtener la ID de la cita de los parámetros de la URL (Ejemplo: http://localhost:3000/reprogramar/1)
    const id = req.params.id;
    const nuevafecha = req.body;
    // Suponiendo que el front no permita escoger horas ocupadas hay que verificar que la fecha esté disponible
    // Si la fecha no está disponible, manejar el error    
    // Actualizar la hora de la de cita y el token
    // Responder que la cita fue actualizada
    res.send("La cita fue reprogramada con éxito");
};

// "Eliminar" la cita
// RECORDAR que la cita no se elimina por completo, esta antes de eliminar se debe almacenar en la tabla historial_citas
// Así sería más a una modificación del "estado cancelado" que contiene la tabla cita
export const cancelAppointment = (req, res) =>{
    // Obtener la ID de la cita de los parámetros de la URL (Ejemplo: http://localhost:3000/reprogramar/1)
    // Actualizar el campo de "cancelado" de la tabla "citas" de la cita correspondiente
    // Modificar la disponiblidad del médico a la hora que tiene
    // Responder mencionando que la cita fue cancelada
};