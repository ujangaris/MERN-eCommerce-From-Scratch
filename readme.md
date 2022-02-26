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
