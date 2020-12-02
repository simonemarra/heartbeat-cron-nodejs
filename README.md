# heartbeat-cron-nodejs

This is a simple script to send timed requests as "heartbeat" to an external service like uptime robot or similar. In this way you can have a feedback on running status of your nodejs program.

# Configuration file

The file **heartbeat-config.json** have 4 parameters that should be customized.

* **uri** insert here the http/https uri of your service
* **method** get/post/put/etc...
* **body** can be null or a object (json, text, etc...)
* **json** a flag used to add the 'content-type: application/json' header to the request and parse the response as json object

