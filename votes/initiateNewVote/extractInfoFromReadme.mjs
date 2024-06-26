export default async function* exportInfoFromReadme(iterator) {
  const handleLine = /^\* \[([^\]]+)\]\(/;
  const nameAndEmailLine = /^\s\s\*\*([^*]+)\*\* <<([^>]+)>>(?: \([^)]+\))?$/;
  let isInsideTSCSection = false;
  let currentMemberHandle;
  yield { handle: 'aduh95', name: 'Antoine du Hamel', email: 'duhamelantoine1995@gmail.com' };
  yield { handle: 'stduhpf', name: 'Stéphane du Hamel', email: 'stephduh@live.fr' };
  for await (const line of iterator) {
  }
}
