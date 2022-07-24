export function bytes32(s: string): string {
  let result = `0x${s}`;
  while (result.length < 64 + 2) {
    result = `${result  }0`;
  }
  return result;
}
