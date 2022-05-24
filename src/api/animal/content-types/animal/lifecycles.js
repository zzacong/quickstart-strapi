// src/api/animal/content-types/animal/lifecycles.js

module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;
    data.computed = data.name + " computed";
  },

  beforeUpdate(event) {
    const { result, params } = event;
    const { data } = params;
    data.computed = data.name + " computed";
  },
};
