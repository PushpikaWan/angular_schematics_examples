import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addPackageJsonDependency, NodeDependency, NodeDependencyType } from '@schematics/angular/utility/dependencies';

import { Schema } from './schema';


const dependencies: { [key: string]: string } = {
  '@ngx-translate/core': '^10.0.2',
  lodash: '4.17.10',
  'ngx-mask': '^6.5.15'
};

export function schematicsAddDependencies(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    for (let pkg in dependencies) {
      const nodeDependency: NodeDependency = _nodeDependencyFactory(pkg, dependencies[pkg]);

      addPackageJsonDependency(tree, nodeDependency);
    }

    if (!_options.skipi) {
      _context.addTask(new NodePackageInstallTask());
    }
  };
}

function _nodeDependencyFactory(packageName: string, version: string): NodeDependency {
  return {
    type: NodeDependencyType.Default,
    name: packageName,
    version: version,
    overwrite: true
  };
}
