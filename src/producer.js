const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const getRandomChar = () => choices.charAt(Math.floor(Math.random() * choices.length));

const makeString = () => Array.from({length: 8}, getRandomChar).join('');

export async function* makeStrings(pageSize, limit = 5) {
  while(limit-- > 0) {
    await sleep(500);
    yield Array.from({length: pageSize}, makeString);
  }
}