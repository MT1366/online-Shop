import { db } from "./script.js";

console.log(db);

db.products.toArray().then((data) => {
  data.forEach((element) => {
    console.log(element);
  });
});
