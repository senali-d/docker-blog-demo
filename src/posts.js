const posts = [
  {
    id: 1,
    title: 'What Is Docker and Why It Matters',
    date: '2026-08-10',
    author: 'Dev Team',
    content: [
      'Docker is a platform for building, shipping, and running applications inside lightweight, isolated environments called containers. Instead of installing an application directly on a machine and hoping the environment matches production, you package the application together with everything it needs to run - code, runtime, system libraries, and configuration - into a single container image.',
      'Traditional virtual machines virtualize an entire operating system, which makes them heavy and slow to start. Containers, on the other hand, share the host machine\'s kernel and only isolate the application layer. This makes them dramatically faster to start, lighter on resources, and easier to move between environments.',
      'The core benefits of Docker come down to three things: portability (a container runs the same way on a laptop, a test server, or in the cloud), consistency (the classic "it works on my machine" problem disappears because the environment travels with the app), and isolation (each container has its own filesystem and dependencies, so apps don\'t interfere with each other).',
      'For teams building and deploying software, Docker has become a foundational tool because it removes an entire category of environment-related bugs and makes deployments predictable and repeatable.',
    ],
  },
  {
    id: 2,
    title: 'Docker Images vs Containers Explained',
    date: '2026-08-15',
    author: 'Dev Team',
    content: [
      'One of the most common points of confusion for people new to Docker is the difference between an image and a container. The short version: an image is a blueprint, and a container is a running instance of that blueprint.',
      'A Docker image is a read-only template that contains the application code, a base operating system layer, dependencies, and instructions for how to run the app. Images are built in layers, and each layer is cached, which is why rebuilding an image after a small code change is usually fast - Docker only rebuilds the layers that changed.',
      'A container is created when you run an image. At that point, Docker takes the read-only image and adds a thin writable layer on top, giving the running process its own isolated filesystem, network interface, and process space. You can start, stop, and delete containers freely without affecting the underlying image.',
      'In practice, the workflow looks like this: you write a set of build instructions, run `docker build` to turn those instructions into an image, and then run `docker run` to start a container from that image. You can start as many containers from a single image as you want, and each one runs independently.',
      'A useful analogy is a class versus an object in object-oriented programming: the image is the class definition, and each container is an instantiated object created from it.',
    ],
  },
  {
    id: 3,
    title: 'Getting Started with Dockerfile and Docker Compose',
    date: '2026-08-20',
    author: 'Dev Team',
    content: [
      'A Dockerfile is a plain text file containing step-by-step instructions for building a Docker image. Each instruction adds a new layer to the image. A minimal Dockerfile for a Node.js app might start from a base image, copy in the application code, install dependencies, and define the command used to start the app.',
      'For example, a simple Dockerfile could look like this: start `FROM node:20`, then `WORKDIR /app`, then `COPY package*.json ./` followed by `RUN npm install`, then `COPY . .`, and finally `CMD ["npm", "start"]`. Running `docker build -t my-app .` turns this into a reusable image.',
      'Most real applications aren\'t a single container, though - they usually need a database, a cache, or other supporting services running alongside the main app. This is where Docker Compose comes in. Compose lets you describe a multi-container application in a single YAML file, specifying each service, its image or build context, environment variables, and how the services connect to each other over a shared network.',
      'With a `docker-compose.yml` file in place, running `docker compose up` builds and starts every defined service together, and `docker compose down` tears them all down cleanly. This makes it easy to spin up an entire local development environment - app, database, and all - with a single command, and it keeps that setup version-controlled alongside the rest of the project.',
    ],
  },
]

export default posts
