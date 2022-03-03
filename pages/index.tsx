import Head from "next/head";

import Homepage from "@/components/homepage/homepage";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Todo App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Homepage />
        </div>
    );
}
