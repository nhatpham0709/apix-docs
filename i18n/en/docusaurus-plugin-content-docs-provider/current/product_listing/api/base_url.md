---
title: Base URL
---
All API endpoints are relative to a base URL, which is added as a "prefix" to all API endpoints. This approach avoids the need to always define absolute URLs for endpoints, and increases API portability by simply changing the base URL. This base URL is where APIX will route requests.

To start configuring the endpoints, you first need to set up the **Base URL**. **Base URL** will make it easier to add and edit your endpoints. For example if you have following API Endpoints:

```
https://example.com/api/ep1/read
https://example.com/api/ep1/get
https://example.com/api/ep2/read
```

you can configure your Base URL as

```
https://example.com/api
```
<div class="text--center"><img src="/img/screenshot/listing_api_base_url_1.png"  width="100%" height="100%"></img></div>

You can update your base URL from this page at any time.
