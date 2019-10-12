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
