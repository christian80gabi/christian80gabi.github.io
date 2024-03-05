# Did you know?

## Docker vs Podman

    By Christian G. N. (@christian80gabi)
    12/01/2024

You can run an operating system, an application, or even your code on your computer, inside an isolated environment without the need of a VM (virtual machine). Yes, you can. There is no need for VMware, VirtualBox... It is called a **container**. Many of us use #Docker to make them. Yeah, like a container at a sea dock. 🌊

Meanwhile, did you know that Docker has an alternative named **Podman**.

Podman and Docker are both open-source tools for creating and managing containerized applications. They both follow the Open Container Initiative (OCI) standards, which means they can run containers built by each other. However, they have some key differences in their architecture, security, and features. Here is a brief summary of the main differences (the child-ish way 😁):

• **Architecture**: Docker has a big boss called the Docker daemon who tells everyone what to do. Podman does not have a big boss, but everyone works together as a team. This means Podman does not need someone to talk between the team and the big boss.

• **Security**: Docker only lets the superuser run containers, which can be dangerous. Podman lets anyone run containers, which is safer and nicer. Podman also has a special friend called SELinux who helps protect the containers from bad guys.

• **Features**: Docker has everything you need to play with containers in one place. Podman uses different toys, such as Buildah and Skopeo, to make and move container images. Podman also has a cool thing called pods, which are groups of containers that share the same stuff. Docker does not have pods, but it has Docker Swarm and Docker Compose for playing with many containers at once. Podman does not like Docker Swarm, but it likes Docker Compose.

---

Have you tried both? Which one do you prefer? Let us know in the comments!
