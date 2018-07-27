import mockDB from './mockDB';

class Server {
  constructor(dataDB) {
    this.dataDB = dataDB;
  }

  getAll = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(this.dataDB);
    }, this.serverLatency(550, 1000));
  });

  getOne = id => new Promise((resolve) => {
    setTimeout(() => {
      resolve(this.findItem(id));
    }, this.serverLatency(550, 1000));
  });

  updateItem = (id, payload) => new Promise((resolve) => {
    setTimeout(() => {
      const item = this.findItem(id);
      const index = this.findIndex(id);

      const newItem = Object.assign({}, item, {
        template: payload,
        modified: Date.now(),
      });

      this.dataDB.splice(index, 1, newItem);

      resolve(newItem);
    }, this.serverLatency(150, 350));
  });

  findItem = id => this.dataDB.find(item => item.id === id);

  findIndex = id => this.dataDB.findIndex(item => item.id === id);

  serverLatency = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
}

export default () => new Server(mockDB);
