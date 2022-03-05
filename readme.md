## MERN eCommerce From Scratch

### Section 2 : Starting The Front End | 4. React Setup

    Documentation : https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
    setup project : npx create-react-app frontend
    selanjutnya pada terminal : cd frontend kemudian jalankan server npm start
    pada browser : http://localhost:3000/

### Section 2 : Starting The Front End | Welcome to proshop

    pengujian pada pada browser : http://localhost:3000/

### Section 2 : Starting The Front End | 5. React-Bootstrap Setup, Header & Footer Components

    React-Bootstrap v4*
    Documentation : https://react-bootstrap-v4.netlify.app/getting-started/introduction

    Template Bootstrap
    https://bootswatch.com/
    klik downloada pada salah satu tempalte => bootstrap.min.css
    lalu pastekan pada directory dan pangil pada index.js:
        import './bootstrap.min.css'
    note : agar sama dengan video tutorial copy bootstrap.min.js nya di link berikut,
    https://github.com/bradtraversy/proshop_mern/blob/master/frontend/src/bootstrap.min.css

    CDNjs Font-awesome :
    https://cdnjs.com/libraries/font-awesome/5.14.0

    install react-bootstrap: npm i react-bootstrap

    pengujian pada pada browser : http://localhost:3000/

### Section 2 : Starting The Front End | 6. HomeScreen Product Listing

    tambahkan folder image kedalam folder public/images
    tambahkan file products.js kedalam folder src/products.js

    pengujian pada pada browser : http://localhost:3000/

### Section 2 : Starting The Front End | 7. Rating Component

    pengujian pada pada browser : http://localhost:3000/

### Section 2 : Starting The Front End | 8. Note on React Router

    React Router v6 has been released and has some breaking changes. You have 2 options. You can install the latest and make the changes. I have a video link below that shows you the updates OR you can install version 5 like this...

    npm i react-router-dom@5.3.0

    Link to v6 update video:

    https://www.youtube.com/watch?v=k2Zk5cbiZhg&t=1s

### Section 2 : Starting The Front End | 9. Implementing React Router

    install package:
        npm i react-router-dom@5.3.0

    Documentation: https://www.npmjs.com/package/react-router-bootstrap
    For React Router v4 or v5 (see rr-v4 branch):
        npm install -S react-router-bootstrap@rr-v4

    pengujian pada pada browser : http://localhost:3000/
    coba untuk mengklik menu pada navbar dan salah satuitem product, jika tidak terjadi error
    maka set-up yang kita lakukan berhasil

### Section 2 : Starting The Front End | 10. Product Detail Screen

    pengujian pada pada browser : http://localhost:3000/
    coba untuk mengklik menu pada navbar dan salah satuitem product, jika berhasil akan di redirect
    ke halaman detail product yng dipilih.

### Section 3 : Serving & Fetching Data From Expres| 11. Front End / Back End Workflow & Explaination

    Front End => react => Chrome
    Backend => Node ,Express
    DB => Mongodb, mongoose

    GET /api/products
    POST /api/products
    PUT /api/products/25
    DELETE /api/products/25

### Section 3 : Serving & Fetching Data From Expres| 12. Serving Product -Back End

    install package pada root directory bukan pada backend atau frontend folder!
        npm init
        npm install express

    jalankan server pada terminal ke 2 : node backend/server.js atau npm start
    pengujian pada browser:
        http://localhost:5000/
        All products : http://localhost:5000/api/products
        single product : http://localhost:5000/api/products/2

### Section 3 : Serving & Fetching Data From Expres| 13. Fetching products From React (useEffect)

    Install axios
    cd frontend : npm i axios
    jalankan server : npm start

    pengujian pada browser:
        http://localhost:5000/
        All products : http://localhost:5000/api/products
        single product (klik salah satu product pada All products) : http://localhost:5000/api/products/2
    note: pastikan kedua server pada terminal berjalan bersamaan!

### Section 3 : Serving & Fetching Data From Expres| 14. Nodemon & Concurrently Setup

    install nodemon & Component pada root directory bukan pada backend atau frontend folder!
        npm i -D nodemon concurrently
        jalankan server : npm run dev

    pengujian pada browser:
        http://localhost:5000/
        All products : http://localhost:5000/api/products
        single product (klik salah satu product pada All products) : http://localhost:5000/api/products/2

    note: kerennya kita hanya menjalankan server pada root directory saja kedua server bisa berjalan berbarengan :)

### Section 3 : Serving & Fetching Data From Expres| 15. Environment Variables

    install Dotenv pada root directory bukan pada backend atau frontend folder!
        npm i dotenv

        buat file .env pada directory root
            pada file .env :
            NODE_ENV=development
            PORT=5000

    pengujian pada browser:
        http://localhost:3000/
        single product (klik salah satu product pada All products) : http://localhost:3000/product/1

### Section 3 : Serving & Fetching Data From Expres| 16. ES modules in Node.js

    Documentation : https://nodejs.org/dist/latest-v16.x/docs/api/packages.html#type
    pengujian pada browser:
        http://localhost:3000/
        single product (klik salah satu product pada All products) : http://localhost:3000/product/1

