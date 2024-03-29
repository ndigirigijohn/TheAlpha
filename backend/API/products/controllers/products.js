const {readAllProucts,
  readProductsPaginated,
  readAllProuctsByCategory,
  readProuctsByCategoryPaginated,
  readProuctById,
  updateProduct,
  clearProduct,
  createProduct,
  searchproduct} = require('../operations/products');

module.exports = {
  getProducts: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await readAllProucts(req.params);
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
  getProductsPaginated: async (req, res) =>{
  // verify params and body schema and continue to operations
    const response=await readProductsPaginated(req.params);
    if (response.success) {
      if (response.data.length===0) {
        res.status(502).send({
          success: false,
          status: 502,
          message: 'Database operation error',
          error: 'page does not exist',
        });
        return;
      }
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
  getProductsByCategory: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await readAllProuctsByCategory(req.params);
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
  getProductsByCategoryPaginated: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await readProuctsByCategoryPaginated(req.params);
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
  getProductById: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await readProuctById(req.params);
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
  postProduct: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await createProduct(req.body);
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
  patchProduct: async (req, res) =>{
    const reqparams = req.params;
    const reqbody= req.body;
    // verify params and body schema and continue to operations
    const response=await updateProduct(reqparams, reqbody);
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
  deleteProduct: async (req, res) =>{
    const response=await clearProduct(req.params);
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'product delete successful',
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
  searchProduct: async (req, res) =>{
    const response=await searchproduct(req.params);
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'product delete successful',
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


