Docker Template
---------------

```
make start
```

Brings up three containers

* NGINX container runs everything on port 80
* If developing in Matryoshka Vagrant box, mapping exists for port 2600
* Client runs separately on port 6800
* Server runs separately on port 3009

TODO
----------------
[√] Make JS container<br>
[√] Make Clojure container<br>
[√] Nginx<br>
[ ] Do we need network setup instead of linking the containers?<br>
[ ] More containers - monitoring, mongod, redis?
