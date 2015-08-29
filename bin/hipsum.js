#!/usr/bin/env node

var words = require('hipsteripsum')
var chalk = require('chalk').cyan
var buffer = require('copy-paste')

var ps = process.argv.slice(2)[0] || 2
var text = words.get(ps, false, true)
buffer.copy(text, function() {
    var p = 'paragraph' + (ps > 1 ? 's' : '')
    var msg = 'Copied '+ [ps, p].join(' ') +' of hipstery goodness'
    console.log(chalk(msg))
})

