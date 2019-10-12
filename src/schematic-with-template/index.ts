import { apply, mergeWith, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
//added to do string related operations
import { strings } from '@angular-devkit/core';
import { Schema } from './schema';


// You don't have to export the function as default. You can also have more than one rule factory
// per files.
export function schematicWithTemplate(_options: Schema): Rule {

  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplate = url('./files');
    const sourceParameterizedTemplate = apply(sourceTemplate, [
      template({
            className : _options.className,
            ...strings
          }
      )
    ]);
    tree = mergeWith(sourceParameterizedTemplate)(tree, _context) as Tree;
    return tree;
  };
}
