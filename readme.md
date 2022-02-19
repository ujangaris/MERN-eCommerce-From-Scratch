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
