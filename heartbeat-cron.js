const cron = require('node-cron');
const heartbeatConfig = require('./heartbeat-config.json');

const fetch = require('node-fetch');

const cronEveryMinute = '* * * * *';
const cronEveryHour = '* * * *';

// Schedule the task to run every hour
const cronTiming = cronEveryMinute; // cronEveryHour
cron.schedule(cronTiming, () => heartBeatSendRequest());

function heartBeatSendRequest() {
    const _uri = heartbeatConfig.uri;
    const _method = heartbeatConfig.method.toUpperCase();
    const _body = heartbeatConfig.body;
    const _json = heartbeatConfig.json;
    console.log(`heartbeat sending request\r\n\turi: ${_uri}\r\n\tmethod: ${_method}\r\n\tbody: ${_body}\r\n\tjson: ${_json}`);
    options = {
        method: _method
    };
    if(_body !== null) {
        options.body = _body;
    }
    if (_json === true) {
        options.headers = { 'Content-Type': 'application/json'}
    }
    
    if(_json === true) {
        fetch(_uri, options)
            .then(res => res.json())
            .then(json => console.log(json));
    } else {
        fetch(_uri, options)
            .then(res => res.text())
            .then(body => console.log(body));
    }
}

heartBeatSendRequest();