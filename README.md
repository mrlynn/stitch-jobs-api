# stitch-jobs-api

A jobs searching api created using MongoDB Stitch. 

[![Powered by Stitch](http://badge.learnstitch.com/?appid=internjobs-gurbl)(http://cloud.mongodb.com)]

# API

There are currently 2 endpoints to get jobs from. 

`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/internjobs-gurbl/service/http/incoming_webhook/greenhouse`

`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/internjobs-gurbl/service/http/incoming_webhook/lever`

#### Searching

- Use a query parameter to the end of any endpoint, Eg: `?title=intern`
- `greenhouse` endpoint only contains `MongoDB` jobs (as of Oct 27)
- `lever` endpoint only contains `Zendesk` jobs (as of Oct 27)
