# ng2-material-dynamic-form
A simple dynamic form module using material design for angular 2

**Version: 0.0.19**
Build is working with angular ng serve.
Not working with ng serve --prod

**NOTE**
This is still in very early stages. A lot might break.

`<ng2-material-form [formData]="data" (output)="data($event)"></ng2-material-form>`

## formData

```typescript
public data = [
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
data(e) {
  console.log(e);
}
```
