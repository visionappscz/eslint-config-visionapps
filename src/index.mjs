import baseRecommended from './configs/base/recommended.mjs';
import baseTypescript from './configs/base/typescript.mjs';
import reactRecommended from './configs/react/recommended.mjs';
import reactTypescript from './configs/react/typescript.mjs';

export const configs = {
  base: {
    recommended: baseRecommended,
    typescript: baseTypescript,
  },
  react: {
    recommended: reactRecommended,
    typescript: reactTypescript,
  },
};
