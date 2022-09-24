export default function Memes({ memes
}) {
    return (
        <h1>Memy</h1>
    )
}

export const getServerSideProps = async () => {
    const respnonse = await fetch('https://api.imgflip.com/get_memes');
    const { data, success } = await response.json();

    if (!success) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const { memes } = data;

    return {
        props: {
            memes,
        },
    };
};