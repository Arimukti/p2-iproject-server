## Endpoints

List of Available Endpoints of user:
-`POST /admin/register`
-`POST /admin/login`
-`GET /admin/product`
-`POST /admin/product`
- `DELETE /admin/product/:id`

List of Available Endpoints of customer:
-`GET /customer/product`
-`POST /customer/register`
-`POST /customer/login`
-`GET /customer/cart`
-`GET /customer/detail/:id`
-`POST /customer/cart/:id`
-`PATCH /customer/cart/:id`
-`DELETE /customer/cart/:id`

List of Available Endpoints of api3rdParty
-`GET /api3rdParty/youtube`
-`POST /api3rdParty/xendit`

### POST /admin/register
### Description
- Register untuk user sebagai admin

### Request
- body
    ```json
    {
        name: string,
        email: string,
        password: string
    }
    ```
### Response
_201 - Created_
- Body 
    ```json
    {
        id: integer,
        email: string
    }
    ```

### POST /admin/login
### Description
- Login untuk admin

### Request
- body
    ```json
    {
        email: string,
        password: string
    }
    ```

### Response
_200 - Ok_
- Body 
    ```json
    {
        access_token: <access_token>
    }
    ```
### GET /admin/product
### Description
- Melihat semua product yang ada

### Request
- 

### Response
_200 - Ok_
- Body 
    ```json
        "allProduct": [
                {
                    id: integer,
                    name: string,
                    description: string,
                    price: integer,
                    imgUrl: string,
                    stock: integer
                }
            ]
    ```

### POST /admin/product
### Description
- Menambahkan produk baru

### Request
- Body
    ```json
        {
            name: string,
            description: string,
            price: integer,
            imgUrl: string,
            stock: integer
        }
    ```
### Response
_201 - Created_
- Body
    ```json
        {
            name: string,
            description: string,
            price: integer,
            imgUrl: string,
            stock: integer
        }
    ```
### DELETE /admin/product/:id
### Description
- Menghapus produk berdasarkan id

### Request
- Params
    ```json
    {
        id: integer
    }
    ```
- Headers
    ```json
        {
            access_token: string
        }
    ```
### Response
- Body
```json
    {
        "msg": "Success delete product with id 2"
    }
```
### GET /customer/product
### Description
- Menampilkan semua produk oleh customer

### Request
-
### Response
_200 - Ok_
- Body 
    ```json
        "allProduct": [
                {
                    id: integer,
                    name: string,
                    description: string,
                    price: integer,
                    imgUrl: string,
                    stock: integer
                }
            ]
    ```
### POST /customer/register
### Description
- Menambahkan customer baru

### Request
- Body
    ```json
        {
            name: string,
            username: string,
            email: string,
            password: string,
            phoneNumber: string,
            address: string
        }
    ```
### Response
_201 - Created_
- Body
    ```json
    {
        id: integer,
        email: string
    }
    ```
### POST /customer/login
### Description
- login untuk customer

### Request
- Body
    ```json
        {
            email: string,
            password: string,
        }
    ```
### Response
_200 - Ok_
- Body 
    ```json
        {
            access_token: <access_token>
        }
    ```
### GET /customer/cart
### Description
- Menampilkan semua daftar product yang ada di cart/ keranjang

### Request
- - Headers
    ```json
        {
            access_token: string
        }
    ```

### Response
_200 - Ok_
- Body
    ```json
        [
            {
                id: integer,
                name: string,
                imgUrl: string
                qty: integer,
                paidPrice: integer
            }
        ]
    ```
### GET /customer/detail/:id
### Description
- Menampilkan detaill product berdasarkan id

### Request
- Headers
    ```json
        {
            access_token: <access_token>
        }
    ```
- Params
    ```json
        {
            id: integer
        }
    ```
### Response
_200 - Ok_
- Body
    ```json
        {
            id: integer,
            name: string
            description: string
            price: integer,
            imgUrl: string
            stock: integer
        }
    ```

### POST /customer/cart/:id
### Description
- Menambahkan produk ke dalam keranjang berdasarkan id

### Request
- Headers
    ```json
        {
            access_token: <access_token>
        }
    ```
- Params
    ```json
        {
            id: integer
        }
    ```
- Body
    ```json
        {
            qty: integer
        }
    ```
### Response
_201 - Created_
- Body
    ```json
        {
            name: string
            imgUrl: string
            qty: integer,
            paidPrice: integer
        }
    ```

### PATCH /customer/cart/:id
### Description
- Customer membeli produk berdasarkan id yang mana stok dalam database akan terupdate

### Request
- Headers
    ```json
        {
            access_token: <access_token>
        }
    ```
- Params
    ```json
        {
            id: integer
        }
    ```
- Body
    ```json
        {
            qty: integer
        }
    ```
### Response
_200 - OK_
- Body
    ```json
        {
            name: string,
            qty: integer,
            paidPrice: integer,
            invoice: { object }
        }
    ```

### DELETE /customer/cart/:id
### Description
- Menghapus produk dari keranjang

### Request
- Headers
    ```json
        {
            access_token: <access_token>
        }
    ```
- Params
    ```json
        {
            id: integer
        }
    ```
### Response
_200 - OK_
- Body
    ```json
        {
            "message": "success to delete Madu hutan baduy from book cart"
        }
    ```

### GET /api3rdParty/youtube
### Description
- Mendapatkan url youtube berdasarkan query / kata kunci pencarian

### Request
- query
    ```json
    {
        query: string (kata kunci pencarian video)
    }
    ```
### Response
_200 - Ok_
- Body
    ```json
    {
        "https://www.youtube.com/embed/6G4ceZ2OgiE?controls=0"
    }
    ```

### POST /api3rdParty/xendit
### Description
- Membuat invoice dari xendit

### Request
-

### Response
_200 - Ok_
- Body
    ```json
    {
        object invoice yang didapat dari xendit
    }
    ```








