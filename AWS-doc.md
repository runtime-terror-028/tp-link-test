
# User creation
```
ubuntu@ip-172-31-4-103:~$ sudo adduser nuez
info: Adding user `nuez' ...
info: Selecting UID/GID from range 1000 to 59999 ...
info: Adding new group `nuez' (1001) ...
info: Adding new user `nuez' (1001) with group `nuez (1001)' ...
info: Creating home directory `/home/nuez' ...
info: Copying files from `/etc/skel' ...
New password:
Retype new password:
passwd: password updated successfully
Changing the user information for nuez
Enter the new value, or press ENTER for the default
        Full Name []:
        Room Number []:
        Work Phone []:
        Home Phone []:
        Other []:
Is the information correct? [Y/n] Y
info: Adding new user `nuez' to supplemental / extra groups `users' ...
info: Adding user `nuez' to group `users' ...
ubuntu@ip-172-31-4-103:~$ sudo usermod -aG sudo nuez
ubuntu@ip-172-31-4-103:~$ su nuez
Password:
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

nuez@ip-172-31-4-103:/home/ubuntu$ cd ../nuez
nuez@ip-172-31-4-103:~$ groups
nuez sudo users
```

## Make the user accessible

```
nuez@ip-172-31-4-103:~$ pwd
/home/nuez
nuez@ip-172-31-4-103:~$ mkdir .ssh
nuez@ip-172-31-4-103:~$ chmod 700 .ssh
nuez@ip-172-31-4-103:~$ touch .ssh/authorized_keys
nuez@ip-172-31-4-103:~$ chmod 600 .ssh/authorized_keys
nuez@ip-172-31-4-103:~$ sudo cat ../ubuntu/.ssh/authorized_keys
[sudo] password for nuez:
ssh-rsa AAAAB..... ws-nuez
nuez@ip-172-31-4-103:~$ cat >> .ssh/authorized_keys
ssh-rsa AAAAB..... ws-nuez
nuez@ip-172-31-4-103:~$ cat .ssh/authorized_keys
ssh-rsa AAAAB..... ws-nuez
```

## Firewall

```
nuez@ip-172-31-4-103:~$ sudo ufw status
[sudo] password for nuez:
Status: inactive
nuez@ip-172-31-4-103:~$ sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
nuez@ip-172-31-4-103:~$ sudo ufw status
Status: active
nuez@ip-172-31-4-103:~$ sudo ufw allow ssh
Rule added
Rule added (v6)
nuez@ip-172-31-4-103:~$ sudo ufw allow http
Rule added
Rule added (v6)
nuez@ip-172-31-4-103:~$ sudo ufw allow https
Rule added
Rule added (v6)
nuez@ip-172-31-4-103:~$ sudo ufw status
Status: active

To                         Action      From
--                         ------      ----
22/tcp                     ALLOW       Anywhere
80/tcp                     ALLOW       Anywhere
443                        ALLOW       Anywhere
22/tcp (v6)                ALLOW       Anywhere (v6)
80/tcp (v6)                ALLOW       Anywhere (v6)
443 (v6)                   ALLOW       Anywhere (v6)

nuez@ip-172-31-4-103:~$ sudo ufw reload
Firewall reloaded
nuez@ip-172-31-4-103:~$ sudo ufw status
Status: active

To                         Action      From
--                         ------      ----
22/tcp                     ALLOW       Anywhere
80/tcp                     ALLOW       Anywhere
443                        ALLOW       Anywhere
22/tcp (v6)                ALLOW       Anywhere (v6)
80/tcp (v6)                ALLOW       Anywhere (v6)
443 (v6)                   ALLOW       Anywhere (v6)
```

## Git 
```
to be filled
```

## Node js

```
nuez@ip-172-31-4-103:~$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
nuez@ip-172-31-4-103:~$ source ~/.bashrc
nuez@ip-172-31-4-103:~$ nvm install --lts
nuez@ip-172-31-4-103:~$ npm -v
10.8.2
nuez@ip-172-31-4-103:~$ node -v
v20.17.0
```

## SSH key- generation

```
nuez@ip-172-31-4-103:~$ ssh-keygen -t rsa -b 4096 -C "git"
Generating public/private rsa key pair.
Enter file in which to save the key (/home/nuez/.ssh/id_rsa): /home/nuez/.ssh/id_rsa
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/nuez/.ssh/id_rsa
Your public key has been saved in /home/nuez/.ssh/id_rsa.pub
```

## Add public key to github

```
to be filled
```


## Clone repository

- create a directory 

```
nuez@ip-172-31-4-103:~$ mkdir -p projects/website/
nuez@ip-172-31-4-103:~$ cd projects/website/
nuez@ip-172-31-4-103:~/projects/website$ git clone git@github.com:satyans7/ws-nuez
Cloning into 'ws-nuez'...
remote: Enumerating objects: 4229, done.
remote: Counting objects: 100% (647/647), done.
remote: Compressing objects: 100% (399/399), done.
remote: Total 4229 (delta 210), reused 626 (delta 197), pack-reused 3582 (from 1)
Receiving objects: 100% (4229/4229), 184.29 MiB | 9.42 MiB/s, done.
Resolving deltas: 100% (1425/1425), done.
```

## Project setup

- includes creating `.env` file

```
nuez@ip-172-31-4-103:~$ pwd
/home/nuez
nuez@ip-172-31-4-103:~$ cd projects/website/ws-nuez/
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ npm i
found 0 vulnerabilities
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ cat >> .env
PORT=8000

