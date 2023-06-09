# How To Use

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/A99US/utils.js/utils.min.js"></script>
```

# Functions

## ismobile

ismobile and isitmobile will be true if you're on mobile phone.

```javascript
ismobile ? "You are mobile" : "You're not mobile"
```

Original code from http://detectmobilebrowser.com/

## datasave()

Save data to file

```javascript
let data = "Data String";
datasave(data) // Will be saved as "download.txt"
datasave(data,"data-2023.txt")
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
## compareArray()

Compare multiple arrays

```javascript
// compareArray(array1, array2, array3, . . . . arrayn)
// Return true if they're all equal
// Or else return false
compareArray(array1, array2, array3)
```

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
