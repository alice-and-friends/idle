export class GameData {
  player = {
    name: 'Alice',
    class: null,
    level: 1,
  }
  resource: object = {
    gold: {
      balance: 0,
      perSecond: 1
    }
  }
  resourcesLastUpdated: Date | undefined
  session: object = {}
}
