const {readItems,
  createitem,
  getitem,
  getitemuid,
  updateitem,
  clearitem,
} = require('../operations/items');

module.exports = {
  getItems: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await readItems();
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        products: response.data,
      });
      return;
    }
    res.status(502).send({
      success: false,
      status: 502,
      message: 'Database operation error',
      error: response.error,
    });
  },
  getItem: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await getitem(req.params);
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        products: response.data,
      });
      return;
    }
    res.status(502).send({
      success: false,
      status: 502,
      message: 'Database operation error',
      error: response.error,
    });
  },

  getItemsUid: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await getitemuid(req.params);
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        products: response.data,
      });
      return;
    }
    res.status(502).send({
      success: false,
      status: 502,
      message: 'Database operation error',
      error: response.error,
    });
  },

  updateItem: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await updateitem(req.params, req.body);
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        products: response.data,
      });
      return;
    }
    res.status(502).send({
      success: false,
      status: 502,
      message: 'Database operation error',
      error: response.error,
    });
  },

  clearItem: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await clearitem(req.params);
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        products: response.data,
      });
      return;
    }
    res.status(502).send({
      success: false,
      status: 502,
      message: 'Database operation error',
      error: response.error,
    });
  },

  createItem: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await createitem(req.body);
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        products: response.data,
      });
      return;
    }
    res.status(502).send({
      success: false,
      status: 502,
      message: 'Database operation error',
      error: response.error,
    });
  },


};
