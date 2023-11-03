// product.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
    {
      id: 1,
      name: 'Men\'s Slim Fit Suit',
      description: 'Elegant black suit for special occasions and formal events Elegant black suit for special occasions and formal events Elegant black suit for special occasions and formal events Elegant black suit for special occasions and formal events Elegant black suit for special occasions and formal events Elegant black suit for special occasions and formal events',
      price: 199.99,
      sizes: ['S', 'M'],
      mainImageUrl: ['https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1Q11QY3-HnHbzkYuWFFVkzMUr1LgdfqHEuh73q8VyI42x1J1voC_vXxjJFc1kkow7kOo1nOmrTXVb8t-Smj_NS8EsbXgdePayA7t8AQhR18KyS_90Wl8gTr5p-M7r7r83tKJr&usqp=CAc'],
      imageUrls: ['https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1Q11QY3-HnHbzkYuWFFVkzMUr1LgdfqHEuh73q8VyI42x1J1voC_vXxjJFc1kkow7kOo1nOmrTXVb8t-Smj_NS8EsbXgdePayA7t8AQhR18KyS_90Wl8gTr5p-M7r7r83tKJr&usqp=CAc', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS93Y55ogCefED3GzAWTGwYYV1w4-fb_elgAQTwbdl61brW9bKrGKP27z7ri9LGy7SF-8kEcgfNr3ihUBRg4WVvHMes1H0mcEwu2-I91A4IAjMPkIEdWl5wMA&usqp=CAc' , 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS93Y55ogCefED3GzAWTGwYYV1w4-fb_elgAQTwbdl61brW9bKrGKP27z7ri9LGy7SF-8kEcgfNr3ihUBRg4WVvHMes1H0mcEwu2-I91A4IAjMPkIEdWl5wMA&usqp=CAc'],
      category: 'Kurta',
    },
    {
      id: 2,
      name: 'Women\'s Floral Print Dress',
      description: 'Stylish knee-length dress with a floral pattern',
      price: 79.99,
      sizes: ['S', 'L', 'XL'],
      mainImageUrl: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY__QMkxejDqjzBuoEmNv2PHCr5S36p8iYzLGbLhQs&s'],
      imageUrls: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY__QMkxejDqjzBuoEmNv2PHCr5S36p8iYzLGbLhQs&s'],
      category: 'jumpsuit',
    },
    {
      id: 3,
      name: 'Leather Ankle Boots',
      description: 'Handcrafted brown leather boots for a rugged look',
      price: 149.99,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      imageUrls: ['https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRv2NQjSvuR-y5wfMVLkC32eRcR-igk5Ay4GWA0QXWWNcGAXPXPZwq9xk77UpMJEas0dCUIRnS1v6kPsAg8-S6zAv9dYKh93HIFVADeiufwecH12bbTciWt', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShagRLDN2L61KSpjQrvyPViPU7zNhKdqkt4T_Gkh8x&s'],
      category: 'saree',
    },
    {
      id: 4,
      name: 'Designer Sunglasses',
      description: 'Trendy round sunglasses with UV protection',
      price: 49.99,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],

    },
    {
      id: 5,
      name: 'Women\'s High Heels',
      description: 'Classic high heel shoes for a night out',
      price: 69.99,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],

    },
    {
      id: 6,
      name: 'Men\'s Denim Jacket',
      description: 'Casual denim jacket with a vintage wash',
      price: 89.99,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],

    },
    {
      id: 7,
      name: 'Handbag with Chain Strap',
      description: 'Chic handbag with a chain strap for a trendy look',
      price: 59.99,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],

    },
    {
      id: 8,
      name: 'Designer Wristwatch',
      description: 'Luxury wristwatch with a stainless steel band',
      price: 299.99,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],

    },
    {
      id: 9,
      name: 'Cashmere Scarf',
      description: 'Soft and warm cashmere scarf for cold weather',
      price: 39.99,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],

    },
    {
      id: 10,
      name: 'Men\'s Dress Shoes',
      description: 'Classic black leather dress shoes for formal occasions',
      price: 129.99,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],

    },
    // {
    //   id: 11,
    //   name: 'Leather Belt',
    //   description: 'Genuine leather belt with a stylish buckle',
    //   price: 24.99,
    // },
    // {
    //   id: 12,
    //   name: 'Women\'s Leather Jacket',
    //   description: 'Fitted leather jacket for a bold fashion statement',
    //   price: 179.99,
    // },
    // {
    //   id: 13,
    //   name: 'Silk Necktie',
    //   description: 'Elegant silk necktie with a subtle pattern',
    //   price: 34.99,
    // },
    // {
    //   id: 14,
    //   name: 'Designer Tote Bag',
    //   description: 'Fashionable tote bag with a spacious interior',
    //   price: 74.99,
    // },
    // {
    //   id: 15,
    //   name: 'Knit Beanie Hat',
    //   description: 'Cozy knit beanie hat for a stylish winter look',
    //   price: 19.99,
    // },
    // {
    //   id: 16,
    //   name: 'Women\'s Faux Fur Coat',
    //   description: 'Faux fur coat with a plush texture for a glamorous appearance',
    //   price: 159.99,
    // },
    // {
    //   id: 17,
    //   name: 'Men\'s Fedora Hat',
    //   description: 'Classic fedora hat for a touch of sophistication',
    //   price: 44.99,
    // },
    // {
    //   id: 18,
    //   name: 'Leather Gloves',
    //   description: 'Genuine leather gloves for warmth and style',
    //   price: 29.99,
    // },
    // {
    //   id: 19,
    //   name: 'Women\'s Suede Boots',
    //   description: 'Suede boots with a comfortable fit for everyday wear',
    //   price: 119.99,
    // },
    // {
    //   id: 20,
    //   name: 'Straw Sun Hat',
    //   description: 'Straw sun hat with a wide brim for sun protection',
    //   price: 29.99,
    // },
    // Add more fashion products here
  ];

  getProducts() {
    return this.products;
  }
}
