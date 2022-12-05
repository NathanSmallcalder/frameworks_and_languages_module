# Launch

## Running Client
```console 
cd client 
```
```console
make build 
 ```
```console
make Run 
```

## Running Server
```console 
cd server 
```
```console
make build 
 ```
```console
make Run 
```

## View App

https://8001-xxxx.ws-eu67.gitpod.io?api=https://8000-xxxxx.ws-eu67.gitpod.io

To view the app you will need to get the client link and use a the query param ```?api=``` alongside the server link.

## Testing

### Server Testing
To test the server, ensure the server is running, open a new terminal and run;
```console
pytest
```
this will run all server-side tests.

### Client Testing
To Test the client,open a new terminal and run;
```console
make test_your_client_with_example_server
```
This will test the client side with a already implemented server and deliver cypress reports in the test_client repository.

# Frameworks and Languages Module
Stub framework for "Frameworks and Languages" module

https://gitpod.io/#https://github.com/calaldees/frameworks_and_languages_module

* [ReDoc openapi.yml](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/calaldees/frameworks_and_languages_module/main/openapi.yml)
