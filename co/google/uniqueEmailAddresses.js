'use strict';

// localPart@domainPart
// considering below 2 rules, return the number of unique email addresses from the emails array
// . in the localPart will be ignored
// characters after + in the local part will be ignored

// new way - better

function numUniqueEmails(emails) {

  // make a new Set variable to store unique values
  const set = new Set();
  
  // normalize each emails in for loops using a separate function and add the new email to the set
  for (let email of emails) {
    const newEmail = normalizeEmail(email);
    set.add(newEmail);
  }

  // a separate function to normalize the email
  function normalizeEmail(email) {
    let [local, domain] = email.split('@');
    local = local.replace(/(\.)|(\+.*)/g, '');
    return local + '@' + domain;
  }

  // return the size of the set
  return set.size;
}

let emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
console.log(numUniqueEmails(emails));

// old way
function numUniqueEmails(emails) {
  // extract local parts
  let localParts = emails.map(email => {
    let localPart = email.split('@')[0];
    return localPart.replace(/\./ig, '').split('+')[0];
  });

  // extract domain parts
  let domainParts = emails.map(email => {
    return email.split('@')[1];
  });

  let newEmails = [];

  // concat & join local parts + @ + domain parts and make a new array
  for (let i = 0; i < emails.length; i++) {
    let newEmail = [].concat(localParts[i], '@', domainParts[i]).join('');
    newEmails.push(newEmail);
  }

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  // filter unique emails
  let uniqueEmails = newEmails.filter(onlyUnique);

  return uniqueEmails.length;
}

let emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];

console.log(numUniqueEmails(emails));