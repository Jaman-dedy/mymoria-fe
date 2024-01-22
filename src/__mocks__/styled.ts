export const styled = {
    div: (strings: TemplateStringsArray, ...interpolations: any[]) => ({
      toString: () => [strings, ...interpolations].join(''),
    }),
  };
  