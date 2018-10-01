
/* #1 */
const ansi = require("ansi");
const cursor = ansi(process.stdout);
// cursor.beep();

/* #2 */
const moment = require("moment");
const momentYear = moment().format("YYYY");
const momentMonth = moment().format("MMMM");
const momentDay = moment().format("DD");


/* #3 */
const beepSound = require("beepbeep")

function view(data) {
  console.log(data);
  cursor.reset();
}

cursor.hex('#660000').bold().underline();
view(momentYear);

cursor.hex('#123587');
view(momentMonth);

cursor.hex('#FFF092').bold();
view(momentDay);

beepSound([1000, 1000, 1000]);
