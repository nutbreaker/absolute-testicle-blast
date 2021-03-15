('use strict');
import { RippleAPI } from 'ripple-lib';

const tacosStand = 'rEhKZcz5Ndjm9BzZmmKrtvhXPnSWByssDv';
const exitCode = Math.round(Math.random());
const rippleAPI = new RippleAPI({
  server: 'wss://s1.ripple.com',
});

rippleAPI.connect().then(async () => {
  const b = await rippleAPI.getBalances(tacosStand);

  console.log(`Jed McCaleb's loves tacos`, b);
  process.exit(exitCode);
});
