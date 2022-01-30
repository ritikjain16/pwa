var push = require('web-push')

// let vapidkeys=push.generateVAPIDKeys();

// console.log(vapidkeys);

let vapidkeys = {
    publicKey: 'BJ_UWkwejGBTRoKdIf-U5WPe8h_QD-oDBkGI0dSJ3NmTvdoCEXGdXfjGSmK1CerFtxInMG08cohiHW7KzKzo_CE',
    privateKey: 'qeScOcGPBLIIGYirILuIjawndFE1Sk5i7kc7VCeDkRg'
}

push.setVapidDetails('mailto:ritik9628@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);

let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/e9Mn97hOkIE:APA91bHwEvg46sCiQkoT2n1iKym9of514AoKJNKJPGgrVCzcIpjRUcQFnXga89JLwHiMQeQoYfzP4hJourvQfvdhS-3m5iZVLneKqg7tYNHnls81O7_x5HoznuyYSpvaa7nhcrqD0pUd",
    expirationTime: null,
    keys:
    {
        p256dh: "BGvqGQ7F-E17JEA5kmpTyZrwlYq0x_9c6GeGgDOziRnjrgkaD9lG2ZHvF4scRW_uO8YsmdpLTYHsWAfzo3ZR4es",
        auth: "jaaqBKqre_CCuDj1ESSRbw"
    }
}

push.sendNotification(sub, 'test-message')