FROM kong

RUN yum install -y unzip gcc gcc-c++ make openssl-devel git
# RUN luarocks install kong-oidc 
RUN wget https://github.com/zhangyuan/kong-oidc/archive/fe86f79562375f3946186c6406311a706c52f862.zip && \
	unzip fe86f79562375f3946186c6406311a706c52f862.zip && \
	mv kong-oidc-fe86f79562375f3946186c6406311a706c52f862 kong-oidc
RUN cd kong-oidc && luarocks make && cd ..


RUN wget https://github.com/evcheung/kong-okta-auth-plugin/archive/f095c83f06a38845f39a2dcf4892cb8b4733ab0f.zip && \
	unzip f095c83f06a38845f39a2dcf4892cb8b4733ab0f.zip && \
	mv kong-okta-auth-plugin-f095c83f06a38845f39a2dcf4892cb8b4733ab0f kong-okta-auth-plugin
RUN cd kong-okta-auth-plugin && luarocks make && cd ..

