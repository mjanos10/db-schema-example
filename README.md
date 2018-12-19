# DB-Schema sharing example

A possible way to store mongoose models and share them across many applications. You could use the following syntax:

```js
import mongoose, { createConnection, SomeModel, SomeOtherModel } from "./index";

(async () => {
  await createConnection(process.env.DB_URL);
  console.log(`Connected to the DB at ${process.env.DB_URL}`);
  // models can be used
  const found = await SomeModel.find({ something: "yes" });
  // ...
})();
```
