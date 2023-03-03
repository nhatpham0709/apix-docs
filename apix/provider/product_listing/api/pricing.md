---
title: Cấu hình gói
---

## Gói trả trước ##
Với gói trả trước, người dùng cần trả một số tiền theo chu kỳ (có thể là 1 tháng, 3 tháng, 12 tháng) để có thể sử dụng API. **APIX** cho phép bạn cấu hình tối đa 4 trong số các gói trả trước này.

<div class="text--center"><img src="/img/screenshot/listing_api_pricing_1.png"  width="100%" height="100%"></img></div>

Với mỗi gói, bạn có thể cấu hình giá gói cùng các giới hạn về rate limit và quota

<div class="text--center"><img src="/img/screenshot/listing_api_pricing_2.png"  width="100%" height="100%"></img></div>

APIX hiện hỗ trợ hai loại giới hạn: giới hạn cứng và giới hạn mềm

Để ngăn các nhà phát triển thực hiện bất kỳ sự vượt quá nào, bạn có thể đặt giới hạn cứng. Nếu có giới hạn cứng, nhà phát triển sẽ bị giới hạn ở giới hạn hạn ngạch và sẽ bị chặn thực hiện thêm cuộc gọi sau khi đạt đến giới hạn.

Phí vượt mức cho phép nhà phát triển tiếp tục sử dụng API sau khi đạt đến giới hạn định mức và cho họ thời gian để nâng cấp gói dựa trên mức sử dụng dự kiến ​​trong tương lai, đồng thời đảm bảo nhà cung cấp API được trả tiền cho mức sử dụng cao hơn.

## Gói Trả theo request ##

Đôi khi, bạn có thể có người tiêu dùng với khối lượng nhỏ và request của họ có thể nhỏ hơn gói cơ bản của bạn, vì vậy bạn cần sử dụng gói Trả theo request. Trong kế hoạch này, bạn sẽ đặt giá cho mỗi request mà người tiêu dùng đưa ra và người tiêu dùng sẽ trả tiền khi họ thực hiện.

Trong tab **Giá**, hãy chọn **Nâng cao** và bạn sẽ thấy gói Trả theo request.

<div class="text--center"><img src="/img/screenshot/listing_api_pricing_3.png"  width="100%" height="100%"></img></div>

Bạn có thể định cấu hình throttle limit và giá của một request.

<div class="text--center"><img src="/img/screenshot/listing_api_pricing_4.png"  width="100%" height="100%"></img></div>

## Gói riêng tư ##

COMING SOON