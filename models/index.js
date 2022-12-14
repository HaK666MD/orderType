import bookshelf from "../db/bookshelf.js";

export const orderType = bookshelf.model("orderType", {
  tableName: "orderType",
  property: function () {
    return this.belongsToMany(property);
  },
});

export const property = bookshelf.model("property", {
  tableName: "property",
  orderType: function () {
    return this.belongsToMany(orderType);
  },
});

export const orderType_property = bookshelf.model("orderType_property", {
  tableName: "orderType_property",
  orderType: function () {
    return this.belongsTo(orderType);
  },
  property: function () {
    return this.belongsTo(property);
  },
});

export const orderName = bookshelf.model("orderName", {
  tableName: "orderName",
  order: function () {
    return this.belongsTo(order);
  },
});

export const order = bookshelf.model("order", {
  tableName: "order",
  orderName: function () {
    return this.belongsTo(orderName);
  },
  orderType: function () {
    return this.belongsTo(orderType);
  },
});
