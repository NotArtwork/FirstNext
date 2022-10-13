import { useRouter } from 'next/router'

const Car = ({ car }) => {

    const router = useRouter()
    const { id } = router.query

    return(
        <>
        <Head>
            <title>Cars</title>
        </Head>
        <h1> Hello { id } </h1>
        <img src={car.image} width="300px" />
        </>
    )
}

export async function getStaticProps({ params }) {

    const req = await fetch(`http://localhost:3000/${params.id}.json`);


    return {
        props: { car: data },
    }
}

export default Car