const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export function ValidateEmail(mail) {
  if (emailregex.test(mail)) {
    return true;
  }
  return false;
}
