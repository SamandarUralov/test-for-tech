const obj = {
  param1: "something",
  param2: "somethingelse",
  param3: "",
};
const url = new URL(`http://example.com`);

function generateUrl(obj) {
  let filteredObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key]) {
      Object.assign(filteredObj, { [key]: obj[key] });
    }
  }
  return filteredObj;
}

url.search = new URLSearchParams(generateUrl(obj));
console.log(url.toString());

//! current result = http://example.com/?param1=something&param2=somethingelse
