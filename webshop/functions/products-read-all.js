/* code from functions/products-read-all.js */
import faunadb from 'faunadb'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
})

exports.handler = (event, context) => {
  console.log("Function `product-read-all` invoked")
  return client.query(q.Paginate(q.Match(q.Ref("indexes/all_products"))))
  .then((response) => {
    const productRefs = response.data
    console.log("Product refs", productRefs)
    console.log(`${productRefs.length} products found`)
    // create new query out of product refs. http://bit.ly/2LG3MLg
    const getAllProductDataQuery = productRefs.map((ref) => {
      return q.Get(ref)
    })
    // then query the refs
    return client.query(getAllProductDataQuery).then((ret) => {
      return {
        statusCode: 200,
        body: JSON.stringify(ret)
      }
    })
  }).catch((error) => {
    console.log("error", error)
    return {
      statusCode: 400,
      body: JSON.stringify(error)
    }
  })
};