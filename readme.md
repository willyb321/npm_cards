# npm-cards [![Build Status](https://travis-ci.org/willyb321/npm-cards.svg?branch=master)](https://travis-ci.org/willyb321/npm-cards)

> My incredible module


## Install

```
$ npm install --save npm-cards
```


## Usage

```js
const npmCards = require('npm-cards');

npmCards('unicorns');
//=> 'unicorns & rainbows'
```


## API

### npmCards(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global npm-cards
```

```
$ npm-cards --help

  Usage
    npm-cards [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ npm-cards
    unicorns & rainbows
    $ npm-cards ponies
    ponies & rainbows
```


## License

MIT © [William Blythe](https://tehsuperwilly.tech)
