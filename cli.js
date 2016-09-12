#!/usr/bin/env node

'use strict';
const path = require('path');

const opn = require('opn');

const img = path.join(__dirname, 'cards.png');
console.log('opening...');
opn(img);
