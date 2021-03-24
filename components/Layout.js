import Nav from "./Nav";
import Head from "next/head";


export default function Layout({children}){
    return(
        <div className="h-full">
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="NooBeeID adalah Full Services Digital Agensi yang siap membantu kamu untuk go-digital."/>
            </Head>
            <Nav/>
            {children}
        </div>
    )
}