import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { lazy, Suspense } from "react";
import todoRouter from "./todoRouter";

const Loading = <div>Loading...</div>
const Main = lazy(() => import("../pages/MainPage"))

const About = lazy(() => import("../pages/AboutPage"))

const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))



//브라우즈 라우터 만들기
const root = createBrowserRouter([
    {
        // 경로 지정
        path: '',
        element: <Suspense fallback={Loading}><Main /></Suspense>
    },
    {
        path: 'about',
        element: <Suspense fallback={Loading}><About /></Suspense>
    },
    {
        path: 'todo',
        element: <Suspense fallback={Loading}><TodoIndex /></Suspense>,
        children: todoRouter()
    }
])

export default root;