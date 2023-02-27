export function ConvertCentsToCoins(cents: number) {
  const coins = [
    {
      name: 'Quarters',
      value: 25,
      count: 0,
    },
    {
      name: 'Dimes',
      value: 10,
      count: 0,
    },
    {
      name: 'Nickels',
      value: 5,
      count: 0,
    },
    {
      name: 'Pennies',
      value: 1,
      count: 0,
    },
  ];

  let remainingCents = cents;

  for (const coinType of coins) {
    coinType.count = Math.floor(remainingCents / coinType.value);
    remainingCents %= coinType.value;
  }

  return coins;
}
