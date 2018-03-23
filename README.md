    # api-gateway

## QuickStart

### Create API

```
http -f POST localhost:9001/apis/ \
    name=okta-secure \
    upstream_url=http://webapp:3000 \
    uris=/
```

#### Add OpenID Connect Plugin

```
http -f POST localhost:9001/apis/okta-secure/plugins name=oidc \
    config.client_id="[CLIENT_ID]" \
    config.client_secret="[CLIENT_SECRET]" \
config.discovery="https://[Okta Authorization Server Issuer URL]/.well-known/openid-configuration"

```

#### Test API

open http://localhost:9000 .