### Section 4 : Getting Started With MongoDB | 17. MongoDB Atlas & Compass Setup

    Download mongoDB Compass, lalu buka mongoDB Compass

    pada browser buka mongoDB Cloud:
    Create :
        database : proshop
        collections : products

    kembali ke clauster,
    klik connect lalu pilih connect using mongoDB Compass
    pilih I have mongoDB Compass,
    lalu copy connecting string :
        mongodb+srv://ujang123:<password>@ujangarisandi.poe2b.mongodb.net/test
    pastekan pada mongoDB compass di laptop kita,

    jangan lupa ganti password-nya :
        mongodb+srv://ujang123:admin0k8@ujangarisandi.poe2b.mongodb.net/test

    Connect to aplikasi:
    pada browser buka mongoDB Cloud
    klik connect kembali
    kemudian pilih Connect your application
    coppy connection string:
    mongodb+srv://ujang123:<password>@ujangarisandi.poe2b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    buka file .env kemudian tambahkan source berikut:
    MONGO_URI=mongodb+srv://ujang123:admin0k8@ujangarisandi.poe2b.mongodb.net/proshop?retryWrites=true&w=majority

### Section 4 : Getting Started With MongoDB | 18. Connect To The Database

    Documentation : https://mongoosejs.com/docs/5.x/docs/guide.html
    install mongoose : npm i mongoose

    pada terminal jalankan kembali dengan : npm run server
    kamudian jika berhasil akan ada log MongoDb connection

### Section 4 : Getting Started With MongoDB | 19. Adding Colors To The Console (Optional)

    Documentation : https://www.npmjs.com/package/colors
    install colors : npm i colors

    pada terminal jalankan kembali dengan : npm run server
    kamudian jika berhasil log terminal akan berwarna sesuai settingan kita.

### Section 4 : Getting Started With MongoDB | 20. Modeling Our Data

    membuat schema database userModel, productModel, dan orderModel

### Section 4 : Getting Started With MongoDB | 21. Preparing Sample Data

    install bcryptjs : npm i bcryptjs

### Section 4 : Getting Started With MongoDB | 22. Data Seeder Script

    Seeder data users dan products

    untuk menjalankan import:
    pada terminal ketikan : npm run data:import
    jika berhasil akan ada tulisan pada terminal Data Imported!

    untuk menjalankan destroy:
    pada terminal ketikan : npm run data:destroy
    jika berhasil akan ada tulisan pada terminal Data Destroyed!

### Section 4 : Getting Started With MongoDB | 23. Fetching Products From The Database

    Documentation : https://www.npmjs.com/package/express-async-handler

        npm i express-async-handler

    pengujian pada browser :
    All products => http://localhost:5000/api/products
    Single products => http://localhost:5000/api/products/<id product>

### Section 4 : Getting Started With MongoDB | 24. Getting Started With Postman

    Buka Postman, kemudian Setup environment pada postman:
    klik gambar mata pojok paling kananan pada postman isi :
    VARIABLE : URL
    INITIAL VALUE : http://localhost:5000
    CURRENT VALUE : http://localhost:5000

    jika sudah diseting seperti diatas ,buat collectioin baru dengan nama ProShop pada Postman
    ┌──────────────────────────────────────────────────────────────────────────────┐
    │ Proshop                                                                      │
    │         --->products                                                         │
    │         --->GET All Product     {{URL}}/api/products                         │
    │         --->GET Single Product  {{URL}}/api/products/<ID PRODUCT>            │
    └──────────────────────────────────────────────────────────────────────────────┘

### Section 4 : Getting Started With MongoDB | 25. Custom Error Handling

    pengujian pada postman :
        GET All Product => {{URL}}/api/products
        GET Single Product => {{URL}}/api/products/<ID PRODUCT>// salahkan belakan dari id product (error 404)

    pengujian pada browser:
        http://localhost:3000/
        single product (klik salah satu product pada All products) : http://localhost:3000/product/1

### Section 5 : Implementing Redux For State Management| 26. An Overview of Redux

    Documentation : https://redux.js.org/understanding/thinking-in-redux/glossary

### Section 5 : Implementing Redux For State Management| 27. Create a Redux Store

    pada browser pasang extention : Redux DevTools - Next
                                    Offered by: Methuselah96

    install Redux
        cd frontend
        npm i redux react-redux redux-thunk redux-devtools-extension

    jalan kan server pada route directory: npm run dev

    pengujian pada browser:
        http://localhost:3000/
        single product (klik salah satu product pada All products) : http://localhost:3000/product/1

### Section 5 : Implementing Redux For State Management| 28. Product List Reducer & Action

    pengujian pada browser:
        http://localhost:3000/
        single product (klik salah satu product pada All products) : http://localhost:3000/product/1

### Section 5 : Implementing Redux For State Management| 29. Bringing Redux State into HomeScreen - useDispatch & useSelector

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/
        single product (klik salah satu product pada All products) : http://localhost:3000/product/1

    jika diperhatikan akan ada loading sesaat sebelum data tampil.

