---
title: Cara Host Website di Laptop sendiri yang pake Linux
date: '2022-12-08'
tags: ['tips', 'how-to']
draft: false
summary: 'Hosting website secara local'
---

### Install Apache

```bash
sudo apt-get update
sudo apt-get install apache2
```

Cek apakah apache sudah terinstall

```bash
sudo service apache2 restart
```

Kemudian buka browser dan ketikan _localhost_ atau `127.0.0.1` sama saja
oh ya by default apache menggunakan port 80, jadi portnya ga usah ditulis. Kalo ditulis seperti ini **localhost:80**

Kalo mau change port defaultnya bisa di sini `/etc/apache2/ports.conf`

### Install Mysql

```bash
sudo apt-get install mysql-server php5-mysql
```

Cek apakah mysql sudah terinstall

```bash
mysql -uroot -p
```

p diatas maksudnya password

## Install PHP

```bash
sudo apt-get install php5 libapache2-mod-php5 php5-mcrypt
sudo apt-get install php5-sqlite
```
