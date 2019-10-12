import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { Schema } from './schema';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function simpleFileCreate(_options: Schema): Rule {
  const fileName = _options.fileName;
  const content = _options.content;
  console.log(fileName, content);
  return (tree: Tree, _context: SchematicContext) => {
    tree.create(fileName + '.ts', 'console.log("' + content + '");');
    return tree;
  };
}
