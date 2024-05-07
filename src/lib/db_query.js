export const runtime = 'edge'


export async function getStudentData(query) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.CLOUDFLARE_TOKEN}` },
        body: `{"sql": "${query}"}`
    };

    const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/d1/database/${process.env.CLOUDFLARE_DB_ID}/query`, options)

    const data = await response.json()


    return data.result[0].results
}