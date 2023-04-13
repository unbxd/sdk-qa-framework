# Use an official node runtime as a parent image
FROM node:14.15.0

# Create env variables
ENV BASEDIR /opt/unbxd/sdk-qa-framework

ARG ASSETS_AWS_KEY_ID
ARG ASSETS_AWS_SECRET_KEY
ARG TRAVIS_TAG

ENV ASSETS_AWS_KEY_ID ${ASSETS_AWS_KEY_ID}
ENV ASSETS_AWS_SECRET_KEY ${ASSETS_AWS_SECRET_KEY}
ENV TRAVIS_TAG ${TRAVIS_TAG}

# Create the folder & provide permissions
RUN mkdir -p ${BASEDIR}
RUN chown -R nobody:nogroup ${BASEDIR}

# Copy the current directory contents into the container at BASEDIR
ADD . ${BASEDIR}

# Set the working directory to BASEDIR
WORKDIR ${BASEDIR}

# Install npm dependecies
RUN npm install --verbose

# run the release build
RUN NODE_ENV=production npm run build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the server when the container launches
CMD ["sh", "-c", "NODE_ENV=production npm start"]
