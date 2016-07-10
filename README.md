
# Example Iso-Lib

## Summary

Examples of how to consume [Iso-Lib][].

Contents:

- `example-provider-lib`: Default project generated from Yeoman generator.
- `example-consumer-browser`: Examples consuming `example-provider-lib` from browser.
- `example-consumer-node`: Example consuming `example-provider-lib` from Node.js.

## Usage

Build provider distribution files:

```bash
cd example-provider-lib
grunt
```

Run example consumers on browser:

```bash
node example-consumer-browser
```

Run example consumer on Node.js:

```bash
node example-consumer-node
```

[Iso-Lib]: https://github.com/coreyferguson/generator-iso-lib
