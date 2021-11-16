---
title: Run your mock REST APIs anywhere with Mockoon CLI
excerpt: Learn how to create mock REST APIs and run them anywhere with the CLI
meta:
  title: Run your mock REST APIs anywhere with Mockoon CLI
  description: Learn how to create mock REST APIs and run them in all headless and server environments with Mockoon CLI
image: tutorial-getting-started-cli.png
imageAlt: a terminal
order: 20
---

Mockoon is a set of free and open-source API mocking tools. They help you get ready to work in no time. Should you be a front-end or back-end developer or a QA tester, Mockoon got you covered with a flexible user interface and a CLI that allows you to bring your mocking scenarios on servers and headless environments.

This tutorial will help you put up on track with the CLI and all its possibilities.

> To learn more about API in general, head over to our [API guide](/tutorials/api-guide-what-are-api/)

## What is Mockoon CLI?

Mockoon CLI is an [NPM package](https://www.npmjs.com/package/@mockoon/cli) that can run on all environments where Node.js is installed. A [Docker image](https://hub.docker.com/r/mockoon/cli) is also available (see [Step 7](#step-7-deploy-mockoon-cli-using-docker) below).

The CLI is a companion application to Mockoon's main interface designed to receive a Mockoon data file.

It has been written in JavaScript/TypeScript and uses some great libraries like [oclif](https://oclif.io/) and [PM2](https://pm2.io/). One of the benefits of using PM2 is that you can easily manage your running mock APIs through the CLI or by using PM2 commands if you are used to them.

## How to use the CLI?

As Mockoon CLI is designed to work in pair with the main user interface, you will learn how to create your first mock API and how to import the mock data in the CLI.

### Step 1. Create a mock API using Mockoon interface

One of the prerequisites for using the CLI is to create a mock API in the main application. If you already have a setup in Mockoon, you can jump straight to the next section.

> To create a new mock API, we have a [Getting started tutorial](tutorials:getting-started) that will guide you step by step. Once your mock is created, come back to this tutorial to learn how to use it in the CLI.

### Step 2. Install the CLI

Before importing your mock API in the CLI, you must install it. First ensure that Node.js is installed on your computer by running `node -v` in your terminal:

```sh-sessions
$ node -v
v14.15.4
```

If it's not installed, head over to [Node.js' download page](https://nodejs.org/en/download/) and follow the instructions for your operating system.

You are now ready to install the CLI by running the following command `npm i -g @mockoon/cli`:

```sh-sessions
$ npm i -g @mockoon/cli

+ @mockoon/cli@1.0.0
added 423 packages from 339 contributors in 15s
```

You can also install Mockoon CLI in the scope of a local project by running `npm i @mockoon/cli`. You will then need to use `npx mockoon-cli ...` to run it.

### Step 3. Prepare your data file

The CLI currently supports only data files (exported or not) in Mockoon's format.
The CLI can import and migrate data from older versions of Mockoon. However, it doesn't alter the file you provide and only migrates a copy. If you created or exported your mock with a more recent version of the application, you need to update your CLI with the following command: `npm install -g @mockoon/cli`.

Two methods are available to run your mocks with the CLI: directly using a Mockoon's environment file or an export file.

#### Use a Mockoon's environment file (preferred method since v1.16.0)

Following Mockoon's changes in version [1.16.0](https://github.com/mockoon/mockoon/releases/tag/v1.16.0) and starting with CLI [v1.2.0](https://github.com/mockoon/cli/releases/tag/v1.2.0), the latter is directly compatible with Mockoon's environment files, without the need to use the export method (see below).

You can run your mock in one single step by providing the actual location of your Mockoon environment file. To locate your environment file from the main application, right-click on an environment and select "Show in folder" in the context menu:

![show in folder menu entry](/images/docs/environment-show-in-folder.png)

Let's pretend your file is name `data.json` and resides in the current directory.

#### Use a Mockoon's export file

To run one or more mock APIs in the CLI, you can also export them using the main application. The advantage of this method is that it allows running multiple mocks with one `start` command combined with the `--all` flag.

To export your environment, open the "Import/export" application menu and choose "Mockoon's format" → "Export all environments to a file (JSON)" or "Export current environment to a file (JSON)".

![export current environment](/images/tutorials/getting-started-cli/export-current-environment.png)

> Depending on which option you select, your export file will contain the active mock API or all your mocks. If you selected the second option, you will be able to choose the mock to run when starting the CLI.

You can then select a location to save the export data file. Let's name the file `data.json`.

#### Provide a URL

As an alternative, you can also provide a URL pointing to a Mockoon environment or export file, and Mockoon CLI will take care of downloading it.

### Step 4. Start you mock API

After locating your environment file or exporting your data file, you are ready to run your API mock with the CLI.

In your terminal, navigate to the folder where your data file is and run the following command:

`mockoon-cli start --data ./data.json`

If you want to use a remotely hosted file, you can also provide a URL to the `--data` flag like this:

`mockoon-cli start --data https://domain.com/data.json`

Depending on what option you selected during export, the CLI may prompt you to chose which environment you want to run. If your environment file or export file contains only one mock, it will run by default.

You can also provide multiple parameters to customize your mock:

- `--name` or `--index`: to select the environment to run without being prompted.
- `--pname`: to provide a different name for the API mock process. The name will always be prefixed with 'mockoon-'.
- `--port`: to override the port on which the mock process will run.

You will find more information regarding the [`start` command](https://github.com/mockoon/cli#mockoon-cli-start), including all the available flags on the official repository.

### Step 5. Manage your API mock

After running one or more API server mock, you might want to check their health and statuses. To do so you can type `mockoon-cli list`:

```sh-sessions
$ mockoon-cli list
Name          Id   Status    Cpu    Memory    Hostname       Port
mockoon-test  0    online    0.1    45.6 MB   0.0.0.0        3000
```

> Mockoon CLI is using [PM2](https://pm2.io/), the Node.js process manager, behind the scene. It allows you to use all PM2 usual commands to manage your running mock servers: `pm2 list`, `pm2 kill`, etc.

To stop a process, type the following command: `mockoon-cli {id|name}`, where `id|name` is your process id or name. If you omit the id, you will be prompted to choose a mock to stop. You can also stop all running servers at once with `mockoon-cli stop all`

### Step 6. View a running mock's logs

Mockoon CLI log all events like requests and errors in your user folder in the following files:
`~/mockoon-cli/logs/{process_name}-out.log` and `~/mockoon-cli/logs/{process_name}-error.log`.

The `{process_name}-error.log` file contains server errors that only occur at startup time and prevent the mock API from running (port in use, etc.).

The `{process_name}-out.log` file contains all other log entries (all levels) produced by the running mock server. Most of the errors occurring in Mockoon, either the CLI or the main application, are not mission-critical and are considered as "normal" output. As an example, if Mockoon is unable to parse the entering request's JSON body, it will log a JSON parsing error, but it won't block the normal execution of the application.

### Step 7. Deploy Mockoon CLI using Docker

#### Using the generic Docker image published on Docker Hub

A generic Docker image `mockoon/cli` is automatically built upon each release on Docker Hub's Mockoon CLI repository. It uses a `node:14-alpine` image and installs the latest version of Mockoon CLI.

All of `mockoon-cli start` flags (`--port`, `--index`, etc.) must be provided when running the container.

To load a data file, you can either mount a local file and pass `mockoon-cli start` flags at the end of the command:

`docker run -d --mount type=bind,source=./data.json,target=/data,readonly -p 3000:3000 mockoon/cli:latest -d data -i 0 -p 3000`

Or directly pass a URL to the `mockoon-cli start` command:

`docker run -d -p 3000:3000 mockoon/cli:latest -d https://raw.githubusercontent.com/mockoon/mock-samples/main/samples/generate-mock-data.json -i 0 -p 3000`

#### Using the dockerize command

Mockoon CLI also offers a `dockerize` command which generates a new Dockerfile that will allow you to build a self-contained image. Thus, no Mockoon CLI-specific parameters will be needed at runtime.

Run the `dockerize` command:

`mockoon-cli dockerize --data ./data.json --port 3000 --index 0 --output ./tmp/Dockerfile`

Then, navigate to the `tmp` folder, where the Dockerfile has been generated, and build the image:

`docker build -t mockoon-test .`

You can finally run your container:

`docker run -d -p <host_port>:3000 mockoon-mock1`

### Step 8. Use Mockoon CLI in a CI environment: GitHub Actions

Mockoon CLI being a Javascript application, it can run on any environment where Node.js is installed, including continuous integration systems like GitHub Actions or CircleCI.
It is useful when you want to run a mock server while running integration tests on another application. For example, you could mock the backend when running a React front-end application tests.

Here is an example of a GitHub Action running a mock API before running some tests:

```yaml
name: Run mock API server
on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14.x"
      - name: NPM install, build and test
        run: |
          npm ci
          npm run build
#         If mockoon-cli is not a devDependency:
#         npm install -D mockoon-cli
          npx mockoon-cli start --data https://domain.com/data.json --index 0 --port 3000
          npm run test
```
