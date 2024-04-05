import "./container.css"
import { Sidebar } from "../sidebar/sidebar"
import { Content } from "../content/content"
export const Container=()=>{


    return(
        <>
        <div className="container">
        <Sidebar/>
        <Content/>

        </div>
        </>
    )
}