import { makeStrings } from './producer';

export async function subscribe(pageSize, handler) {
  new ReadableStream({
    async start(controller) {
      for await (const promise of makeStrings(pageSize)) {
        const val = await promise;
        console.log(...val);
        handler(val);
      }
    }
  })
}
