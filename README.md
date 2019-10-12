# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!

### how to run schematics
 in developer mode run (prefix) (--dry-run by default)
```bash
schematics .:simple-file-create
```
run without debug mode
```bash
schematics .:simple-file-create --debug=false
```
run without debug mode with parameters
```bash
schematics .:simple-file-create --fileName=test2 --content=testContent --debug=false
```

### Define custom templates

create file with name using __ ("double underscore prefix") eg: __name@-suffix
```bash
schematics .:schematic-with-template --debug=false
```

### Define angular service template (advanced template)

can create service using this template and we can hide/ visible code methods using flag like "--findOne"
```bash
schematics .:service-template --findOne --debug=false
```

**we can use --force flag to overwrite.

### Way to use in other project
There are multiple ways to use in project

01. use inside same machine by linking
(assume u)
 
 ```bash
# create new project with Angular CLI
ng new my-schematic-test --minimal --skip-install
cd my-schematic-test

# link schematic, be sure to `npm run build` in your schematics project
npm link ../schematics-example  #need to provide exact path of schematic project

# run with option to skip install
schematics my-schematic:my-schematic --skipi
 ```
