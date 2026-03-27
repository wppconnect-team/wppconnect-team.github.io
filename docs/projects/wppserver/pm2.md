---
title: Configuration PM2
sidebar_position: 99
---



PM2 (Process Manager 2) is a popular and widely used process manager for Node.js applications. It helps in managing and running Node.js applications in a production environment. 

PM2 provides several features that are beneficial for deploying and monitoring Node.js applications.


### How to install PM2 to run Node.js applications on the production server



Install pm2:

```bash
sudo npm install -g pm2
```

### Build Application

Go to the directory where the wppconnect-server is located and execute the command below to build the application.

```bash
npm run build
```


### Start Application PM2


```bash
pm2 start npm --start --name wppconnect-server
```
or navigate to project directory then
```bash
pm2 start node ./dist/server.js --name wppconnect-server
```

### Logs 

Yes, logs are extremely important. But with PM2, you can also obtain the log of your application. The logs here are the ones displayed in console, such as log, info, and error.


You can easily display the log of all processes:


```bash
pm2 logs
```
