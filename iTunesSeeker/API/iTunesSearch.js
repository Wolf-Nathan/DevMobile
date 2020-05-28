// API/iTunesSearch.js

export async function getAuthor(text) {
    if(text.includes(' ')) {
        text = text.replace(' ', '+');
    }
    try {
        const response = await fetch('https://itunes.apple.com/search?term=' + text + '&country=FR&entity=musicArtist');
        const result = await response.json();
        console.log(result);
        return result.results;
    } catch (err) {
        console.error("Author not found");
        console.error(err);
        return null;
    }
}

export async function getTrack(text) {
    if (text.includes(' ')) {
        text = text.replace(' ', '+');
    }
    try {
        const response = await fetch('https://itunes.apple.com/search?term=' + text + '&media=music&country=FR');
        const result = await response.json();
        console.log(result);
        return result.results;
    } catch (err) {
        console.error("Track not found");
        console.error(err);
        return null;
    }
}

export async function getAuthorTrack(author, track){
    if (author.includes(' ')) {
        author = author.replace(' ', '+');
    }
    if (track.includes(' ')) {
        track = track.replace(' ', '+');
    }
    try {
        const response = await fetch('https://itunes.apple.com/search?term=' + author + '+' + track + '&media=music&country=FR');
        const result = await response.json();
        console.log(result);
        return result.results;
    } catch (err) {
        console.error("Author and track not found");
        console.error(err);
        return null;
    }
}