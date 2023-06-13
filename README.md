# Functions

## How To Use

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/A99US/utils.js/utils.min.js"></script>
```

## ismobile

ismobile and isitmobile will be true if you're on mobile phone.

```javascript
ismobile ? "You are mobile" : "You're not mobile"
```

Original code from http://detectmobilebrowser.com/

## download_url()

Download url.

```javascript
let data = "https://www.example.com/header.jpg";
download_url(data) // Will be saved as "download.txt", unless browser force other name
download_url(data,"example.jpg")
```

## download_blob()

Download blob. First argument could be string instead of blob.

```javascript
let dataBlob = new Blob(["data"], { type: 'text/plain' });
download_blob(dataBlob) // Will be saved as "download.txt"
download_blob(dataBlob,"data-2023.txt")
download_blob("String to be saved","data-2023.txt")
```

## dataload()

Load data from file

```javascript
// #file is an input file
$("#file").change(async function(){
  $("#datafetch").val(
    // Single file
    (await dataload(this))[0]
    // Or multiple files
    // (await dataload(this)).join("\n")
  );
});
```
## Array & Object Function

compareArray() : Compare multiple arrays or objects

```javascript
// compareArray(array1, array2, array3, . . . . arrayn)
// Return true if they're all equal
// Or else return false
compareArray(array1, array2, array3)
```

arrayCopy() : Deep-copy and/or merge array / object (Need jquery for object)

```javascript
let array1 = ["Johny"];
let array2 = ["William", "Manager"];
let object1 = {firstname: "Johny"};
let object2 = {lastname: "William", posittion: "Manager"};
let data1 = arrayCopy(array1,array2)
let data2 = arrayCopy(object1) // Deep copy
let data3 = arrayCopy(object1,object2) // Merge and deep copy
```

arrayCompact(arr) : Remove falsy items (Array, not object)

arrayUnique(arr) : Remove duplicate items (Array, not object)

arrayLast(arr) : Get last item (Array, not object)


## comma()

Add comma to thousand

```javascript
comma(25012, ".")
// Output : 25.012
```

## perf()

Calculate performance time

```javascript
// Mark a point, return nothing
perf("name")
// Calculate a point to now, return time in sec
perf("name", true)
// Calculate 2 points
// Result will have 2 numbers behind comma
perf("name", "name2", 2)
```

## formatBytes()

Formatting bytes (number) into highest denomination (MB, GB, etc)

```javascript
// formatBytes(bytes, decimals, kopt)
// bytes : bytes
// decimals : Decimals length, default 3
// kopt : Kilo divider (1024 or 1000), default 1024
formatBytes(120000)
formatBytes(120000, 2, 1000)
```

## NewError()

Create new Error object

```javascript
// NewError(name,message)
throw NewError("typeError","You're using the wrong type!")
```

## Extra Functions

```javascript
isFunction(myFunc)
isObject(arrObject)
isArray(arr)
isString("is it a string")
isNumber("a")
isInteger(2.45)
isUndefined(data.item)
isNull(index)
isEmpty(name) // True if it is null, undefined or ""
sleep(10000) // in miliseconds
```
