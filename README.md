# smartthings-text-to-speach
SmartThings text to speech server in NodeJS

1) Sign up for developer account at https://www.ivona.com/ and get access key and secret key

2) Login to linux machine

3) Install node and NPM
``` bash
sudo apt-get install nodejs nodejs-legacy npm
```

4) Install libasound2-dev
``` bash
sudo apt-get install libasound2-dev
```

5) Install npm packages
``` bash
sudo npm install
```

6) Install forever (globally)
``` bash
sudo npm install -g forever
```

7) Install forver service (globally)
``` bash
sudo npm install -g forever-service
```

8) Type ifcongig and get IP address of machine, ouput should appear as below. IP address is 192.168.0.11 for me.
``` bash
eth0      Link encap:Ethernet  HWaddr b8:27:eb:a9:70:ec
          inet addr:192.168.0.11  Bcast:192.168.0.255  Mask:255.255.255.0
          inet6 addr: fd00::1:d5df:e26b:a5b4:d5a5/64 Scope:Global
          inet6 addr: fe80::55f7:5c2:e930:ad31/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:103487 errors:0 dropped:145 overruns:0 frame:0
          TX packets:28238 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:15050279 (14.3 MiB)  TX bytes:2921658 (2.7 MiB)

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
```
