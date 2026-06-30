 import Main_Page from "../components/pages/Main_Page/Main_Page"
 
 export const routes = [
    {
        path: "/",
        Component: Main_Page
    },

    {
        path: "/artist/:id",
        Component: Main_Page
    },
    {
        path: "/album/:id",
        Component: Main_Page
    },
    {
        path: "/track/:id",
        Component: Main_Page
    },

    {
        path: "/favorite",
        Component: Main_Page
    },
    {
        path: "/search",
        Component: Main_Page
    },

    {
        path: "/playlist/:id",
        Component: Main_Page
    },
    {
        path: "/user/:id",
        Component: Main_Page
    }
 ]