### Section 5 : Implementing Redux For State Management| 30. Message & Loader Components

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser
        single product (klik salah satu product pada All products) : http://localhost:3000/product/<ID PRODUCT YANG DIPILIH>

    jika diperhatikan akan ada loading sesaat sebelum data tampil.

### Section 5 : Implementing Redux For State Management| 31. Product Deatils Reducer & Action

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser
        single product (klik salah satu product pada All products) : http://localhost:3000/product/<ID PRODUCT YANG DIPILIH>

    jika diperhatikan akan ada loading sesaat sebelum data tampil.

### Section 6 : Adding The Shopping cart | 32. Qty Select & Add To Cart Button

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser
        single product (klik salah satu product pada All products) : http://localhost:3000/product/<ID PRODUCT YANG DIPILIH>

        kemudian pilih quantitynya, lalu klik add to cart, jika diredirect ke halaman kosong dan
        pada link browser seperti berikut : http://localhost:3000/cart/6211b8d9f484c484d2ed08ff?qty=0
        berarti setup yang kita lakukan berhasil.

### Section 6 : Adding The Shopping cart | 33. Cart Reducer & Add To Cart

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser
        single product (klik salah satu product pada All products) : http://localhost:3000/product/<ID PRODUCT YANG DIPILIH>

        kemudian pilih quantitynya, lalu klik add to cart, jika diredirect ke halaman kosong dan
        coba klik kanan pada browser, inspek element, lalu pilih redux guna cart => cartItmes []
        jika ada cart item [] pada state berarti setup yang kita lakukan berhasil

### Section 6 : Adding The Shopping cart | 34. Add To Cart Functionality

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser
        single product (klik salah satu product pada All products) : http://localhost:3000/product/<ID PRODUCT YANG DIPILIH>

        kemudian pilih quantitynya, lalu klik add to cart, jika diredirect ke halaman kosong dan
        coba klik kanan pada browser, inspek element, lalu pilih console, jika ada array product yang kita add
        pada console berarti setup yang kita lakukan berhasil

### Section 6 : Adding The Shopping cart | 35. Cart Screen

     jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser
        klik icon cart : http://localhost:3000/cart
    kemudian inspek , lalu pilih aplikasi  hapus yang ada pada loca lStorage
    maka alert cart empty akan tampil.

    kemudian coba lakukan add cart,
    lalu klik navbar icon cart, akan di redirect ke halaman cart
    jika berhasil ada beberapa product yang kita add,
    selanjutnya coba klik proceed to chekout,
    jika di redirect kelaman kosong , setup yang kita lakukan berhasilk.

### Section 6 : Adding The Shopping cart | 36. Remove Items From Cart

     jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser
        klik icon cart : http://localhost:3000/cart
    kemudian inspek , lalu pilih aplikasi  hapus yang ada pada loca lStorage
    maka alert cart empty akan tampil.

    kemudian coba lakukan add cart,
    lalu klik navbar icon cart, akan di redirect ke halaman cart
    jika berhasil ada beberapa product yang kita add,
    coba klik icon trash jika item terhapus maka setup yang kita lakukan berhasil.

    Note: jika coba di refresh halaman browser setelah dihapus dan muncul product yang dihapus,
    coba sehabis dihapus kehalanan root, trus masuk lagi ke halaman cart, pasti yang terhapus tidak lagi muncul.

### Section 7 : Back End User Authentication | 37. Clean Up By Using Controllers

    pengujian bisa dilakukan melalui brwoser atau postman.
    saya menggunakan browser :
     jalan kan server pada route directory: npm run dev
      kemudian : http://127.0.0.1:5000/api/products
      kemudian : http://127.0.0.1:5000/api/products/<id product>
      jika data produtc muncul setup yang kita lakukan berhasil

### Section 7 : Back End User Authentication | 38. User Authentication Endpoint

    pengujian pada postman : POST {{URL}}/api/users/login
    input => body => raw => json : //data dibawah sama dengan data pada data/users.js
        {
            "email": "john@example.com",
            "password": "123456"
        }
    response: sama dengan data

    akan muncul pesan error jika email dan password tidak match dengan database.
    silahkan dicoba login dengan data yang salah!

### Section 7 : Back End User Authentication | 39. Brift Explaination of JWT (JSON Web Tokens)

    JWT Documentation : https://jwt.io/
                        https://github.com/auth0/node-jsonwebtoken
    setup postman : Get all user =>  GET {{URL}}/api/products
    Authorization => pilih Bearer => Token: {{accessToken}}

### Section 7 : Back End User Authentication | 40. Generate a JWT (JSON Web Tokens)

    JWT Documentation : https://www.npmjs.com/package/jsonwebtoken
    install JWT : npm i jsonwebtoken

    pada file .env tambahkan source : JWT_SECRET=abc123

    pengujian pada postman : POST {{URL}}/api/users/login
    input => body => raw => json : //data dibawah sama dengan data pada data/users.js
        {
            "email": "john@example.com",
            "password": "123456"
        }
    response: sama dengan data dan akan muncul token dengan isinya:
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTFiOGQ5ZjQ4NGM0ODRkMmVkMDhmYiIsImlhdCI6MTY0NTcxMDI4MCwiZXhwIjoxNjQ4MzAyMjgwfQ.GvDqFfy0xJJbgqY_yM2ieRJPKjDZxUYDfX2u-fREbi0"

