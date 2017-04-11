# ab-test

get A/B result quickly with node or browser


## install

```shell
npm install ab-tester
```

## start

```javascript
import AB from 'ab-tester';

// create one group for A/B
AB.create('home',{
  'wide':0.3,
  'normal':0.7
});

// create anothor group for A/B
AB.create('video',{
  'wide':0.1,
  'normal':0.9
});

// get current key of hit within group by name
console.log(AB.run('home'));//normal
```

## notice

sum of all items can be any number not must equal 1; the reuslt appear by rate of every item;
