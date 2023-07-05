<p>
  <a href="https://7code.ro/" target="blank"><img src="https://avatars.githubusercontent.com/u/41831998" height="100" alt="7Code Logo" /></a>
</p>

## Description

[Next](https://nextjs.org) + [TypeScript](https://github.com/microsoft/TypeScript) starter repository.

### Libraries

* aws-amplify
* axios
* swr
* material ui
* redux-toolkit
* formik + yup
* redux-persist

### Production-ready Next.js boilerplate:
* Built-in AuthModule, using AWS Cognito with aws-amplify. Guard HoC.
* Deployable. CI/CD pipeline using Github Actions.
* Advanced ESLint/TSLint config.
* Shared services/constants/helpers
* Husky pre-commit setup
* Maintainable and extensible folder structure with samples
* Integration with SWR
* Form handling system
* Redux configured

## TO-DO
* Add Unit tests.
* ...

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev

```

## Usage

### **SVG usage**

For handling SVG files we use `@svgr/webpack` to inline them into React.

```javascript
import Star from './star.svg';

const App = () => (
  <div>
    <Star />
  </div>
);
```

The SVG can be styled with **className** as a normal component or we can override the attributes directly.

For example, we want to change the color of a SVG:

1. Ensure the SVG's paths do not have a `fill="color-name"` option. If they have, then remove it.

```html
<svg width="283" height="64" viewBox="0 0 283 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M141.04 ...... 113.2-9.2z" fill="#000" />
</svg>
```

The fill attribute from the `svg` tag does not matter (that is the default fill value for the SVG, like a default color). Remove the fill attributes from the `path` tag.

**A reusable SVG would look like this:**

```html
<svg width="283" height="64" viewBox="0 0 283 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M141.04 ...... 113.2-9.2z" />
</svg>
```

2. Write the fill option inside the SVG component and the desired color or into the CSS with the fill attribute.

```javascript
import Star from './star.svg';

const App = () => (
  <div>
    <Star fill="red" />
  </div>
);
```

or

```javascript
import Star from './star.svg';

const App = () => (
  <div>
    <Star className="svgClassName" />
  </div>
);
```

```css
.svgClassName {
  fill: 'red';
}
```

All SVG images must reside inside `public/static` folder.
Import example:

```javascript
import VercelIcon from 'public/vercel.svg';
```

## Code Style
Sync your IDE with project eslintrc.js.

Check `Run ESLint --fix on save`

## Stay in touch

- Author - [Igor Mardari](https://www.linkedin.com/in/igor-mardari-7code/) | [GarryOne](https://github.com/GarryOne)
- Website - [7code.ro](https://7code.ro/)
- Github - [@7codeRO](https://github.com/7codeRO/)

## License

[MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
