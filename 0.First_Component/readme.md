# Basic React

React basically uses compoenents to render things, and can be a navbar , modal, form etc which is not only simple html , css and js separated with each other but they are combined in one component itself.

Below image shows how html,css and js combined to form a component.

![React Component](https://github.com/shaksham08/ReactColt/blob/master/0.First_Component/components.jpg)

```jsx
class Dog {
  constructor (name, color) {
    this.name = name;
    this.color = color;
  }

  render() {
    return `<p>${this.name}</p>`
  }
}
```





