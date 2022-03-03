import Heading from "@/components/homepage/heading";
import SubHeading from "@/components/homepage/subheading";
import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Todo App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Heading />
            <SubHeading />
        </div>
    );
}
