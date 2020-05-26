(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{mmmL:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),c=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={},s={_frontmatter:o},l=c.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,["components"]);return Object(a.b)(l,r({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Introduction"),Object(a.b)("p",null,"Storefront is a simple shopping application that displays a catalog of antique computing devices, where users can search and buy products. It has a Web interface, and it relies on BFF (Backend for Frontend) services to interact with the backend services."),Object(a.b)("h2",null,"Pre-requisites:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://appsody.dev/"}),"Appsody"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://appsody.dev/docs/installing/macos"}),"Installing on MacOS")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://appsody.dev/docs/installing/windows"}),"Installing on Windows")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://appsody.dev/docs/installing/rhel"}),"Installing on RHEL")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://appsody.dev/docs/installing/ubuntu"}),"Installing on Ubuntu"))))),Object(a.b)("p",null,"For more details on installation, check ",Object(a.b)("a",r({parentName:"p"},{href:"https://appsody.dev/docs/installing/installing-appsody/"}),"this")," out."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Docker Desktop",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://docs.docker.com/docker-for-mac/"}),"Docker for Mac")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://docs.docker.com/docker-for-windows/"}),"Docker for Windows"))))),Object(a.b)("h2",null,"Running the application locally"),Object(a.b)("p",null,"Let us now deploy all the microservices of our storefront one by one locally."),Object(a.b)("h3",null,"Inventory"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clone inventory repository")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/ibm-garage-ref-storefront/inventory-ms-spring.git\ncd inventory-ms-spring\n")),Object(a.b)("h4",null,"Deploy MySQL database"),Object(a.b)("br",null),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# Start a MySQL Container with a database user, a password, and create a new database\ndocker run --name inventorymysql \\\n    -e MYSQL_ROOT_PASSWORD=admin123 \\\n    -e MYSQL_USER=dbuser \\\n    -e MYSQL_PASSWORD=password \\\n    -e MYSQL_DATABASE=inventorydb \\\n    -p 3306:3306 \\\n    -d mysql:5.7.14\n")),Object(a.b)("p",null,"If it is successfully deployed, you will see something like below."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'$ docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES\n84a511e74794        mysql:5.7.14        "docker-entrypoint.s…"   13 seconds ago      Up 12 seconds       0.0.0.0:3306->3306/tcp   inventorymysql\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Now let us populate the MySQL with data.")),Object(a.b)("p",null,"Firstly, ",Object(a.b)("inlineCode",{parentName:"p"},"ssh")," into the MySQL container."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"docker exec -it inventorymysql bash\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Now, run the below command for table creation.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"mysql -udbuser -ppassword\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This will take you to something like below.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"root@d88a6e5973de:/# mysql -udbuser -ppassword\nmysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 2\nServer version: 5.7.14 MySQL Community Server (GPL)\n\nCopyright (c) 2000, 2016, Oracle and/or its affiliates. All rights reserved.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql>\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Go to ",Object(a.b)("inlineCode",{parentName:"p"},"scripts > mysql_data.sql"),". Copy the contents from ",Object(a.b)("a",r({parentName:"p"},{href:"./scripts/mysql_data.sql"}),"mysql_data.sql")," and paste the contents in the console.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You can exit from the console using ",Object(a.b)("inlineCode",{parentName:"p"},"exit"),"."))),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"mysql> exit\nBye\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"To come out of the container, enter ",Object(a.b)("inlineCode",{parentName:"li"},"exit"),".")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"root@d88a6e5973de:/# exit\n")),Object(a.b)("h4",null,"Deploy Inventory app"),Object(a.b)("br",null),Object(a.b)("p",null,"Run the below command."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# Build inventory docker image\nappsody build\n\n# Start the Inventory Container\ndocker run --name inventory-ms-spring \\\n    -e MYSQL_HOST=<docker_host> \\\n    -e MYSQL_PORT=3306 \\\n    -e MYSQL_USER=dbuser \\\n    -e MYSQL_PASSWORD=password \\\n    -e MYSQL_DATABASE=inventorydb \\\n    -p 8081:8080 \\\n    -d dev.local/inventory-ms-spring\n")),Object(a.b)("p",null,"For instance, if it is docker-for-mac ",Object(a.b)("inlineCode",{parentName:"p"},"<docker_host>")," will be ",Object(a.b)("inlineCode",{parentName:"p"},"docker.for.mac.localhost"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can also verify it as follows.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'$ docker ps\nCONTAINER ID        IMAGE                           COMMAND                  CREATED             STATUS              PORTS                              NAMES\naad8b8e1bce6        dev.local/inventory-ms-spring   "/start.sh"              6 seconds ago       Up 5 seconds        8443/tcp, 0.0.0.0:8081->8080/tcp   inventory-ms-spring\n7a958fa9cae3        mysql:5.7.14                    "docker-entrypoint.s…"   50 minutes ago      Up 50 minutes       0.0.0.0:3306->3306/tcp             inventorymysql\n')),Object(a.b)("h3",null,"Catalog"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clone catalog repository")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/ibm-garage-ref-storefront/catalog-ms-spring.git\ncd catalog-ms-spring\n")),Object(a.b)("h4",null,"Deploy ElasticSearch"),Object(a.b)("br",null),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'# Start an Elasticsearch Container\ndocker run --name catalogelasticsearch \\\n      -e "discovery.type=single-node" \\\n      -p 9200:9200 \\\n      -p 9300:9300 \\\n      -d docker.elastic.co/elasticsearch/elasticsearch:6.3.2\n')),Object(a.b)("p",null,"If it is successfully deployed, you will see something like below."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'$ docker ps\nCONTAINER ID        IMAGE                                                 COMMAND                  CREATED             STATUS              PORTS                                            NAMES\ncc5af0ec4f75        docker.elastic.co/elasticsearch/elasticsearch:6.3.2   "/usr/local/bin/dock…"   6 minutes ago       Up 6 minutes        0.0.0.0:9200->9200/tcp, 0.0.0.0:9300->9300/tcp   catalogelasticsearch\naad8b8e1bce6        dev.local/inventory-ms-spring                         "/start.sh"              11 minutes ago      Up 11 minutes       8443/tcp, 0.0.0.0:8081->8080/tcp                 inventory-ms-spring\n7a958fa9cae3        mysql:5.7.14                                          "docker-entrypoint.s…"   About an hour ago   Up About an hour    0.0.0.0:3306->3306/tcp                           inventorymysql\n')),Object(a.b)("h4",null,"Deploy Catalog app"),Object(a.b)("br",null),Object(a.b)("p",null,"Run the below command."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# Build catalog docker image\nappsody build\n\n# Start the Catalog Container\ndocker run --name inventory-ms-spring \\\n    -e ELASTIC_CLUSTER_NAME=docker-cluster \\\n    -e ELASTIC_NODE_URL=<docker_host>:9300 \\\n    -e INVENTORY_URL=http://<docker_host>:8081/micro/inventory \\\n    -p 8082:8080 \\\n    -d dev.local/catalog-ms-spring\n")),Object(a.b)("p",null,"For instance, if it is docker-for-mac ",Object(a.b)("inlineCode",{parentName:"p"},"<docker_host>")," will be ",Object(a.b)("inlineCode",{parentName:"p"},"docker.for.mac.localhost"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can also verify it as follows.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'docker ps\nCONTAINER ID        IMAGE                                                 COMMAND                  CREATED             STATUS              PORTS                                            NAMES\n4d9b74402abb        dev.local/catalog-ms-spring                           "/start.sh"              4 seconds ago       Up 3 seconds        8443/tcp, 0.0.0.0:8082->8080/tcp                 catalog-ms-spring\ncc5af0ec4f75        docker.elastic.co/elasticsearch/elasticsearch:6.3.2   "/usr/local/bin/dock…"   37 minutes ago      Up 37 minutes       0.0.0.0:9200->9200/tcp, 0.0.0.0:9300->9300/tcp   catalogelasticsearch\naad8b8e1bce6        dev.local/inventory-ms-spring                         "/start.sh"              41 minutes ago      Up 41 minutes       8443/tcp, 0.0.0.0:8081->8080/tcp                 inventory-ms-spring\n7a958fa9cae3        mysql:5.7.14                                          "docker-entrypoint.s…"   2 hours ago         Up 2 hours          0.0.0.0:3306->3306/tcp                           inventorymysql\n')),Object(a.b)("h3",null,"Customer"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clone customer repository")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/ibm-garage-ref-storefront/customer-ms-spring\ncd customer-ms-spring\n")),Object(a.b)("h4",null,"Deploy CouchDB"),Object(a.b)("br",null),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# Start a CouchDB Container with a database user, a password, and create a new database\ndocker run --name customercouchdb -p 5985:5984 -e COUCHDB_USER=admin -e COUCHDB_PASSWORD=passw0rd -d couchdb:2.1.2\n")),Object(a.b)("p",null,"If it is successfully deployed, you will see something like below."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'$ docker ps\nCONTAINER ID        IMAGE                                                 COMMAND                  CREATED             STATUS              PORTS                                            NAMES\n3be611140a1a        couchdb:2.1.2                                         "tini -- /docker-ent…"   26 seconds ago      Up 23 seconds       4369/tcp, 9100/tcp, 0.0.0.0:5985->5984/tcp       customercouchdb\n4d9b74402abb        dev.local/catalog-ms-spring                           "/start.sh"              14 hours ago        Up 14 hours         8443/tcp, 0.0.0.0:8082->8080/tcp                 catalog-ms-spring\ncc5af0ec4f75        docker.elastic.co/elasticsearch/elasticsearch:6.3.2   "/usr/local/bin/dock…"   15 hours ago        Up 15 hours         0.0.0.0:9200->9200/tcp, 0.0.0.0:9300->9300/tcp   catalogelasticsearch\naad8b8e1bce6        dev.local/inventory-ms-spring                         "/start.sh"              15 hours ago        Up 15 hours         8443/tcp, 0.0.0.0:8081->8080/tcp                 inventory-ms-spring\n7a958fa9cae3        mysql:5.7.14                                          "docker-entrypoint.s…"   16 hours ago        Up 16 hours         0.0.0.0:3306->3306/tcp                           inventorymysql\n')),Object(a.b)("h4",null,"Deploy Customer app"),Object(a.b)("br",null),Object(a.b)("p",null,"Run the below command."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# Build customer docker image\nappsody build\n\n# Start the customer Container\ndocker run --name customer-ms-spring \\\n    -e COUCHDB_PORT=5985 \\\n    -e COUCHDB_HOST=host.docker.internal \\\n    -e COUCHDB_PROTOCOL=http \\\n    -e COUCHDB_USERNAME=admin \\\n    -e COUCHDB_PASSWORD=passw0rd \\\n    -e COUCHDB_DATABASE=customers \\\n    -e HS256_KEY=E6526VJkKYhyTFRFMC0pTECpHcZ7TGcq8pKsVVgz9KtESVpheEO284qKzfzg8HpWNBPeHOxNGlyudUHi6i8tFQJXC8PiI48RUpMh23vPDLGD35pCM0417gf58z5xlmRNii56fwRCmIhhV7hDsm3KO2jRv4EBVz7HrYbzFeqI45CaStkMYNipzSm2duuer7zRdMjEKIdqsby0JfpQpykHmC5L6hxkX0BT7XWqztTr6xHCwqst26O0g8r7bXSYjp4a \\\n    -p 8083:8080 \\\n    -d dev.local/customer-ms-spring\n")),Object(a.b)("p",null,"For instance, if it is docker-for-mac ",Object(a.b)("inlineCode",{parentName:"p"},"<docker_host>")," will be ",Object(a.b)("inlineCode",{parentName:"p"},"docker.for.mac.localhost"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can also verify it as follows.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'$ docker ps\nCONTAINER ID        IMAGE                                                 COMMAND                  CREATED             STATUS              PORTS                                            NAMES\n34f3b55f7bee        dev.local/customer-ms-spring                          "/start.sh"              59 seconds ago      Up 58 seconds       8443/tcp, 0.0.0.0:8083->8080/tcp                 customer-ms-spring\n3be611140a1a        couchdb:2.1.2                                         "tini -- /docker-ent…"   26 minutes ago      Up 26 minutes       4369/tcp, 9100/tcp, 0.0.0.0:5985->5984/tcp       customercouchdb\n4d9b74402abb        dev.local/catalog-ms-spring                           "/start.sh"              15 hours ago        Up 15 hours         8443/tcp, 0.0.0.0:8082->8080/tcp                 catalog-ms-spring\ncc5af0ec4f75        docker.elastic.co/elasticsearch/elasticsearch:6.3.2   "/usr/local/bin/dock…"   15 hours ago        Up 15 hours         0.0.0.0:9200->9200/tcp, 0.0.0.0:9300->9300/tcp   catalogelasticsearch\naad8b8e1bce6        dev.local/inventory-ms-spring                         "/start.sh"              15 hours ago        Up 15 hours         8443/tcp, 0.0.0.0:8081->8080/tcp                 inventory-ms-spring\n7a958fa9cae3        mysql:5.7.14                                          "docker-entrypoint.s…"   16 hours ago        Up 16 hours         0.0.0.0:3306->3306/tcp                           inventorymysql\n')),Object(a.b)("h3",null,"Auth"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clone auth repository")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/ibm-garage-ref-storefront/auth-ms-spring.git\ncd auth-ms-spring\n")),Object(a.b)("h4",null,"Deploy Auth app"),Object(a.b)("br",null),Object(a.b)("p",null,"Run the below command."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# Build auth docker image\nappsody build\n\n# Start the Auth Container\ndocker run --name auth-ms-spring \\\n    -e CUSTOMER_URL=http://<docker_host>:8083/micro/customer/search \\\n    -e HS256_KEY=E6526VJkKYhyTFRFMC0pTECpHcZ7TGcq8pKsVVgz9KtESVpheEO284qKzfzg8HpWNBPeHOxNGlyudUHi6i8tFQJXC8PiI48RUpMh23vPDLGD35pCM0417gf58z5xlmRNii56fwRCmIhhV7hDsm3KO2jRv4EBVz7HrYbzFeqI45CaStkMYNipzSm2duuer7zRdMjEKIdqsby0JfpQpykHmC5L6hxkX0BT7XWqztTr6xHCwqst26O0g8r7bXSYjp4a \\\n    -p 8084:8080 \\\n    -d dev.local/auth-ms-spring\n")),Object(a.b)("p",null,"For instance, if it is docker-for-mac ",Object(a.b)("inlineCode",{parentName:"p"},"<docker_host>")," will be ",Object(a.b)("inlineCode",{parentName:"p"},"docker.for.mac.localhost"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can also verify it as follows.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'$ docker ps\nCONTAINER ID        IMAGE                                                 COMMAND                  CREATED             STATUS              PORTS                                            NAMES\na4a2aa7d9c59        dev.local/auth-ms-spring                              "/start.sh"              24 seconds ago      Up 23 seconds       8443/tcp, 0.0.0.0:8084->8080/tcp                 auth-ms-spring\n3be611140a1a        couchdb:2.1.2                                         "tini -- /docker-ent…"   26 minutes ago      Up 26 minutes       4369/tcp, 9100/tcp, 0.0.0.0:5985->5984/tcp       customercouchdb\n4d9b74402abb        dev.local/catalog-ms-spring                           "/start.sh"              15 hours ago        Up 15 hours         8443/tcp, 0.0.0.0:8082->8080/tcp                 catalog-ms-spring\ncc5af0ec4f75        docker.elastic.co/elasticsearch/elasticsearch:6.3.2   "/usr/local/bin/dock…"   15 hours ago        Up 15 hours         0.0.0.0:9200->9200/tcp, 0.0.0.0:9300->9300/tcp   catalogelasticsearch\naad8b8e1bce6        dev.local/inventory-ms-spring                         "/start.sh"              15 hours ago        Up 15 hours         8443/tcp, 0.0.0.0:8081->8080/tcp                 inventory-ms-spring\n7a958fa9cae3        mysql:5.7.14                                          "docker-entrypoint.s…"   16 hours ago        Up 16 hours         0.0.0.0:3306->3306/tcp                           inventorymysql\n')),Object(a.b)("h3",null,"Orders"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clone orders repository")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/ibm-garage-ref-storefront/orders-ms-spring.git\ncd orders-ms-spring\n")),Object(a.b)("h4",null,"Deploy Mariadb"),Object(a.b)("br",null),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# Start a MariaDB Container with a database user, a password, and create a new database\ndocker run --name ordersmysql \\\n    -e MYSQL_ROOT_PASSWORD=admin123 \\\n    -e MYSQL_USER=dbuser \\\n    -e MYSQL_PASSWORD=password \\\n    -e MYSQL_DATABASE=ordersdb \\\n    -p 3307:3306 \\\n    -d mariadb\n")),Object(a.b)("p",null,"If it is successfully deployed, you will see something like below."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'$ docker ps\nCONTAINER ID        IMAGE                                                 COMMAND                  CREATED             STATUS              PORTS                                            NAMES\na0b8b6357607        mariadb                                               "docker-entrypoint.s…"   7 seconds ago       Up 4 seconds        0.0.0.0:3307->3306/tcp                           ordersmysql\na4a2aa7d9c59        dev.local/auth-ms-spring                              "/start.sh"              3 minutes ago       Up 3 minutes        8443/tcp, 0.0.0.0:8084->8080/tcp                 auth-ms-spring\n3be611140a1a        couchdb:2.1.2                                         "tini -- /docker-ent…"   29 minutes ago      Up 29 minutes       4369/tcp, 9100/tcp, 0.0.0.0:5985->5984/tcp       customercouchdb\n4d9b74402abb        dev.local/catalog-ms-spring                           "/start.sh"              15 hours ago        Up 15 hours         8443/tcp, 0.0.0.0:8082->8080/tcp                 catalog-ms-spring\ncc5af0ec4f75        docker.elastic.co/elasticsearch/elasticsearch:6.3.2   "/usr/local/bin/dock…"   15 hours ago        Up 15 hours         0.0.0.0:9200->9200/tcp, 0.0.0.0:9300->9300/tcp   catalogelasticsearch\naad8b8e1bce6        dev.local/inventory-ms-spring                         "/start.sh"              16 hours ago        Up 16 hours         8443/tcp, 0.0.0.0:8081->8080/tcp                 inventory-ms-spring\n7a958fa9cae3        mysql:5.7.14                                          "docker-entrypoint.s…"   16 hours ago        Up 16 hours         0.0.0.0:3306->3306/tcp                           inventorymysql\n')),Object(a.b)("h4",null,"Deploy Orders app"),Object(a.b)("br",null),Object(a.b)("p",null,"Run the below command."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# Build orders docker image\nappsody build\n\n# Start the Orders Container\ndocker run --name orders-ms-spring \\\n    -e MYSQL_HOST=<docker_host> \\\n    -e MYSQL_PORT=3307 \\\n    -e MYSQL_DATABASE=ordersdb \\\n    -e MYSQL_USER=dbuser \\\n    -e MYSQL_PASSWORD=password \\\n    -e HS256_KEY=E6526VJkKYhyTFRFMC0pTECpHcZ7TGcq8pKsVVgz9KtESVpheEO284qKzfzg8HpWNBPeHOxNGlyudUHi6i8tFQJXC8PiI48RUpMh23vPDLGD35pCM0417gf58z5xlmRNii56fwRCmIhhV7hDsm3KO2jRv4EBVz7HrYbzFeqI45CaStkMYNipzSm2duuer7zRdMjEKIdqsby0JfpQpykHmC5L6hxkX0BT7XWqztTr6xHCwqst26O0g8r7bXSYjp4a \\\n    -p 8085:8080 \\\n    -d dev.local/orders-ms-spring\n")),Object(a.b)("p",null,"For instance, if it is docker-for-mac ",Object(a.b)("inlineCode",{parentName:"p"},"<docker_host>")," will be ",Object(a.b)("inlineCode",{parentName:"p"},"docker.for.mac.localhost"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can also verify it as follows.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'$ docker ps\nCONTAINER ID        IMAGE                                                 COMMAND                  CREATED             STATUS              PORTS                                            NAMES\nf21a9ac266c5        dev.local/orders-ms-spring                            "/start.sh"              50 seconds ago      Up 49 seconds       8443/tcp, 0.0.0.0:8085->8080/tcp                 orders-ms-spring\na0b8b6357607        mariadb                                               "docker-entrypoint.s…"   15 minutes ago      Up 14 minutes       0.0.0.0:3307->3306/tcp                           ordersmysql\na4a2aa7d9c59        dev.local/auth-ms-spring                              "/start.sh"              18 minutes ago      Up 18 minutes       8443/tcp, 0.0.0.0:8084->8080/tcp                 auth-ms-spring\n3be611140a1a        couchdb:2.1.2                                         "tini -- /docker-ent…"   44 minutes ago      Up 44 minutes       4369/tcp, 9100/tcp, 0.0.0.0:5985->5984/tcp       customercouchdb\n4d9b74402abb        dev.local/catalog-ms-spring                           "/start.sh"              15 hours ago        Up 15 hours         8443/tcp, 0.0.0.0:8082->8080/tcp                 catalog-ms-spring\ncc5af0ec4f75        docker.elastic.co/elasticsearch/elasticsearch:6.3.2   "/usr/local/bin/dock…"   16 hours ago        Up 16 hours         0.0.0.0:9200->9200/tcp, 0.0.0.0:9300->9300/tcp   catalogelasticsearch\naad8b8e1bce6        dev.local/inventory-ms-spring                         "/start.sh"              16 hours ago        Up 16 hours         8443/tcp, 0.0.0.0:8081->8080/tcp                 inventory-ms-spring\n7a958fa9cae3        mysql:5.7.14                                          "docker-entrypoint.s…"   17 hours ago        Up 17 hours         0.0.0.0:3306->3306/tcp                           inventorymysql\n')),Object(a.b)("h3",null,"Storefront UI"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clone auth repository")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/ibm-garage-ref-storefront/storefront-ui.git\ncd storefront-ui\n")),Object(a.b)("h4",null,"Deploy Storefront UI"),Object(a.b)("br",null),Object(a.b)("p",null,"Run the below command."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# Build storefront ui docker image\nappsody build\n\n# Start the Storefront UI Container\ndocker run --name web \\\n  -e NODE_ENV=development \\\n  -p 3000:3000 \\\n  -d dev.local/web\n")),Object(a.b)("p",null,"For instance, if it is docker-for-mac ",Object(a.b)("inlineCode",{parentName:"p"},"<docker_host>")," will be ",Object(a.b)("inlineCode",{parentName:"p"},"docker.for.mac.localhost"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can also verify it as follows.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'$ docker ps\nCONTAINER ID        IMAGE                                                 COMMAND                  CREATED              STATUS              PORTS                                            NAMES\nc0d657aa0886        dev.local/orders-ms-spring                            "/start.sh"              About a minute ago   Up About a minute   8443/tcp, 0.0.0.0:8085->8080/tcp                 orders-ms-spring\n093f8059c245        dev.local/web                                         "container-entrypoin…"   8 minutes ago        Up 8 minutes        0.0.0.0:3000->3000/tcp, 8080/tcp                 web\na0b8b6357607        mariadb                                               "docker-entrypoint.s…"   2 hours ago          Up 2 hours          0.0.0.0:3307->3306/tcp                           ordersmysql\na4a2aa7d9c59        dev.local/auth-ms-spring                              "/start.sh"              2 hours ago          Up 2 hours          8443/tcp, 0.0.0.0:8084->8080/tcp                 auth-ms-spring\n3be611140a1a        couchdb:2.1.2                                         "tini -- /docker-ent…"   2 hours ago          Up 2 hours          4369/tcp, 9100/tcp, 0.0.0.0:5985->5984/tcp       customercouchdb\n4d9b74402abb        dev.local/catalog-ms-spring                           "/start.sh"              16 hours ago         Up 16 hours         8443/tcp, 0.0.0.0:8082->8080/tcp                 catalog-ms-spring\ncc5af0ec4f75        docker.elastic.co/elasticsearch/elasticsearch:6.3.2   "/usr/local/bin/dock…"   17 hours ago         Up 17 hours         0.0.0.0:9200->9200/tcp, 0.0.0.0:9300->9300/tcp   catalogelasticsearch\naad8b8e1bce6        dev.local/inventory-ms-spring                         "/start.sh"              17 hours ago         Up 17 hours         8443/tcp, 0.0.0.0:8081->8080/tcp                 inventory-ms-spring\n7a958fa9cae3        mysql:5.7.14                                          "docker-entrypoint.s…"   18 hours ago         Up 18 hours         0.0.0.0:3306->3306/tcp                           inventorymysql\n')),Object(a.b)("p",null,"There you go, you deploy all the necessary services for storefront."),Object(a.b)("p",null,"Now, let us check the app out. You can access it at http://localhost:3000."),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(a.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.833333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABG0lEQVQoz4WQ3UoDMRCF8156I+iFWPFCqfhDhaLXPpai7+DPS4jCtqKi7YXddmO3u0k2OWYm0q7bZTvwMSEzc+YkYrd7iZ2Tc7ROL+ZsH3Wx1mqv4JDz+t4xNvY72GqfYfOgA6G1gVIaSut51h5jDKMrmBJ8x3PqDw2BmnAOsNZxroZtqFEI56gYoC5TWMhU+e0FZrlB4s+TaSDxZMpwbZrRawpaj7KGWLgKKwu/PVdhYDBK8fIxwfP7GE9vMaLPBMN4xuLcx4KLWXa4JOgdkpNY5hj/5Egz410Ft5RJbJRkJYcrBCnTH1GQWH8g8UoMJfpf0guZ8JfW/ZtZEqyKUnx7J1d3EW4fe7h56OH6PuK7ut5Gh3WNTYvLvb9ZCZoLwb1RcQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Storefront",title:"Storefront",src:"/docs/static/8a16eb848a9f6acb6488d0fe70b92b48/3cbba/web.png",srcSet:["/docs/static/8a16eb848a9f6acb6488d0fe70b92b48/7fc1e/web.png 288w","/docs/static/8a16eb848a9f6acb6488d0fe70b92b48/a5df1/web.png 576w","/docs/static/8a16eb848a9f6acb6488d0fe70b92b48/3cbba/web.png 1152w","/docs/static/8a16eb848a9f6acb6488d0fe70b92b48/0b124/web.png 1728w","/docs/static/8a16eb848a9f6acb6488d0fe70b92b48/4ea69/web.png 2304w","/docs/static/8a16eb848a9f6acb6488d0fe70b92b48/e449d/web.png 2869w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-deployments-appsody-mdx-a8dd17eaa002cd6f20c1.js.map