# Hướng Dẫn & Cheatsheet Git Rebase, Squash & Workflow Chuẩn

Tài liệu tóm tắt các tình huống thực tế khi làm việc với `git rebase` và `git squash`, đi kèm lệnh thực thi chi tiết.

---

## 1. Các Quy Tắc Vàng Cần Nhớ

* **Golden Rule:** **KHÔNG BAO GIỜ** rebase trên các nhánh chung/công khai (như `main`, `develop`). Chỉ rebase trên nhánh tính năng cá nhân (`feature branch`).
* **Pull Trước - Rebase Sau:** Nhánh `main` ở local phải luôn được cập nhật mới nhất từ GitHub/GitLab trước khi tiến hành rebase nhánh feature vào.
* **Force Push An Toàn:** Khi đã push nhánh feature lên remote rồi mới rebase/squash ở local, phải dùng `git push --force-with-lease origin <branch-name>` thay vì `--force`.

---

## 2. Các Tình Huống Thực Tế & Lệnh Thực Thi

### Tình huống 1: Dọn dẹp commit (Squash) trước khi tạo PR
> **Mục đích:** Gộp nhiều commit nhỏ, commit thử nghiệm vặt vẹo (`fix typo`, `wip`, `bugfix`) thành 1 commit duy nhất rõ ràng.

```bash
# 1. Chuyển sang nhánh feature đang làm việc
git checkout feature/login

# 2. Mở giao diện Interactive Rebase cho N commit gần nhất (ví dụ: 3 commit)
git rebase -i HEAD~3

# 3. Màn hình editor hiện ra:
#    - Dòng 1: Giữ nguyên 'pick'
#    - Các dòng sau: Đổi 'pick' thành 'squash' (hoặc 's')
# 4. Lưu và đóng editor.
# 5. Đặt lại tin nhắn commit chung (Commit Message) chuẩn chỉnh.

# 6. Push lên GitHub (nếu nhánh này đã từng push trước đó)
git push --force-with-lease origin feature/login
```

---

### Tình huống 2: Cập nhật code mới nhất từ `main` vào nhánh `feature` (Quy trình chuẩn 3 bước)
> **Mục đích:** Đồng nghiệp vừa push code mới lên `main` trên GitHub, bạn cần lấy code đó về nhánh feature của mình trước khi gửi PR.

```bash
# Bước 1: Quay về main local và cập nhật code mới nhất từ GitHub
git checkout main
git pull origin main

# Bước 2: Quay lại nhánh feature của bạn
git checkout feature/login

# Bước 3: Rebase nhánh feature lên đỉnh main local
git rebase main

# Bước 4: Push lên GitHub
git push --force-with-lease origin feature/login
```

---

### Tình huống 3: Giải quyết Conflict (Xung đột) trong lúc Rebase
> **Mục đích:** Xử lý khi Git báo xung đột code trong quá trình đang rebase.

```bash
# 1. Mở các file bị conflict, giải quyết thủ công và lưu lại.

# 2. Đánh dấu file đã xử lý xong (KHÔNG dùng git commit)
git add .

# 3. Tiếp tục quá trình rebase
git rebase --continue

# (Nối tiếp bước 2 và 3 nếu vẫn còn các commit khác bị conflict)

# MẸO: Nếu bị rối hoặc muốn hủy bỏ toàn bộ quá trình rebase quay về ban đầu:
git rebase --abort
```

---

### Tình huống 4: Đẩy nhánh feature đã Rebase/Squash lên GitHub
> **Mục đích:** Đưa nhánh tính năng lên GitHub để tạo Pull Request (PR) xin gộp vào `main`.

```bash
# Đẩy nhánh feature lên GitHub
git push -u origin feature/login

# Nếu trước đó đã push nhánh này, sau đó mới Rebase/Squash ở local -> Cần ép đè an toàn:
git push --force-with-lease origin feature/login
```

---

## 3. Bảng Phân Biệt Git Merge vs Git Rebase

| Tiêu chí | Git Merge | Git Rebase |
| :--- | :--- | :--- |
| **Cách hoạt động** | Tạo 1 commit mới (Merge Commit) để nối 2 nhánh. | Di chuyển gốc của nhánh sang commit mới nhất của nhánh đích. |
| **Lịch sử Git** | Rẽ nhánh, đan xen nhau (Non-linear history). | Đường thẳng tắp, rất sạch sẽ (Linear history). |
| **An toàn** | An toàn, không sửa đổi lịch sử commit cũ. | Thay đổi Hash Commit, có thể rủi ro nếu dùng trên nhánh chung. |
| **Khi nào dùng?** | Khi gộp nhánh `feature` vào `main` trên GitHub (qua PR). | Khi dọn dẹp commit cá nhân hoặc lấy code mới từ `main` về `feature`. |

## 4. Note:
```bash
# Check git bash is using what editor
git config core.editor

# Nếu muốn chuyển từ default editor (VCS) sang Vim thì:
git config --global core.editor "vim"

# Nếu muốn chuyển từ Vim sang default editor (VCS) thì:
git config --global --unset core.editor
```