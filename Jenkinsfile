node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {

        def customImage = docker.build("smansh2018/docker-webapp")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
