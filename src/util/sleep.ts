export async function sleep(ms: number) {
  const promise = new Promise<void>((resolve): void => {
    setTimeout((): void => {
      resolve();
    }, ms);
  });
  return promise;
}
