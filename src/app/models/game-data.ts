export class GameData {
  player = {
    name: 'Alice',
    class: null,
    level: 1,
  }
  ship: object = {
    modules: []
  }
  resource: object = {
    oxygen: {
      balance: 0,
      perSecond: 1
    },
    hydrogen: {
      balance: 0,
      perSecond: 1
    },
    gold: {
      balance: 0,
      perSecond: 1
    },
    iron: {
      balance: 0,
      perSecond: 1
    },
    steel: {
      balance: 0,
      perSecond: 1
    },
    silicone: {
      balance: 0,
      perSecond: 1
    },
    antiMatter: {
      balance: 0,
      perSecond: 1
    },
  }
  resourcesLastUpdated: Date | undefined
  session: object = {}
  dailyReward: object = {
    lastCollected: null,
    streak: 0
  }
}
