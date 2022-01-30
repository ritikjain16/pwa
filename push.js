var push = require('web-push')

// let vapidkeys=push.generateVAPIDKeys();

// console.log(vapidkeys);

let vapidkeys = {
    publicKey: 'BJ_UWkwejGBTRoKdIf-U5WPe8h_QD-oDBkGI0dSJ3NmTvdoCEXGdXfjGSmK1CerFtxInMG08cohiHW7KzKzo_CE',
    privateKey: 'qeScOcGPBLIIGYirILuIjawndFE1Sk5i7kc7VCeDkRg'
}

push.setVapidDetails('mailto:ritik9628@gmail.com',vapidkeys.publicKey,vapidkeys.privateKey);

let sub={
    
}
push.sendNotification(sub,'test-message')