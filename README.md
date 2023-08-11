# FlickrApp by Alejandro Rodriguez Hernandez (Miyagami)

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨


## Start the app

To start the the app, first install all dependencies by entering:

`npm install`

After doing that, you can simply run the following command:

`npm run dev`

You can also run `nx serve <app-name>`, however `npm run dev` is a script that runs both the Next server and the ExpressJS server inside of flicker-api. Please see the script below for more information:

```json
  "scripts": {
    "dev": "nx run-many -t serve miyagami flickr-api"
  },
```

## Generating the app:
This monorepo was generated using NX workspaces. The following commands are the ones used to generate this project:

1. Generate a Next.js workspace by entering the below command and following the instructions from the CLI:

`npx create-nx-workspace`

- Select React --> Select Next.js with App directory

2. Generate the ExpressJS server inside the monorepo by running the below command:

`nx g @nx/express:app <app-name>`

3. Add TailwindCSS to the project:

`nx g @nx/react:setup-tailwind --project=<app-name>`

4. Finally, for simplicity purposes, a Lib file is generated. This file is only meant to hold the global types shared across the monorepo. To do so, the following command will do the trick:

`npx nx g @nx/js:lib`

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/core-features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
