import * as express from 'express';


class BotClient {
    public express;

    constructor() {
        this.express = express()
    }

    public get routes() {
        const router = express.Router();

        router.get('/', (req, res) => {
            res.json({
                message: 'Hello bot!'
            })
        });

        return router;
    }
}

// export default new Bot().routes;
export { BotClient };