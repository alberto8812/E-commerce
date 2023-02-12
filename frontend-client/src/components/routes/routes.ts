import { lazy, LazyExoticComponent } from "react"
import Home from "../pages/Home"


type JSXComponent=()=>JSX.Element

interface ROUTER{
    to:string,
    path:string,
    Component:LazyExoticComponent<JSXComponent> | JSXComponent,
    name:string
}

const detai=lazy(()=>import(/*webpackChunkName:"HOME" */ '../pages/Details'))


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
        Component:detai,
        name:'detail'
    }
    

]