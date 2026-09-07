# Bài 1: Giải thích công dụng của các câu lệnh sau

`git restore –staged file1`

=> Di chuyển `file1` từ vùng Staging về vùng Woring.

`git restore --staged .`

=> Di chuyển tất cả các files trong vùng Staging về vùng Woring.

`git reset HEAD~3`

=> Di chuyển tất cả các files nằm trong 3 commits mới nhất từ vùng Repository về vùng Working.

# Bài 2: Bài này bạn hãy suy nghĩ trong đầu, viết ra giấy để đoán kết quả. Sau đó mới chạy code trên máy để verify kết quả.

Trong một folder mới được tạo ra, mình thực hiện lần lượt các lệnh sau. Hãy liệt kê các file theo từng vùng sau khi thao tác một loạt các lệnh sau:

- a. Tạo 3 file: file1, file2, file3

    - ***file1, file2, file3*** nằm trong vùng **Local**.

- b. Chạy lệnh: git init

    - **file1, file2, file3** nằm trong vùng **Working**.

- c. Chạy lệnh: git add file1

    - **file1** nằm trong vùng **Staging**; 
    
    - **file2, file3** nằm trong vùng **Working**.

- d. Chạy lệnh: git commit -m”first commit”

    - **file1** nằm trong vùng **Repository**; 
    - **file2, file3** nằm trong vùng **Working**.

- e. Chạy lệnh: git add file2 file3

    - **file1** nằm trong vùng **Repository**; 
    - **file2, file3** nằm trong vùng **Staging**.

- f. Chạy lệnh: git restore --staged file3

    - **file1** nằm trong vùng **Repository**; 
    - **file2** nằm trong vùng **Staging**; 
    - **file3** nằm trong vùng **Working**.

- h. Chạy lệnh: git commit -m"second commit"
    - **file1, file 2** nằm trong vùng **Repository**; 
    - **file3** nằm trong vùng **Working**.

- i. Chạy lệnh: git reset HEAD~1
    - **file1** nằm trong vùng **Repository**; 
    - **file 2, file3** nằm trong vùng **Working**.