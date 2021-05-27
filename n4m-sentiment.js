// ---------------------------------------------------------------------
// n4m-sentiment.js 
// lysdexic // jcurtis 2020
// 
// analyse your sentiments with node for max	
// ---------------------------------------------------------------------


const maxAPI = require("max-api");
var Sentiment = require("sentiment");
var sentiment = new Sentiment();

// Convenience access to MESSAGE_TYPES
const MESSAGE_TYPES = maxAPI.MESSAGE_TYPES;

// MESSAGE_TYPES supports 4 built-in types:
// ALL		for handling all messages to node.script
// BANG		for handling all bang messages to node.script
// NUMBER	for handling number input
// LIST		for handling list input
// DICT		for handling dict input

maxAPI.addHandler(MESSAGE_TYPES.BANG, async () => {
	await maxAPI.outlet("handler", "received: bang");
});

maxAPI.addHandler(MESSAGE_TYPES.NUMBER, async (num) => {
	await maxAPI.outlet("handler", `received number: ${num}`);
});

maxAPI.addHandler(MESSAGE_TYPES.LIST, async (...args) => {
	await maxAPI.outlet("handler", `received list: ${args.join(", ")}`);
});

maxAPI.addHandler(MESSAGE_TYPES.DICT, async (dict) => {
	await maxAPI.outlet("handler", `received dict: ${JSON.stringify(dict)}`);
});

maxAPI.addHandler("analyse", async (...args) => {
	var wordlist = args.join(" ");
	var result = sentiment.analyze(wordlist);
	await maxAPI.outlet("dictionary", result);
});

// We are using the ALL type to implement a logger that catches all input
// the first argument indicates whether the message has been processed by any handler before
// the second argument indicates the type or selector of the message
maxAPI.addHandler(MESSAGE_TYPES.ALL, async (handled, selector, ...msg) => {
	await maxAPI.outlet("log", ...msg);
});
