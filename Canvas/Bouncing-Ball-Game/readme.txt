Các yêu cầu của trò chơi được phát biểu như sau:

Là người chơi, tôi muốn một màn hình hiển thị với độ rộng và độ cao cố định
Là người chơi, tôi muốn một quả bóng hiển thị tại một vị trí nhất định
Là người chơi, tôi muốn quả bóng có thể di chuyển theo một góc nhất định
Là người chơi, tôi muốn quả bóng đổi hướng di chuyển khi chạm vào các biên trái, phải và trên của màn hình, góc đổi hướng là đối xứng với góc di chuyển trước khi va chạm
Là người chơi, tôi muốn trò chơi kết thúc nếu quả bóng chạm vào biên dưới của màn hình
Là người chơi, tôi muốn hiển thị một thanh đỡ ở phía dưới màn hình
Là người chơi, tôi muốn thanh bar có thể di chuyển sang trái hoặc sang phải
Là người chơi, tôi muốn khi quả bóng chạm thanh đỡ thì di chuyển lên phía trên
Là người chơi, tôi muốn góc bay của quả bóng thay đổi khi chạm thanh đỡ, tuỳ theo tốc độ đang di chuyển của thanh đỡ
Là người chơi, tôi muốn có thể chơi lại sau khi trò chơi kết thúc
Là người chơi, tôi muốn có thể tính điểm dựa theo thời gian chơi, chơi càng lâu thì điểm càng cao

Hướng dẫn
- Tạo đối tượng GameBoard, bao gồm các thuộc tính:
Độ rộng
Độ cao

- Tạo một đối tượng Ball, bao gồm các thuộc tính và phương thức:
Toạ độ X
Toạ độ Y
Góc di chuyển
Tốc độ di chuyển
Phương thức di chuyển
Phương thức đổi hướng khi va chạm với viền hoặc thanh đỡ

- Tạo một đối tượng Bar, bao gồm các thuộc tính và phương thức:
Độ rộng của thanh Bar
Toạ độ X
Di chuyển sang trái
Di chuyển sang phải

- So sánh toạ độ của các đối tượng để xác định va chạm