### Section 7 : Back End User Authentication | 41. Custom Authentication

    pengujian pada postman : POST {{URL}}/api/users/login
    input => body => raw => json : //data dibawah sama dengan data pada data/users.js
        {
            "email": "john@example.com",
            "password": "123456"
        }
    response: sama dengan data dan akan muncul token kemudian kopi token dan pastekan pada
    User Profile {{URL}}/api/users/profile:
    pada headers :
        Key: Authorization
        Value : Bearer <token yang login>

    kemudian coba request data, jika menampilkan data yang login
    berarti setup yang kita lakukan berhasil.

    pengujian juga bisa dilakukan dengan menghapus beberapa hurup pada token dan liat pesannya yang muncul.

### Section 7 : Back End User Authentication | 42. Saving The Token In Postman

    pada postman => test : pm.environment.set("TOKEN", pm.response.json().token)

    note: pada environment pilih ProShop

    pengujian pada postman setelah di seting:
    User Login : POST {{URL}}/api/users/login
    input => body => raw => json : //data dibawah sama dengan data pada data/users.js
        {
            "email": "john@example.com",
            "password": "123456"
        }
    response: sama dengan data dan akan muncul token kemudian kopi token dan pastekan pada :

    User Profile {{URL}}/api/users/profile:
    masuk ke Authorization kemuian pilih Beare Token : {{TOKEN}} // variable ini sama dengan yang ada pada tests

### Section 7 : Back End User Authentication | 43. User Registration & Password Encryption

    pengujian pada postman setelah di seting:
    User Register : POST {{URL}}/api/users
    input => body => raw => json :
        {
            "name": "Steve Smith",
            "email": "steve@example.com",
            "password": "123456"
        }

    jika setup yang kita lakukan berhasil maka ,

    response : 201
        {
            "_id": "6219587ef895a7ed01e8fe15",
            "name": "Steve Smith",
            "email": "steve@example.com",
            "isAdmin": false,
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTk1ODdlZjg5NWE3ZWQwMWU4ZmUxNSIsImlhdCI6MTY0NTgyODIyMiwiZXhwIjoxNjQ4NDIwMjIyfQ.36XSKqemPHzTsV1tJgsoEAr0Pw6ytSklvbzul5fjocg"
        }

    dan padad database juga akan tersimpan user yang baru saja kita registrasi.

### Section 8 : Front End User Authentication & Profile | 44. User Login Reducer & Action

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser

    coba klik kanan pada browser, inspek element, lalu pilih redux guna mengetahui userInfo login pada state.  jika berisikan null, berarti setup yang kita lakukan berhasil

### Section 8 : Front End User Authentication & Profile | 45. User Login Screen & Functionality

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser

    klik menu sign in, kemudian akan diarahkan kehalaman login,
    selanjutnya login dengan user yang sudah terdaftar pada database:
        "email": "john@example.com",
        "password": "123456"
    setelah login berhasil akan diarahkan kehalaman root: http://localhost:3000/
    coba klik kanan pada browser, inspek element, lalu pilih redux guna mengetahui userInfo login pada state.  jika berisikan informasi siapa yang login(jika tidak keluar userInfo, coba refresh halaman ),
    berarti setup yang kita lakukan berhasil

### Section 8 : Front End User Authentication & Profile | 46. Show User In Navbar & Logout

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser

    klik menu sign in, kemudian akan diarahkan kehalaman login,
    selanjutnya login dengan user yang sudah terdaftar pada database:
        "email": "john@example.com",
        "password": "123456"
    setelah login berhasil akan diarahkan kehalaman root: http://localhost:3000/
    perhatkan yang tdnya menu login berubah menjadi nama user yang sedang login.

### Section 8 : Front End User Authentication & Profile | 47. User Register Reducer, Action & Screen

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser

    klik menu sign in, kemudian akan diarahkan kehalaman login,
    selanjutnya klik kalimat register setelah New Customer?

    kemudian isikan form register untuk user baru
    jika berhasil akan di arahkan kehalaman root : http://localhost:3000/

    note: coba lakukan pengujian dengan nama user yang sudah ada, password tidak sama,
    jika muncul pesan error maka setpup yang kita lakukan berhasil

### Section 8 : Front End User Authentication & Profile | 48. Update Profile Endpoint

    note: pada environment pilih ProShop

    pengujian pada postman setelah di seting:
    User Login : POST {{URL}}/api/users/login
    input => body => raw => json : //data dibawah sama dengan data pada data/users.js
        {
            "email": "john@example.com",
            "password": "123456"
        }

    coba lakukan update data:
    PUT {{URL}}/api/users/profile
    input => body => raw => json :
        {
            "name": "John Doe",
            "email": "john@example.com",
            "password": "123456"//ini rubah lalu coba login dengan password lama,
        }

    jika ketika di login dengan password lama gagal, dan coba dengan password yang baru,
    jika berhasil maka setup yang kita lakukan berhasil

