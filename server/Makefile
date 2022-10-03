DOCKER_IMAGE = express_server
build:
	docker build --tag ${express_server}
run:
	docker run -rm -it - publish 8000:8000 $[express_server]
	