#!/usr/bin/env node
// test.js — basic app smoke tests
// Usage:
//   npm test
//   TEST_URL=http://localhost:5173 npm test

import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';

const root = process.cwd();
const required = ['index.html', 'package.json', 'src/main.jsx'];
let ok = true;
for (const f of required) {
  if (!fs.existsSync(path.join(root, f))) {
    console.error(`Missing required file: ${f}`);
    ok = false;
  }
}
if (!ok) {
  console.error('One or more required files are missing.');
  process.exit(1);
}

function checkUrl(url, timeout = 5000) {
  return new Promise((resolve) => {
    try {
      const lib = url.startsWith('https') ? https : http;
      const req = lib.request(url, { method: 'GET', timeout }, (res) => {
        resolve(res.statusCode >= 200 && res.statusCode < 400);
      });
      req.on('error', () => resolve(false));
      req.on('timeout', () => { req.destroy(); resolve(false); });
      req.end();
    } catch (e) {
      resolve(false);
    }
  });
}

const testUrl = process.env.TEST_URL;
if (testUrl) {
  console.log(`Checking URL: ${testUrl}`);
  const okUrl = await checkUrl(testUrl);
  if (!okUrl) {
    console.error(`URL did not respond successfully: ${testUrl}`);
    process.exit(2);
  }
}

console.log('Basic project checks passed.');
process.exit(0);
