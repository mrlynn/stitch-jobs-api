# stitch-jobs-api

A jobs searching api created using MongoDB Stitch. 

[![Powered by Stitch](http://badge.learnstitch.com/?appid=internjobs-gurbl)](http://cloud.mongodb.com)

# API

There are currently 2 endpoints to get jobs from. 

`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/internjobs-gurbl/service/http/incoming_webhook/greenhouse`

`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/internjobs-gurbl/service/http/incoming_webhook/lever`

#### Searching

- Search by `title` or by `location`
- Add a query parameter to the end of any endpoint, Eg: `?title=intern&location=new york` or `?location=dublin&title=intern`
- `greenhouse` endpoint only contains `MongoDB` jobs (as of Oct 27)
- `lever` endpoint only contains `Zendesk` jobs (as of Oct 27)

#### Example

`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/internjobs-gurbl/service/http/incoming_webhook/greenhouse?title=intern&location=new york`

```
{
  "jobs": [
    {
      "_id": {
        "$oid": "5bd3c733094195736d6513aa"
      },
      "absolute_url": "https:\/\/www.mongodb.com\/careers\/job\/?gh_jid=1306593",
      "internal_job_id": {
        "$numberInt": "852935"
      },
      "location": {
        "name": "New York City"
      },
      "metadata": [
        {
          "id": {
            "$numberInt": "83199"
          },
          "name": "Keyword",
          "value": null,
          "value_type": "long_text"
        }
      ],
      "id": {
        "$numberInt": "1306593"
      },
      "updated_at": "2018-10-22T10:33:33-04:00",
      "title": "Software Engineering Intern - Summer 2019"
    }
  ]
}
```
