/* eslint-disable require-jsdoc */
const poolPromise = require('../config/poolPromise');

const readAllProucts= async (params)=> {
  let query='';
  const {orderby, orderform}= params;
  if (orderby==='price'&&orderform==='asc') {
    query='EXEC productspriceascending';
  } else if (orderby==='price'&&orderform==='desc') {
    query='EXEC productspricedescending';
  } else if (orderby==='name'&&orderform==='asc') {
    query='EXEC productsnameascending';
  } else if (orderby==='name'&&orderform==='desc') {
    query='EXEC productsnamedescending';
  } else {
    return {
      success: false,
      error: 'Error on url parameters',
    };
  }
  const pool = await poolPromise();
  const data = pool.query(query).then((result)=>{
    return {
      success: true,
      data: result.recordset,
    };
  })
      .catch((err)=>{
        return {
          success: false,
          error: err.message,
        };
      });
  return (data);
};

const readProductsPaginated= async (params)=> {
  let query='';
  const {orderby, orderform, page, limit}= params;
  if (limit&&page) {
    if (orderby==='price'&&orderform==='asc') {
      query=`EXEC pgproductspriceascending ${page}, ${limit}`;
    } else if (orderby==='price'&&orderform==='desc') {
      query=`EXEC pgproductspricedescending ${page}, ${limit}`;
    } else if (orderby==='name'&&orderform==='asc') {
      query=`EXEC pgproductsnamedescending ${page}, ${limit}`;
    } else if (orderby==='name'&&orderform==='desc') {
      query=`EXEC pgproductsnamedescending ${page}, ${limit}`;
    } else {
      return {
        success: false,
        error: 'Error on url parameters',
      };
    }
  } else {
    return {
      success: false,
      error: 'Error on limit and page parameters',
    };
  }
  const pool = await poolPromise();
  const data = pool.query(query).then((result)=>{
    return {
      success: true,
      data: result.recordset,
    };
  })
      .catch((err)=>{
        return {
          success: false,
          error: err.message,
        };
      });
  return (data);
};


const readAllProuctsByCategory= async (params)=> {
  let query='';
  const {category, orderby, orderform}= params;
  if (orderby==='price'&&orderform==='asc') {
    query=`EXEC catproductspriceascending ${category}`;
  } else if (orderby==='price'&&orderform==='desc') {
    query=`EXEC catproductspricedescending ${category}`;
  } else if (orderby==='name'&&orderform==='asc') {
    query=`EXEC catproductsnameascending ${category}`;
  } else if (orderby==='name'&&orderform==='desc') {
    query=`EXEC catproductsnamedescending ${category}`;
  } else {
    return {
      success: false,
      error: 'Error on url parameters',
    };
  }
  const pool = await poolPromise();
  const data = pool.query(query).then((result)=>{
    return {
      success: true,
      data: result.recordset,
    };
  })
      .catch((err)=>{
        return {
          success: false,
          error: err.message,
        };
      });
  return (data);
};

const readProuctsByCategoryPaginated= async (params)=> {
  let query='';
  const {category, page, orderby, orderform, limit}= params;
  if (orderby==='price'&&orderform==='asc') {
    query=`EXEC pagcatproductspriceascending ${category}, ${page}, ${limit}`;
  } else if (orderby==='price'&&orderform==='desc') {
    query=`EXEC pagcatproductspricedescending ${category}, ${page}, ${limit}`;
  } else if (orderby==='name'&&orderform==='asc') {
    query=`EXEC pagcatproductsnameascending ${category}, ${page}, ${limit}`;
  } else if (orderby==='name'&&orderform==='desc') {
    query=`EXEC pagcatproductsnamedescending ${category}, ${page}, ${limit}`;
  } else {
    return {
      success: false,
      error: 'Error on url parameters',
    };
  }
  const pool = await poolPromise();
  const data = pool.query(query).then((result)=>{
    return {
      success: true,
      data: result.recordset,
    };
  })
      .catch((err)=>{
        return {
          success: false,
          error: err.message,
        };
      });
  return (data);
};

const readProuctById = async (params) =>{
  const {id} = params;
  const query=`EXEC productbyid ${id}`;
  const pool = await poolPromise();
  const data = pool.query(query).then((result)=>{
    return {
      success: true,
      data: result.recordset,
    };
  })
      .catch((err)=>{
        return {
          success: false,
          error: err.message,
        };
      });
  return (data);
};

const updateProduct = async (reqparams, reqbody) =>{
  const {id} = reqparams;
  const {name, price, image, description, category} = reqbody;
  const query=`EXEC updateproduct ${id}, 
  '${name}', ${price}, '${image}','${description}','${category}'`;
  const pool = await poolPromise();
  const data = pool.query(query).then((result)=>{
    return {
      success: true,
      data: result.recordset,
    };
  })
      .catch((err)=>{
        return {
          success: false,
          error: err.message,
        };
      });
  return (data);
};

const clearProduct = async (params) =>{
  const {id} = params;
  const query=`EXEC clearproduct ${id}`;
  const pool = await poolPromise();
  const data = pool.query(query).then((result)=>{
    return {
      success: true,
      data: result.recordset,
    };
  })
      .catch((err)=>{
        return {
          success: false,
          error: err.message,
        };
      });
  return (data);
};

const createProduct = async (params) =>{
  const {name, price, image, description, category} = params;
  const query=`EXEC createproduct
  '${name}', ${price}, '${image}','${description}','${category}'`;
  const pool = await poolPromise();
  const data = pool.query(query).then((result)=>{
    return {
      success: true,
      data: result.recordset,
    };
  })
      .catch((err)=>{
        return {
          success: false,
          error: err.message,
        };
      });
  return (data);
};
const searchproduct = async (params) =>{
  const {param} = params;
  const query=`EXEC searchroduct ${param}`;
  const pool = await poolPromise();
  const data = pool.query(query).then((result)=>{
    return {
      success: true,
      data: result.recordset,
    };
  })
      .catch((err)=>{
        return {
          success: false,
          error: err.message,
        };
      });
  return (data);
};


module.exports={readAllProucts,
  readProductsPaginated,
  readAllProuctsByCategory,
  readProuctsByCategoryPaginated,
  readProuctById,
  updateProduct,
  clearProduct,
  createProduct,
  searchproduct};
