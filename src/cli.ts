#! /usr/bin/env node
import fs from 'fs';
import { SkyScriptErr } from './util/error.js';
import { repl, run } from './index.js';
import _colors from 'colors';
import Config from './util/config.js';
const { version } = Config;


const [node_exec, ss_path, ...args] = process.argv;
const help = [
    "Ecliptix help version "+version,
    "Usage:",
    "ecx [file] <arguments>",
    "Arguments:",
    "\t-h, --help: shows help menu",
    "\t-v, --version: shows language version",
    "\t-r, --repl: starts a Ecliptix REPL",
    "\t-d, --debug: starts a debug session on the file"
]
let debug = false;

args.forEach(async (v) => {
    switch(v){
        case "-v":
            case "--version":
                console.log("webwise".blue, "Ecliptix".cyan, "version", version);
                process.exit(0);

        case "-h":
            case "--help":
                console.log(help.join("\n"));
                process.exit(0);
        
        case "-r":
            case "--repl":
                await repl()
        break;
        case "-d":
            case "--debug":
                debug = !debug;
        break;
    
        default:
            run(v, debug);
    }
});