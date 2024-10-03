const express = require('express');
const cors = require('cors'); // Importar cors
const app = express();
const port = 3000;

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Datos simulados que se devolverán al cliente
const fakeData = {
  ResultadosReporteCanalesWip: [
    {
        TiempoDemora: 4,
        Tipo: "TRANSFERENCIA",
        TrxEnviadaDesdePbo: "RECIBIDAS",
        BancoOrigen: "PRODUBANCO",
        BancoDestino: "PRODUBANCO",
        CodRespuesta: "100000",
        FechaTrx: "2024-09-09T21:49:48",
        AliasOrigen: "0990460969",
        AliasDestino: "0963154223",
        Monto: 3.2,
    },
    {
      TiempoDemora: 4,
      Tipo: "TRANSFERENCIA",
      TrxEnviadaDesdePbo: "RECIBIDAS",
      BancoOrigen: "PRODUBANCO",
      BancoDestino: "PRODUBANCO",
      CodRespuesta: "100000",
      FechaTrx: "2024-09-09T22:49:48",
      AliasOrigen: "0990460969",
      AliasDestino: "0963154223",
      Monto: 3.2,
    },
    {
        TiempoDemora: 4,
        Tipo: "TRANSFERENCIA",
        TrxEnviadaDesdePbo: "RECIBIDAS",
        BancoOrigen: "PRODUBANCO",
        BancoDestino: "PRODUBANCO",
        CodRespuesta: "100000",
        FechaTrx: "2024-09-09T22:49:48",
        AliasOrigen: "0990460969",
        AliasDestino: "0963154223",
        Monto: 3.2,
      },
    {
        TiempoDemora: 4,
        Tipo: "TRANSFERENCIA",
        TrxEnviadaDesdePbo: "RECIBIDAS",
        BancoOrigen: "PRODUBANCO",
        BancoDestino: "PRODUBANCO",
        CodRespuesta: "100000",
        FechaTrx: "2024-09-09T23:49:48",
        AliasOrigen: "0990460969",
        AliasDestino: "0963154223",
        Monto: 3.2,
      },
      {
        TiempoDemora: 4,
        Tipo: "TRANSFERENCIA",
        TrxEnviadaDesdePbo: "RECIBIDAS",
        BancoOrigen: "PRODUBANCO",
        BancoDestino: "PRODUBANCO",
        CodRespuesta: "100000",
        FechaTrx: "2024-09-09T23:49:48",
        AliasOrigen: "0990460969",
        AliasDestino: "0963154223",
        Monto: 3.2,
      },
      {
        TiempoDemora: 4,
        Tipo: "TRANSFERENCIA",
        TrxEnviadaDesdePbo: "RECIBIDAS",
        BancoOrigen: "PRODUBANCO",
        BancoDestino: "PRODUBANCO",
        CodRespuesta: "100000",
        FechaTrx: "2024-09-09T23:49:48",
        AliasOrigen: "0990460969",
        AliasDestino: "0963154223",
        Monto: 3.2,
      },
      {
        TiempoDemora: 4,
        Tipo: "TRANSFERENCIA",
        TrxEnviadaDesdePbo: "RECIBIDAS",
        BancoOrigen: "PRODUBANCO",
        BancoDestino: "PRODUBANCO",
        CodRespuesta: "100000",
        FechaTrx: "2024-09-09T23:49:48",
        AliasOrigen: "0990460969",
        AliasDestino: "0963154223",
        Monto: 3.2,
      },
      {
        TiempoDemora: 4,
        Tipo: "TRANSFERENCIA",
        TrxEnviadaDesdePbo: "RECIBIDAS",
        BancoOrigen: "PRODUBANCO",
        BancoDestino: "PRODUBANCO",
        CodRespuesta: "100000",
        FechaTrx: "2024-09-09T23:49:48",
        AliasOrigen: "0990460969",
        AliasDestino: "0963154223",
        Monto: 3.2,
      },
      {
        TiempoDemora: 4,
        Tipo: "TRANSFERENCIA",
        TrxEnviadaDesdePbo: "RECIBIDAS",
        BancoOrigen: "PRODUBANCO",
        BancoDestino: "PRODUBANCO",
        CodRespuesta: "100000",
        FechaTrx: "2024-09-09T23:49:48",
        AliasOrigen: "0990460969",
        AliasDestino: "0963154223",
        Monto: 3.2,
      },
    {
      TiempoDemora: 9,
      Tipo: "TRANSFERENCIA",
      TrxEnviadaDesdePbo: "ENVIADAS",
      BancoOrigen: "PRODUBANCO",
      BancoDestino: "PRODUBANCO",
      CodRespuesta: "100000",
      FechaTrx: "2024-09-09T24:49:45",
      AliasOrigen: "0990460969",
      AliasDestino: "0963154223",
      Monto: 3.2,
    },
    // Más objetos Transaccion según sea necesario...
  ],
  ResultadosReporteCanalesWipHis: [],
  ClientesAtados: {
    CantidadAfiliados: 38257,
    CantidadNoAfiliados: 1101,
  },
};

// Middleware para parsear JSON y cabeceras
app.use(express.json());

// Ruta que recibirá fechas de inicio y fin en los headers
app.get('/api/data', (req, res) => {
  const fechaInicio = req.headers['fechainicio'];
  const fechaFin = req.headers['fechafin'];

  // Validar si las fechas existen en los headers
  if (!fechaInicio || !fechaFin) {
    return res.status(400).json({
      error: 'Los headers "fechaInicio" y "fechaFin" son requeridos',
    });
  }

  // Logica simple de validación de fechas y generación de respuesta
  console.log(`Fecha Inicio: ${fechaInicio}, Fecha Fin: ${fechaFin}`);
  
  // Devolver los datos simulados
  res.json(fakeData);
});

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
