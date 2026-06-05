import nextConfig from 'eslint-config-next/core-web-vitals';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

const config = [
  ...nextConfig,
  prettierConfig,
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'warn',
    },
  },
];

export default config;
