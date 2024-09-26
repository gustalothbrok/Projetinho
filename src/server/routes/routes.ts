import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

router.post('/teste/:id', (req: Request, res: Response) => {
  console.log(req.body);
  console.log(req.params.id);
  res.status(StatusCodes.ACCEPTED).send('Enviado com sucesso'); 
});

export { router };
