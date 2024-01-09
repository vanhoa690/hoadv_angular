Link https://angular.io/docs

## Day 1: Khởi tạo Project

- Cài Angular CLI: <br>
  npm install -g @angular/cli ( sử dụng ng) <br>
- Tạo Project: <br>
  ng new project_name <br>
  cd my-app <br>
  ng serve --open <br>

### Add tailwind css:

- Cài thư viện tailwind: <br>
  npm install -D tailwindcss postcss autoprefixer <br>
  npx tailwindcss init <br>
- Add content trong taildwind config: <br>
  content: [
  "./src/**/*.{html,ts}",
  ], <br>
- Add style.css <br>
  @tailwind base; <br>
  @tailwind components; <br>
  @tailwind utilities; <br>

### Create components

ng generate component [name] <br>
ng g c [name] <br>

### Component (4 file)

- css <br>
- html <br>
- spec.ts: test <br>
- component.ts: xử lý logic <br>

## Day 2:

- Sử dụng NgFor: duyệt qua phần tử trong danh sách (map) <br>
- imports: [NgFor] <br>
- \*ngFor="let item of itemList" <br>
- Truyền dữ liệu từ cha -> con <br>
  [productChild] = "productParent" <br>
  ### Data binding: <br>
- {{expression}} : trong component.ts -> html (view) <br>
- [target]="expression": <br>
  the html: src (img), href (a): [src]= "imgSrc" <br>
  component cha => con: [productChild] = "productParent" <br>

  ## Day 3: UI + Ghép API

  - Call Api <br>
  - Tạo folder services: <br>
  - ng g s [name] <br>
  - VD: ng g s services/product <br>
    - http = inject(HttpClient) <br>
    - Viết các function: <br>
    - getProductList(): http.get(apiUrl); <br>
  - Call API: page Home <br>
  - inject(ProductService) <br>
  - ngOnInit (chạy sau render UI) : function call api <br>
  - VD: productService // service <br>
    .getProductList() // function <br>
    .subscribe(data -> cb functions) // hứng data vào biến của mình <br>

  - Cấu hình app config: thêm trong provider: provideHttpClient()
