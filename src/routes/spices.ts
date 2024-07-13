const { Router } = require('express');

import { Request, Response } from 'express';

export const spiceRouter = Router();

interface SpiceRoutes {
  [key: string]: {
    route: string;
    cb: (req: Request, res: Response) => void;
  };
}
const spiceRoutes: SpiceRoutes = {
  get: {
    route: '/spices',
    cb: (req: Request, res: Response) => {
      res.send('oi, mate');
    },
  },
};

Object.entries(spiceRoutes).forEach(([request, { route, cb }]) => {
  // eventually will be a controller here which will import services that will be async await calls
  spiceRouter[request](route, cb);
});
