/**
 * TranslatableContent Component
 * 
 * A wrapper component that automatically handles translation for new content.
 * Use this as a template when creating new content sections.
 */

import React, { useMemo } from 'react';
import { useAutoTranslation } from '../hooks/useAutoTranslation';

/**
 * TranslatableContent - A component that automatically handles translations
 * @param {string} section - The section name (e.g., 'services', 'blog', 'home')
 * @param {Object} content - Content object with text properties
 * @param {Function} children - Render function that receives translated content
 * @param {Object} props - Additional props
 */
const TranslatableContent = ({ 
  section, 
  content, 
  children, 
  ...props 
}) => {
  const { createTranslatedObject, createTranslatedArray } = useAutoTranslation(section);

  // Automatically translate all text content
  const translatedContent = useMemo(() => {
    if (Array.isArray(content)) {
      return createTranslatedArray(content);
    } else if (typeof content === 'object' && content !== null) {
      return createTranslatedObject(content);
    } else {
      return content;
    }
  }, [content, createTranslatedArray, createTranslatedObject]);

  return children(translatedContent, props);
};

/**
 * TranslatableText - A simple component for translating individual text elements
 * @param {string} section - The section name
 * @param {string} text - The text to translate
 * @param {string} type - The content type
 * @param {string} identifier - Optional custom identifier
 * @param {Object} props - Additional props
 */
export const TranslatableText = ({ 
  section, 
  text, 
  type = 'text', 
  identifier = null, 
  ...props 
}) => {
  const { createTranslatedText } = useAutoTranslation(section);
  
  return (
    <span {...props}>
      {createTranslatedText(text, type, identifier)}
    </span>
  );
};

/**
 * TranslatableButton - A button component with automatic translation
 * @param {string} section - The section name
 * @param {string} text - The button text
 * @param {string} type - The button type (e.g., 'primary', 'secondary')
 * @param {Object} props - Additional props
 */
export const TranslatableButton = ({ 
  section, 
  text, 
  type = 'button', 
  ...props 
}) => {
  const { createTranslatedText } = useAutoTranslation(section);
  
  return (
    <button {...props}>
      {createTranslatedText(text, type)}
    </button>
  );
};

/**
 * TranslatableHeading - A heading component with automatic translation
 * @param {string} section - The section name
 * @param {string} text - The heading text
 * @param {string} level - The heading level (h1, h2, h3, etc.)
 * @param {Object} props - Additional props
 */
export const TranslatableHeading = ({ 
  section, 
  text, 
  level = 'h2', 
  ...props 
}) => {
  const { createTranslatedText } = useAutoTranslation(section);
  const HeadingTag = level;
  
  return (
    <HeadingTag {...props}>
      {createTranslatedText(text, 'title')}
    </HeadingTag>
  );
};

/**
 * TranslatableList - A list component with automatic translation
 * @param {string} section - The section name
 * @param {Array} items - Array of text items
 * @param {string} type - The list type (e.g., 'features', 'benefits')
 * @param {Object} props - Additional props
 */
export const TranslatableList = ({ 
  section, 
  items, 
  type = 'list', 
  ...props 
}) => {
  const { createTranslatedArray } = useAutoTranslation(section);
  const translatedItems = createTranslatedArray(items, type);
  
  return (
    <ul {...props}>
      {translatedItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default TranslatableContent;
