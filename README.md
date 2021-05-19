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