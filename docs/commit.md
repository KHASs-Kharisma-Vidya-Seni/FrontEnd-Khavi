# Panduan Commit Menggunakan Commitlint

## Pendahuluan:

Dokumen ini menjelaskan panduan commit message untuk proyek ini yang mengikuti standar commitlint. Commitlint adalah sebuah linter untuk commit message yang membantu memastikan commit message Anda konsisten dan terstruktur dengan baik.

### Tujuan:

- Memastikan commit message yang jelas, informatif, dan mudah dipahami.
- Memelihara sejarah commit yang terstruktur dan mudah dinavigasi.
- Meningkatkan kolaborasi dan komunikasi tim dalam proses pengembangan.

### Aturan Commit Message:

Semua commit message di proyek ini harus mengikuti aturan berikut:

### Tipe Commit:

**1. Gunakan salah satu tipe berikut di awal commit message:**

- `feat`: Fitur baru
- `fix`: Perbaikan bug
- `docs`: Perubahan dokumentasi
- `style`: Perubahan gaya (misalnya CSS, HTML)
- `refactor`: Refactoring kode tanpa perubahan fungsional
- `perf`: Perbaikan performa
- `test`: Perubahan pada kode tes
- `chore`: Perubahan konfigurasi atau infrastruktur
- `revert`: Membalikkan commit sebelumnya

### Scope:

- Ditambahkan setelah tipe commit, dipisahkan dengan koma.
- Menjelaskan bagian kode yang terpengaruh oleh commit.

#### Contoh:

```bash
`feat: Add new user registration feature`
```

### Subject:

- Ditulis setelah scope, dipisahkan dengan spasi.
- Menjelaskan ringkas perubahan yang dilakukan.
- Harus informatif dan mudah dipahami.

#### Contoh:

```bash
`feat: Add new user registration feature - Allow users to sign up with email and password`
```

### Body (Opsional):

Digunakan untuk menjelaskan lebih detail tentang commit. Harus ditulis dengan jelas dan terstruktur.

#### Contoh:

```bash
feat: Add new user registration feature

- Allow users to sign up with email and password
- Validate user input
- Send confirmation email
```

### Footer (Opsional):

- Digunakan untuk informasi tambahan, seperti referensi issue atau pull request.

#### Contoh Commit Message:

```bash
    feat: Add new user registration feature - Allow users to sign up with email and password

    - Allow users to sign up with email and password
    - Validate user input
    - Send confirmation email

    Fixes #123
```

## Penggunaan:

[Disini Install](https://github.com/KHASs-Kharisma-Vidya-Seni/commit)
