# Issue

If you try calling `isExisting` on a element that's [chained](https://webdriver.io/docs/selectors.html#chain-selectors) and the parent doesn't exist, it will throw the following error:

```
Can't call $ on element with selector "#missing-parent" because element wasn't found
``` 

# Steps to reproduce

1. `npm install`
2. `npx wdio`

The first test will pass while the second will not. Both child elements exist on the page (if called without the parent), but in the second test, the parent element does not.