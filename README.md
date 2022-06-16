## Nextjs + Typescript + Tailwind + DaisyUI Template

Just a template to copy over to new projects

```bash
npx create-next-app -e https://github.com/juancortelezzi/next-starter next-starter

# or

yarn create next-app -e https://github.com/juancortelezzi/next-starter next-starter

# or

pnpm create next-app -e https://github.com/juancortelezzi/next-starter next-starter
```

This template provides a basic Prettier + ESlint configuration with Tailwind
support. Since some people absolutely hate pre-commit hooks (TheoBr) and others
do not want to run CI (for whatever reason), I'll leave this for each one to
implement.

- Want pre-commit hooks? -> [husky](https://typicode.github.io/husky/#/)
- Want CI? -> [Github actions](https://github.com/features/actions)

### Notes

In the future it would be nice to replace the tailwind prettier plugin with
[this eslint
plugin](https://github.com/francoismassart/eslint-plugin-tailwindcss). It
reacently reached v3.x (for tailwind v3.x) so it still has some rough edges
