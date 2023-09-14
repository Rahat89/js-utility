export function twoDecimalFraction(number) {
    if (number) {
      number = number.toString();
      const match = number.match(/^-?\d+(?:\.\d{0,2})?/);
      if (match) {
        return match['0'];
      }
      return number;
    }
    return number;
  }

  export function getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  export function ucFirst(string) {
    return (string && string.charAt(0).toUpperCase() + string.slice(1)) || string;
  }