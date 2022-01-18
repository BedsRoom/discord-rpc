


var rpc = require("discord-rpc");
const config = require('./config.json');

const client = new rpc.Client({ transport: 'ipc' });

client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "A simple discord-rpc", // the description 
assets : {
large_image : "image", // the image
large_text : "Hover me" // the hovered text
},
buttons : [{label : "Button1" , url : "https://github.com/bedsroom/discord-rpc"},{label : "Button2",url : "https://github.com/bedsroom/discord-rpc"}] // buttons in your profile
}
})
});

client.login({ clientId :  config.client_id});
console.log(' --| Im ready |--')
