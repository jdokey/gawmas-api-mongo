/**
 * To be run on JSON exported from CSV,
 * After manual find-n-replace on property names.
 *
 * TODO - Update this script to include property name changes ...
 *
 */

const fs = require('fs');
const rawdata = fs.readFileSync('raw-hunt-data3.json');
let hunts = JSON.parse(rawdata);

for (let i=0; i<hunts.length; i++) {
  if (typeof hunts[i].bucks === 'string') {
    hunts[i].bucks = parseInt(hunts[i].bucks);
  }
  if (typeof hunts[i].does === 'string') {
    hunts[i].does = parseInt(hunts[i].does);
  }
  if (typeof hunts[i].boars === 'string') {
    hunts[i].boars = parseInt(hunts[i].boars);
  }
  if (typeof hunts[i].sows === 'string') {
    hunts[i].sows = parseInt(hunts[i].sows);
  }
  if (typeof hunts[i].huntDuration === 'string') {
    hunts[i].huntDuration = parseInt(hunts[i].huntDuration);
  }
  if (typeof hunts[i].hunterCount === 'string') {
    hunts[i].hunterCount = parseInt(hunts[i].hunterCount);
  }
}

fs.writeFileSync('raw-hunt-data4.json', JSON.stringify(hunts));
// console.log(hunts.length);