### Section 8 : Front End User Authentication & Profile | 49. Profile Screen & Get User Details

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser

    lakukan login dengan user yang terdaftar,
    setalah berhasil coba klik nama user yang login pada menu navbar, pilih profile
    jika diarahkan kehalaman user profile dan data profile tampil,maka
    setup yang kita lakukan berhasil.

### Section 8 : Front End User Authentication & Profile | 50. Update User Profile

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser

    lakukan login dengan user yang terdaftar,
    setalah berhasil coba klik nama user yang login pada menu navbar, pilih profile
    jika diarahkan kehalaman user profile dan data profile tampil
    kemudian coba update profile, jika ada alert success
    maka setup yang kita lakukan berhasil

    note:  setelah update, refresh halaman biar lebih yakin.

### Section 15 : Bug Fix | 92. Bux Fix: Update Navbar Name

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser

    lakukan login dengan user yang terdaftar,
    setalah berhasil coba klik nama user yang login pada menu navbar, pilih profile
    jika diarahkan kehalaman user profile dan data profile tampil
    kemudian coba update profile, jika ada alert success
    maka setup yang kita lakukan berhasil

    note:  secsion ini adalah pebaikan bug, jd walau section 15 di masukan di sini.

### Section 9 : Checkout Process-Part 1 | 52. Shipping Screen & Save Address

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser

    lakukan login dengan user yang terdaftar,
    kemudian add salah satu product, kemudian tekan menu cart pada navbar
    akan di redirect kehalaman : http://localhost:3000/cart
    kemudian klik proceed to chekcout
    akan di redirect kehalaman : http://localhost:3000/shipping
    lalu isi kan form shipping.
    klik kakan pada browsher => inspek => redux => state :
    akan ada data yang kita isi pada form shipping

    kembali kehalaman root http://localhost:3000
    kemudian coba refresh halaman , jika data pada inspek => redux => state:
    data yang kita isi pada form shipping tidak hilang berarti setup yang kita lakukan berhasil

### Section 9 : Checkout Process-Part 1 | 53. Checkout Steps Component

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser

    lakukan login dengan user yang terdaftar,
    kemudian  tekan menu cart pada navbar
    akan di redirect kehalaman : http://localhost:3000/cart
    kemudian klik proceed to chekcout
    akan di redirect kehalaman : http://localhost:3000/shipping

    jika diatas form ada Sign In, Shipping, Payment, Place Order ,maka
    setup yang kita lakukan berhasil.

### Section 9 : Checkout Process-Part 1 | 54. Payment Screen & Save Payment method

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser

    lakukan login dengan user yang terdaftar,
    kemudian  tekan menu cart pada navbar
    akan di redirect kehalaman : http://localhost:3000/cart
    kemudian klik proceed to chekcout
    akan di redirect kehalaman : http://localhost:3000/shipping

    kemudian coba klik continue , akan di redirect kehalaman payment : http://localhost:3000/payment
    pilih radio button paypal orcreditcart lalu klik continue

    kemudian coba refresh halaman ,
    jika data pada inspek => redux => state => CART_SAVE_PAYMENT_METHOD => diff:
    sisi berupa : cart => paymentMethod(pin):'PayPal'
    berarti setup yang kita lakukan berhasil

### Section 9 : Checkout Process-Part 1 | 55. Place Order Screen part 1

    lakukan login dengan user yang terdaftar,
    kemudian  tekan menu cart pada navbar
    akan di redirect kehalaman : http://localhost:3000/cart
    kemudian klik proceed to chekcout
    akan di redirect kehalaman : http://localhost:3000/shipping

    kemudian coba klik continue , akan di redirect kehalaman payment : http://localhost:3000/payment
    pilih radio button paypal orcreditcart lalu klik continue
    jika berhasil akan di redirect ke halaman : http://localhost:3000/placeorder

### Section 9 : Checkout Process-Part 1 | 55. Place Order Screen part 2 | order items

    lakukan login dengan user yang terdaftar,
    kemudian  tekan menu cart pada navbar
    akan di redirect kehalaman : http://localhost:3000/cart
    kemudian klik proceed to chekcout
    akan di redirect kehalaman : http://localhost:3000/shipping

    kemudian coba klik continue , akan di redirect kehalaman payment : http://localhost:3000/payment
    pilih radio button paypal orcreditcart lalu klik continue
    jika berhasil akan di redirect ke halaman : http://localhost:3000/placeorder
    dan menampilkan data order items sesuai database

