/**
 * Wether user is on mobile device or not
 *
 * From : {@link http://detectmobilebrowser.com/}
 * @example
 * ismobile ? "You are mobile" : "You're not mobile"
 **/

var ismobile = (
  function (agent){
   return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(agent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(agent.substr(0,4)) || /android|ipad|playbook|silk/i.test(agent)) ? true : false
 })(navigator.userAgent||navigator.vendor||window.opera);

 var isitmobile = ismobile;

 /**
  * Save data to file
  * @param {string} data - Data to save
  * @param {string} filename - Default filename and extension when saving
  * @example
  * datasave(data) // Will be saved as "download.txt"
  * datasave(data,"data-2023.txt")
  */

 function datasave(data = "", filename = "download.txt"){
   let element;
   element = document.createElement('a');
   element.setAttribute(
     'href',
     'data:text/plain;charset=utf-8,'+ encodeURIComponent(data)
   );
   element.setAttribute( 'download', filename );
   element.style.display = 'none';
   document.body.appendChild(element);
   element.click();
   document.body.removeChild(element);
 }

 /**
  * Load data from file
  *
  * From : {@link https://thecompetentdev.com/weeklyjstips/tips/65_promisify_filereader/}
  * @param {object} fileOpt - Input files
  * @return {object}
  * @example
  * // Single file
  * (await dataload(this))[0]
  * // Multiple files
  * (await dataload(this)).join("\n")
  */

 async function dataload(fileOpt){
   const read = (file) => new Promise((resolve, reject) => {
     const reader = new FileReader();
     reader.onload = (event) => resolve(event.target.result);
     reader.onerror = reject;
     reader.readAsText(file);
   });
   let fileArray = fileOpt.files,
       file, data = [], arrlen;
   arrlen = Object.keys(fileArray).length;
   for(let i=0; i<arrlen; i++){
     file = fileArray[i];
     data.push(await read(file));
   }
   return data;
 }

 /**
  * Compare multiple arrays
  * @param {object} items - Array
  * @return {boolean}
  * @example
  * // Return true if they're all equal
  * // Or else return false
  * compareArray(array1, array2, array3 . . . arrayn)
  */

 function compareArray(...items) {
   let item = JSON.stringify(items[0]), result = true;
   for (let i = 1; i < items.length; i++) {
     result = item == JSON.stringify(items[i]);
     if(!result) return false;
   }
   return true;
 }

 /**
  * Add comma to thousand
  * @param {string|number} x - String or number
  * @param {string} comma - Separator
  * @return {string}
  * @example
  * comma(25012, ".")
  * // Output : 25.012
  */

 function comma(x, comma = ".") {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, comma);
 }

 /**
  * Calculate performance time
  * @param {string} a - Point name
  * @param {string|boolean} b - Point name
  * @param {number} dec - Decimal length
  * @return {number}
  * @example
  * // Mark a point
  * perf("name")
  * // Calculate a point to now
  * perf("name", true)
  * // Calculate 2 points
  * // Result will have 2 numbers behind comma
  * perf("name", "name2", 2)
  */

 function perf(a, b = null, dec = 3){
   if(b == null){
     perfmark[a] = performance.now();
   }
   else{
     if(!perfmark[a])
       throw new Error("Point '"+ a +"' Doesn't Exist!");
     if(b !== true && !perfmark[b])
       throw new Error("Point '"+ b +"' Doesn't Exist!");
     let diff = perfmark[a] - ( b === true ? performance.now() : perfmark[b] );
     return ( ( ( diff < 0 ) ? diff * (-1) : diff ) / 1000 ).toFixed(dec);
   }
 }
 var perfmark = {};

 /**
  * Formatting bytes (number) into highest denomination (MB, GB, etc)
  *
  * From : {@link https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript}
  *
  * @param {number} bytes - bytes
  * @param {number} decimals - Decimals length
  * @param {number} kopt - Kilo divider (1024 or 1000)
  * @return {string}
  * @example
  * formatBytes(120000)
  * formatBytes(120000, 2, 1000)
  */
 function formatBytes(bytes, decimals = 3, kopt = 1024) {
   if (!+bytes) return '0 Bytes'
   const k = kopt == 1024 ? 1024 : 1000
   const dm = decimals < 0 ? 0 : decimals
   const sizes = {
     1024: ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'],
     1000: ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
   }
   const i = Math.floor(Math.log(bytes) / Math.log(k))
   return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[k][i]}`
 }