EMAIL_USER=sender@email.com
EMAIL_PASS=abcd efgh pqrs wxyz
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ node app.js
Server is running on port 8000
```

## Nginx

- Install nginx

```
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ nginx -v
Command 'nginx' not found, but can be installed with:
sudo apt install nginx
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ sudo apt install nginx

```

- Firewall nginx

```
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ sudo apt install nginx
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ sudo ufw allow 'Nginx Full'
Rule added
Rule added (v6)

```

- Install nginx

```
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ sudo nano /etc/nginx/sites-available/nuez.tech
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ cat /etc/nginx/sites-available/nuez.tech
server {

    listen 80;
    listen [::]:80;

    server_name nuez.tech www.nuez.tech;

    location / {
        proxy_pass http://localhost:8000;
        include proxy_params;
    }
}
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ sudo ln -s /etc/nginx/sites-available/nuez.tech /etc/nginx/sites-enabled/
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ sudo nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ sudo systemctl restart nginx
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ node app.js
Server is running on port 8000
```

## Update DNS record in domain maintenance page

## Running it as a service

```
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ sudo nano /etc/systemd/system/ws-nuez.service
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ cat /etc/systemd/system/ws-nuez.service
[Unit]
Description=Website nuez.tech


[Service]
ExecStart=/home/nuez/.nvm/versions/node/v20.17.0/bin/node /home/nuez/projects/website/ws-nuez/app.js
WorkingDirectory=/home/nuez/projects/website/ws-nuez
Restart=always
User=nuez
Group=nuez


[Install]
WantedBy=multi-user.target
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ sudo systemctl daemon-reload
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ sudo systemctl start ws-nuez.service
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ sudo systemctl enable ws-nuez.service
Created symlink /etc/systemd/system/multi-user.target.wants/ws-nuez.service → /etc/systemd/system/ws-nuez.service.
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ sudo systemctl status ws-nuez.service
● ws-nuez.service - Website nuez.tech
     Loaded: loaded (/etc/systemd/system/ws-nuez.service; enabled; preset: enabled)
     Active: active (running) since Mon 2024-09-02 06:47:18 UTC; 19s ago
   Main PID: 4150 (node)
      Tasks: 7 (limit: 1130)
     Memory: 11.7M (peak: 18.1M)
        CPU: 242ms
     CGroup: /system.slice/ws-nuez.service
             └─4150 /home/nuez/.nvm/versions/node/v20.17.0/bin/node /home/nuez/projects/website/ws-nuez/app.js

Sep 02 06:47:18 ip-172-31-4-103 systemd[1]: Started ws-nuez.service - Website nuez.tech.
Sep 02 06:47:18 ip-172-31-4-103 node[4150]: Reading file: /home/nuez/projects/website/ws-nuez/src/data/json/product/category.json
Sep 02 06:47:18 ip-172-31-4-103 node[4150]: Server is running on port 8000
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$
```

## Deploy certificate

```
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ sudo apt update
Hit:1 http://ap-south-1.ec2.archive.ubuntu.com/ubuntu noble InRelease
Hit:2 http://ap-south-1.ec2.archive.ubuntu.com/ubuntu noble-updates InRelease
Hit:3 http://ap-south-1.ec2.archive.ubuntu.com/ubuntu noble-backports InRelease
Hit:4 http://security.ubuntu.com/ubuntu noble-security InRelease
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
105 packages can be upgraded. Run 'apt list --upgradable' to see them.
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ sudo apt install certbot python3-certbot-nginx
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
certbot is already the newest version (2.9.0-1).
python3-certbot-nginx is already the newest version (2.9.0-1).
0 upgraded, 0 newly installed, 0 to remove and 105 not upgraded.
nuez@ip-172-31-4-103:~/projects/website/ws-nuez$ sudo certbot --nginx -d nuez.tech -d www.nuez.tech
Deploying certificate
Successfully deployed certificate for nuez.tech to /etc/nginx/sites-enabled/nuez.tech
Successfully deployed certificate for www.nuez.tech to /etc/nginx/sites-enabled/nuez.tech
Congratulations! You have successfully enabled HTTPS on https://nuez.tech and https://www.nuez.tech
```
