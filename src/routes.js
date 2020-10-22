import Home from './views/Home/index.vue'
import DetailProduct from './views/DetailProduct/index.vue'
import Shop from './views/Shop/index.vue'
import PaginateProduct from './views/Shop/components/PaginateProduct.vue'
import PaginateProductOfCategory from './views/Shop/components/PaginateProductOfCategory.vue'
import Blog from './views/Blog/index.vue'
import PaginateBlog from './views/Blog/components/PaginateBlog.vue'
import PaginateBlogOfCategory from './views/Blog/components/PaginateBlogOfCategory.vue'
import DetailBlog from './views/DetailBlog/index.vue'
import Contact from './views/Contact/index.vue'
export const routes = [
    { path: "", name: "home", component: Home },

    {
        path: "/shop", name: "shop", component: Shop, children: [
            { path: "", name: "listProduct", component: PaginateProduct },
            { path: "category/:unique_id", name: "listProductOfCategory", component: PaginateProductOfCategory }
        ]
    },

    { path: "/detail-product/:unique_id", name: "detailProduct", component: DetailProduct },

    {
        path: "/blog", name: "blog", component: Blog, children: [
            { path: "", name: "listBlog", component: PaginateBlog },
            { path: "category/:id", name: "listBlogOfCategory", component: PaginateBlogOfCategory }
        ]
    },

    { path: "/detail-blog/:id", name: "detailBlog", component: DetailBlog },

    { path: "/contact", name: "Contact", component: Contact },
]