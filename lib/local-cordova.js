#! /usr/bin/env node

var findup = require('findup-sync');
var shelljs = require('shelljs');

var cordovapath;

cordovapath = findup('node_modules/cordova/bin/cordova');
if (!cordovapath) {
	console.log('Could not find a local cordova install. Will attempt to run globally.');
	cordovapath = 'cordova';
}
shelljs.exec(cordovapath + ' ' + process.argv.slice(2));
