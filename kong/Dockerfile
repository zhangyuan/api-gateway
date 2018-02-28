FROM kong

RUN yum install -y unzip gcc gcc-c++ make openssl-devel git
# RUN luarocks install kong-oidc 
RUN wget https://github.com/zhangyuan/kong-oidc/archive/fe86f79562375f3946186c6406311a706c52f862.zip
RUN	unzip fe86f79562375f3946186c6406311a706c52f862.zip && \
	mv kong-oidc-fe86f79562375f3946186c6406311a706c52f862 kong-oidc
RUN cd kong-oidc && luarocks make