# Why React Key matters

To render a list of components, react provides a handy grammar of using map and components. It is something like this:

```javascript
	//
	{items.map(item => {
		return <Component key={uuid()} title=item.title/>;
	}};
	//
```

It is worth noting the importance of *key*. It helps the performance. Furthermore, if we are lazy about adding key, the program may yield bugs (for stateful components).

The repo is to illustrate this. 