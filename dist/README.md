# ng2-material-dynamic-form
A simple dynamic form module using material design for angular 2

**Version: 1.0.0**
Everything should work out of the box.

## Instalation

`npm i --save ng2-material-dynamic-form`

### Adding SCSS dependency for material

There are two ways of doing this:
Add `node_modules/ng2-material-import/theme/default.scss` to the styles path in .angular-cli.json.

```json
...

  "styles": [
    "styles.css",
    "../node_modules/ng2-material-import/theme/default.scss"
  ],

...
```

Or:

Create a folder called themes. Inside that folder add a .SCSS file.
inside that file add these lines:

```scss
@import '~@angular/material/theming';
@include mat-core();
$default-app-primary: mat-palette($mat-indigo);
$default-app-accent:  mat-palette($mat-pink, A200, A100, A400);
$default-app-warn:    mat-palette($mat-red);
$default-app-theme: mat-light-theme($default-app-primary, $default-app-accent, $default-app-warn);
@include angular-material-theme($default-app-theme);

```

After that add that file to the angular-cli styles section

```json
...

  "styles": [
    "styles.css",
    "theme/default.scss"
  ],

...
```

## Usage

`<ng2-material-form [formData]="formData" (output)="dataOutput($event)"></ng2-material-form>`

```typescript
public formData = [
  //INPUT EXAMPLE
  { type: 'input', attr: 'inputTextExample', alias: 'Placholder', required: true },

  //CHECKBOX EXAMPLE
  { type: 'checkbox', attr: 'checkboxExample', alias: 'Placholder', required: true },

  //SLIDER EXAMPLE
  { type: 'slider', attr: 'sliderExample', settings: { disabled: false, invert: false, max: 10, min: 1, step: 1, thumbLabel: true, tickInterval: 10, vertical: false }, required: true },

  //SLIDE-TOGGLE EXAMPLE
  { type: 'slide-toggle', attr: 'slideToggleExample', settings: { disabled: false, checked: false }, alias: 'Placholder', required: true },

  //SELECT EXAMPLE
  { type: 'select', attr: 'selectExample', alias: 'Placeholder', options: [
    {value: '1', key: 'Label 1'},
    {value: '2', key: 'Label 2'},
    {value: '3', key: 'Label 3'},
  ], required: true },

  //RADIO EXAMPLE
  { type: 'radio', attr: 'radioExample', alias: 'Placeholder', options: [
    {value: '1', key: 'Label 1'},
    {value: '2', key: 'Label 2'},
    {value: '3', key: 'Label 3'},
  ], required: true},
]
```

## Output

```typescript
dataOutput(e) {
  console.log(e);
}
```