### Section 9 : Checkout Process-Part 1 | 55. Place Order Screen part 3 | order summary

    lakukan login dengan user yang terdaftar,
    kemudian  tekan menu cart pada navbar
    akan di redirect kehalaman : http://localhost:3000/cart
    kemudian klik proceed to chekcout
    akan di redirect kehalaman : http://localhost:3000/shipping

    kemudian coba klik continue , akan di redirect kehalaman payment : http://localhost:3000/payment
    pilih radio button paypal orcreditcart lalu klik continue
    jika berhasil akan di redirect ke halaman : http://localhost:3000/placeorder
    dan menampilkan data sumary order sesuai orderan.

### Section 9 : Checkout Process-Part 1 | 56. Order Controller & Route

### Section 9 : Checkout Process-Part 1 | 57. Create Order

    lakukan login dengan user yang terdaftar,
    pilih add product( memilih product/ *pilih beberapa product)
    kemudian  tekan menu cart pada navbar
    akan di redirect kehalaman : http://localhost:3000/cart
    kemudian klik proceed to chekcout
    akan di redirect kehalaman : http://localhost:3000/shipping

    kemudian coba klik continue , akan di redirect kehalaman payment : http://localhost:3000/payment
    pilih radio button paypal orcreditcart lalu klik continue
    akan di redirect ke halaman : http://localhost:3000/placeorder
    dan menampilkan data sumary order sesuai orderan.
    kemudian klik button place order, jika berhasil akan di arahkan :
    http://localhost:3000/order/<id order>

    pada tahap ini tentu saja halaman masih kosong, kemudian coba check pada database mongoDb Compass
    jika berhasil maka pada order akan ada data orderan yang berhasil tersimpan.

### Section 10 : Checkout Process-Part 2 | 58. Get Order by ID Endpoint

    pengujian pada postman:
    buat folder baru pada Proshop/order/Order By ID :
    authorization : Bearer Token => {{TOKEN}}
    GET {{URL}}/api/orders/<id order>//untuk id order lihat pada database order.
    jika data tampil maka setup yang kita lakukan berhasil.

### Section 10 : Checkout Process-Part 2 | 59. Order Details Reducer & Action

### Section 10 : Checkout Process-Part 2 | 60. Order Screen

    lakukan login dengan user yang terdaftar,
    pilih add product( memilih product/ *pilih beberapa product)
    kemudian  tekan menu cart pada navbar
    akan di redirect kehalaman : http://localhost:3000/cart
    kemudian klik proceed to chekcout
    akan di redirect kehalaman : http://localhost:3000/shipping

    kemudian coba klik continue , akan di redirect kehalaman payment : http://localhost:3000/payment
    pilih radio button paypal orcreditcart lalu klik continue
    akan di redirect ke halaman : http://localhost:3000/placeorder
    dan menampilkan data sumary order sesuai orderan.
    kemudian klik button place order, jika berhasil akan di arahkan :
    http://localhost:3000/order/<id order>

    jika tampil infoice order, maka setup yang kita lakukan berhasil.

### Section 10 : Checkout Process-Part 2 | 60. Order Screen | alert Not Delivery & Not Paid

    lakukan login dengan user yang terdaftar,
    pilih add product( memilih product/ *pilih beberapa product)
    kemudian  tekan menu cart pada navbar
    akan di redirect kehalaman : http://localhost:3000/cart
    kemudian klik proceed to chekcout
    akan di redirect kehalaman : http://localhost:3000/shipping

    kemudian coba klik continue , akan di redirect kehalaman payment : http://localhost:3000/payment
    pilih radio button paypal orcreditcart lalu klik continue
    akan di redirect ke halaman : http://localhost:3000/placeorder
    dan menampilkan data sumary order sesuai orderan.
    kemudian klik button place order, jika berhasil akan di arahkan :
    http://localhost:3000/order/<id order>

    jika tampil alert Not Delivery & Not Paid, maka setup yang kita lakukan berhasil.

### Section 10 : Checkout Process-Part 2 | 61. Add Check for Order

    In the OrderScreen useEffect(), check for the order and also make sure
    that the order ID matches the ID in the URL. If it does not,
    then dispatch getOrderDetails() to fetch the most recent order

    note: sebelum melakukan transaksi harap selalu hapus data order yang ada di mongoDB Compass!

    lakukan login dengan user yang terdaftar,
    pilih add product( memilih product/ *pilih beberapa product)
    kemudian  tekan menu cart pada navbar
    akan di redirect kehalaman : http://localhost:3000/cart
    kemudian klik proceed to chekcout
    akan di redirect kehalaman : http://localhost:3000/shipping

    kemudian coba klik continue , akan di redirect kehalaman payment : http://localhost:3000/payment
    pilih radio button paypal orcreditcart lalu klik continue
    akan di redirect ke halaman : http://localhost:3000/placeorder
    dan menampilkan data sumary order sesuai orderan.
    kemudian klik button place order, jika berhasil akan di arahkan :
    http://localhost:3000/order/<id order>

    jika tampil invoice berjalan dengan baik maka setup yang kita lakukan berhasil.

### Section 10 : Checkout Process-Part 2 | 62. Update To paid Endpoint

