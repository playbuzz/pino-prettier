# pino-prettier

A terminal pino json-stream beautifier, based on pino-pretty

# installation

```
npm i -g '@playbuzz/pino-prettier'
```
After which, your machine has learnt a new command: `prettier`

# usage

```
exco-run --config <path to .excorc> | prettier
```

# what's the difference from `pino-pretty` ?
 - meta objects are formatted using `util.inspect` which uses colors instead of the noisy`json.stringify`
 - timestamp is "humanized" as just `HH:MM:ss.l`
 - the log channel is part of the formatted main line, and colorized with a unique color per channel.
 - level field appears first, to make its color distinctive against the indent black, and less confusing with the colorized channels.
 - fields are optimized for developer machine (filter out `host`, `pid`, `version`, etc)

Have fun :)
