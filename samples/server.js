var proxy = require('..')({
    port: 80,
    bunyan:false,
    xfwd: false,
    letsencrypt: {
      path: "certs",
      port: 3000
    },
    ssl: {
      port: 443
    }
  });
  console.log('--------------- proxy is up ---------------------');
  var config = require('./settings/config.js');
  config.sites.forEach(site=>{
    proxy.register(site.url, site.internalUrl,site.options);
  });