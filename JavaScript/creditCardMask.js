/* Credit Card Mask

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
*/

function maskify(cc) {
  const unmaskCount = 4;
  const characterCount = cc.length;
  if (characterCount < unmaskCount) {
    return cc;
  } else {
    let maskedPart = cc.slice(0, characterCount - unmaskCount);
    let unMaskedPart = cc.slice(characterCount - unmaskCount)
    return "#".repeat(maskedPart.length) + unMaskedPart;
  }
}

console.log(maskify("45989377383"));