### Section 10 : Checkout Process-Part 2 | 63. Order Pay Reducer & Action

    Note: Check aplikasi masih berjalan dengan baik ,karna sampai tahapini  masih langkah persiapan

    lakukan login dengan user yang terdaftar,
    pilih add product( memilih product/ *pilih beberapa product)
    kemudian  tekan menu cart pada navbar
    akan di redirect kehalaman : http://localhost:3000/cart
    kemudian klik proceed to chekcout
    akan di redirect kehalaman : http://localhost:3000/shipping

    kemudian coba klik continue , akan di redirect kehalaman payment : http://localhost:3000/payment
    pilih radio button paypal orcreditcart lalu klik continue
    akan di redirect ke halaman : http://localhost:3000/placeorder
    dan menampilkan data sumary order sesuai orderan.
    kemudian klik button place order, jika berhasil akan di arahkan :
    http://localhost:3000/order/<id order>

### Section 10 : Checkout Process-Part 2 | 64. Adding PayPal Payments

    create acount personal dan satu lagi untuk bussines  untuk paypal transaction: https://developer.paypal.com/developer/accounts
    PayPal Developper : https://developer.paypal.com/developer/applications/create
        app name: proshop
        sanbox bussines account: pilih yang kita pilih bussines
        setelah itu create app

    akan di redirect kehalaman detail app, copy code client id, lalu pastekan pada route/.env
    PAYPAL_CLIENT_ID=AY8EGGzoxESxG52Gs1YyBkVM0BCNcL70hWNgK5chnlXwm_bl71S4vVlJ51lky2oO6G8Bgv3NyWqIFsFM

    Paypal sdk script : https://developer.paypal.com/docs/regional/th/checkout/reference/customize-sdk/
        <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>


    cd frontend:
    install react-paypal-button-v2: npm i react-paypal-button-v2
    Documentation : https://www.npmjs.com/package/react-paypal-button-v2

    Pengujian pada browser:

    lakukan login dengan user yang terdaftar,
    pilih add product( memilih product/ *pilih beberapa product)
    kemudian  tekan menu cart pada navbar
    akan di redirect kehalaman : http://localhost:3000/cart
    kemudian klik proceed to chekcout
    akan di redirect kehalaman : http://localhost:3000/shipping

    kemudian coba klik continue , akan di redirect kehalaman payment : http://localhost:3000/payment
    pilih radio button paypal orcreditcart lalu klik continue
    akan di redirect ke halaman : http://localhost:3000/placeorder
    dan menampilkan data sumary order sesuai orderan.
    kemudian klik button place order, akan di arahkan : http://localhost:3000/order/<id order>
    kemudian klik buttton Paypal yang warna kuning,
    disini kita akan diarahkan kehalaman/alert pemabyaran klik 'paypal now'
    jika Not Paid berubah jd aler hijau "paid on ..." , berarti setup yang kita lakukan berhasil.

    lihat juga pada browser => inspek => console: akan ada data transaksi kita.
    lihat juga pada mongoDB Compass => order : data akan terupdate!

    note: kita telah membuat 2 akun paypal : 1 personal dan 2 bussines
    personal dipakai untuk pembayaran, sedangkan bussines digunakan untuk aplikasi yang kita buat
    jd pada tahap pembayaran kita harus login terlebih dahulu ke akun paypal personal untuk dpaat melakukan pemmbayaran.

### Section 10 : Checkout Process-Part 2 | 65. Show Orders On Profile

    Pengujian pada browser:

    lakukan login dengan user yang terdaftar,
    kemudian klik menu nama user yang login, lalu pilih profile
    jika diarahkan kehalaman profile : http://localhost:3000/profile
    dan data myorder tampil , maka setup yang kita lakukan berhasil.

### Section 10 : Checkout Process-Part 2 | 66. User Details & Orders Reset

    Pengujian pada browser:

    lakukan login dengan user admin yang terdaftar,
    kemudian klik menu nama user yang login, lalu pilih profile
    jika diarahkan kehalaman profile : http://localhost:3000/profile
    data myorder tidak tampil saat admin login, karna admin tidak melakukan order,
    jika data myorder tampil ketika user yang hanya melakukan order,
    maka setup yang kita lakukan berhasil.

### Section 11 : Admin Screen Part 1 | 67. Admin Middleware & Get Users Endpoint

    ┌────────────────────────────────────────────────────────────────────────────┐
    │     //todo :                                                               │
    │     1. userController.js                                                   │
    │     2. userRoutes.js                                                       │
    │     3. authMiddleware.js                                                   │
    └────────────────────────────────────────────────────────────────────────────┘

    jalan kan server pada route directory: npm run dev

    pengujian pada postman:
    login sebagai user:
        "email": "john@example.com",
        "password": "123456"

    ketika hendak masuk kelaman only admin
    GET {{URL}}/api/users
    response:
    "message": "Not authorized as an admin",

    coba login dengan user admin, dan masuk kehalaman only admin :
        "email": "admin@example.com",
        "password": "123456"
    response: akan  menampilkan semua users

