# Introduction to Linux

Linux is a Unix-like operating system that was designed to provide personal computer 
users a free or very low-cost operating system comparable to traditional and usually 
more expensive Unix systems. Linux has a reputation as a very efficient and 
fast-performing system.

In today's world, Linux is the most widely used operating system on the planet. It
is used in every domain, from web servers, networking, databases, data centers, 
supercomputers, phones, embedded systems, and even in space.

- Facebook, Google, Amazon, Twitter, Github, and most of the web is running on Linux.
- Android, which is the most popular mobile operating system, is based on Linux.
- Supercomputers, like the top 500 supercomputers in the world, are running on Linux.
- The International Space Station is running on Linux.
- IoT devices are almost always running on Linux.

MacOS is also based on Unix, which is very similar to Linux. Windows is the only
major operating system that is not based on Unix, but even Windows has a Linux
subsystem now.

Basically, Linux is everywhere, except on personal computers. But even that is
changing, with more and more people switching to Linux every day. If you are a
developer, Linux is a must-have skill. It is the most developer-friendly operating
system, and most of the tools and technologies that developers use are built for
Linux.

## Linux Distributions

Linux is not a single operating system, but a family of operating systems, called
distributions. Each distribution is a different flavor of Linux. The most popular
distributions are:

- Ubuntu (we will use Ubuntu 24 in this course)
- Debian
- Fedora
- Arch Linux

## Text Based vs. Graphical Interface

Linux can be used in two ways: text-based and graphical. The text-based interface
is called the shell, and the graphical interface is called the desktop environment.
In this course, we will focus on the shell, as it is more powerful and efficient
than the desktop environment, and allows us to connect to remote, powerful servers.

A terminal is a program that allows you to interact with the shell.

We will use the Windows Terminal to attach to a remote Ubuntu server via a secure
shell (SSH) connection. This way, we can use the power of Linux from our Windows
machine.

## SSH

SSH, short for Secure Shell, is a network protocol that allows you to securely
connect to a remote server.

We will use SSH to connect to a remote Ubuntu server, where we will run all our
commands. To connect to the server, open the Windows Terminal and type:

```bash
ssh devserver1
```

This will connect you to the server `devserver1`, and start a Linux shell session.
To disconnect, type `exit`.

## Basic Commands

Here are some basic commands that you will use in the shell:

- `ls`: list files and directories
- `cd`: change directory
- `pwd`: print working directory
- `cat`: display file contents
- `cp`: copy files and directories
- `mv`: move files and directories
- `rm`: remove files and directories
- `mkdir`: create directories

We will learn more commands as we go along.

Examples:

```bash
$ pwd
/home/dev

$ ls
code

$ cd code
$ ls
hello_world

$ cd hello_world
$ ls 
hello.java HelloWorld

$ cat hello.java
public class hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

$ cd ~
$ mkdir examples
$ cd examples
$ echo "Hello, World!" > hello.txt
$ cat hello.txt
Hello, World!

$ cp hello.txt hello2.txt
$ ls
hello.txt hello2.txt

$ mv hello2.txt hello3.txt
$ ls
hello.txt hello3.txt

$ rm hello.txt
$ ls
hello3.txt

$ cd ..
```

## Quiz

1. What is Linux?
2. What is a Linux distribution?
3. What is the difference between a text-based and graphical interface?
4. What is a terminal?
5. What is SSH?
6. What does the `ls` command do?
7. What does the `cd` command do?
8. What does the `pwd` command do?
9. What does the `cat` command do?
10. What does the `cp` command do?
11. What does the `mv` command do?
12. What does the `rm` command do?
13. What does the `mkdir` command do?
14. What does the `cd ..` command do?
15. What does the `cd ~` command do?
16. What does the `echo` command do?
17. What does the `>` operator do?
18. What does the `exit` command do?
19. Create a directory called `test` and create a file called `hello.txt` with the contents `Hello, World!`.
20. Copy `hello.txt` to `hello2.txt`, and then move `hello2.txt` to `hello3.txt`.
21. Remove `hello.txt` and `hello3.txt`.
22. Go back to the home directory.
