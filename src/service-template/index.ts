import { apply, mergeWith, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';


export function serviceTemplate(_options: any): Rule {

  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplate = url('./files');
    const sourceParameterizedTemplate = apply(sourceTemplate, [
      template({
            ..._options,
            ...strings
          }
      )
    ]);
    tree = mergeWith(sourceParameterizedTemplate)(tree, _context) as Tree;
    return tree;
  };
}
