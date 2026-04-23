const dns = require('dns');
const resolver = new dns.Resolver();
resolver.setServers(['8.8.8.8']);

resolver.resolveSrv('_mongodb._tcp.cluster0.uro4sch.mongodb.net', (err, addresses) => {
    if(err) {
        console.error('SRV Error:', err);
    } else {
        console.log('SRV:', addresses);
    }
    
    resolver.resolveTxt('cluster0.uro4sch.mongodb.net', (err, txt) => {
        if(err) {
            console.error('TXT Error:', err);
        } else {
            console.log('TXT:', txt);
        }
    });
});
