---
title: Base URL
---
Tất cả các điểm cuối API đều có liên quan đến Base URL, URL này được thêm dưới dạng "tiền tố" cho tất cả các điểm cuối API. Cách tiếp cận này tránh nhu cầu luôn xác định URL tuyệt đối cho điểm cuối và tăng tính di động của API bằng cách chỉ cần thay đổi Base URL. Base URL này là nơi APIX sẽ định tuyến các yêu cầu.

Để bắt đầu cấu hình các endpoint, trước tiên bạn cần thiết lập Base URL. Base URL sẽ giúp việc thêm và chỉnh sửa endpoint của bạn dễ dàng hơn. Ví dụ bạn có các API Endpoint: 

```
https://example.com/api/ep1/read
https://example.com/api/ep1/get
https://example.com/api/ep2/read
```

khi đó bạn có thể cấu hình Base URL là

```
https://example.com/api
```

<div class="text--center"><img src="/img/screenshot/listing_api_base_url_1.png"  width="100%" height="100%"></img></div>

Bạn có thể cập nhật **Base URL** của mình từ trang này bất kỳ lúc nào.
