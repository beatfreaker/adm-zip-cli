#! /usr/bin/env node
'use strict';
var fs = require('fs');
var AdmZip = require('adm-zip');
var meow = require('meow');
var cli = meow({
	help: [
		'Usage',
		'  > unzip <filename> <folderpath>',
		'',
		'	 <filename>   - file you waant to extract',
		'	 <folderpath> - to which folder you want to extract the files',
		'',
		'Example',
		'  > unzip filename.zip foldername'
	]
});
var zipFile = cli.input[0];
var dest = cli.input[1];
if(!zipFile) {
	console.log('file name is required');
	process.exit(1);
}
if(!dest) {
	console.log('destination folder name is required');
	process.exit(1);
}
if(zipFile && dest) {
	var zip = new AdmZip(zipFile);
	zip.extractAllTo(dest, true);
}
