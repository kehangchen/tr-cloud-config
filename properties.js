'use strict';

angular.module('gemini')
.constant('APP_PROPERTIES', {
    // this is public key of the google recaptcha.  Need to update
    RECAPTCHA_SITEKEY: '6Lca5AoUAAAAACOEz0bVVn2em5KZFI7ScNmDHmQe',
    // this is used to define names of the client for the application to use.  It will use this name to load proper client image
    CLIENT_NAMES: 'traderocket,pemex,hitachi',
    // this is used to define the home page of pv1
    // following is the instance running in localhost
    //PV1_URL: 'http://192.168.128.21:8080/TradeRocket/home.jsp',
    // following is the instance running in dev environment
    //PV1_URL: 'https://dev.traderocket.net/dev/home.jsp',
    // following is the instance running in hitachi test environment
    PV1_URL: 'https://hitachitest.traderocket.net/hitachitest/home.jsp',
    // this is used to define the home page of node-red
    // following is for instance running aws
    //NODE_RED_URL: 'http://35.163.222.131:8880'
    // following is for instance running in localhost
    NODE_RED_URL: 'http://localhost:1880'
    //NODE_RED_URL: '[[${noderedRootUrl}]]'
    // following is for instance running in AWS with SSL
    //NODE_RED_URL: 'https://flow-dev.traderocket.io'
  });
