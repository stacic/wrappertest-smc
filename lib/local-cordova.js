#! /usr/bin/env node

var findup = require('findup-sync');
var shelljs = require('shelljs');

var cordovapath;

cordovapath = findup('node_modules/cordova/bin/cordova');
if(cordovapath) {
	console.log('Found cordova at: ' + cordovapath);
	shelljs.exec(cordovapath + ' ' + process.argv.slice(2));
} else {
	// no cordova was found
	console.log('Could not find cordova');
}