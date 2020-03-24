import AlexaAxios from "./config";
import cheerio from 'cheerio'

const getalexavalue=(resData:string)=>{
    const $ = cheerio.load(resData)    
console.log($);

    const data = {
        rankData:JSON.parse ($('script#rankData').text()),
        visitorPercentage: JSON.parse ($('script#visitorPercentage').text()),
        competitorsJSON: JSON.parse ($('script#competitorsJSON').text()),
        topKeywordsJSON: JSON.parse ($('script#topKeywordsJSON').text()),
        countryRank: [] as {rank:string,contry:string}[],
    }
    $('#countrydropdown li').each((i,x)=> {
        const rank=$(x).attr('data-value') || null
        const contry=$(x)[0].children[0].data || null
        if(rank && contry){
            data.countryRank.push({rank,contry})
        }
    })
    return data


}

const getAlexaSiteInfo = async(domain:string) => {
    return await AlexaAxios.get(`/${domain}`,{headers:{
        Host: 'www.alexa.com',
        Referer: `http://www.alexa.com/siteinfo/${domain}`,
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        Pragma: 'no-cache',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.8,es;q=0.6'
      }})
        .then(res => {
            return getalexavalue(res.data)
        })
        .catch(err => {
            console.log(err);
        });
};

getAlexaSiteInfo('jajiga.com').then(res=>console.log(res))

export default getAlexaSiteInfo;
