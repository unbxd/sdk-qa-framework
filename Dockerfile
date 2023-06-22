# Use an official node runtime as a parent image
FROM node:14.19.3

# Create env variables
ENV BASEDIR /opt/unbxd/workbench

ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

ENV AWS_ACCESS_KEY_ID ${AWS_ACCESS_KEY_ID}
ENV AWS_SECRET_ACCESS_KEY ${AWS_SECRET_ACCESS_KEY}

# Create the folder & provide permissions
RUN mkdir -p ${BASEDIR}
# RUN chown -R nobody:nogroup ${BASEDIR}

# Copy the current directory contents into the container at BASEDIR
ADD . ${BASEDIR}

# Set the working directory to BASEDIR
WORKDIR ${BASEDIR}

# Install npm dependecies
RUN npm install --verbose

# run the release task
RUN NODE_ENV=production npm run build

# Make port 3030 available to the world outside this container
EXPOSE 3030

# Run the server when the container launches
CMD ["sh", "-c", "npm run start"]
# CMD ["sh", "-c", "npx nodemon server.js"]
