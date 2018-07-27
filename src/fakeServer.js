import mockDB from './mockDB';

class Server {
  constructor(dataDB) {
    this.dataDB = dataDB;
  }

  getAll = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(this.dataDB);
    }, this.serverLatency(150, 350));
  });

  getOne = id => new Promise((resolve) => {
    setTimeout(() => {
      resolve(this.findItem(id));
    }, this.serverLatency(150, 350));
  });

  updateItem = (id, payload) => new Promise((resolve) => {
    setTimeout(() => {
      const item = this.findItem(id);

      item.template = payload;
      item.modified = Date.now();

      resolve(item);
    }, this.serverLatency(150, 350));
  });

  findItem = id => this.dataDB.find(item => item.id === id);

  serverLatency = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
}

export default () => new Server(mockDB);
