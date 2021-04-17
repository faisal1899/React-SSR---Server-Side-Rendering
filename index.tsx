import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Routes from './client/Routes';
import { IStaticContext } from './client/NotFound';

const app = express();

const port = 3030;

app.use('/api', proxy('http://localhost:3050'));

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);


  const matchedRoutes = matchRoutes(Routes, req.path);
  // console.log('matchRoutes = ', matchedRoutes);

  const promises = matchedRoutes?.map(({ route }) => {
    return route.loadData?.(store);
  }).map(promise => {
    if (promise) {
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(resolve);
      });
    }
  })

  Promise.all(promises).then(() => {
    const context: IStaticContext = {};
    const content = renderer(req, store, context);

    if (context?.notFound) {
      res.status(404);
    }

    console.log('context = ', context);
    if (context?.url) {
      return res.redirect(301, context.url);
    }
    res.send(content);
  });
});

app.listen(port, () => {
  console.log('Listening on port ', port);
});