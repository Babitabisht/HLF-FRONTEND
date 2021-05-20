# HLF-FRONTEND
Angular Based Frontend  for Three peer one org hyperledger Based network.


Related Repositories: -
1. [Blockchain-Network](https://github.com/Babitabisht/Assignment_Blockchain_Network)
1. [APIs](https://github.com/Babitabisht/Assignment_Backend)


Replace apiURL from localhost to your server address in the below two files under environments folder -
1. environment.ts
1. environment.prod.ts

```
export const environment = {
  production: true,// value false in dev mode
  apiURL: 'http:your_server_ip:3001'
};

```


**How to set up overall system**
This is a Hyperledger fabric (v 1.4) based network, consists of a single organisation with three peers. The whole solution consists of, Hyperledger fabric based blockchain network, Express.js based backend APIs that’s interacting with the network and Angular based Frontend that's providing the solution, user interface.

Feature -
The overall application consists of  -
1. Uploading a file.
1. Calculating md5 hash of the file.
1. Storing the calculated hash and metadata of the file into distributed ledger through golang based smart contract.


System Prerequisites : -
1. [Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)
1. [Docker-compose](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04)
1. Nodejs version 8.x
1. [Golang](https://www.tecmint.com/install-go-in-ubuntu/)
1. [Python](https://tecadmin.net/install-python-2-7-on-ubuntu-and-linuxmint/) 
1. [Pm2](https://www.npmjs.com/package/pm2)
1. [Angular cli](https://angular.io/cli)

Three APIs are required, clone following Repos -

 [Frontend Application](https://github.com/Babitabisht/HLF-FRONTEND)

1. Clone the above repository
1. Replace the apiUrl present in  ‘environment.ts’ and environment.prod
 Replace: ```http://localhost:3001' with 'http://your_server_ip:3001```
1. Run   ```npm i```
1.  Run  ```pm2 start "ng serve --host 0.0.0.0 --port=3200 "   --name=angularFrontend``` (this will run angular application in 3200 port of server IP)
1. Check with ‘pm2 list’


 [APIs](https://github.com/Babitabisht/Assignment_Backend)
1. Clone the above repository
1. Install dependencies through ```npm i```
1. Run with pm2 - ``` pm2 start "npm start" --name=backend_apis```
1. Check with ```pm2 list```

[Blockchain-Network](https://github.com/Babitabisht/Assignment_Blockchain_Network)

1. Clone the above repository
1. Make sure the node version is ‘v8.x’ (v8.14.1)
1. Run the script ``./runApp.sh``
  The above script, pull the necessary images from the container registry and  spins up the required containers.

1. Run the script ``./testAPIs.sh`` 
    The above script, create channel, join all three peers to the channel, update anchor peers, install chaincode , instantiate chaincode and enroll two users in the network.

1. After Successful completion of the above steps check the couchdb instances on the following address, couchdb instances are not password protected in this case.
  http://172.16.16.147:5984/_utils
http://172.16.16.147:5985/_utils
http://172.16.16.147:5986/_utils

1. Stop the ```./runApp.sh``` script
1. Run with pm2 -  ```pm2 start app.js```
1. Check with ```pm2 list```



