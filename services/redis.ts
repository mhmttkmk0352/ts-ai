import { Tedis, TedisPool } from 'tedis';

class RedisClass {
    public tedis: any;
    constructor() {
        this.tedis = new Tedis();

    }
    lpush = (key: any, data: any) => {
        //await this.tedis.lpush(89, "a", "b", "c");

        return new Promise((resolve: any, reject: any) => {
            (async () => {
                let lpushResult: any = await this.tedis.lpush(key, data);
                resolve(lpushResult);
            })()
        });

    }

    lrange = (key: any) => {
        return new Promise((resolve: any, reject: any) => {
            (async () => {
                let lrange: any = await this.tedis.lrange(key, -100, 999999999999);
                resolve(lrange);
            })()
        });
    }
}

export = new RedisClass;