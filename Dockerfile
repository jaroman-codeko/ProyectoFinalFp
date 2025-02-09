FROM linuxserver/code-server:latest

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

RUN apt-get update && apt-get install -y python3 python3-pip

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /home/coder/project
