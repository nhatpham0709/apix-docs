---
title: API
---

## Tìm kiếm API

Điều đầu tiên bạn muốn làm là tìm một API hoạt động tốt nhất cho ứng dụng của bạn. Chọn **API** từ thanh điều hướng bên trái trên trang chủ.

<div class="text--center"><img src="/img/screenshot/api_1.png"  width="100%" height="100%"></img></div>

Bạn sẽ được dẫn tới trang listing các sản phẩm API đang có trên sàn

<div class="text--center"><img src="/img/screenshot/api_2.png"  width="100%" height="100%"></img></div>

Sau khi chọn API từ sàn, bạn sẽ được dẫn tới trang API listing tương ứng.

<div class="text--center"><img src="/img/screenshot/api_3.png"  width="100%" height="100%"></img></div>

Tab **Playground** bao gồm các thông tin cơ bản cần thiết để bạn có thể sử dụng API, bao gồm các **Endpoint** tham số đầu vào và phần code mẫu để tích hợp vào hệ thống của bạn. Phần code mẫu hỗ trợ nhiều ngôn ngữ lập trình khác nhau.

Ngoài ra bạn cũng có thể tìm thêm các thông tin về API (nếu có) tại các tab **Giới thiệu, Hướng dẫn** và **Thảo luận**

## Mua gói sử dụng API

Mỗi API sẽ có các gói khác nhau, ứng với số lượng quota, rate limit khác nhau, bạn có thể lựa chọn gói phù hợp với nhu cầu sử dụng của mình.

<div class="text--center"><img src="/img/screenshot/api_4.png"  width="100%" height="100%"></img></div>

Hầu hết các API đều có gói miễn phí, bạn có thể đăng ký sử dụng gói này để trải nghiệm API của nhà cung cấp.

## Sử dụng API trên trình duyệt

**API Key**: Sau khi đăng ký tài khoản, bạn sẽ có một API Key duy nhất dùng để sử dụng các API trên sàn. Khi tích hợp API, bạn sẽ cần gửi kèm API Key này trong header `x-api-key`.

Sau khi đã mua gói, hãy trở lại tab **Playground** để dùng thử API, nhập các tham số cần thiết, bấm vào nút **Sử dụng**, kết quả sẽ được hiển thị trực tiếp trên trình duyệt.

<div class="text--center"><img src="/img/screenshot/api_5.png"  width="100%" height="100%"></img></div>

Ngoài ra, trong phần header của kết quả trả về, bạn cũng có thể tìm thấy số lượng request còn lại của bạn (header `x-dmp-quota`) và thời hạn sử dụng (header `x-dmp-ttl`, tính bằng giây)

<div class="text--center"><img src="/img/screenshot/api_6.png"  width="100%" height="100%"></img></div>
