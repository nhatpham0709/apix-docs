---
title: Endpoints
---
Sau khi đã cấu hình **Base URL** bạn có thể tiến hành cấu hình các Endpoint cho API.

<div class="text--center"><img src="/img/screenshot/listing_api_endpoint_1.png"  width="100%" height="100%"></img></div>

**APIX** cho phép bạn cấu hình các phương thức HTTP khác nhau như **GET, POST, PUT, PATCH, DELETE**. Đường dẫn Điểm cuối kết hợp với **Base URLở** được cấu hình ở trên tạo thành một địa chỉ API. Với ví dụ trên, bạn có thể thêm đường dẫn Endpoint là:

```
/ep1/read
/ep1/get
/ep2/read
```

Ngoài ra, bạn có thể sử dụng {dấu ngoặc nhọn} để chỉ ra các tham số đường dẫn nếu cần. ví dụ: /test/{id}

Tiếp theo là phần cấu hình header và các tham số. Ngoài **query** và **body**, **APIX** cho phép bạn cấu hình những header bí mật, được gửi tới API của bạn mỗi khi người dụng tạo một request tới. Những header bí mật này sẽ được ẩn đi ở phía người dùng.

<div class="text--center"><img src="/img/screenshot/listing_api_endpoint_2.png"  width="100%" height="100%"></img></div>

Sau khi cấu hình xong **Endpoint**, bạn có thể thấy tiến trình tạo

<div class="text--center"><img src="/img/screenshot/listing_api_endpoint_3.png"  width="100%" height="100%"></img></div>

bạn có thể bấm vào nút làm tươi như hình dưới để cập nhật tiến trình tạo **Endpoint** của mình

<div class="text--center"><img src="/img/screenshot/listing_api_endpoint_4.png"  width="100%" height="100%"></img></div>
