import {
  orderName,
  orderType,
  property,
  orderType_property,
  order,
} from "../models/index.js";

// Create
export async function createOrderName(req, res) {
  try {
    const ordName = await new orderName(req.body).save();
    res.status(200).json(ordName);
  } catch (e) {
    res.status(400).send({
      success: false,
      error: `Bad Request: ${e}`,
    });
  }
}

export async function createOrderType(req, res) {
  try {
    const ordType = await new orderType(req.body).save();
    res.status(200).json(ordType);
  } catch (e) {
    res.status(400).send({
      success: false,
      error: `Bad Request: ${e}`,
    });
  }
}

export async function createProperty(req, res) {
  try {
    const prop = await new property(req.body).save();
    res.status(200).json(prop);
  } catch (e) {
    res.status(400).send({
      success: false,
      error: `Bad Request: ${e}`,
    });
  }
}

export async function createOrderTypeProperty(req, res) {
  try {
    const join = await new orderType_property(req.body).save();
    res.status(200).json(join);
  } catch (e) {
    res.status(400).send({
      success: false,
      error: `Bad Request: ${e}`,
    });
  }
}

export async function createOrder(req, res) {
  try {
    const ord = await new order(req.body).save();
    res.status(200).json(ord);
  } catch (error) {
    res.status(400).send({
      success: false,
      error: `Bad Request: ${e}`,
    });
  }
}

//Read
export async function getOrderNames(req, res) {
  try {
    const names = await new orderName().fetchAll();
    res.status(200).json(names);
  } catch (e) {
    res.status(404).send({
      success: false,
      error: `Failed to fetch the data: ${e}`,
    });
  }
}
export async function getOrderName(req, res) {
  try {
    const name = await new orderName(req.params.id).fetch();
    res.status(200).json(name);
  } catch (error) {
    res.status(404).send({
      success: false,
      error: `Record not found with id:${req.params.id} ${error}`,
    });
  }
}

export async function getOrderTypes(req, res) {
  try {
    const types = await new orderType().fetchAll({
      withRelated: ["property"],
    });
    res.status(200).json(types);
  } catch (e) {
    res.status(404).send({
      success: false,
      error: `Failed to fetch the data: ${e}`,
    });
  }
}
export async function getOrderType(req, res) {
  try {
    const type = await new orderType(req.params.id).fetch({
      withRelated: ["property"],
    });
    res.status(200).json(type);
  } catch (error) {
    res.status(404).send({
      success: false,
      error: `Record not found with id:${req.params.id} ${error}`,
    });
  }
}

export async function getProperties(req, res) {
  try {
    const properties = await new property().fetchAll();
    res.status(200).json(properties);
  } catch (e) {
    res.status(404).send({
      success: false,
      error: `Failed to fetch the data: ${e}`,
    });
  }
}
export async function getProperty(req, res) {
  try {
    const prop = await new property(req.params.id).fetch();
    res.status(200).json(prop);
  } catch (error) {
    res.status(404).send({
      success: false,
      error: `Record not found with id:${req.params.id} ${error}`,
    });
  }
}

//////////////////////////////////////////////////////////

export async function getOrderTypeProperties(req, res) {
  try {
    const joins = await new orderType_property().fetchAll({
      withRelated: ["orderType", "property"],
    });
    res.status(200).json(joins);
  } catch (e) {
    res.status(404).send({
      success: false,
      error: `Failed to fetch the data: ${e}`,
    });
  }
}

////////////////////////////////////////////////////////////

export async function getOrder(req, res) {
  try {
    const ord = await new order(req.params.id).fetch({
      withRelated: ["orderName", "orderType"],
    });
    res.status(200).json(ord);
  } catch (error) {
    res.status(404).send({
      success: false,
      error: `Record not found with id:${req.params.id} ${error}`,
    });
  }
}

export async function getOrders(req, res) {
  try {
    const orders = await new order().fetchAll({
      withRelated: ["orderName", "orderType", "orderType.property"],
    });
    res.status(200).json(orders);
  } catch (e) {
    res.status(404).send({
      success: false,
      error: `Failed to fetch the data: ${e}`,
    });
  }
}
