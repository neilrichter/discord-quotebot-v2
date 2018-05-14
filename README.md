# Discord Quotebot v2

## Installation :

Run `npm install` to install the dependendies, rename `config.js.dist` to `config.js` and insert your bot token (or your own token) in the quotes.

If you want to use your bot as a self-bot, you can find your token in the Discord client by opening the Dev Tools with `⌘ + ⌥ + I` on Mac keyboards or `Ctrl + Shift + I` on other keyboards.

## Running the bot :

To run the bot, run `npm run bot` or `node index.js`. Stop it with `Ctrl + C`.

## Options:

Add options to the end of the message with the following syntax : `-optionName value`
Example: 
```
!quote 445610958404976640 -color #52ABCC
!quote 445610958404976640 -color #52ABCC -option2 value2 (-optionX valueX ...) # Multiple options
```

### color

Color allows you to change the embed message bar color. It accepts only hexadecimal values, is case insensitive and does not need to be preceeded of a `#`

Example :
```
!quote 445610958404976640 -color #52ABCC
!quote 445610958404976640 -color 52AbCc # are equal
```

### lang

Lang defines the output language. For the moment, english (en) and french (fr) are available. 

Example :
```
!quote help -lang fr
```