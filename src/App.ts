import * as express from 'express';
import { TheWatcherAIClient } from './bot/BotClient'
class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router();

    router.get('/', (req, res) => {
      res.json({
        message: 'welcome to the A.I!'
      })
    });

    this.express.use('/', router)
    this.express.use('/api/', new TheWatcherAIClient().routes)
  }
}

export default new App().express
