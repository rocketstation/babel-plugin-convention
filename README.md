# Babel Plugin Convention

Babel Plugin Convention reduces the boilerplate according to our convention

## Installation

```bash
npm i -D @rocketstation/babel-plugin-convention
```

## Usage

```javascript
// babel.config.js
{ plugins: ['@rocketstation/babel-plugin-convention'] }
```

## Handlers

# universal

Scope: `**/*`

- change from `ID` to `'path-to-module'`

# web component & web segments

Scope: `web/**/component.js` || `web/**/segments.js` || `web/**/segments/*.js`

- add `import $ from '@rocketstation/black-box'`
- change from `$audio()` to `$('audio')`
- change from `$box()` to `$('div')`
- change from `$canvas()` to `$('canvas')`
- change from `$editor()` to `$('textarea')`
- change from `$form()` to `$('form')`
- change from `$frame()` to `$('iframe')`
- change from `$header()` to `$('h1')`
- change from `$img()` to `$('img')`
- change from `$input()` to `$('input')`
- change from `$label()` to `$('label')`
- change from `$link()` to `$('a')`
- change from `$meta()` to `$('meta')`
- change from `$option()` to `$('option')`
- change from `$path()` to `$('path')`
- change from `$script()` to `$('script')`
- change from `$select()` to `$('select')`
- change from `$shape()` to `$('svg')`
- change from `$text()` to `$('span')`
- change from `$title()` to `$('title')`
- change from `$video()` to `$('video')`

## License

Babel Plugin Convention is licensed under the [MIT License](http://opensource.org/licenses/MIT)

Created by [RocketStation](http://rstation.io)
