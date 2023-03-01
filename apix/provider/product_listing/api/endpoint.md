---
title: Endpoints
---
After configuring **Base URL** you can set up **Endpoints** for your API. 

<div class="text--center"><img src="/img/screenshot/listing_api_endpoint_1.png"  width="100%" height="100%"></img></div>

**APIX** allows you to configure different HTTP methods like **GET, POST, PUT, PATCH, DELETE**. The Endpoint path combined with the **Base URL** configured above forms an API address. With the example above, you can add the Endpoint path as:

```
/ep1/read
/ep1/get
/ep2/read
```

In addition, you can use `{curly braces}` to indicate path parameters if needed. e.g., `/test/{id}`

Next is the header and parameter configuration section. In addition to the **query** and **body**, **APIX** allows you to configure **secret headers**, which are sent to your API every time a user makes a request. These secret headers will be hidden from the user side.

<div class="text--center"><img src="/img/screenshot/listing_api_endpoint_2.png"  width="100%" height="100%"></img></div>

After configuring the **Endpoint**, you can see the creation progress

<div class="text--center"><img src="/img/screenshot/listing_api_endpoint_3.png"  width="100%" height="100%"></img></div>

you can click the refresh button as shown below to update your Endpoint creation progress

<div class="text--center"><img src="/img/screenshot/listing_api_endpoint_4.png"  width="100%" height="100%"></img></div>
