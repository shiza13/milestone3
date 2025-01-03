export default function handler(req, res) {
    if (req.method === 'POST') {
      const product = req.body;
  
      // Simulate adding the product to the cart
      console.log('Product added to cart:', product);
  
      res.status(200).json({ message: 'Product added to cart!' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  