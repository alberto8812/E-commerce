import { lazy, LazyExoticComponent } from "react"
import Home from "../pages/home"


type JSXComponent=()=>JSX.Element

interface ROUTER{
    to:string,
    path:string,
    Component:LazyExoticComponent<JSXComponent> | JSXComponent,
    name:string
}

const details=lazy(()=>import(/*webpackChunkName:"HOME" */ '../pages/Details'))


export const routes:ROUTER[]=[
    {
        to:'/',
        path:'',
        Component:Home,
        name:'Home'
    },
    {
        to:'/detail/:id',
        path:'detail/:id',
        Component:details,
        name:'detail'
    }
    

]

