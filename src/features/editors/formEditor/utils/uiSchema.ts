import { UiSchema } from '@rjsf/utils';

export const uiSchema: UiSchema = {
  'ui:submitButtonOptions': {
    norender: true,
  },
  'ui:order': ['id', 'type', 'path', 'pathNext', 'content'],
  path: {
    'ui:disabled': true,
  },
  content: {
    'ui:title': 'Content',
    backgroundImage: {
      'ui:title': 'Background Image',
    },
    footer: {
      buttonNext: {
        'ui:title': 'Next Button ',
      },
    },
  },
};