### Section 11 : Admin Screen Part 1 | 68. Admin User List

    ┌────────────────────────────────────────────────────────────────────────────┐
    │         //Todo :                                                           │
    │         1. usercontants.js                                                 │
    │         2. userReducers.js                                                 │
    │         3. userActions.js                                                  │
    │         4. store.js                                                        │
    │         5. UserListScreen.js <copy dari RegisterScreen.js kemudian         │
    │            modifikasi>                                                     │
    │         6. app.js                                                          │
    │         7. Header.js <copy code dari nav dropdown (*lihat pada bagian      │
    │            atas ) kemudian modifikasi>                                     │
    │                                                                            │
    └────────────────────────────────────────────────────────────────────────────┘
    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser

    pengujian pada browser:
    login sebagai admin: http://localhost:3000/login
        "email": "admin@example.com",
        "password": "123456"

    jika berhasil masuk, klik admin pada bagian navbar menu =>kemudian pilih=> users akan diarahkan kehalaman:
    http://localhost:3000/admin/userlist

    jika berhasil menampilkan halaman users beserta datanya ,berarti setup yang kita lakukan berhasil.

### Section 11 : Admin Screen Part 1 | 69. Admin Screen Access Security

    jika kita login sebagai admin , kemudian masuk kehalaman admin=> users,
    ketika kita logout maka halaman admin masih tampil, dan ketika di refresh halaman nya
    akan menampilkan alert "Cannot read property 'token' of null"

    dan ketika kita login sebagai user :

        "email": "john@example.com",
        "password": "123456"

    lalu mengakses halaman admin=>users: http://localhost:3000/admin/userlist
        akan ada alert Not authorized as an admin

    untuk mengatasi hal tersebut.

    ┌────────────────────────────────────────────────────────────────────────────┐
    │         TODO :                                                             │
    │         1. UserListScreen.js                                               │
    │         2. userContants.js                                                 │
    │         3. userReducers.js                                                 │
    │         4. userActions.js                                                  │
    └────────────────────────────────────────────────────────────────────────────┘

    jalan kan server pada route directory: npm run dev
    pengujian pada browser:
        http://localhost:3000/ lakukan refresh browser

    kemudian login sebagai admin , masuk kehalaman users, kemudian logut
    dan lihat apa yang terjadi.

    kamu juga bisa coba login sebagai user dan mencoba meng-akses halaman admin user,
    akan di arahkan kehalaman root/home

### Section 11 : Admin Screen Part 1 | 70. Admin User Delete

    Tahap pertamana:
    ┌────────────────────────────────────────────────────────────────────────────┐
    │         TODO :                                                             │
    │         1. userController.js                                               │
    │         2. userRoutes.js                                                   │
    │                                                                            │
    │                                                                            │
    │         pengujian pada backend:                                            │
    │         pada postmant:                                                     │
    │         login sebagai admin, kemudian , pilih id user dari halaman All     │
    │          users:                                                             │
    │                                                                            │
    │         {{URL}}/api/users                                                  │
    │                                                                            │
    │         buat request baru                                                  │
    │         DELETE {{URL}}/api/users/<id user yang dipilih>                    │
    │         kemudian coba send message                                         │
    │         hasil response: "message": "User removed"                          │
    └────────────────────────────────────────────────────────────────────────────┘

    Tahap kedua:

    ┌────────────────────────────────────────────────────────────────────────────┐
    │         TODO :                                                             │
    │         3. userConstants.js                                                │
    │         4. store.js                                                        │
    │         5. userReducers.js                                                 │
    │         6. userActions.js                                                  │
    │         7. UserListScreen.js                                               │
    │                                                                            │
    │         pengujian pada frontend:                                           │
    │         pada brwoser, lakukan login sebagai admin,                         │
    │         kemudian pada menu navbar klik admin => user:                      │
    │           http://localhost:3000/admin/userlist                             │
    │                                                                            │
    │         lalu coba klik button icon trash/delete pada salah satu data user  │
    │         selain admin                                                       │
    │                                                                            │
    │                                                                            │
    │         bila muncul alert klik oke untuk menghapus, cancel untuk batal     │
    │         jika user berhasil terhapus maka setup yang kita lakukan berhasil  │
    └────────────────────────────────────────────────────────────────────────────┘

### Section 11 : Admin Screen Part 1 | 71. Get Use By ID & Update User Endpoints

    ┌────────────────────────────────────────────────────────────────────────────┐
    │         TODO :                                                             │
    │         1. userController.js:                                              │
    │             => getUserById,                                                │
    │             => updateUser => copy dari updateUserProfile , lalu            │
    │                modifikasi                                                  │
    │         2. userRoutes.js                                                   │
    └────────────────────────────────────────────────────────────────────────────┘

    jalan kan server pada route directory: npm run dev

    pengujian pada postman:
    login sebagai admin:
        "email": "admin@example.com",
        "password": "123456"

    Get user By ID - Admin Only:
    GET {{URL}}/api/users/<ID user>
        response: akan menampilkan satu data user sesuai ID

    Update user By ID - Admin Only:
    PUT {{URL}}/api/users/<ID user>
        body => raw => json: "name": "John Doe"
        response: akan menampilkan data user dan namanya akan terupdate.
