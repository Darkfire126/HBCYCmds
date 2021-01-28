const ms = require('ms');
const Discord = require('discord.js')
const glob = require('glob');
const { promisify } = require('util');

const globPromise = promisify(glob)