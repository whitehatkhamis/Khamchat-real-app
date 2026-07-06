const fetch = require('node-fetch');
const { parseString } = require('xml2js');

const SEARCH_WORDS = ["Hausa Novel", "Labarin Soyayya"];

async function runBot() {
  console.log("BOT YA TASHI:", new Date().toLocaleString("en-NG", {timeZone: "Africa/Lagos"}));

  for(let word of SEARCH_WORDS){
    try {
      let rssUrl = `https://www.youtube.com/feeds/videos.xml?search_query=${encodeURIComponent(word)}`;
      console.log(`\nNana bincike: ${word}`);

      let response = await fetch(rssUrl);
      let xml = await response.text();

      parseString(xml, (err, result) => {
        if(err ||!result.feed.entry) return;

        console.log(`Na samu ${result.feed.entry.length} video`);
        
        // Nuna video 3 na farko kawai don test
        result.feed.entry.slice(0,3).forEach(video => {
          let vidId = video['yt:videoId'][0];
          console.log("--------------------------------");
          console.log("Title:", video.title[0]);
          console.log("Link:", `https://youtube.com/watch?v=${vidId}`);
        });
      });

    } catch(e) {
      console.log("Kuskure:", e.message);
    }
  }
  console.log("\nBOT YA KARE!");
}

runBot();
