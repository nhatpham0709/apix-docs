---
title: API
---

## Discover APIs ##

The first thing you will want to do is find an API that works best for your application. Choose **API** from the left-hand navigation bar on the landing page. 

<div class="text--center"><img src="/img/screenshot/api_1.png"  width="100%" height="100%"></img></div>

You will be redirected to the listing page that includes all the public APIs in our platform.

<div class="text--center"><img src="/img/screenshot/api_2.png"  width="100%" height="100%"></img></div>

Once you select API, you are brought to the corresponding API page.

<div class="text--center"><img src="/img/screenshot/api_3.png"  width="100%" height="100%"></img></div>

The **Playground** tab includes most of the basic information needed to get started with the APIs: the endpoints, parameters, and code snippets to help you integrate the API into your code. Our code snippets are available in many different programming languages.

You can also find more information about the APIs (if any) in the **Introduction**, **Tutorial**, and **Discussion** tabs.

## Subscription Plans & Pricing ##
Each API will have different subscription plans with different quotas and rate limits; you can choose the plan that suits your needs.

<div class="text--center"><img src="/img/screenshot/api_4.png"  width="100%" height="100%"></img></div>

Most APIs have a free basic plan; you can subscribe to this plan to experience the provider's API before you buy the paid plans.

## Test API in browser ##
**API Key**: After registering an account, you will have only one API Key to use all APIs on the platform. When integrating the API, you will need to include this API Key in the `x-api-key` header of your request.

After purchasing a plan, go back to the **Playground** tab to try the API, enter the required parameters, and click the **Execute** button; the result will be displayed directly in the browser in the **Result** tab.

<div class="text--center"><img src="/img/screenshot/api_5.png"  width="100%" height="100%"></img></div>

In addition, in the header of the returned response, you can also find your remaining quota (header `x-dmp-quota`) and expiry date (header `x-dmp-ttl`, in seconds).

<div class="text--center"><img src="/img/screenshot/api_6.png"  width="100%" height="100%"></img></div>