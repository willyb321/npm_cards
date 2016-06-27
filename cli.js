#!/usr/bin/env node
'use strict';
const opn = require('opn');

const img = __dirname + "/cards.png"
console.log('opening...');
opn(img);
