/**
 * ESLint Configuration for Translation Reminders
 * 
 * This configuration helps developers remember to add translation keys
 * when adding new text content to components.
 */

module.exports = {
  rules: {
    // Custom rule to detect hardcoded strings that should be translated
    'no-hardcoded-strings': {
      create: function(context) {
        return {
          Literal(node) {
            // Skip if inside t() call
            if (node.parent && node.parent.type === 'CallExpression' && 
                node.parent.callee && node.parent.callee.name === 't') {
              return;
            }
            
            // Skip if inside JSX attribute that's not text content
            if (node.parent && node.parent.type === 'JSXAttribute') {
              return;
            }
            
            // Skip if it's a single character or number
            if (typeof node.value === 'string' && 
                (node.value.length <= 1 || /^\d+$/.test(node.value))) {
              return;
            }
            
            // Skip if it's a URL, className, or technical identifier
            if (typeof node.value === 'string' && 
                (node.value.startsWith('http') || 
                 node.value.startsWith('className') ||
                 node.value.includes('_') ||
                 node.value.includes('-') ||
                 /^[a-z][a-z0-9]*$/.test(node.value))) {
              return;
            }
            
            // Check for text that looks like it should be translated
            if (typeof node.value === 'string' && 
                node.value.length > 3 && 
                /[a-zA-Z]/.test(node.value) &&
                !node.value.includes('console') &&
                !node.value.includes('error') &&
                !node.value.includes('warning')) {
              
              context.report({
                node,
                message: 'Consider using t() for this text: "{{text}}". Use t("{{key}}") instead.',
                data: {
                  text: node.value
                }
              });
            }
          }
        };
      }
    }
  }
};
