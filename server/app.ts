import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import ProductController from './controllers/product.ts';

const client = '1575914685904574'
const secret = 'c169e6416c1d075efb400276d0bb2258'

const router = new Router();
router
  .get('/products', ProductController.index)
  .get('/product/:id', ProductController.show);

// Starting the server
const app = new Application();
const PORT = 3000;
app.use(oakCors()); // Enabled Cors
app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Listening on port ${PORT}`);
await app.listen({ port: PORT });
