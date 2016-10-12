# brisky-stamp
[![Build Status](https://travis-ci.org/vigour-io/brisky-stamp.svg?branch=master)](https://travis-ci.org/vigour-io/brisky-stamp)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/brisky-stamp.svg)](https://badge.fury.io/js/brisky-stamp)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/brisky-stamp/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/brisky-stamp?branch=master)

Generates unique stamps for change, listens to close events

```javascript
const briskyStamp = require('brisky-stamp')

// briskyStamp.create(type, source, override)
// results in click-1
const stamp = briskyStamp.create('click')

// fires when a stamp closes (is handled)
briskyStamp.on(stamp, () => console.log('closing'))

// fires after on listeners, when a stamp closes
briskyStamp.done(stamp, () => console.log('closed'))

// fires the onclose listener
briskyStamp.close(stamp)

const parsed = briskyStamp.parse(stamp)
// returns a parsed stamp { type: 'click', val: 1 }

// remove all listeners
briskyStamp.remove(stamp)

// to debug use
const debug = require('briskyStamp/debug')
debug(briskyStamp)
// this will throw errors when stamps are created while others are still open

```
