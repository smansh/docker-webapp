node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

        def customImage = docker.build("smansh2018/docker-webapp")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
